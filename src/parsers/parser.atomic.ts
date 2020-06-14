import {Parser, Optional, ParseInput} from "../index";
import {prefixWhile} from "./parser.prefix";

export const never: Parser<never> = (_: ParseInput): Optional<never> => {
    return null
}

export const always = <A>(a: A): Parser<A> => (_: ParseInput): Optional<A> => a

export const literal = (prefix: string): Parser<void> => (input: ParseInput) => {
    if (input.input.length >= prefix.length && input.input.startsWith(prefix)) {
        input.input = input.input.substring(1);
        return;
    }
    return 
}

export const string = (prefix: string): Parser<string> => (input: ParseInput) => {
    if (prefix.length <= input.input.length && input.input.startsWith(prefix)) {
        let prefixString = input.input.substr(0, prefix.length);
        input.input = input.input.substring(prefix.length);
        return prefixString;
    }
    return null 
}

export const optionalSpaces: Parser<string> = prefixWhile(value => value === ' ');