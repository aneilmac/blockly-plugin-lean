/**
 *
 */
export default function defineLogic(Blockly) {
  Blockly.Lean['tactic_sorry'] = function(_block) {
    return 'sorry';
  };
  Blockly.Lean['tactic_refl'] = function(_block) {
    return 'refl';
  };
  Blockly.Lean['tactic_rw'] = function(block) {
    let code = 'rw ';

    const dropdownDirectionOptions = block.getFieldValue('DIRECTION_TYPE');

    if (dropdownDirectionOptions === 'LEFT') {
      code += '\\l ';
    }

    code += Blockly.Lean.valueToCode(block, 'REWRITE_SOURCE',
        Blockly.Lean.ORDER_ATOMIC);

    return code;
  };
  Blockly.Lean['tactic_rw_at'] = function(block) {
    let code = 'rw ';

    code += Blockly.Lean.valueToCode(block, 'REWRITE_SOURCE',
        Blockly.Lean.ORDER_ATOMIC);

    code += ' at ';

    code += Blockly.Lean.valueToCode(block, 'REWRITE_TARGET',
        Blockly.Lean.ORDER_ATOMIC);

    return code;
  };
  Blockly.Lean['tactic_induction'] = function(block) {
    let code = 'induction ';

    code += Blockly.Lean.valueToCode(block, 'EXPR',
        Blockly.Lean.ORDER_ATOMIC);

    code += ' with ';

    code += Blockly.Lean.valueToCode(block, 'WITH_IDS',
        Blockly.Lean.ORDER_ATOMIC);

    return code;
  };
}
