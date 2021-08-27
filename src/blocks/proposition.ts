import * as _Blockly from 'blockly';

/**
 * @param Blockly
 */
export default function defineProposition(Blockly: typeof _Blockly) {
  Blockly.defineBlocksWithJsonArray([
    {
      'type': 'prop',
      'message0': '%1',
      'args0': [
        {
          'type': 'field_input',
          'name': 'PROP_NAME',
          'text': 'h',
        },
      ],
      'output': 'proposition',
      'style': 'variable_blocks',
      'tooltip': '',
      'helpUrl': '',
    },
    {
      'type': 'prop_dynamic',
      'message0': '%1',
      'args0': [
        {
          'type': 'field_input',
          'name': 'PROP_NAME',
          'text': 'h',
        },
      ],
      'output': 'proposition',
      'style': 'variable_dynamic_blocks',
      'tooltip': '',
      'helpUrl': '',
    },
  ]);
}
