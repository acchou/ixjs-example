# Sample IxJS project

This project demonstrates usage of IxJS with Node.js.

## Build

    yarn build

## Run

    node build/main.js

## Issues

*   Comment out the first line of main.js to define `Symbol.asyncIterator`.
*   The "dom" library in tsconfig can be removed by adding a file ix.d.ts with definitions like:

```js
type EventListenerOptions =
    | {
          capture?: boolean,
          passive?: boolean,
          once?: boolean
      }
    | boolean;

// Needed for libraries like Ix that require some DOM stuff to compile
interface EventListener {}

interface EventTarget {
    addEventListener(
        type: string,
        listener: EventListener,
        options?: EventListenerOptions
    ): void;

    removeEventListener(
        type: string,
        listener: EventListener,
        options?: EventListenerOptions
    ): void;
}
```
