# Morphious

A typescript first library for repeatedly changing objects and datasets with as little code as possible. Create function groups through `makeMorth` to prevent bloating your codebase with one-time-use functions. Through this process the type integrity of each anonymous function is kept. Define a mapping once and reuse it in multiple places.

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
