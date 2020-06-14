import {percentFloat} from "../parsers/parser.float";

test('test parsing percentages', () => {
    let parseInput = { input: '100%' };
    const percent = percentFloat(parseInput);
    expect(percent).toEqual(1);
})