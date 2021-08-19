import * as Blockly from 'blockly';

export default function defineTactics() {
  Blockly.Blocks['tactic_refl'] = {
    init: function() {
      this.jsonInit({
        "type": "tactic_refl",
        "message0": "refl",
        "previousStatement": null,
        "nextStatement": null,
        "colour": 230,
        "tooltip": "refl proves goals of the form X = X.",
        "helpUrl": "refl"
      });
    }
  };

  Blockly.Blocks['tactic_sorry'] = {
    init: function() {
      this.jsonInit({
        "type": "tactic_sorry",
        "message0": "sorry",
        "previousStatement": null,
        "nextStatement": null,
        "colour": 230,
        "tooltip": "but are you really sorry?",
        "helpUrl": "refl"
      });
    }
  };
}
