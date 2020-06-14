import {Parser} from "../index";
import {zip3} from "./parser.zip";
import {optionalSpaces} from "./parser.atomic";
import {percentage} from "./parser.strings";
import {parserMap} from "./parser.map";
import {prefixWhile} from "./parser.prefix";

export const float: Parser<number> = (input => {
    const parsed = prefixWhile(value => !isNaN(parseFloat(value)))(input);
    if (parsed) {
        return parseFloat(parsed);
    }
    else {
        return null;
    }
});

export const percentFloat: Parser<number> = parserMap(
    zip3(
        optionalSpaces,
        float,
        optionalSpaces,
        percentage
    )
)(value => value.second / 100.0)

