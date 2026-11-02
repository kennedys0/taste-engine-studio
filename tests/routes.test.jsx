import { describe, it, expect } from 'vitest';
import {
  STYLES,
  STYLE_IDS,
  isValidStyle,
  getStyle,
  resolveStyleId,
  ALIAS_MAP,
} from '../src/styles/registry';

describe('Canonical Style Registry & Route Verification', () => {
  it('contains exactly 10 canonical style packs', () => {
    expect(STYLE_IDS).toHaveLength(10);
    expect(STYLES).toHaveLength(10);
  });

  it('includes all required canonical style IDs', () => {
    const requiredIds = [
      'claymorphism',
      'glassmorphism',
      'brutalism',
      'neo-brutalism',
      'minimalism',
      'swiss-editorial',
      'bento',
      'skeuomorphism',
      'retro-terminal',
      'enterprise',
    ];
    for (const id of requiredIds) {
      expect(STYLE_IDS).toContain(id);
      expect(isValidStyle(id)).toBe(true);
      const styleObj = getStyle(id);
      expect(styleObj).toBeDefined();
      expect(styleObj.id).toBe(id);
      expect(styleObj.path).toMatch(/^styles\//);
      expect(styleObj.tagline).toBeTruthy();
      expect(styleObj.materialFidelityGate).toBeTruthy();
    }
  });

  it('resolves common aliases and misspellings correctly', () => {
    expect(resolveStyleId('glassmorphsm')).toBe('glassmorphism');
    expect(resolveStyleId('glassmorph')).toBe('glassmorphism');
    expect(resolveStyleId('skeumorphism')).toBe('skeuomorphism');
    expect(resolveStyleId('skeumorphsm')).toBe('skeuomorphism');
    expect(resolveStyleId('swiss')).toBe('swiss-editorial');
    expect(resolveStyleId('editorial')).toBe('swiss-editorial');
    expect(resolveStyleId('neobrutalism')).toBe('neo-brutalism');
    expect(resolveStyleId('clay')).toBe('claymorphism');
    expect(resolveStyleId('terminal')).toBe('retro-terminal');
    expect(resolveStyleId('data-first')).toBe('enterprise');
  });

  it('rejects unknown style IDs with null / false', () => {
    expect(isValidStyle('nonexistent-style')).toBe(false);
    expect(isValidStyle('fictional-pack')).toBe(false);
    expect(isValidStyle('editorial-only')).toBe(false);
    expect(resolveStyleId('random-gibberish')).toBeNull();
  });
});

