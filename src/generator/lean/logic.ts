import * as Blockly from 'blockly';
import {LeanGenerator} from '../lean';

/**
 * @param Generator
 */
export default function defineLogic(Generator: any) {
  Generator['lemma'] = function(block: Blockly.Block) {
    let code = 'lemma ';

    const text_theorem_name = block.getFieldValue('THEOREM_NAME');
    const text_theorem_statement = block.getFieldValue('THEOREM_DECLARATION');
    code += text_theorem_name + ' ' + text_theorem_statement;
    code += ' := \n';

    code += 'begin';
    if (block.data) {
      code += ` [${block.data}]`;
    }
    code += '\n';

    code += Generator.statementToCode(block, 'LEMMA_PROOF');
    code += 'end';
    return code;
  };
  Generator['tactic_begin'] = function() {
    return '';
  };
  Generator['tactic_sorry'] = function() {
    return 'sorry,\n';
  };
  Generator['tactic_refl'] = function() {
    return 'refl,\n';
  };
  Generator['tactic_rw'] = function(block: Blockly.Block) {
    let code = 'rw ';

    const dropdownDirectionOptions = block.getFieldValue('DIRECTION_TYPE');

    if (dropdownDirectionOptions === 'LEFT') {
      code += '\\l ';
    }

    code += Generator.valueToCode(block, 'REWRITE_SOURCE',
        Generator.ORDER_ATOMIC);

    return code + ',\n';
  };
  Generator['tactic_rw_at'] = function(block: Blockly.Block) {
    let code = 'rw ';

    code += Generator.valueToCode(block, 'REWRITE_SOURCE',
        Generator.ORDER_ATOMIC);

    code += ' at ';

    code += Generator.valueToCode(block, 'REWRITE_TARGET',
        Generator.ORDER_ATOMIC);

    return code + ',\n';
  };
  Generator['tactic_induction'] = function(block: Blockly.Block) {
    let code = 'induction ';

    code += Generator.valueToCode(block, 'EXPR',
        Generator.ORDER_ATOMIC);

    return code + ',\n';
  };

  const prop_fn = function(block: Blockly.Block) {
    if (block.data) {
      return [block.data, Generator.ORDER_ATOMIC];
    } else {
      return [block.getFieldValue('PROP_NAME'), Generator.ORDER_ATOMIC];
    }
  };

  Generator['prop'] = prop_fn;
  Generator['prop_dynamic'] = prop_fn;
}
