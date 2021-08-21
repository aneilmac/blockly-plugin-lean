import * as _Blockly from 'blockly';

import defineTactics from './blocks/tactics';

/**
 * @param Blockly
 */
export function defineBlocks(Blockly: typeof _Blockly) {
  defineTactics(Blockly);
}
