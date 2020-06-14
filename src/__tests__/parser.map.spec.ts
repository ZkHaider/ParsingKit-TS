import {parserMap} from "../parsers/parser.map";
import {string} from "../parsers/parser.atomic";

test('Parser mapping', () => {
    let mapToInt = (value: string) => {
        return parseInt(value)
    }
    let intParser = parserMap(string('10'))(mapToInt);
    let optionalInt = intParser({ input: '10' })
    expect(optionalInt).toEqual(10)
})