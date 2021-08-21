import * as Blockly from 'blockly';
import {LeanGenerator} from '../lean';

/**
 * @param Generator
 */
export default function defineLogic(Generator: any) {
  Generator['tactic_sorry'] = function() {
    return 'sorry';
  };
  Generator['tactic_refl'] = function() {
    return 'refl';
  };
  Generator['tactic_rw'] = function(block: Blockly.Block) {
    let code = 'rw ';

    const dropdownDirectionOptions = block.getFieldValue('DIRECTION_TYPE');

    if (dropdownDirectionOptions === 'LEFT') {
      code += '\\l ';
    }

    code += Generator.valueToCode(block, 'REWRITE_SOURCE',
        Generator.ORDER_ATOMIC);

    return code;
  };
  Generator['tactic_rw_at'] = function(block: Blockly.Block) {
    let code = 'rw ';

    code += Generator.valueToCode(block, 'REWRITE_SOURCE',
        Generator.ORDER_ATOMIC);

    code += ' at ';

    code += Generator.valueToCode(block, 'REWRITE_TARGET',
        Generator.ORDER_ATOMIC);

    return code;
  };
  Generator['tactic_induction'] = function(block: Blockly.Block) {
    let code = 'induction ';

    code += Generator.valueToCode(block, 'EXPR',
        Generator.ORDER_ATOMIC);

    code += ' with ';

    code += Generator.valueToCode(block, 'WITH_IDS',
        Generator.ORDER_ATOMIC);

    return code;
  };
}
