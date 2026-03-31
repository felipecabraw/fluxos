import type { ChecklistFlow } from '../../../shared/types/checklist';

const phases = [
  {
    id: 'fase-1',
    title: 'Fase 1: Preparação e Aprovação (CPL, Jurídico e PGE)',
    tasks: [
      {
        id: '1',
        order: 1,
        title: 'CPL: Elaborar minutas iniciais',
        details:
          'Minutas do edital, do contrato, do aditivo (se aplicável) e do apostilamento (se aplicável). Documentos de referência: ETP, TR, pesquisa mercadológica e análise de riscos.',
      },
      {
        id: '2',
        order: 2,
        title: 'CPL: Anexar documentos do TCE-RN (Anexo 38º)',
        details: 'Preparar o Anexo 38º do TCE-RN para juntada ao processo no SEI.',
      },
      {
        id: '3',
        order: 3,
        title: 'CPL: Encaminhar ao Jurídico',
        details: 'Encaminhar o processo para análise de conformidade.',
      },
      {
        id: '4',
        order: 4,
        title: 'Jurídico: Analisar e encaminhar à PGE',
        details: 'O Jurídico encaminhará o processo à PGE, que poderá devolvê-lo com diligências ou aprovação.',
      },
      {
        id: '5',
        order: 5,
        title: 'PGE: Análise e retorno com ressalvas',
        details:
          'O processo será encaminhado aos setores responsáveis para saneamento dos vícios. Atenção: as diligências da PGE devem ser atendidas com prioridade.',
        critical: true,
      },
      {
        id: '6',
        order: 6,
        title: 'CPL: Sanear vícios, se houver ressalvas',
        details:
          'Receber o processo, atualizar o contrato e o edital conforme os apontamentos da PGE e encaminhar novamente ao Jurídico para análise de conformidade.',
      },
      {
        id: '7',
        order: 7,
        title: 'Gabinete/SEAP: Autorizar o feito',
      },
    ],
  },
  {
    id: 'fase-2',
    title: 'Fase 2: Execução do pregão e seleção do fornecedor (SEAD)',
    tasks: [
      {
        id: '8',
        order: 8,
        title: 'SEAD: Cadastrar o edital e providenciar a publicação',
        details:
          'Publicação no DOE, em jornal de grande circulação e no PNCP. Aquisição: prazo mínimo de 8 dias úteis. Serviço: prazo mínimo de 10 dias úteis.',
      },
      {
        id: '9',
        order: 9,
        title: 'SEAD: Abrir a sessão de pregão',
        details:
          'Havendo erros, a sessão poderá ser suspensa. Não havendo inconsistências, a sessão será aberta para a fase de lances.',
      },
      {
        id: '10',
        order: 10,
        title: 'SEAD: Realizar sessão de continuidade',
        details: 'Realizar a análise das propostas e, em seguida, a análise de habilitação.',
      },
      {
        id: '11',
        order: 11,
        title: 'SEAD: Analisar a documentação do fornecedor',
        details:
          'Analisar contrato social, certidões no SICAF, atestado de capacidade técnica e legitimidade do demandante. Se houver certidão vencida, deverá ser realizada diligência.',
      },
      {
        id: '12',
        order: 12,
        title: 'SEAD: Concluir a etapa de análise documental',
        details:
          'Após a análise dos documentos, observar os prazos recursais: 3 dias úteis para recurso e 3 dias úteis para contrarrazões.',
      },
      {
        id: '13',
        order: 13,
        title: 'SEAD: Decidir sobre razões e contrarrazões',
      },
      {
        id: '14',
        order: 14,
        title: 'SEAD: Homologar e publicar',
        details: 'Providenciar a homologação no portal COMPRAS e a publicação da homologação no DOE.',
      },
    ],
  },
  {
    id: 'fase-3',
    title: 'Fase 3: Formalização do contrato (CPL, Gabinete, Jurídico e UIAG)',
    tasks: [
      {
        id: '15',
        order: 15,
        title: 'CPL: Juntar documentos do TCE-RN (Anexo 13º)',
        details: 'O Anexo 13º do TCE deverá ser juntado pela UIAG no sistema do TCE.',
      },
      {
        id: '16',
        order: 16,
        title: 'Gabinete: Despachar ao Financeiro para juntada do empenho',
      },
      {
        id: '17',
        order: 17,
        title: 'CPL: Elaborar a minuta final do contrato',
        details:
          'Se houver convênio, será necessário o aceite da SENAPEN. Com o fornecedor definido, a minuta deverá conter os dados completos da empresa e a descrição do objeto com marca, modelo, valor unitário e valor total, conforme ETP, TR e edital. Juntar SICAF atualizado e certidão consolidada do TCU.',
        critical: true,
      },
      {
        id: '18',
        order: 18,
        title: 'CPL: Encaminhar ao setor Jurídico para verificação',
      },
      {
        id: '19',
        order: 19,
        title: 'Gabinete: Receber, aprovar e autorizar a formalização',
        details:
          'Atenção: a autorização do Secretário é indispensável para formalizar o contrato. O Gabinete deverá encaminhar o processo à UCI para análise de conformidade. As diligências da UCI devem ser atendidas com prioridade.',
        critical: true,
      },
      {
        id: '20',
        order: 20,
        title: 'CPL: Confeccionar e coletar as assinaturas do contrato',
        details:
          'Atualizar a planilha interna de controle, encaminhar o contrato à empresa por e-mail e providenciar a assinatura no SEI, no prazo de 5 dias úteis. Após a assinatura da empresa, encaminhar para assinatura do Secretário e, posteriormente, das testemunhas pela UIAG.',
      },
      {
        id: '21',
        order: 21,
        title: 'CPL: Despachar à UIAG/SEAP para publicação no DOE e Anexo 13º do TCE',
      },
    ],
  },
] satisfies ChecklistFlow['phases'];

export const pregaoFlow: ChecklistFlow = {
  id: 'pregao-seap',
  storageKey: 'checklist_pregao_seap',
  totalTasks: 21,
  title: 'Checklist Dinâmico — Processo de Pregão',
  subtitle: 'Acompanhe as etapas do processo com registro simples, objetivo e padronizado.',
  heroTitle: 'SISTEMA DE FLUXOGRAMAS PARA PROCESSOS DE COMPRAS',
  heroHighlight: 'DA UIAG/SEAP',
  heroDescription: '',
  highlights: [
    'Acompanhe o passo a passo do fluxo dos processos licitatórios.',
    'Visualize com clareza cada etapa do trâmite.',
    'Registre o andamento com mais segurança e padronização.',
  ],
  activeFlowLabel: 'Fluxo ativo: Pregão',
  phases,
};
