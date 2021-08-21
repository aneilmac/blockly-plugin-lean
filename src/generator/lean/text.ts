import * as Blockly from 'blockly';
import {LeanGenerator} from '../lean';

/**
 * @param Generator
 */
export default function defineText(Generator: any) {
  Generator['text'] = function(block: Blockly.Block) {
    // Text value.
    const code = Generator.quote_(block.getFieldValue('TEXT'));
    return [code, Generator.ORDER_ATOMIC];
  };
}
