import {Parser, ParseInput} from "../index";

export type Predicate<T> = (value: T) => boolean;

export const prefixWhile = (predicate: Predicate<string>): Parser<string> => {
    return (input: ParseInput) => {
        const characters = input.input.split('');
        let prefix: string[] = [];
        for (let i = 0; i < characters.length; i++) {
            const char = characters[i];
            if (predicate(char)) {
                const removedChar = input.input.substr(0, char.length);
                input.input = input.input.substring(1);
                prefix.push(removedChar);
            }
            else {
                break;
            }
        }
        return prefix.join('');
    }
}