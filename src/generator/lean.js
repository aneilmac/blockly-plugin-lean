import defineLogic from './lean/logic';
import defineText from './lean/text';

/**
 *
 */
export default function defineLean(Blockly) {
  /**
   * Lean code generator.
   * @type {!Blockly.Generator}
   */
  Blockly.Lean = new Blockly.Generator('Lean');

  /**
   * List of illegal variable names.
   * This is not intended to be a security feature.  Blockly is 100%
   * client-side, so bypassing this list is trivial.  This is intended to
   * prevent users from accidentally clobbering a built-in object or function.
   * @private
   */
  Blockly.Lean.addReservedWords(
      'theorem', 'lemma', 'axiom', 'axioms', 'variable', 'protected', 'private',
      'def', 'meta', 'mutual', 'example', 'noncomputable',
      'variables', 'parameter', 'parameters', 'constant', 'constants',
      'using_well_founded',
      'end', 'namespace', 'section', 'prelude',
      'import', 'inductive', 'coinductive', 'structure', 'class', 'universe',
      'universes', 'local', 'precedence', 'reserve', 'infixl', 'infixr',
      'infix', 'postfix', 'prefix', 'notation',
      'set_option', 'open', 'export',
      'attribute', 'instance', 'include', 'omit',
      'declare_trace', 'add_key_equivalence',
      'run_cmd', '#check', '#reduce', '#eval', '#print', '#help', '#exit',
      '#compile', '#unify',
      'fun', 'Pi', 'let', 'in', 'at',
      'have', 'assume', 'show', 'suffices',
      'do', 'if', 'then', 'else', 'by',
      'hiding', 'replacing',
      'from',
      'Type', 'Sort',
      'with', 'without',
      'calc',
      'begin', 'using',
      'sorry',
      'match',
      'renaming', 'extends'
  );

  Blockly.Lean.ORDER_ATOMIC = 0; // 0 "" ...

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
  Blockly.Lean.scrub_ = function(block, code, optThisOnly) {
    const nextBlock =
        block.nextConnection && block.nextConnection.targetBlock();
    let nextCode = '';
    if (nextBlock) {
      nextCode =
      optThisOnly ? '' : ',\n' + Blockly.Lean.blockToCode(nextBlock);
    }
    return code + nextCode;
  };

  /**
   * Encode a string as a properly escaped Lean string, complete with quotes.
   * @param {string} string Text to encode.
   * @return {string} Python string.
   * @protected
   */
  Blockly.Lean.quote_ = function(string) {
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
  };

  defineLogic(Blockly);
  defineText(Blockly);
}
