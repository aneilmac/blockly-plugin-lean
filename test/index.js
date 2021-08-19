/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @fileoverview Plugin test.
 */

import * as Blockly from 'blockly';
import {toolboxSimple, createPlayground} from '@blockly/dev-tools';
import {defineLean, LeanToolBoxCategories} from '../src/index';

defineLean(Blockly);

/**
 * Create a workspace.
 * @param {HTMLElement} blocklyDiv The blockly container div.
 * @param {!Blockly.BlocklyOptions} options The Blockly options.
 * @return {!Blockly.WorkspaceSvg} The created workspace.
 */
function createWorkspace(blocklyDiv, options) {
  options.toolbox = LeanToolBoxCategories;
  const workspace = Blockly.inject(blocklyDiv, options);
  const plugin = new BlocklyPluginLean(workspace);
  plugin.init();

  console.log(options.toolbox);

  return workspace;
}

document.addEventListener('DOMContentLoaded', function() {
  const defaultOptions = {
    toolbox: toolboxSimple,
  };

  createPlayground(document.getElementById('root'), createWorkspace,
      defaultOptions).then((playground) => {
    playground.addGenerator('Lean', Blockly.Lean);
  });
});
