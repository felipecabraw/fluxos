import { AppShell } from '../../../app/layout/AppShell';
import { AppFooter } from '../components/AppFooter';
import { ChecklistActions } from '../components/ChecklistActions';
import { ChecklistPhaseCard } from '../components/ChecklistPhaseCard';
import { HeroHeader } from '../components/HeroHeader';
import { ProgressBar } from '../components/ProgressBar';
import { pregaoFlow } from '../data/pregaoFlow';
import { useChecklistProgress } from '../hooks/useChecklistProgress';
import { downloadChecklistCsv } from '../utils/exportChecklistCsv';

const logoSrc = '/policia-penal-rn.png';

export function ChecklistPage() {
  const { progress, completedCount, percentage, lastUpdated, toggleTask, resetChecklist } =
    useChecklistProgress(pregaoFlow);

  function handleReset() {
    if (
      window.confirm('Tem certeza que deseja resetar todas as etapas? Esta ação não pode ser desfeita.')
    ) {
      resetChecklist();
    }
  }

  return (
    <AppShell
      bannerLabel="Secretaria da Administração Penitenciária"
      bannerTitle="Sistema de Controle de Fluxo de Processos Licitatórios"
      flowTabs={[
        'Pregão',
        'Dispensa de Licitação',
        'Inexigibilidade de Licitação',
        'Dispensa Eletrônica',
      ]}
      activeFlow="Pregão"
      logoSrc={logoSrc}
      footer={<AppFooter lastUpdated={lastUpdated} />}
    >
      <HeroHeader
        title={pregaoFlow.heroTitle}
        highlight={pregaoFlow.heroHighlight}
        description={pregaoFlow.heroDescription}
        highlights={pregaoFlow.highlights}
      />

      <ProgressBar
        title={pregaoFlow.title}
        subtitle={pregaoFlow.subtitle}
        completedCount={completedCount}
        totalTasks={pregaoFlow.totalTasks}
        percentage={percentage}
      />

      <ChecklistActions
        onExport={() => downloadChecklistCsv(pregaoFlow, progress)}
        onReset={handleReset}
      />

      <div className="bg-[linear-gradient(180deg,#f8fbfe,#edf3f8)] px-5 py-8 md:px-9">
        {pregaoFlow.phases.map((phase) => (
          <ChecklistPhaseCard
            key={phase.id}
            phase={phase}
            progress={progress}
            onToggleTask={toggleTask}
          />
        ))}
      </div>
    </AppShell>
  );
}
