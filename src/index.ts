import {Pair, Triple, Quadruple, Quintuple} from './utils/tuples';
import {zip, zip2, zip3} from "./parsers/parser.zip";
import {prefixWhile} from "./parsers/parser.prefix";
import {parserMap, parserFlatMap} from "./parsers/parser.map";
import {float, percentFloat} from "./parsers/parser.float";
import {percentage} from "./parsers/parser.strings";
import {never, always, literal, string, optionalSpaces} from "./parsers/parser.atomic";

export { Pair, Triple, Quadruple, Quintuple };
export { zip, zip2, zip3};
export { prefixWhile };
export { parserMap, parserFlatMap };
export { float, percentFloat };
export { percentage };
export { never, always, literal, string, optionalSpaces };

export type Optional<T> = T | null | undefined;
export type ParseResult<T> = {
    match: Optional<T>,
    rest: string
}
export type ParseInput = { input: string }
export type Parser<T> = (input: ParseInput) => Optional<T>;

export const parserRun = <T>(str: string, parser: Parser<T>): ParseResult<T> => {
    let parseInput: ParseInput = { input: str }
    let match: Optional<T> = parser(parseInput);
    return {
        match: match,
        rest: parseInput.input
    };
};
