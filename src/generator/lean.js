import * as Blockly from 'blockly';

import defineLogic from './lean/logic';


export default function defineLean() {
  /**
   * Lean code generator.
   * @type {!Blockly.Generator}
   */
  Blockly.Lean = new Blockly.Generator('Lean');

  /**
   * List of illegal variable names.
   * This is not intended to be a security feature.  Blockly is 100% client-side,
   * so bypassing this list is trivial.  This is intended to prevent users from
   * accidentally clobbering a built-in object or function.
   * @private
   */
  Blockly.Lean.addReservedWords(
    'theorem', 'lemma', 'axiom', 'axioms', 'variable', 'protected', 'private',
    'def', 'meta', 'mutual', 'example', 'noncomputable',
    'variables', 'parameter', 'parameters', 'constant', 'constants',
    'using_well_founded',
    'end', 'namespace', 'section', 'prelude',
    'import', 'inductive', 'coinductive', 'structure', 'class', 'universe', 'universes', 'local',
    'precedence', 'reserve', 'infixl', 'infixr', 'infix', 'postfix', 'prefix', 'notation',
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

  defineLogic();
}
