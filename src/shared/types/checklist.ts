export type ChecklistTask = {
  id: string;
  order: number;
  title: string;
  details?: string;
  critical?: boolean;
};

export type ChecklistPhase = {
  id: string;
  title: string;
  tasks: ChecklistTask[];
};

export type ChecklistFlow = {
  id: string;
  storageKey: string;
  totalTasks: number;
  title: string;
  subtitle: string;
  heroTitle: string;
  heroHighlight: string;
  heroDescription: string;
  highlights: string[];
  activeFlowLabel: string;
  phases: ChecklistPhase[];
};

export type ChecklistProgress = Record<string, boolean>;
