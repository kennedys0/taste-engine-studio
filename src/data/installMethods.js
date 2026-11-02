/**
 * Installation methods and commands for Taste Engine.
 * Verified against repository documentation and Agent Skills specification.
 */

export const INSTALL_METHODS = [
  {
    id: 'cli-auto',
    name: 'Interactive CLI (Recommended)',
    agent: 'Universal',
    description: 'Uses the official Agent Skills CLI to detect installed AI agents on your machine and prompts you to select targets.',
    command: 'npx skills add kennedys0/taste-engine --skill taste-engine',
    notes: 'Requires Node.js 18+ and an active shell. Supports interactive selection of Claude Code, Codex, Cursor, and Antigravity.'
  },
  {
    id: 'claude-code',
    name: 'Claude Code (Global)',
    agent: 'Claude Code',
    description: 'Installs globally for Claude Code CLI sessions with automatic confirmation.',
    command: 'npx skills add kennedys0/taste-engine --skill taste-engine -a claude-code -g -y',
    notes: 'Installs to ~/.claude/skills/taste-engine so all future Claude Code sessions discover it automatically.'
  },
  {
    id: 'codex',
    name: 'Codex / OpenAI',
    agent: 'Codex',
    description: 'Installs globally for OpenAI Codex CLI environments.',
    command: 'npx skills add kennedys0/taste-engine --skill taste-engine -a codex -g -y',
    notes: 'Configures Codex skills directory with full access to the ten canonical style packs.'
  },
  {
    id: 'antigravity',
    name: 'Google Antigravity',
    agent: 'Antigravity IDE',
    description: 'Installs globally for Google Antigravity IDE and CLI coding assistant.',
    command: 'npx skills add kennedys0/taste-engine --skill taste-engine -a antigravity -g -y',
    notes: 'Installs to ~/.gemini/config/skills/taste-engine with automatic skill discovery on new visual tasks.'
  },
  {
    id: 'manual',
    name: 'Manual Clone / Project Scope',
    agent: 'Any Git Project',
    description: 'Clone directly into your workspace repository for project-locked versioning.',
    command: 'mkdir -p .skills && git clone https://github.com/kennedys0/taste-engine.git .skills/taste-engine',
    notes: 'Commit .skills/taste-engine into version control so all teammates and CI agents share the exact same style packs.'
  }
];

export const VERIFICATION_STEPS = [
  {
    step: 1,
    title: 'Test Automatic Preflight',
    prompt: 'Build me a portfolio website',
    expected: 'Agent should pause and ask ONE question presenting contrasting visual styles (Claymorphism, Glassmorphism, Brutalism, Neo-brutalism, etc.). It must NOT begin coding immediately.'
  },
  {
    step: 2,
    title: 'Test Explicit Style Routing',
    prompt: 'Build a glassmorphism portfolio landing page',
    expected: 'Agent should recognize the style immediately, load styles/glassmorphism.md without asking again, and compose a first viewport with visible frosted panes over ambient gradient light.'
  },
  {
    step: 3,
    title: 'Test Existing Project Preservation',
    prompt: 'Fix the mobile responsive menu on my existing site',
    expected: 'Agent should preserve your approved project design system and tokens; it should not interrupt with a style selection menu for minor incremental fixes.'
  }
];
