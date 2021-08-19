/**
 *
 */
export default function defineText(Blockly) {
  Blockly.Lean['text'] = function(block) {
    // Text value.
    const code = Blockly.Lean.quote_(block.getFieldValue('TEXT'));
    return [code, Blockly.Lean.ORDER_ATOMIC];
  };
}
