import { describe, expect, it } from 'vitest';

import { pregaoFlow } from '../data/pregaoFlow';
import {
  calculateCompletedCount,
  calculateCompletionPercentage,
  createInitialProgress,
} from './progress';

describe('checklist progress utils', () => {
  it('creates an empty progress map for all tasks', () => {
    const progress = createInitialProgress(pregaoFlow);

    expect(Object.keys(progress)).toHaveLength(pregaoFlow.totalTasks);
    expect(Object.values(progress).every((value) => value === false)).toBe(true);
  });

  it('calculates completed count and percentage correctly', () => {
    const progress = {
      ...createInitialProgress(pregaoFlow),
      '1': true,
      '2': true,
      '3': true,
    };

    expect(calculateCompletedCount(progress)).toBe(3);
    expect(calculateCompletionPercentage(3, pregaoFlow.totalTasks)).toBe(14);
  });

  it('returns zero percentage when total tasks is zero', () => {
    expect(calculateCompletionPercentage(0, 0)).toBe(0);
  });
});
