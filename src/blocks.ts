import * as _Blockly from 'blockly';

import defineTactics from './blocks/tactics';
import defineLemma from './blocks/lemma';
import defineProposition from './blocks/proposition';
/**
 * @param Blockly
 */
export function defineBlocks(Blockly: typeof _Blockly) {
  defineLemma(Blockly);
  defineTactics(Blockly);
  defineProposition(Blockly);
}
