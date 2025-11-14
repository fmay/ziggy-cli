import crypto from 'node:crypto';
import { Entry } from '@napi-rs/keyring';
const SERVICE = 'ziggy-cli';
const ACCOUNT = 'aes-encryption-key';
// Fetch or create a persistent 32-byte AES key
async function getOrCreateKey() {
    const entry = new Entry(SERVICE, ACCOUNT);
    try {
        const key = entry.getPassword();
        return Buffer.from(key, 'base64');
    }
    catch {
        const newKey = crypto.randomBytes(32);
        entry.setPassword(newKey.toString('base64'));
        return newKey;
    }
}
// Encrypt / Decrypt helpers
export async function encrypt(text) {
    const KEY = await getOrCreateKey();
    const iv = crypto.randomBytes(16);
    const cipher = crypto.createCipheriv('aes-256-cbc', KEY, iv);
    const encrypted = Buffer.concat([cipher.update(text, 'utf8'), cipher.final()]);
    return `${iv.toString('base64')}:${encrypted.toString('base64')}`;
}
export async function decrypt(data) {
    const [ivBase64, encryptedBase64] = data.split(':');
    const KEY = await getOrCreateKey();
    const iv = Buffer.from(ivBase64, 'base64');
    const decipher = crypto.createDecipheriv('aes-256-cbc', KEY, iv);
    const decrypted = Buffer.concat([
        decipher.update(Buffer.from(encryptedBase64, 'base64')),
        decipher.final(),
    ]);
    return decrypted.toString('utf8');
}
//# sourceMappingURL=crypto.js.map