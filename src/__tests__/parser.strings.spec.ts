import {percentage} from "../parsers/parser.strings";

test('test percentage', () => {
    let parseInput = {input: '100%' };
    percentage(parseInput);
    expect(parseInput.input).toEqual('100')
});