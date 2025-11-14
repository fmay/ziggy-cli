import chalk from 'chalk';
export var ColorEnum;
(function (ColorEnum) {
    ColorEnum["ERROR"] = "error";
    ColorEnum["WARNING"] = "warning";
    ColorEnum["SUCCESS"] = "success";
})(ColorEnum || (ColorEnum = {}));
const insertAfterNewline = (msg, prefix) => msg.replace(/\n/g, `\n${prefix}`);
export const consoleMsg = (msg, type) => {
    let prefix = '';
    switch (type) {
        case ColorEnum.ERROR:
            prefix = chalk.red('✖ ');
            break;
        case ColorEnum.WARNING:
            prefix = chalk.yellow('⚠ ');
            break;
        case ColorEnum.SUCCESS:
            prefix = chalk.green('✔ ');
            break;
        default:
            console.log(msg);
            return;
    }
    // Trim any accidental leading spaces
    const cleanMsg = msg.trimStart();
    const formattedMsg = insertAfterNewline(cleanMsg, prefix);
    // Add extra newline if message contains a newline
    const finalMsg = msg.includes('\n') ? `\n${prefix}${formattedMsg}` : `${prefix}${formattedMsg}`;
    console.log(finalMsg);
};
//# sourceMappingURL=console-msg.js.map