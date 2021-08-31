import * as _Blockly from 'blockly';

/**
 * @param Blockly
 */
export default function defineLemma(Blockly: typeof _Blockly) {
  Blockly.defineBlocksWithJsonArray([
    {
      'type': 'lemma',
      'message0': 'lemma %1 %2 variables %3 %4 %5 := %6 begin %7 %8 end',
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
          'type': 'input_dummy',
        },
        {
          'type': 'input_statement',
          'name': 'VARIABLES',
          'check': 'prop_declaration',
        },
        {
          'type': 'field_input',
          'name': 'THEOREM_DECLARATION',
          'text': 'default',
        },
        {
          'type': 'input_dummy',
          'align': 'CENTRE',
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
      'inputsInline': false,
      'style': 'procedure_blocks',
      'tooltip': '',
      'helpUrl': '',
    },
  ]);
}
