import * as _Blockly from 'blockly';
/**
 * @param Blockly
 */
export default function defineTactics(Blockly: typeof _Blockly) {
  Blockly.Blocks['tactic_begin'] = {
    init: function() {
      this.jsonInit({
        'type': 'tactic_begin',
        'message0': 'begin',
        'nextStatement': 'tactic',
        'colour': 330,
      });
      this.isDeletable = () => false;
    },
  } as _Blockly.Block;

  Blockly.defineBlocksWithJsonArray([
    {
      'type': 'tactic_refl',
      'message0': 'reflexivity',
      'previousStatement': 'tactic',
      'nextStatement': 'tactic',
      'colour': 230,
      'tooltip': 'refl proves goals of the form X = X.',
      'helpUrl': 'refl',
    },
    {
      'type': 'tactic_rw',
      'message0': 'rewrite %1 %2',
      'args0': [
        {
          'type': 'field_dropdown',
          'name': 'DIRECTION_TYPE',
          'options': [
            [
              '→',
              'RIGHT',
            ],
            [
              '←',
              'LEFT',
            ],
          ],
        },
        {
          'type': 'input_value',
          'name': 'REWRITE_SOURCE',
          'check': 'proposition',
          'align': 'CENTRE',
        },
      ],
      'inputsInline': false,
      'previousStatement': 'tactic',
      'nextStatement': 'tactic',
      'colour': 230,
      'tooltip': 'rw',
      'helpUrl': 'rw',
    },
    {
      'type': 'tactic_rw_at',
      'message0': 'rewrite %1 at %2',
      'previousStatement': 'tactic',
      'nextStatement': 'tactic',
      'args0': [
        {
          'type': 'input_value',
          'name': 'REWRITE_SOURCE',
          'check': 'proposition',
        },
        {
          'type': 'input_value',
          'name': 'REWRITE_TARGET',
          'check': 'proposition',
        },
      ],
      'inputsInline': false,
      'colour': 230,
      'tooltip': 'rw_at',
      'helpUrl': 'rw_at',
    },
    {
      'type': 'tactic_sorry',
      'message0': 'sorry',
      'previousStatement': 'tactic',
      'colour': 330,
      'tooltip': 'but are you really sorry?',
      'helpUrl': 'refl',
    },
    {
      'type': 'tactic_induction',
      'message0': 'induction %1 with %2',
      'args0': [
        {
          'type': 'input_value',
          'name': 'EXPR',
        },
        {
          'type': 'input_value',
          'name': 'WITH_IDS',
        },
      ],
      'inputsInline': false,
      'previousStatement': 'tactic',
      'nextStatement': 'tactic',
      'colour': 230,
      'tooltip': '',
      'helpUrl': '',
    },
  ]);
}
