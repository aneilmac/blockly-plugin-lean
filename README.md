# @aneilmac/blockly-plugin-lean [![Built on Blockly](https://tinyurl.com/built-on-blockly)](https://github.com/google/blockly)

<!--
  - TODO: Edit plugin description.
  -->
A [Blockly](https://www.npmjs.com/package/blockly) plugin that ...

## Installation

### Yarn
```
yarn add @aneilmac/blockly-plugin-lean
```

### npm
```
npm install @aneilmac/blockly-plugin-lean --save
```

## Usage

```js
import * as Blockly from 'blockly';
import {defineLean, LeanToolBoxCategories} from '@aneilmac/blockly-plugin-lean';

// Inject Lean blocks and generator.
defineLean(Blockly);

// Use the default Lean toolbox.
const workspace = Blockly.inject('blocklyDiv', {
  toolbox: LeanToolBoxCategories,
});
```

## API

### Generator

### Lean Blocks

## License
Apache 2.0
