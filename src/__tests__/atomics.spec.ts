import {never, always, literal, string, optionalSpaces} from "../parsers/parser.atomic";
import {parserRun} from "../index";

test("test never atomic", () => {
    let something = "something";
    expect(never({ input: something })).toEqual(null);
})

test("test always atomic", () => {
    let something = "something";
    expect(always(something)({ input: "" })).toEqual(something);
});

test("test literal atomic", () => {
    let something = "something";
    const result = parserRun(something, literal('s'))
    expect(result.rest).toEqual("omething");
})

test("test word atomic", () => {
    let something = "something";
    string('a word')({ input: something });
})

test('test optional spaces', () => {
    let parseInput = { input: '  somespaces' };
    optionalSpaces(parseInput);
    expect(parseInput.input).toEqual('somespaces')
})