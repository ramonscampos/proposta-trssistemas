import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowLeft,
  Calendar,
  CheckCircle2,
  Clock,
  Coins,
  Layers,
  Lock,
  Puzzle,
  Sliders,
  Database,
  ShieldAlert,
  Terminal,
  Sparkles,
  BookOpen,
  Users,
  ChevronDown
} from 'lucide-react';
import rc from './assets/rc.svg';
import logoTrs from './assets/logo-trs-white.png';
import rcWhite from './assets/rc-white.svg';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } }
};

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.06
    }
  }
};

interface Checkpoint {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  duration: string;
  color: string;
  icon: React.ComponentType<any>;
  deliverables: string[];
}

const checkpoints: Checkpoint[] = [
  {
    id: 'checkpoint-1',
    number: '01',
    title: 'Checkpoint 1',
    subtitle: 'Fluxo de autenticação',
    duration: 'CP 1',
    color: 'from-cyan-500 to-blue-500',
    icon: Lock,
    deliverables: [
      'seleção de ambiente',
      'etapa de carregamento',
      'login com usuário e senha',
      'seleção de empresa e filial',
      'persistência da sessão autenticada',
      'logout',
      'proteção inicial de rotas privadas',
      'integração inicial com autenticação JWT',
      'fluxo completo de autenticação funcional'
    ]
  },
  {
    id: 'checkpoint-2',
    number: '02',
    title: 'Checkpoint 2',
    subtitle: 'Estrutura visual principal da aplicação',
    duration: 'CP 2',
    color: 'from-blue-500 to-indigo-500',
    icon: Layers,
    deliverables: [
      'layout base da aplicação',
      'sidebar funcional',
      'header funcional',
      'navegação inicial da aplicação',
      'componente de usuário autenticado',
      'busca mocada funcional',
      'ícones de ação implementados',
      'comportamento responsivo inicial',
      'componentes base principais implementados'
    ]
  },
  {
    id: 'checkpoint-3',
    number: '03',
    title: 'Checkpoint 3',
    subtitle: 'Dashboard, permissões e customizações',
    duration: 'CP 3',
    color: 'from-indigo-500 to-purple-500',
    icon: Sliders,
    deliverables: [
      'dashboard inicial implementado',
      'cards informativos',
      'widgets',
      'tabelas mocadas',
      'gráficos mocados',
      'permissões por usuário',
      'permissões por rotina',
      'permissões por ação',
      'guards de rota',
      'guards de componente',
      'controle visual baseado em permissão',
      'ocultação e bloqueio de funcionalidades',
      'estrutura de customizações por cliente',
      'integração da autenticação com permissões'
    ]
  },
  {
    id: 'checkpoint-4',
    number: '04',
    title: 'Checkpoint 4',
    subtitle: 'Módulo de referência funcional',
    duration: 'CP 4',
    color: 'from-purple-500 to-pink-500',
    icon: Puzzle,
    deliverables: [
      'módulo de referência implementado',
      'listagem de registros',
      'criação de registros',
      'edição de registros',
      'exclusão de registros',
      'filtros',
      'busca',
      'paginação',
      'validações',
      'loading states',
      'error states',
      'empty states',
      'persistência mocada/local funcional',
      'integração do módulo com autenticação, permissões e customizações'
    ]
  },
  {
    id: 'entrega-final',
    number: '05',
    title: 'Entrega final',
    subtitle: 'Refinamentos, documentação e handoff técnico',
    duration: 'Handoff',
    color: 'from-pink-500 to-rose-500',
    icon: BookOpen,
    deliverables: [
      'refinamentos finais da aplicação',
      'ajustes de responsividade',
      'padronizações finais',
      'documentação técnica',
      'documentação da arquitetura',
      'guia de continuidade do projeto',
      'reuniões de alinhamento final',
      'transferência de conhecimento',
      'entrega do repositório final',
      'entrega do código-fonte',
      'entrega da documentação técnica'
    ]
  }
];

interface ScopeItem {
  subtitle?: string;
  paragraphs?: string[];
  items?: string[];
  footerParagraphs?: string[];
}

interface EscopoSection {
  id: string;
  title: string;
  icon: React.ComponentType<any>;
  descriptionParagraphs: string[];
  listItems?: string[];
  details: ScopeItem[];
}

const escopoSections: EscopoSection[] = [
  {
    id: 'arquitetura',
    title: 'Arquitetura Frontend',
    icon: Layers,
    descriptionParagraphs: [
      'O escopo contempla a definição e implementação da arquitetura principal da aplicação frontend, visando criar uma base técnica sólida, modular, escalável e preparada para evolução contínua da plataforma web.',
      'A arquitetura deverá ser estruturada para suportar crescimento progressivo do sistema, expansão de módulos, evolução de regras de negócio, integração contínua com a API existente e manutenção futura por diferentes desenvolvedores da equipe.',
      'A estrutura arquitetural deverá contemplar:'
    ],
    listItems: [
      'separação clara entre camada visual, regras de negócio, integração e serviços',
      'organização modular por domínio ou contexto funcional',
      'desacoplamento entre componentes visuais e regras de negócio',
      'padronização estrutural da aplicação',
      'estratégia de crescimento contínuo sem necessidade de reestruturações frequentes',
      'reutilização de componentes e fluxos',
      'previsibilidade arquitetural',
      'legibilidade e manutenção do código',
      'organização preparada para trabalho em equipe',
      'organização preparada para continuidade do projeto pela equipe interna'
    ],
    details: [
      {
        subtitle: 'Estrutura da aplicação',
        paragraphs: ['A estrutura do projeto deverá contemplar:'],
        items: [
          'separação entre layout, componentes, módulos, serviços, hooks e regras',
          'separação entre componentes reutilizáveis e componentes específicos de domínio',
          'estruturação dos módulos da aplicação',
          'padronização de nomenclatura',
          'organização consistente de pastas e responsabilidades',
          'estratégia de compartilhamento de componentes e regras',
          'estrutura preparada para expansão futura de funcionalidades'
        ]
      },
      {
        subtitle: 'Padronização de formulários',
        paragraphs: ['O escopo contempla:'],
        items: [
          'padronização estrutural dos formulários da aplicação',
          'padronização de validações',
          'padronização de mensagens de erro',
          'padronização visual de campos',
          'padronização de estados de loading',
          'padronização de estados desabilitados',
          'padronização de feedback visual ao usuário',
          'estratégia reutilizável para construção de novos formulários'
        ]
      },
      {
        subtitle: 'Padronização de tratamento de erro',
        paragraphs: ['O escopo contempla:'],
        items: [
          'tratamento centralizado de erros',
          'padronização de feedback visual',
          'estrutura preparada para erros de autenticação',
          'estrutura preparada para erros de permissão',
          'estrutura preparada para erros de integração',
          'estratégia reutilizável para exibição de falhas',
          'padronização de mensagens visuais da aplicação'
        ]
      },
      {
        subtitle: 'Estados de loading e empty states',
        paragraphs: ['O escopo contempla:'],
        items: [
          'padronização visual de estados de carregamento',
          'padronização visual de estados vazios',
          'padronização de feedbacks de ausência de informação',
          'padronização de estados de erro em listagens e módulos',
          'reutilização estrutural dos estados da aplicação'
        ]
      }
    ]
  },
  {
    id: 'componentes',
    title: 'Componentes Base',
    icon: Puzzle,
    descriptionParagraphs: [
      'O escopo contempla a criação da base inicial de componentes reutilizáveis da aplicação, seguindo a identidade visual definida no Figma e os padrões necessários para sustentação da arquitetura frontend.',
      'Os componentes deverão ser estruturados de forma reutilizável, modular e preparada para evolução futura da plataforma.',
      'A implementação deverá contemplar:'
    ],
    listItems: [
      'componentes reutilizáveis',
      'separação entre comportamento e apresentação visual',
      'padronização visual da interface',
      'padronização de estados dos componentes',
      'suporte à reutilização em diferentes módulos da aplicação',
      'integração consistente com formulários e fluxos internos'
    ],
    details: [
      {
        subtitle: 'Componentes previstos na base inicial',
        paragraphs: ['A base inicial de componentes deverá contemplar, quando aplicável ao contexto da aplicação:'],
        items: [
          'botões',
          'botões de ícone',
          'inputs',
          'campos de formulário',
          'selects',
          'checkbox',
          'toggles/switches',
          'tabs',
          'chips/tags',
          'paginação',
          'itens de menu',
          'componentes de navegação',
          'cards',
          'modais/dialogs',
          'feedbacks visuais',
          'componentes estruturais do dashboard',
          'componentes estruturais da área autenticada'
        ]
      },
      {
        subtitle: 'Estados e variações',
        paragraphs: ['Os componentes poderão possuir diferentes estados visuais e comportamentais, incluindo:'],
        items: [
          'active',
          'inactive',
          'hover',
          'focus',
          'selected',
          'disabled',
          'loading',
          'success',
          'error'
        ],
        footerParagraphs: ['quando aplicável ao contexto de cada componente.']
      },
      {
        subtitle: 'Navegação e componentes estruturais',
        paragraphs: [
          'O escopo contempla também a criação da estrutura base de componentes responsáveis pela navegação e composição geral da interface, incluindo:'
        ],
        items: [
          'sidebar',
          'header',
          'itens de menu',
          'navegação lateral expandida',
          'navegação lateral recolhida',
          'componentes de usuário autenticado',
          'estrutura de tabs',
          'estrutura de paginação',
          'estrutura de navegação interna'
        ]
      },
      {
        subtitle: 'Responsividade',
        paragraphs: [
          'A aplicação deverá possuir comportamento responsivo compatível com o contexto de um sistema administrativo corporativo.',
          'O escopo contempla:'
        ],
        items: [
          'adaptação estrutural da interface para diferentes resoluções',
          'adaptação do layout principal',
          'adaptação da navegação lateral',
          'adaptação de espaçamentos e organização visual',
          'adaptação de componentes para resoluções menores',
          'comportamento responsivo do dashboard',
          'comportamento responsivo dos componentes principais',
          'usabilidade compatível com notebooks, desktops e resoluções intermediárias'
        ]
      },
      {
        subtitle: 'Foco da Responsividade',
        paragraphs: ['A responsividade será implementada priorizando:'],
        items: [
          'experiência desktop',
          'notebooks',
          'telas corporativas',
          'resoluções intermediárias',
          'navegação funcional em dispositivos menores quando aplicável'
        ]
      },
      {
        subtitle: 'Limitações e Contexto Mobile',
        paragraphs: [
          'Por se tratar de um ERP administrativo com grande volume de informação, tabelas, dashboards, permissões e fluxos complexos, determinadas telas, módulos ou estruturas poderão possuir limitações naturais de usabilidade em resoluções muito pequenas, especialmente em dispositivos mobile.',
          'O objetivo da responsividade será garantir adaptação funcional e estrutural da aplicação, sem compromisso de transformar todos os módulos do ERP em experiências totalmente equivalentes a aplicativos mobile nativos.',
          'Dependendo da complexidade do módulo, poderão ser necessárias adaptações futuras específicas para determinadas telas caso exista necessidade real de operação mobile completa.'
        ]
      }
    ]
  },
  {
    id: 'autenticacao-layout',
    title: 'Autenticação & Acesso',
    icon: Lock,
    descriptionParagraphs: [
      'O escopo contempla a implementação da estrutura visual e funcional base da área interna da aplicação, incluindo o fluxo completo de autenticação, layout principal do sistema, navegação lateral, cabeçalho, dashboard inicial e comportamento geral da interface.',
      'O Figma será utilizado como referência visual para construção dos componentes, layouts e comportamento esperado da aplicação, sem caracterizar obrigação de implementação integral de todas as telas existentes no design.'
    ],
    details: [
      {
        subtitle: 'Autenticação',
        paragraphs: [
          'O escopo contempla a estruturação do fluxo completo de autenticação da nova plataforma web, considerando que o acesso ao sistema não acontece em uma única tela, mas em uma jornada composta por múltiplas etapas.',
          'A autenticação deverá contemplar:'
        ],
        items: [
          'seleção do ambiente de acesso',
          'carregamento das informações necessárias para continuidade do login, caso essa etapa se mantenha necessária',
          'preenchimento de usuário e senha',
          'seleção da empresa',
          'seleção da filial, quando aplicável',
          'criação da sessão autenticada',
          'persistência do contexto selecionado',
          'uso de JWT para autenticação das requisições',
          'proteção das rotas internas',
          'tratamento de sessão expirada (se aplicável)',
          'logout'
        ]
      },
      {
        subtitle: 'Contexto das Escolhas',
        paragraphs: [
          'O fluxo deverá considerar que o usuário pode ter acesso a diferentes ambientes, empresas e filiais, e que essas escolhas fazem parte do contexto necessário para utilização do sistema.',
          'A estrutura de autenticação deverá ser preparada para receber dados da API, mas poderá utilizar dados mocados durante o desenvolvimento quando os endpoints reais ainda não estiverem disponíveis.'
        ]
      },
      {
        subtitle: 'Etapa 1. Seleção do ambiente de acesso',
        items: [
          'listagem dos ambientes disponíveis',
          'seleção do ambiente antes da autenticação',
          'controle visual do ambiente selecionado',
          'validação para impedir avanço sem ambiente selecionado',
          'estrutura preparada para recebimento dos ambientes via API',
          'suporte a dados mocados quando necessário'
        ]
      },
      {
        subtitle: 'Etapa 2. Carregamento das informações',
        items: [
          'estado ou tela intermediária de carregamento',
          'feedback visual de carregamento',
          'tratamento visual de erro durante carregamento',
          'possibilidade de adaptação ou remoção da etapa conforme definição técnica final do fluxo'
        ]
      },
      {
        subtitle: 'Etapa 3. Login do usuário',
        items: [
          'preenchimento de usuário e senha',
          'estrutura visual baseada no Figma fornecido',
          'validação de campos obrigatórios',
          'tratamento de credenciais inválidas',
          'loading durante autenticação',
          'suporte ao recebimento do JWT',
          'persistência segura da sessão',
          'ação de retorno para etapa anterior'
        ]
      },
      {
        subtitle: 'Etapa 4. Seleção de empresa e filial',
        items: [
          'listagem das empresas disponíveis para o usuário',
          'listagem das filiais disponíveis',
          'validação de seleção obrigatória',
          'suporte a múltiplas empresas por usuário',
          'suporte a múltiplas filiais por empresa',
          'persistência do contexto selecionado',
          'disponibilização do contexto para toda a aplicação',
          'redirecionamento para área interna após conclusão do fluxo'
        ]
      }
    ]
  },
  {
    id: 'layout-interno',
    title: 'Layout Interno',
    icon: Calendar,
    descriptionParagraphs: [
      'O escopo contempla a implementação da estrutura visual base da área autenticada da aplicação, utilizando o dashboard apresentado no Figma como referência para construção da interface principal.'
    ],
    details: [
      {
        subtitle: 'Sidebar',
        paragraphs: ['O escopo contempla:'],
        items: [
          'implementação da sidebar principal da aplicação',
          'suporte ao estado aberto',
          'suporte ao estado recolhido/fechado',
          'comportamento visual de expansão e recolhimento',
          'exibição da identidade visual no estado aberto',
          'adaptação visual da sidebar no estado fechado',
          'estrutura de itens de menu',
          'suporte a item ativo',
          'agrupamento visual dos menus',
          'divisores entre grupos de navegação',
          'suporte a ícones nos itens de menu',
          'comportamento responsivo para mobile',
          'abertura e fechamento da navegação em telas menores',
          'menus mocados para representação estrutural da aplicação'
        ]
      },
      {
        subtitle: 'Itens de Funcionamento Real dos Menus',
        paragraphs: ['Os menus serão implementados de forma mocada, com funcionamento real apenas para:'],
        items: [
          'Início',
          'Módulo de Referência'
        ]
      },
      {
        subtitle: 'Limites Visuais da Sidebar',
        paragraphs: [
          'Os demais itens poderão existir visualmente na navegação sem implementação funcional de tela dentro deste escopo.'
        ]
      },
      {
        subtitle: 'Header',
        paragraphs: [
          'O escopo contempla a implementação do cabeçalho principal da aplicação.',
          'O header deverá contemplar:'
        ],
        items: [
          'campo de busca',
          'estrutura visual e comportamental da busca',
          'suporte ao comportamento futuro de pesquisa',
          'três ícones de ação',
          'estados visuais dos ícones',
          'indicadores visuais mocados quando aplicável',
          'componente de usuário autenticado',
          'integração do usuário com a sessão autenticada'
        ]
      },
      {
        subtitle: 'Busca',
        paragraphs: [
          'A busca será implementada com comportamento funcional básico, porém sem pesquisa real em todo o sistema.',
          'O escopo contempla:'
        ],
        items: [
          'campo digitável',
          'controle de estado da pesquisa',
          'estrutura preparada para integração futura',
          'retorno mocado apenas para o módulo de referência',
          'navegação para o módulo de referência ao selecionar o resultado disponível'
        ]
      },
      {
        subtitle: 'Nomenclaturas da Busca',
        paragraphs: [
          'Será utilizado um nome fictício para o módulo de referência utilizado durante demonstração do comportamento.'
        ]
      },
      {
        subtitle: 'Ícones de ação',
        paragraphs: [
          'Os ícones presentes no header serão implementados de forma mocada.',
          'O escopo contempla:'
        ],
        items: [
          'exibição visual dos ícones',
          'estados visuais básicos',
          'indicadores mocados quando aplicável',
          'estrutura preparada para futura integração funcional'
        ]
      },
      {
        subtitle: 'Limites Funcionais dos Ícones',
        paragraphs: [
          'Não contempla implementação real de notificações, mensagens, tarefas ou outros fluxos definitivos relacionados aos ícones.'
        ]
      },
      {
        subtitle: 'Usuário autenticado',
        paragraphs: [
          'O componente de usuário autenticado deverá ser funcional dentro do contexto da autenticação implementada.',
          'O escopo contempla:'
        ],
        items: [
          'exibição do nome do usuário autenticado',
          'exibição de informações complementares do usuário',
          'integração com sessão autenticada',
          'comportamento de dropdown/menu do usuário quando aplicável',
          'opção de logout',
          'limpeza da sessão autenticada',
          'redirecionamento para o fluxo de autenticação após logout'
        ]
      },
      {
        subtitle: 'Dashboard inicial',
        paragraphs: [
          'O dashboard apresentado no Figma será utilizado como referência visual para implementação da tela inicial da aplicação.',
          'O escopo contempla a implementação visual completa da estrutura do dashboard, incluindo:'
        ],
        items: [
          'cards informativos',
          'indicadores resumidos',
          'gráficos',
          'tabelas',
          'listagens',
          'blocos de mensagens',
          'widgets',
          'composição visual geral da tela',
          'organização responsiva dos elementos',
          'estados visuais compatíveis com o layout definido'
        ]
      },
      {
        subtitle: 'Mocks do Dashboard',
        paragraphs: [
          'Os dados apresentados no dashboard serão implementados de forma mocada, apenas para demonstração visual e validação da arquitetura frontend.',
          'O escopo não contempla:'
        ],
        items: [
          'regras reais de negócio',
          'cálculos financeiros reais',
          'dashboards analíticos definitivos',
          'integração real com métricas do ERP',
          'atualização em tempo real',
          'consolidação real de dados'
        ]
      },
      {
        subtitle: 'Especificações Visuais dos Gráficos',
        paragraphs: [
          'Os gráficos serão implementados utilizando a biblioteca definida durante o desenvolvimento do projeto.',
          'A aparência final dos gráficos poderá variar parcialmente em relação ao Figma, dependendo das limitações, comportamento e características visuais da biblioteca escolhida, mantendo a proposta estrutural e visual geral apresentada no design.'
        ]
      }
    ]
  },
  {
    id: 'rbac',
    title: 'RBAC & Permissões',
    icon: Sliders,
    descriptionParagraphs: [
      'O escopo contempla a implementação da estrutura base de controle de acesso da aplicação, considerando um modelo granular de permissões baseado nas regras existentes do ERP atual.',
      'A estrutura deverá permitir controle visual e funcional da aplicação com base nas permissões retornadas pela API.',
      'O modelo deverá ser preparado para suportar crescimento contínuo da aplicação e expansão futura das regras de acesso.'
    ],
    details: [
      {
        subtitle: 'Estrutura de permissões',
        paragraphs: ['O escopo contempla:'],
        items: [
          'estrutura de roles/perfis',
          'estrutura de permissões por usuário',
          'estrutura de permissões por rotina',
          'estrutura de permissões por ação',
          'organização centralizada das permissões',
          'persistência das permissões na sessão autenticada',
          'disponibilização das permissões para toda a aplicação'
        ]
      },
      {
        subtitle: 'Permissões granulares',
        paragraphs: [
          'A estrutura deverá suportar permissões granulares por funcionalidade, incluindo ações como:'
        ],
        items: [
          'acessar',
          'visualizar',
          'inserir',
          'editar',
          'excluir',
          'exportar',
          'imprimir'
        ],
        footerParagraphs: [
          'e outras ações equivalentes existentes no ERP.'
        ]
      },
      {
        subtitle: 'Controle de acesso visual e funcional',
        paragraphs: ['O escopo contempla:'],
        items: [
          'bloqueio de rotas sem permissão',
          'bloqueio de funcionalidades sem permissão',
          'ocultação de elementos sem acesso',
          'desabilitação de ações sem permissão',
          'proteção de componentes',
          'proteção de páginas',
          'proteção de ações críticas',
          'controle de renderização baseado em permissão'
        ]
      },
      {
        subtitle: 'Guards e helpers',
        paragraphs: ['O escopo contempla:'],
        items: [
          'guards de rota',
          'guards de componente',
          'hooks reutilizáveis de validação de acesso',
          'helpers reutilizáveis de permissão',
          'estrutura preparada para reutilização em toda a aplicação'
        ]
      },
      {
        subtitle: 'Integração com API de Permissões',
        paragraphs: [
          'A estrutura deverá ser preparada para integração com o endpoint de permissões definido pela API.',
          'Durante o desenvolvimento, poderá ser utilizada estrutura mocada para simulação das permissões enquanto os endpoints reais não estiverem disponíveis.'
        ]
      },
      {
        subtitle: 'Objetivo da implementação de Permissões',
        paragraphs: [
          'A implementação do RBAC terá como objetivo criar uma base reutilizável, escalável e preparada para continuidade futura da plataforma, sem limitar a evolução das regras de negócio do ERP.'
        ]
      }
    ]
  },
  {
    id: 'customizacoes',
    title: 'Customizações',
    icon: Database,
    descriptionParagraphs: [
      'O escopo contempla a implementação da estrutura base necessária para suportar customizações específicas por cliente.',
      'A estrutura deverá ser preparada para evolução contínua do sistema sem necessidade de criação de regras isoladas e hardcodes espalhados pela aplicação.'
    ],
    details: [
      {
        subtitle: 'Customizações por cliente',
        paragraphs: ['O escopo contempla:'],
        items: [
          'estrutura para regras específicas por cliente',
          'separação entre regra global e regra customizada',
          'estrutura preparada para múltiplos comportamentos específicos',
          'organização preparada para evitar acoplamentos indevidos',
          'estratégia para evitar hardcodes espalhados pela aplicação',
          'helpers reutilizáveis para validação de customizações',
          'estrutura centralizada para consulta de configurações do cliente',
          'preparação para recebimento das customizações via API'
        ]
      },
      {
        subtitle: 'Helpers e reutilização',
        paragraphs: ['O escopo contempla:'],
        items: [
          'helpers reutilizáveis',
          'hooks reutilizáveis',
          'estrutura centralizada de validação',
          'reaproveitamento das regras em múltiplos módulos'
        ]
      },
      {
        subtitle: 'Integração das Customizações com a API',
        paragraphs: [
          'As customizações deverão ser preparadas para integração com a API existente.',
          'Durante o desenvolvimento, poderão ser utilizadas estruturas mocadas enquanto os endpoints reais não estiverem disponíveis.'
        ]
      }
    ]
  },
  {
    id: 'integracao',
    title: 'Integração API',
    icon: Terminal,
    descriptionParagraphs: [
      'O escopo contempla a estruturação da camada de integração da aplicação frontend com a API existente do ERP.',
      'A implementação deverá ser preparada para crescimento contínuo da aplicação, organização por domínio e evolução futura da API.'
    ],
    details: [
      {
        subtitle: 'Estrutura de integração',
        paragraphs: ['O escopo contempla:'],
        items: [
          'client HTTP padronizado',
          'padronização de chamadas',
          'organização de serviços por domínio',
          'estrutura reutilizável de integração',
          'separação entre integração e interface visual',
          'padronização de requests',
          'padronização de responses'
        ]
      },
      {
        subtitle: 'Desenvolvimento com mocks',
        paragraphs: [
          'Durante o desenvolvimento, poderão ser utilizados endpoints mocados quando os endpoints reais ainda não estiverem disponíveis ou concluídos pela equipe responsável pela API.',
          'A estrutura deverá permitir substituição progressiva dos mocks pelas integrações reais sem necessidade de reestruturação da aplicação.'
        ]
      },
      {
        subtitle: 'Limites do escopo de Integração',
        paragraphs: ['O escopo não contempla:'],
        items: [
          'desenvolvimento da API',
          'manutenção do backend existente',
          'alterações em Delphi',
          'criação de infraestrutura backend',
          'criação de banco de dados',
          'responsabilidade sobre regras de negócio do backend'
        ]
      }
    ]
  },
  {
    id: 'modulo-referencia',
    title: 'Módulo de Referência',
    icon: Puzzle,
    descriptionParagraphs: [
      'O escopo contempla a implementação de um módulo funcional de referência, utilizado como base prática para validação da arquitetura frontend, componentes, integração, autenticação, permissões e customizações.',
      'O módulo terá como objetivo servir como modelo estrutural para continuidade do desenvolvimento da aplicação pela equipe interna.'
    ],
    details: [
      {
        subtitle: 'Estrutura do módulo',
        paragraphs: ['O módulo deverá contemplar:'],
        items: [
          'listagem de registros',
          'visualização de registros',
          'criação de registros',
          'edição de registros',
          'exclusão de registros',
          'fluxo completo de CRUD',
          'navegação integrada ao layout principal',
          'integração com autenticação',
          'integração com permissões',
          'integração com customizações'
        ]
      },
      {
        subtitle: 'Funcionalidades previstas',
        paragraphs: ['O escopo contempla:'],
        items: [
          'filtros',
          'busca',
          'paginação',
          'validação de formulários',
          'loading states',
          'error states',
          'empty states',
          'feedbacks visuais',
          'estados de sucesso e erro'
        ]
      },
      {
        subtitle: 'Persistência',
        paragraphs: [
          'O módulo de referência utilizará persistência mocada/local para demonstração completa do fluxo funcional, sem dependência de backend, banco de dados ou endpoints reais.',
          'Essa persistência faz parte do próprio objetivo do módulo: servir como referência técnica isolada para arquitetura, componentes, formulários, validações, listagem, filtros, permissões e fluxo de CRUD.',
          'O módulo de referência não será integrado a endpoints reais da API e não representa uma funcionalidade definitiva do ERP.'
        ]
      },
      {
        subtitle: 'Objetivo do módulo',
        paragraphs: ['O módulo de referência terá como objetivo:'],
        items: [
          'validar a arquitetura proposta',
          'validar os padrões definidos',
          'demonstrar o fluxo completo da aplicação',
          'servir como referência para novos módulos',
          'servir como base de continuidade para a equipe interna'
        ]
      }
    ]
  },
  {
    id: 'documentacao',
    title: 'Doc & Handoff',
    icon: BookOpen,
    descriptionParagraphs: [
      'O escopo contempla a criação da documentação técnica necessária para continuidade do projeto pela equipe interna.',
      'A documentação deverá possuir caráter técnico e estrutural, visando facilitar manutenção, expansão e continuidade da aplicação.'
    ],
    details: [
      {
        subtitle: 'Documentação prevista',
        paragraphs: ['O escopo contempla:'],
        items: [
          'documentação da arquitetura',
          'documentação da estrutura do projeto',
          'documentação dos padrões definidos',
          'documentação das estratégias utilizadas',
          'documentação dos fluxos principais',
          'documentação das estruturas reutilizáveis',
          'guia para criação de novas funcionalidades',
          'guia para continuidade do desenvolvimento'
        ]
      },
      {
        subtitle: 'Alinhamento técnico',
        paragraphs: ['O escopo contempla:'],
        items: [
          'reuniões técnicas de alinhamento',
          'transferência de conhecimento',
          'orientação sobre continuidade do projeto',
          'explicação da arquitetura implementada'
        ]
      },
      {
        subtitle: 'Objetivo de Handoff',
        paragraphs: [
          'A documentação e alinhamento técnico terão como objetivo garantir que a equipe interna consiga evoluir a aplicação após a conclusão do escopo contratado.'
        ]
      }
    ]
  }
];

export default function DetailsPage() {
  const [activeTab, setActiveTab] = useState<'escopo' | 'cronograma' | 'diretrizes'>('escopo');
  const [activeEscopoSection, setActiveEscopoSection] = useState<string>('arquitetura');
  const [expandedCheckpoint, setExpandedCheckpoint] = useState<string | null>('checkpoint-1');

  const selectedSectionData = escopoSections.find((s) => s.id === activeEscopoSection) || escopoSections[0];

  return (
    <main className="min-h-screen bg-[#05070d] text-slate-100 font-sans pb-24 overflow-x-hidden">
      {/* Background Glows */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.5' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} />
        <div className="absolute left-1/2 top-0 h-[480px] w-[600px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[130px]" />
        <div className="absolute right-[-150px] top-[300px] h-[400px] w-[400px] rounded-full bg-blue-700/10 blur-[120px]" />
        <div className="absolute bottom-[-150px] left-[-100px] h-[500px] w-[500px] rounded-full bg-slate-500/5 blur-[150px]" />
      </div>

      {/* Header */}
      <header className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-6 py-8 sm:flex-row sm:justify-between md:px-10 border-b border-white/5">
        <div className="flex items-center gap-4">
          <a
            href="#/"
            className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-3.5 py-2 text-sm font-medium text-slate-300 transition-colors hover:bg-white/[0.08] hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" /> Voltar ao Início
          </a>
        </div>

        <div className="flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-slate-300">
          <div className="flex items-center gap-2">
            <img src={logoTrs} alt="TRS Sistemas" className="h-5 w-auto opacity-90" />
          </div>
          <span className="text-slate-600">×</span>
          <div className="flex items-center gap-2">
            <img src={rcWhite} alt="Resolute Code" className="h-4 w-auto opacity-90" />
          </div>
        </div>
      </header>

      {/* Title & Introduction */}
      <section className="mx-auto max-w-4xl px-6 pt-12 pb-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-300/25 bg-cyan-300/10 px-4 py-1.5 text-xs font-semibold text-cyan-200 tracking-wider uppercase"
        >
          <Sparkles className="h-3.5 w-3.5" /> Detalhamento da Proposta
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl font-bold tracking-tight text-white md:text-5xl"
        >
          Escopo Técnico & Cronograma
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-4 text-base leading-7 text-slate-300 max-w-2xl mx-auto"
        >
          Explore em detalhes a divisão estrutural de cada uma das entregas previstas no projeto e a composição exata da fundação arquitetural proposta para a nova plataforma web da TRS.
        </motion.p>
      </section>

      {/* Primary Tab Navigation */}
      <section className="mx-auto max-w-2xl px-6 mb-12">
        <div className="flex rounded-full border border-white/10 bg-white/[0.02] p-1.5 backdrop-blur-sm relative">
          {(['escopo', 'cronograma', 'diretrizes'] as const).map((tab) => {
            const isActive = activeTab === tab;
            const labels = {
              escopo: 'Escopo Detalhado',
              cronograma: 'Cronograma de Entregas',
              diretrizes: 'Termos & Investimento'
            };
            return (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex-1 text-center py-2.5 rounded-full text-xs md:text-sm font-semibold transition-all relative z-10 ${
                  isActive ? 'text-slate-900' : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="active-tab-indicator"
                    className="absolute inset-0 bg-white rounded-full -z-10 shadow-md shadow-black/10"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                {labels[tab]}
              </button>
            );
          })}
        </div>
      </section>

      {/* Tabs Contents */}
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <AnimatePresence mode="wait">
          {activeTab === 'cronograma' && (
            <motion.div
              key="cronograma"
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={stagger}
              className="max-w-4xl mx-auto"
            >
              {/* Cronograma Summary Card */}
              <motion.div variants={fadeUp} className="mb-12 rounded-3xl border border-white/10 bg-white/[0.02] p-6 backdrop-blur-md">
                <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                  <div className="flex items-center gap-4">
                    <div className="rounded-2xl bg-white/[0.04] border border-white/5 p-3 text-cyan-300">
                      <Clock className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white text-lg">Prazo Total Estimado</h3>
                      <p className="text-sm text-slate-400">Tempo planejado para conclusão e handoff total do projeto</p>
                    </div>
                  </div>
                  <div className="text-left md:text-right">
                    <p className="text-3xl font-bold text-white">Até 75 <span className="text-lg font-medium text-slate-300">Dias Úteis</span></p>
                    <p className="text-xs text-cyan-200/80 mt-1">Divididos em 4 Checkpoints + Entrega Final</p>
                  </div>
                </div>
              </motion.div>

              {/* Checkpoints Timeline Intro */}
              <motion.div variants={fadeUp} className="mb-8 rounded-3xl border border-white/5 bg-white/[0.01] p-6 text-slate-300 space-y-4">
                <p className="text-base leading-relaxed">
                  O cronograma abaixo representa os principais checkpoints previstos para validação da evolução do projeto.
                </p>
                <p className="text-base leading-relaxed">
                  Os checkpoints foram estruturados com foco em entregas navegáveis e visualmente demonstráveis, permitindo acompanhamento contínuo da evolução da aplicação.
                </p>
              </motion.div>

              {/* Checkpoints Timeline */}
              <div className="relative pl-6 md:pl-12 border-l border-white/10 space-y-10">
                {checkpoints.map((cp) => {
                  const isExpanded = expandedCheckpoint === cp.id;
                  const Icon = cp.icon;

                  return (
                    <motion.div
                      key={cp.id}
                      variants={fadeUp}
                      className="relative"
                    >
                      {/* Timeline Dot & Line Connectors */}
                      <span className="absolute -left-[31px] md:-left-[55px] top-1 flex h-10 w-10 items-center justify-center rounded-full bg-[#05070d] border border-white/10 text-cyan-300 shadow-xl">
                        <span className={`absolute inset-0.5 rounded-full bg-gradient-to-r ${cp.color} opacity-10`} />
                        <Icon className="h-4 w-4 relative z-10" />
                      </span>

                      <div className={`rounded-3xl border border-white/5 bg-white/[0.02] shadow-2xl transition-all duration-300 ${
                        isExpanded ? 'border-cyan-400/30 bg-white/[0.04]' : 'hover:border-white/10 hover:bg-white/[0.03]'
                      }`}>
                        {/* Checkpoint Title Header */}
                        <div
                          onClick={() => setExpandedCheckpoint(isExpanded ? null : cp.id)}
                          className="flex items-center justify-between p-6 cursor-pointer select-none"
                        >
                          <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
                            <span className={`text-xs font-bold uppercase px-3 py-1 rounded-full bg-gradient-to-r ${cp.color} text-white tracking-wider`}>
                              CP {cp.number}
                            </span>
                            <div>
                              <h3 className="text-lg font-bold text-white leading-snug">{cp.title}</h3>
                              <p className="text-xs text-slate-400 mt-0.5">{cp.subtitle}</p>
                            </div>
                          </div>
                          
                          <div className="flex items-center gap-4 shrink-0 pl-4">
                            <span className="hidden sm:inline-block text-xs font-medium text-slate-500 bg-white/5 px-2.5 py-1 rounded-md border border-white/5">
                              {cp.duration}
                            </span>
                            <motion.span
                              animate={{ rotate: isExpanded ? 180 : 0 }}
                              transition={{ duration: 0.2 }}
                              className="text-slate-400"
                            >
                              <ChevronDown className="h-5 w-5" />
                            </motion.span>
                          </div>
                        </div>

                        {/* Collapsible Deliverables Area */}
                        <AnimatePresence initial={false}>
                          {isExpanded && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1, transition: { height: { duration: 0.25 }, opacity: { duration: 0.2 } } }}
                              exit={{ height: 0, opacity: 0, transition: { height: { duration: 0.2 }, opacity: { duration: 0.15 } } }}
                              className="overflow-hidden border-t border-white/5 bg-black/10"
                            >
                              <div className="p-6">
                                <h4 className="text-xs font-bold text-cyan-300 uppercase tracking-widest mb-4">
                                  Entregas Previstas & Atividades
                                </h4>
                                <div className="grid gap-3.5 md:grid-cols-2">
                                  {cp.deliverables.map((item, dIdx) => (
                                    <div key={dIdx} className="flex gap-3 bg-white/[0.01] border border-white/5 rounded-2xl p-3.5">
                                      <CheckCircle2 className="h-4.5 w-4.5 shrink-0 text-cyan-400 mt-0.5" />
                                      <p className="text-sm text-slate-300 leading-relaxed">{item}</p>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          )}

          {activeTab === 'escopo' && (
            <motion.div
              key="escopo"
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={stagger}
              className="grid gap-8 lg:grid-cols-[280px_1fr]"
            >
              {/* Escopo Sidebar Selector */}
              <motion.div variants={fadeUp} className="space-y-2 lg:sticky lg:top-8 h-fit">
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest px-3 mb-4">
                  Pilares de Escopo
                </p>
                {escopoSections.map((sect) => {
                  const isActive = activeEscopoSection === sect.id;
                  const Icon = sect.icon;
                  return (
                    <button
                      key={sect.id}
                      onClick={() => setActiveEscopoSection(sect.id)}
                      className={`w-full flex items-center gap-3.5 px-4 py-3 rounded-2xl text-sm font-semibold transition-all text-left ${
                        isActive
                          ? 'bg-white/[0.06] text-white border border-white/10 shadow-inner'
                          : 'text-slate-400 hover:text-slate-200 hover:bg-white/[0.02] border border-transparent'
                      }`}
                    >
                      <Icon className={`h-4.5 w-4.5 shrink-0 ${isActive ? 'text-white' : 'text-slate-500'}`} />
                      {sect.title}
                    </button>
                  );
                })}
              </motion.div>

              {/* Escopo Content Panel */}
              <motion.div variants={fadeUp} className="space-y-6">
                <div className="rounded-3xl border border-white/5 bg-white/[0.02] p-8 shadow-2xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 -translate-y-8 translate-x-8 h-48 w-48 rounded-full bg-cyan-500/5 blur-3xl pointer-events-none" />

                  {/* Section Title */}
                  <div className="flex items-center gap-4 pb-6 border-b border-white/5 mb-6">
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-300 shadow-inner">
                      {React.createElement(selectedSectionData.icon, { className: "h-5 w-5" })}
                    </span>
                    <div>
                      <h2 className="text-2xl font-bold text-white">{selectedSectionData.title}</h2>
                      <p className="text-xs text-slate-400 mt-0.5">Visão detalhada do pilar técnico</p>
                    </div>
                  </div>

                  {/* Description Paragraphs */}
                  {selectedSectionData.descriptionParagraphs.map((para, idx) => (
                    <p key={idx} className="text-base leading-7 text-slate-300 mb-4 bg-white/[0.01] border border-white/5 p-4 rounded-2xl last:mb-6">
                      {para}
                    </p>
                  ))}

                  {/* Section List Items */}
                  {selectedSectionData.listItems && selectedSectionData.listItems.length > 0 && (
                    <div className="grid gap-3 sm:grid-cols-2 mb-8">
                      {selectedSectionData.listItems.map((item, idx) => (
                        <div key={idx} className="flex gap-3 bg-[#080b12] border border-white/5 rounded-2xl p-4 transition-colors hover:border-white/10">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />
                          <p className="text-sm leading-6 text-slate-300">{item}</p>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Subsections list */}
                  <div className="space-y-8 border-t border-white/5 pt-8">
                    {selectedSectionData.details.map((detail, index) => (
                      <div key={index} className="space-y-4">
                        {detail.subtitle && (
                          <h3 className="text-sm font-bold uppercase tracking-wider text-cyan-300 border-b border-cyan-300/10 pb-2">
                            {detail.subtitle}
                          </h3>
                        )}

                        {detail.paragraphs && detail.paragraphs.map((para, pIdx) => (
                          <p key={pIdx} className="text-sm text-slate-400 leading-relaxed pl-1">
                            {para}
                          </p>
                        ))}

                        {detail.items && detail.items.length > 0 && (
                          <div className="grid gap-3 sm:grid-cols-2">
                            {detail.items.map((item, itIdx) => (
                              <div key={itIdx} className="flex gap-3 bg-[#080b12] border border-white/5 rounded-2xl p-4 transition-colors hover:border-white/10">
                                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />
                                <p className="text-sm leading-6 text-slate-300">{item}</p>
                              </div>
                            ))}
                          </div>
                        )}

                        {detail.footerParagraphs && detail.footerParagraphs.map((para, fpIdx) => (
                          <p key={fpIdx} className="text-sm text-slate-400 leading-relaxed pl-1 mt-2">
                            {para}
                          </p>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}

          {activeTab === 'diretrizes' && (
            <motion.div
              key="diretrizes"
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={stagger}
              className="space-y-10 max-w-5xl mx-auto"
            >
              {/* Financial Cards Grid */}
              <motion.div variants={fadeUp} className="grid gap-6 md:grid-cols-3">
                <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-6 shadow-xl backdrop-blur relative overflow-hidden">
                  <div className="absolute top-0 right-0 -translate-y-4 translate-x-4 h-24 w-24 rounded-full bg-white/5 blur-xl" />
                  <span className="inline-flex rounded-xl bg-white/[0.04] border border-white/5 p-2.5 text-cyan-300 mb-4">
                    <Coins className="h-5 w-5" />
                  </span>
                  <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest">Valor do Projeto Fechado</p>
                  <p className="text-3xl font-bold text-white mt-2">R$ 42.000,00</p>
                  <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                    Valor total fixado cobrindo o desenvolvimento completo da base arquitetural, CRUD funcional e documentações descritas no escopo.
                  </p>
                </div>

                <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-6 shadow-xl backdrop-blur relative overflow-hidden">
                  <div className="absolute top-0 right-0 -translate-y-4 translate-x-4 h-24 w-24 rounded-full bg-blue-500/5 blur-xl" />
                  <span className="inline-flex rounded-xl bg-blue-500/10 p-2.5 text-blue-300 mb-4">
                    <Clock className="h-5 w-5" />
                  </span>
                  <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest">Parceria de Consultoria</p>
                  <p className="text-3xl font-bold text-white mt-2">R$ 180<span className="text-sm font-normal text-slate-400"> / hora</span></p>
                  <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                    Modelo de apoio contínuo assíncrono cobrado mensalmente, com carga semanal mínima de 10h e máxima de 35h sob demanda da TRS.
                  </p>
                </div>

                <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-6 shadow-xl backdrop-blur relative overflow-hidden">
                  <div className="absolute top-0 right-0 -translate-y-4 translate-x-4 h-24 w-24 rounded-full bg-indigo-500/5 blur-xl" />
                  <span className="inline-flex rounded-xl bg-indigo-500/10 p-2.5 text-indigo-300 mb-4">
                    <Calendar className="h-5 w-5" />
                  </span>
                  <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest">Condições de Pagamento</p>
                  <p className="text-3xl font-bold text-white mt-2">30% <span className="text-base font-normal text-slate-400">Início</span></p>
                  <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                    Sendo 30% como sinal na aprovação do projeto, saldo parcelado ao longo do desenvolvimento e quitação na entrega final.
                  </p>
                </div>
              </motion.div>

              {/* Responsibilities & Limits */}
              <motion.div variants={fadeUp} className="grid gap-6 lg:grid-cols-2">
                {/* Limites do escopo */}
                <div className="rounded-3xl border border-white/5 bg-white/[0.02] p-8">
                  <div className="flex items-center gap-3.5 pb-5 border-b border-white/5 mb-6">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-rose-500/10 text-rose-300 shadow-inner">
                      <ShieldAlert className="h-5 w-5" />
                    </span>
                    <div>
                      <h3 className="text-lg font-bold text-white">Limitações de Escopo</h3>
                      <p className="text-xs text-slate-500">O que explicitamente NÃO está incluso nesta proposta</p>
                    </div>
                  </div>

                  <div className="space-y-3.5">
                    {[
                      'Desenvolvimento, manutenção ou otimização de APIs e rotinas no backend (Delphi, C#, etc.)',
                      'Configuração ou gestão de servidores de banco de dados e infraestrutura corporativa na nuvem',
                      'Desenvolvimento de funcionalidades de telas do ERP além do cadastro de Módulo de Referência funcional de gabarito',
                      'Suporte sob regime de plantão de emergência (SLA) de tempo real assíncrono',
                      'Atividades que fiquem travadas por indisponibilidade de endpoints por parte do time técnico da TRS'
                    ].map((item, idx) => (
                      <div key={idx} className="flex gap-3 bg-black/25 border border-white/5 rounded-2xl p-4">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-rose-400" />
                        <p className="text-sm leading-relaxed text-slate-300">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Forma de trabalho */}
                <div className="rounded-3xl border border-white/5 bg-white/[0.02] p-8">
                  <div className="flex items-center gap-3.5 pb-5 border-b border-white/5 mb-6">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-300 shadow-inner">
                      <Users className="h-5 w-5" />
                    </span>
                    <div>
                      <h3 className="text-lg font-bold text-white">Forma de Trabalho</h3>
                      <p className="text-xs text-slate-500">Como a parceria e comunicação serão operacionalizadas</p>
                    </div>
                  </div>

                  <div className="space-y-3.5">
                    {[
                      'Atuação assíncrona focada em entregas navegáveis de alto valor de UI e arquitetura',
                      'Canal de comunicação aberto no WhatsApp para esclarecimentos diários e dúvidas rápidas',
                      'Reuniões de checkpoint semanais ou síncronas rápidas quando o cenário técnico exigir',
                      'Entrega de código 100% documentado através de commits organizados e branches explicadas',
                      'Handoff final de código e repasse direto com o programador responsável por assumir a plataforma'
                    ].map((item, idx) => (
                      <div key={idx} className="flex gap-3 bg-[#080b12] border border-white/5 rounded-2xl p-4">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />
                        <p className="text-sm leading-relaxed text-slate-300">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Footer Closing */}
      <section className="mx-auto max-w-4xl px-6 mt-20 pt-10 border-t border-white/5 text-center">
        <ResoluteLogo />
        <p className="mt-4 text-xs text-slate-500">
          Proposta Desenvolvida por Ramon Campos - Resolute Code &copy; 2026. Todos os direitos reservados.
        </p>
      </section>
    </main>
  );
}

function ResoluteLogo() {
  return (
    <div className="flex items-center justify-center gap-4">
      <img src={rc} alt="Resolute Code Logo" className="h-10 w-auto shrink-0" />
      <div className="h-8 w-px bg-white/10" />
      <div className="text-left">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white">
          Resolute Code
        </p>
        <p className="text-xs text-slate-400">Ramon Campos</p>
      </div>
    </div>
  );
}
