import { readFileSync } from 'fs';
import { ColorEnum, consoleMsg } from './console-msg.js';
export function validateFolder() {
    let packageObj;
    try {
        const packageRaw = readFileSync('./package.json', 'utf8');
        packageObj = JSON.parse(packageRaw);
        if (!packageObj.sdkInterfaceVersion) {
            consoleMsg('Are you in the correct folder? sdkInterfaceVersion is not in the package.json file.', ColorEnum.WARNING);
            return false;
        }
        return true;
    }
    catch {
        consoleMsg('You do not appear to be in a Ziggy package folder. You should be in the root directory of your plugin package', ColorEnum.ERROR);
        return false;
    }
}
//# sourceMappingURL=validate-folder.js.map