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
