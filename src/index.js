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

export function defineLean(Blockly) {
  defineBlocks(Blockly);
  defineGenerator(Blockly);
}

export const LeanTacticsCategory = {
  'kind': 'category',
  'name': 'Tactics',
  'contents': [
    {
      'kind': 'block',
      'type': 'tactic_refl',
    },
    {
      'kind': 'block',
      'type': 'tactic_rw',
    },
    {
      'kind': 'block',
      'type': 'tactic_rw_at',
    },
    {
      'kind': 'block',
      'type': 'tactic_induction',
    },
    {
      'kind': 'block',
      'type': 'tactic_sorry',
    },
  ],
};

export const LeanValueCategory = {
  'kind': 'category',
  'name': 'Values',
  'contents': [
    {
      'kind': 'block',
      'type': 'text',
    },
  ],
};


export const LeanToolBoxCategories = {
  'kind': 'categoryToolbox',
  'name': 'Core',
  'contents': [
    LeanTacticsCategory,
    LeanValueCategory,
  ],
};
