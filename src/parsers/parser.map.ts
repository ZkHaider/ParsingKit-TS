import {Optional, ParseInput, Parser} from "../index";

export const parserMap = <T>(parser: Parser<T>) => <A>(f: (value: T) => Optional<A>): Parser<A> => {
    return (input: ParseInput) => {
        const result: Optional<T> = parser(input)
        if (result !== null) {
            return f(result!!)
        }
        else {
            return null
        }
    }
}

export const parserFlatMap = <T>(parser: Parser<T>) => <A>(f: (value: T) => Parser<A>): Parser<A> => {
    return (input: ParseInput) => {
        const originalInput = input;
        const matchT = parser(input);
        if (matchT) {
            let value = f(matchT)
            return value(input);
        }
        else {
            input.input = originalInput.input;
            return null;
        }
    }
}