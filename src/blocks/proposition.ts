import * as _Blockly from 'blockly';

/**
 * @param Blockly
 */
export default function defineProposition(Blockly: typeof _Blockly) {
  Blockly.Blocks['prop'] = {
    init: function() {
      this.jsonInit({
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
        'colour': 150,
        'tooltip': '',
        'helpUrl': '',
      });
    },
  } as _Blockly.Block;
}
