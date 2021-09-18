// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const range = (start: number, end: number) =>
    Array.from({length: end - start + 1}, () => start++);