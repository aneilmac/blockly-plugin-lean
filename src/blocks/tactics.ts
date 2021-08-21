import * as _Blockly from 'blockly';
/**
 * @param Blockly
 */
export default function defineTactics(Blockly: typeof _Blockly) {
  Blockly.defineBlocksWithJsonArray([
    {
      'type': 'tactic_refl',
      'message0': 'reflexivity',
      'previousStatement': null,
      'nextStatement': null,
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
          'align': 'CENTRE',
        },
      ],
      'inputsInline': true,
      'previousStatement': null,
      'nextStatement': null,
      'colour': 230,
      'tooltip': 'rw',
      'helpUrl': 'rw',
    },
    {
      'type': 'tactic_rw_at',
      'message0': 'rewrite %1 at %2',
      'previousStatement': null,
      'nextStatement': null,
      'args0': [
        {
          'type': 'input_value',
          'name': 'REWRITE_SOURCE',
        },
        {
          'type': 'input_value',
          'name': 'REWRITE_TARGET',
        },
      ],
      'inputsInline': true,
      'colour': 230,
      'tooltip': 'rw_at',
      'helpUrl': 'rw_at',
    },
    {
      'type': 'tactic_sorry',
      'message0': 'sorry',
      'previousStatement': null,
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
      'previousStatement': null,
      'nextStatement': null,
      'colour': 230,
      'tooltip': '',
      'helpUrl': '',
    },
  ]);
}
