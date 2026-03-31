import type { ChecklistFlow } from '../../../shared/types/checklist';

const phases = [
  {
    id: 'fase-1',
    title: 'Fase 1: Preparação e Aprovação (CPL, Jurídico, PGE)',
    tasks: [
      {
        id: '1',
        order: 1,
        title: 'CPL: Elaborar Minutas Iniciais',
        details:
          'Minuta do Edital, Contrato, Aditivo (se aplicável), Apostilamento (se aplicável). Documentos de Referência: ETP, TR, Pesquisa Mercadológica, Análise de Riscos.',
      },
      {
        id: '2',
        order: 2,
        title: 'CPL: Anexos do TCE-RN (Anexo 38º)',
        details: 'Preparar Anexo 38º (TCE) para juntada no processo SEI.',
      },
      {
        id: '3',
        order: 3,
        title: 'CPL: Enviar para o Jurídico',
        details: 'Para análise de conformidade.',
      },
      {
        id: '4',
        order: 4,
        title: 'Jurídico: Análise e Envio à PGE',
        details: 'Jurídico enviará para a PGE, que retornará com diligências ou aprovação.',
      },
      {
        id: '5',
        order: 5,
        title: 'PGE: Análise e Retorno (Com Ressalvas)',
        details:
          'Processo encaminhado aos setores para saneamento dos vícios. Atenção: diligências da PGE devem ser prontamente atendidas.',
        critical: true,
      },
      {
        id: '6',
        order: 6,
        title: 'CPL: Saneamento de Vícios (se houver ressalvas)',
        details:
          'Recebe o processo, realiza atualização do Contrato e Edital com base nas mudanças apontadas pela PGE. Envia novamente para o Jurídico para análise de conformidade.',
      },
      {
        id: '7',
        order: 7,
        title: 'Gabinete/SEAP: Autorização do Feito',
      },
    ],
  },
  {
    id: 'fase-2',
    title: 'Fase 2: Execução do Pregão e Seleção do Fornecedor (SEAD)',
    tasks: [
      {
        id: '8',
        order: 8,
        title: 'SEAD: Cadastro do Edital e Publicação',
        details:
          'Publicação em: DOE, Jornal de Grande Circulação e PNCP. Prazos: aquisição (10 dias úteis) e serviço (12 dias úteis).',
      },
      {
        id: '9',
        order: 9,
        title: 'SEAD: Abertura da Sessão de Pregão',
        details: 'Com erros: sessão pode ser suspensa. Sem erros: sessão aberta para lances.',
      },
      {
        id: '10',
        order: 10,
        title: 'SEAD: Sessão de Continuidade',
        details: '1º análise das propostas. 2º análises de habilitação.',
      },
      {
        id: '11',
        order: 11,
        title: 'SEAD: Análise de Documentação do Fornecedor',
        details:
          'Contrato Social. Certidões (SICAF): se vencida, diligência (CPL pode puxar certidão no SICAF). Atestado de capacidade técnica. Observar a legitimidade do demandante.',
      },
      {
        id: '12',
        order: 12,
        title: 'SEAD: Após Análise dos Documentos',
        details: 'Prazo para recurso: 3 dias úteis (empresa) e 3 dias úteis (contrarrazões).',
      },
      {
        id: '13',
        order: 13,
        title: 'SEAD: Decisão (Razões e contrarrazões)',
      },
      {
        id: '14',
        order: 14,
        title: 'SEAD: Homologação e Publicação',
        details: 'Homologação no portal COMPRAS pelo Secretário. Publicação da homologação no DOE.',
      },
    ],
  },
  {
    id: 'fase-3',
    title: 'Fase 3: Formalização do Contrato (CPL, Gabinete, Jurídico, UIAG)',
    tasks: [
      {
        id: '15',
        order: 15,
        title: 'CPL: Juntar Anexos do TCE-RN (Anexo 13º)',
        details: 'Anexo 13º (TCE) deve ser juntado pela UIAG no site do TCE.',
      },
      {
        id: '16',
        order: 16,
        title: 'Gabinete: Despacho para o Financeiro (Juntada de Empenho)',
      },
      {
        id: '17',
        order: 17,
        title: 'CPL: Elaborar Minuta Final do Contrato',
        details:
          'Se convênio: necessita de aceite da SENAPEN. Com fornecedor selecionado: minuta com dados completos do fornecedor (endereço, e-mail, telefone, etc.). Objeto do contrato com especificações (marca/modelo, valor unitário e total conforme ETP, TR, Edital). Juntar SICAF atualizado e Certidão Consolidada do TCU.',
        critical: true,
      },
      {
        id: '18',
        order: 18,
        title: 'CPL: Enviar ao Setor Jurídico (Verificação)',
      },
      {
        id: '19',
        order: 19,
        title: 'Gabinete: Recebe, Aprova e Autoriza Formalização',
        details:
          'Atenção: autorização do Secretário para formalizar o contrato. Gabinete deve enviar para UCI para conformidade. Atenção: diligências da UCI devem ser prontamente atendidas.',
        critical: true,
      },
      {
        id: '20',
        order: 20,
        title: 'CPL: Confecção e Assinatura do Contrato',
        details:
          'Alimenta planilha interna de controle. Manda e-mail para empresa (contrato no SEI). Empresa assina contrato no SEI (prazo de 5 dias úteis). Após assinatura da empresa, enviar para bloco de assinatura do Secretário. Depois, bloco de assinatura das testemunhas - UIAG.',
      },
      {
        id: '21',
        order: 21,
        title: 'CPL: Despacho para UIAG/SEAP (Publicação no DOE e Anexo 13º TCE)',
      },
    ],
  },
] satisfies ChecklistFlow['phases'];

export const pregaoFlow: ChecklistFlow = {
  id: 'pregao-seap',
  storageKey: 'checklist_pregao_seap',
  totalTasks: 21,
  title: 'Checklist Dinâmico - Processo de Pregão',
  subtitle: 'Acompanhe as etapas do processo com registro simples, objetivo e padronizado.',
  heroTitle: 'Acompanhamento',
  heroHighlight: 'do fluxo de pregão',
  heroDescription:
    'Módulo para acompanhamento das etapas do processo de pregão.',
  highlights: [
    'Acompanhe o passo a passo do fluxo de processos licitatórios.',
    'Visualize com clareza cada etapa do trâmite.',
    'Registre o andamento com mais segurança e padronização.',
  ],
  activeFlowLabel: 'Fluxo ativo: Pregão',
  phases,
};
