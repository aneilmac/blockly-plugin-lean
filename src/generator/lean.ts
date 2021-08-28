import * as Blockly from 'blockly';

import defineLogic from './lean/logic';
import defineText from './lean/text';

/**
 *
 */
export class LeanGenerator extends Blockly.Generator {
  ORDER_ATOMIC = 0;
  ORDER_NONE = 99;
  /**
   *
   */
  constructor() {
    super('Lean');
  }

  /**
   * @param string
   * @return String that is quoted.
   */
  quote_(string: string): string {
    string = string.replace(/\\/g, '\\\\')
        .replace(/\n/g, '\\\n');

    // Follow the CPython behaviour of repr() for a non-byte string.
    let quote = '"';
    if (string.indexOf('"') !== -1) {
      if (string.indexOf('\'') === -1) {
        quote = '\'';
      } else {
        string = string.replace(/"/g, '\\"');
      }
    }
    return quote + string + quote;
  }

  /**
   * @param block
   * @param code
   */
  generate_include_omit_(block: Blockly.Block, code: string): string {
    const statement_names: string[] = [];
    let statement_block = block.getInputTargetBlock('VARIABLES');
    while (statement_block) {
      statement_names.push(statement_block.getFieldValue('VARIABLE_DECL'));
      const next_conn = statement_block.nextConnection;
      statement_block = next_conn && next_conn.targetBlock();
    }

    const includes = statement_names.join(' ');

    const nextBlock = block.nextConnection && block.nextConnection.targetBlock();
    const nextCode = this.blockToCode(nextBlock);

    code += `include ${includes}\n${nextCode}omit ${includes}\n`;
    return code;
  }
}

/**
 * Lean code generator.
 * @type {!Blockly.Generator}
 */
export const Generator = new LeanGenerator;

/**
 * List of illegal variable names.
 * This is not intended to be a security feature.  Blockly is 100%
 * client-side, so bypassing this list is trivial.  This is intended to
 * prevent users from accidentally clobbering a built-in object or function.
 * @private
 */
Generator.addReservedWords('theorem,lemma,axiom,axioms,variable,protected,' +
  'private,def,meta,mutual,example,noncomputable,' +
  'variables,parameter,parameters,constant,constants,' +
  'using_well_founded,' +
  'end,namespace,section,prelude,' +
  'import,inductive,coinductive,structure,class,universe,' +
  'universes,local,precedence,reserve,infixl,infixr,' +
  'infix,postfix,prefix,notation,' +
  'set_option,open,export,' +
  'attribute,instance,include,omit,' +
  'declare_trace,add_key_equivalence,' +
  'run_cmd,#check,#reduce,#eval,#print,#help,#exit,' +
  '#compile,#unify,' +
  'fun,Pi,let,in,at,' +
  'have,assume,show,suffices,' +
  'do,if,then,else,by,' +
  'hiding,replacing,' +
  'from,Type,Sort,with,without,calc,begin,using,sorry,match,renaming,extends'
);

/**
 * Common tasks for generating Lean from blocks.
 * Handles comments for the specified block and any connected value blocks.
 * Calls any statements following this block.
 * @param {!Blockly.Block} block The current block.
 * @param {string} code The Lean code created for this block.
 * @param {boolean=} optThisOnly True to generate code for only this
 * statement.
 * @return {string} Python code with comments and subsequent blocks added.
 * @protected
 */
Generator.scrub_ = function(block, code, optThisOnly) {
  const nextBlock = block.nextConnection && block.nextConnection.targetBlock();
  if (block.type === 'variables' && !optThisOnly && nextBlock) {
    return this.generate_include_omit_(block, code);
  } else {
    const nextCode = optThisOnly ? '' : this.blockToCode(nextBlock);
    return code + nextCode;
  }
};

defineLogic(Generator);
defineText(Generator);

