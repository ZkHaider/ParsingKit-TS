import {Parser} from "../index";

export const percentage: Parser<string> = (input => {
    const percentPosition = input.input.search('%');
    if (percentPosition !== -1) {
        let character = input.input.charAt(percentPosition);
        input.input = input.input.substring(0, percentPosition) + input.input.substring(percentPosition + 1);
        return character;
    }
    else {
        return null;
    }
})