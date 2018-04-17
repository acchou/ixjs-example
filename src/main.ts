// (<any>Symbol).asyncIterator = Symbol.asyncIterator || Symbol.for("Symbol.asyncIterator");
import { AsyncIterable } from "ix";

async function* gen() {
    yield 1;
    yield 2;
    yield 3;
    yield 4;
}

AsyncIterable.from(gen())
    .filter(x => x % 2 === 0)
    .map(x => x * 2)
    .forEach(x => console.log(`Next ${x}`))
    .catch(err => console.log(`Error ${err}`));
