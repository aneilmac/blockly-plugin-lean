import defineBlocks from './blocks';
import defineGenerator from './generator';

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */


/**
 * @fileoverview Blockly Plugin for Lean.
 */

/**
 * Plugin description.
 */
export class BlocklyPluginLean {
  /**
   * Constructor for ...
   * @param {!Blockly.WorkspaceSvg} workspace The workspace that the plugin will
   *     be added to.
   */
  constructor(workspace) {
    /**
     * The workspace.
     * @type {!Blockly.WorkspaceSvg}
     * @protected
     */
    this.workspace_ = workspace;
  }

  /**
   * Initialize.
   */
  init() {
    defineBlocks();
    defineGenerator();
  }
}

export const LeanTacticsCategories = {
  "kind": "category",
  "name": "Tactics",
  "contents": [
    {
      "kind": "block",
      "type": "tactic_refl"
    },
    {
      "kind": "block",
      "type": "tactic_sorry"
    }
  ]
};

export const LeanToolBoxCategories = {
  "kind": "categoryToolbox",
  "name": "Core",
  "contents": [
    LeanTacticsCategories
  ]
};