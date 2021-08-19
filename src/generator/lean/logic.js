import * as Blockly from 'blockly';

export default function defineLogic() {
    Blockly.Lean['controls_if'] = function(block) {
        return 'IF ELSE';
    };
}
