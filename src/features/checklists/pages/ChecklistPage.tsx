import { AppShell } from '../../../app/layout/AppShell';
import { AppFooter } from '../components/AppFooter';
import { ChecklistActions } from '../components/ChecklistActions';
import { ChecklistPhaseCard } from '../components/ChecklistPhaseCard';
import { HeroHeader } from '../components/HeroHeader';
import { ProgressBar } from '../components/ProgressBar';
import { pregaoFlow } from '../data/pregaoFlow';
import { useChecklistProgress } from '../hooks/useChecklistProgress';
import { downloadChecklistPdf } from '../utils/exportChecklistPdf';

const logoSrc = '/policia-penal-rn.png';
const activeFlow = 'Pregão';

export function ChecklistPage() {
  const { progress, completedCount, percentage, lastUpdated, toggleTask, resetChecklist } =
    useChecklistProgress(pregaoFlow);

  function handleReset() {
    if (
      window.confirm(
        'Tem certeza de que deseja resetar todas as etapas? Esta ação não poderá ser desfeita.',
      )
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
      activeFlow={activeFlow}
      logoSrc={logoSrc}
      footer={<AppFooter lastUpdated={lastUpdated} />}
    >
      <HeroHeader
        title={pregaoFlow.heroTitle}
        highlight={pregaoFlow.heroHighlight}
        description={`Módulo para acompanhamento das etapas do processo de ${activeFlow.toLowerCase()}.`}
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
        onExport={() => void downloadChecklistPdf(pregaoFlow, progress)}
        onReset={handleReset}
      />

      <div className="bg-[linear-gradient(180deg,#f8fbfe,#edf3f8)] px-4 py-6 sm:px-5 sm:py-7 md:px-9 md:py-8">
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
