import {Parser} from "../index";
import {Pair, Quadruple, Triple} from "../utils/tuples";
import {parserMap} from "./parser.map";

export const zip = function <A, B>(
    parserA: Parser<A>,
    parserB: Parser<B>
): Parser<Pair<A, B>> {
    return (input => {
        const original = input;
        const matchA = parserA(input);
        if (matchA === null || matchA === undefined) {
            return null;
        }
        const matchB = parserB(input);
        if (!matchB) {
            input.input = original.input;
            return null;
        }
        return { first: matchA, second: matchB };
    })
};

export const zip2 = function <A, B, C>(
    parserA: Parser<A>,
    parserB: Parser<B>,
    parserC: Parser<C>
): Parser<Triple<A, B, C>> {
    const zipped = zip(parserA, zip(parserB, parserC))
    return parserMap(zipped)(value => {
        return {
            first: value.first,
            second: value.second.first,
            third: value.second.second
        };
    })
};

export const zip3 = function <A, B, C, D>(
    parserA: Parser<A>,
    parserB: Parser<B>,
    parserC: Parser<C>,
    parserD: Parser<D>
): Parser<Quadruple<A, B, C, D>> {
    const zipped = zip(parserA, zip2(parserB, parserC, parserD));
    return parserMap(zipped)(value => {
        return {
            first: value.first,
            second: value.second.first,
            third: value.second.second,
            fourth: value.second.third
        }
    })
}