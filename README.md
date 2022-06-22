# ts-monorepo-starter

## Introduction

This project is a starter to build your own monorepo library with typescript. 

- monorepo by [pnpm](https://pnpm.io/)
- built by [rollup.js](https://rollupjs.org)
- tested by [jest](https://jestjs.io)

## Getting Started

### Install

```bash
pnpm i
```

### Test
```bash
pnpm run test
```

### Build
```bash
pnpm run build
```

## Details

### tsconfig.json
```json
{
  // ...
  "paths": {
    "@ts-monorepo-starter/*": ["packages/*/src"],
  }
  // ...
}
```

Using `tsconfig.paths` to jump to the code definition of other local modules naturally without needing to build them firstly as usual.

## License

[MIT](https://opensource.org/licenses/MIT)
