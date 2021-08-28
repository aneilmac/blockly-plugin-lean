import * as _Blockly from 'blockly';

/**
 * @param Blockly
 */
export default function defineLemma(Blockly: typeof _Blockly) {
  Blockly.defineBlocksWithJsonArray([
    {
      'type': 'variables',
      'message0': 'variables %1 %2',
      'args0': [
        {
          'type': 'input_dummy',
        },
        {
          'type': 'input_statement',
          'name': 'VARIABLES',
          'check': 'prop_declaration',
        },
      ],
      'nextStatement': 'lemma_statement',
      'style': 'procedure_blocks',
      'tooltip': '',
      'helpUrl': '',
    },
    {
      'type': 'lemma',
      'message0': 'lemma %1 %2 %3 := %4 begin %5 %6 end',
      'args0': [
        {
          'type': 'field_input',
          'name': 'THEOREM_NAME',
          'text': 'example1',
        },
        {
          'type': 'input_dummy',
        },
        {
          'type': 'field_input',
          'name': 'THEOREM_DECLARATION',
          'text': '(x y z : ℕ) : x * y + z = x * y + z',
        },
        {
          'type': 'input_dummy',
        },
        {
          'type': 'input_dummy',
        },
        {
          'type': 'input_statement',
          'name': 'LEMMA_PROOF',
          'check': 'tactic',
        },
      ],
      'previousStatement': 'lemma_statement',
      'inputsInline': false,
      'style': 'procedure_blocks',
      'tooltip': '',
      'helpUrl': '',
    },
  ]);
}
