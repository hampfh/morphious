# Morphious

This is a TypeScript library designed to simplify the process of manipulating objects and datasets, with a focus on reducing the amount of code required. With the help of the `makeMorp` function, users can create function groups that minimize the need for one-time-use functions and keep the type integrity of anonymous functions intact. Additionally, the library allows for the definition of mappings that can be reused in multiple places, promoting consistency and efficiency in data transformation.

## Installation 🤔

```bash
npm install morphious
yarn add morphious
pnpm add morphious
```

## Usage 🚀

```typescript
import { makeMorph } from "morphious"

const mapping = {
    double: (x: number) => x * 2,
    constructName: (first: string, last: string) => `${first} ${last}`,
    isEven: (x: number) => x % 2 === 0
}

const morph = makeMorph(mapping)

const result = morph("double", 2) // => 4
//      ^? number
const result = morph("constructName", "John", "Doe") // => "John Doe"
//      ^? string
const result = morph("isEven", 3) // => false
//      ^? boolean

morph("constructName", "2") // => Error: Expected 3 arguments, but got 2
```

### makeMorph(map)

**Returns**: A morph function that will be used to call the functions in the group.
A factory function that is used once per group of functions. It takes an object of functions and returns a function that can be used to call the functions in the group.
