import * as Blockly from 'blockly';

type ToolboxDefinition = Blockly.utils.toolbox.ToolboxDefinition;

export const LeanTacticsCategory = {
  kind: 'category',
  name: 'Tactics',
  contents: [
    {
      kind: 'block',
      type: 'tactic_refl',
    },
    {
      kind: 'block',
      type: 'tactic_rw',
    },
    {
      kind: 'block',
      type: 'tactic_rw_at',
    },
    {
      kind: 'block',
      type: 'tactic_induction',
    },
    {
      kind: 'block',
      type: 'tactic_sorry',
    },
  ],
};

export const LeanValueCategory = {
  kind: 'category',
  name: 'Values',
  contents: [
    {
      kind: 'block',
      type: 'text',
    },
  ],
};

export const LeanToolBoxCategories: ToolboxDefinition = {
  kind: 'categoryToolbox',
  name: 'Core',
  contents: [
    LeanTacticsCategory,
    LeanValueCategory,
  ],
};
