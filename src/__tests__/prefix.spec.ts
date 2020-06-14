import {prefixWhile} from "../parsers/parser.prefix";

test('prefixWhile', () => {
    let parseInput = { input: "aSampleString." };
    const prefixParser = prefixWhile(value => value !== 'g')
    const parsed = prefixParser(parseInput);
    expect(parsed).toEqual("aSampleStrin");
});