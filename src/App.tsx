import React from 'react';
import { motion } from "framer-motion";
import logoTrs from './assets/logo-trs-white.png';
import rcWhite from './assets/rc-white.svg';
import rc from './assets/rc.svg';
import DetailsPage from './DetailsPage';
import {
  ArrowUpRight,
  Blocks,
  Check,
  Code2,
  FileText,
  GitBranch,
  KeyRound,
  Layers3,
  LockKeyhole,
  MessageCircle,
  Puzzle,
  Repeat2,
  ShieldCheck,
  Sparkles,
  Users,
  Workflow,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const suggestedStack = [
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "React Query",
  "React Hook Form",
  "Zod",
  "Biome",
  "Framer Motion",
];

const pillars = [
  {
    icon: Layers3,
    title: "Arquitetura frontend modular",
    text: "Estrutura pensada para crescer com o produto, separando responsabilidades por domínio, fluxo e contexto de uso.",
  },
  {
    icon: KeyRound,
    title: "Autenticação e autorização",
    text: "Definição e implementação da base de autenticação, RBAC, permissões e regras de acesso por perfil.",
  },
  {
    icon: Puzzle,
    title: "Planos e customizações",
    text: "Estrutura para lidar com funcionalidades por plano e comportamentos específicos por cliente sem transformar o frontend em um ninho de ifs.",
  },
  {
    icon: FileText,
    title: "Documentação técnica útil",
    text: "Documentação prática para o time entender decisões, padrões, estrutura do projeto e como evoluir sem depender de adivinhação.",
  },
];

const continuousWorkItems = [
  "Criação do projeto frontend web do zero",
  "Definição da arquitetura base e dos padrões de desenvolvimento",
  "Implementação das primeiras features estratégicas",
  "Estruturação de autenticação, RBAC, planos e customizações",
  "Apoio técnico assíncrono ao time durante a evolução",
  "Revisão de decisões técnicas importantes",
  "Documentação e alinhamento com o desenvolvedor responsável pela continuidade",
  "Reuniões semanais e reuniões pontuais conforme necessidade e disponibilidade",
];

const fixedScopeSummaryItems = [
  "Arquitetura frontend completa para a nova plataforma web",
  "Componentes base reutilizáveis, sem Storybook ou estrutura corporativa excessiva",
  "Autenticação via JWT, com proteção de rotas e sessão autenticada",
  "RBAC granular por rotina e ação",
  "Estrutura para customizações por cliente",
  "Client HTTP padronizado e integração preparada para API real",
  "Módulo de referência (CRUD modelo) funcional com dados mocados",
  "Documentação técnica para continuidade do time",
  "Alinhamentos técnicos durante o projeto",
];

const fixedScopeGroups = [
  {
    title: "Arquitetura frontend",
    items: [
      "Definição da arquitetura principal da aplicação",
      "Separação entre UI, serviços, regras e integração",
      "Padronização de consumo da API",
      "Padronização de formulários",
      "Padronização de tratamento de erro",
      "Padronização de loading e estados vazios",
      "Estratégia de modularização",
      "Estrutura preparada para crescimento contínuo",
    ],
  },
  {
    title: "Componentes base",
    items: [
      "Botões, inputs, selects, checkbox e radio",
      "Modal/Dialog, tabs, cards e feedbacks visuais",
      "Tabelas, paginação e estados de loading",
      "Estados vazios e layout base interno",
      "Base reutilizável e padronizada, sem Storybook",
    ],
  },
  {
    title: "Autenticação",
    items: [
      "Implementação do fluxo de autenticação via JWT",
      "Login, logout e persistência segura da sessão",
      "Proteção de rotas privadas",
      "Tratamento de sessão expirada",
      "Estrutura de usuário autenticado",
      "Integração com API de autenticação",
    ],
  },
  {
    title: "RBAC e permissões",
    items: [
      "Estrutura base de roles/perfis e permissões",
      "Permissões granulares por rotina e ação",
      "Guards de rota e guards de componente",
      "Controle visual e funcional baseado em permissão",
      "Helpers/hooks reutilizáveis para validação de acesso",
      "Documentação do modelo de permissões",
    ],
  },
  {
    title: "Customizações",
    items: [
      "Controle de acesso por feature",
      "Helpers/hooks de feature access",
      "Estrutura para customizações específicas por cliente",
      "Separação entre regra global e cliente",
      "Estratégia para evitar hardcodes espalhados",
    ],
  },
  {
    title: "Integração com API",
    items: [
      "Client HTTP padronizado",
      "Tratamento centralizado de erro",
      "Organização de serviços por domínio",
      "Tipagem de requests/responses",
      "Desenvolvimento com endpoints mocados quando a API real não estiver disponível",
      "Integração com endpoints definidos no projeto quando disponíveis",
    ],
  },
  {
    title: "Módulo de referência",
    items: [
      "CRUD funcional de referência, sem dependência de backend real",
      "Listagem, criação, edição, exclusão e visualização",
      "Persistência mocada para demonstrar o fluxo completo",
      "Busca, filtros e paginação quando aplicável",
      "Validação de formulário, loading, erro e empty state",
      "Aplicação prática de RBAC, planos e customizações",
    ],
  },
  {
    title: "Documentação e alinhamento",
    items: [
      "Documentação da arquitetura",
      "Documentação da estrutura do projeto",
      "Documentação dos padrões definidos",
      "Guia para criação de novas funcionalidades",
      "Guia de continuidade para o time",
      "Reuniões técnicas de alinhamento e transferência de conhecimento",
    ],
  },
];

const scopeLimits = [
  "Não inclui implementação de funcionalidades reais específicas do ERP além do módulo de referência definido no escopo",
  "Não inclui manutenção, alteração ou evolução do sistema desktop atual",
  "Não inclui alterações diretas na API existente, exceto alinhamentos necessários para integração frontend",
  "Não inclui responsabilidade por infraestrutura, hospedagem, servidores ou pipelines existentes",
  "Não inclui gestão operacional do time interno",
  "Não inclui suporte em tempo real, plantão ou SLA de resposta imediata",
  "Não inclui garantia de prazo sobre atividades dependentes da entrega ou ajuste de endpoints pela equipe da TRS",
  "Não substitui contrato jurídico, que deve ser formalizado caso a parceria avance",
];

const responsibilities = [
  "Decisões técnicas bem documentadas",
  "Código base limpo, consistente e preparado para manutenção",
  "Comunicação assíncrona objetiva",
  "Atuação integrada ao time, sem burocracia desnecessária",
  "Construção orientada à continuidade do produto",
];

function SectionTitle({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      className="mx-auto max-w-3xl text-center"
    >
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.28em] text-cyan-300/80">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-semibold tracking-tight text-white md:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-5 text-base leading-7 text-slate-300 md:text-lg">
          {description}
        </p>
      ) : null}
    </motion.div>
  );
}

function Card({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div
      className={`rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-2xl shadow-black/20 backdrop-blur transition-colors hover:border-white/20 hover:bg-white/[0.08] ${className}`}
    >
      {children}
    </div>
  );
}

function ResoluteLogo() {
  return (
    <div className="flex items-center gap-4">
      <img src={rc} alt="Resolute Code Logo" className="h-10 w-auto shrink-0" />

      <div className="h-8 w-px bg-white/10" />

      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white">
          Resolute Code
        </p>
        <p className="text-xs text-slate-400">Ramon Campos</p>
      </div>
    </div>
  );
}

export default function App() {
  const [currentHash, setCurrentHash] = React.useState(window.location.hash);

  React.useEffect(() => {
    const handleHashChange = () => {
      setCurrentHash(window.location.hash);
      window.scrollTo(0, 0);
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  if (currentHash === '#/proposta-detalhada') {
    return <DetailsPage />;
  }

  return (
    <main className="min-h-screen overflow-hidden bg-[#05070d] text-slate-100 font-sans">
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.5' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} />
        <div className="absolute left-1/2 top-0 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-cyan-500/20 blur-[140px]" />
        <div className="absolute right-[-160px] top-[420px] h-[460px] w-[460px] rounded-full bg-blue-700/20 blur-[140px]" />
        <div className="absolute bottom-[-180px] left-[-120px] h-[500px] w-[500px] rounded-full bg-slate-500/10 blur-[150px]" />
      </div>

      <header className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-6 py-8 sm:flex-row sm:justify-between md:px-10">
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:gap-6">
          <ResoluteLogo />
          <a
            href="#/proposta-detalhada"
            className="text-sm font-medium text-cyan-300/80 hover:text-cyan-200 transition-colors border-b border-cyan-300/10 hover:border-cyan-300/30 pb-0.5"
          >
            Ver Escopo & Cronograma Completo
          </a>
        </div>
        <div className="flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-slate-300">
          <div className="flex items-center gap-2">
            <img 
              src={logoTrs} 
              alt="TRS Sistemas" 
              className="h-5 w-auto opacity-90" 
            />
          </div>
          <span className="text-slate-600">×</span>
          <div className="flex items-center gap-2">
            <img src={rcWhite} alt="Resolute Code" className="h-4 w-auto opacity-90" />
          </div>
        </div>
      </header>

      <section className="mx-auto grid max-w-7xl items-center gap-10 px-6 pb-16 pt-8 md:grid-cols-[1.05fr_0.95fr] md:px-10 md:pb-32 md:pt-20">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="max-w-3xl"
        >
          <motion.div
            variants={fadeUp}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm text-cyan-100"
          >
            <Sparkles className="h-4 w-4" />
            Proposta de parceria estratégica
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="text-5xl font-semibold tracking-tight text-white md:text-7xl"
          >
            Modernização gradual da <span className="text-cyan-200">plataforma TRS</span> para Web.
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-7 max-w-2xl text-lg leading-8 text-slate-300 md:text-xl"
          >
            Uma atuação integrada para construir a base frontend da nova plataforma web, com arquitetura sustentável, decisões técnicas bem documentadas e evolução contínua junto ao time da TRS.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-9 flex flex-wrap items-center gap-4 text-sm"
          >
            <a
              href="#/proposta-detalhada"
              className="inline-flex w-fit items-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-[#05070d] shadow-lg shadow-white/5 transition-all hover:bg-slate-100 hover:scale-105 hover:shadow-white/10"
            >
              Ver Escopo & Cronograma <ArrowUpRight className="h-4.5 w-4.5" />
            </a>

            <div className="flex flex-wrap items-center gap-2">
              {[
                "Migração gradual",
                "Frontend moderno",
                "Parceria contínua",
              ].map((item) => (
                <div
                  key={item}
                  className="inline-flex w-fit items-center rounded-full border border-white/10 bg-white/[0.04] px-5 py-2.5 font-medium text-slate-300 backdrop-blur-sm"
                >
                  {item}
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
        >
          <Card className="relative overflow-hidden !p-0">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-300/10 via-transparent to-blue-600/10" />
            <div className="relative p-7 md:p-9">
              <div className="mb-10 flex items-center justify-between">
                <div>
                  <p className="text-sm uppercase tracking-[0.25em] text-cyan-200/80">
                    Direção técnica
                  </p>
                  <p className="mt-2 text-2xl font-semibold text-white">
                    Frontend Web
                  </p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-black/20 p-3">
                  <Workflow className="h-6 w-6 text-cyan-200" />
                </div>
              </div>

              <div className="space-y-4">
                {[
                  ["01", "Base técnica", "Projeto criado do zero com padrões claros de estrutura, consumo de API e organização por domínio."],
                  ["02", "Controle de acesso", "Autenticação, RBAC, permissões, planos e customizações tratados como parte central da arquitetura."],
                  ["03", "Continuidade", "Documentação, alinhamento e transferência de conhecimento para o time evoluir sem depender de improviso."],
                ].map(([number, title, text]) => (
                  <div
                    key={number}
                    className="rounded-2xl border border-white/10 bg-black/20 p-5"
                  >
                    <div className="flex gap-4">
                      <span className="text-sm font-bold text-cyan-200">{number}</span>
                      <div>
                        <h3 className="font-semibold text-white">{title}</h3>
                        <p className="mt-2 text-sm leading-6 text-slate-300">{text}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </motion.div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.025] py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <SectionTitle
            eyebrow="Contexto"
            title="O desafio não é apenas criar telas novas."
            description="A TRS já possui um ecossistema maduro, com produto, clientes, regras de negócio e módulos consolidados. A migração para web precisa respeitar essa realidade: evoluir sem ruptura, validar por etapas e criar uma base técnica que suporte o crescimento do produto."
          />

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="mt-14 grid gap-5 md:grid-cols-3"
          >
            {[
              {
                icon: Repeat2,
                title: "Evolução gradual",
                text: "A nova plataforma web deve nascer em paralelo, permitindo validação progressiva com módulos, fluxos e clientes selecionados.",
              },
              {
                icon: Blocks,
                title: "Base reutilizável",
                text: "A arquitetura inicial precisa evitar retrabalho e permitir que novas áreas sejam implementadas com consistência.",
              },
              {
                icon: ShieldCheck,
                title: "Redução de risco",
                text: "Decisões técnicas documentadas reduzem dependência individual, improviso e custo de manutenção no longo prazo.",
              },
            ].map((item) => (
              <motion.div key={item.title} variants={fadeUp}>
                <Card className="h-full">
                  <div className="inline-flex rounded-2xl bg-cyan-500/10 p-3 shadow-inner shadow-cyan-500/20">
                    <item.icon className="h-6 w-6 text-cyan-300" />
                  </div>
                  <h3 className="mt-5 text-xl font-semibold text-white">{item.title}</h3>
                  <p className="mt-3 leading-7 text-slate-300">{item.text}</p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-32">
        <SectionTitle
          eyebrow="Estratégia"
          title="Construir a nova base web sem transformar a migração em aposta."
          description="A proposta é iniciar com uma fundação frontend sólida, pragmática e preparada para evolução. Sem burocracia desnecessária, sem reescrita agressiva e sem tentar resolver todo o produto de uma vez."
        />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-4"
        >
          {pillars.map((item) => (
            <motion.div key={item.title} variants={fadeUp}>
              <Card className="h-full">
                <div className="inline-flex rounded-2xl bg-cyan-500/10 p-3 shadow-inner shadow-cyan-500/20">
                  <item.icon className="h-6 w-6 text-cyan-300" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">{item.text}</p>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <section className="bg-gradient-to-b from-white/[0.03] to-transparent py-16 md:py-32">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55 }}
            >
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.28em] text-cyan-300/80">
                Modelo principal
              </p>
              <h2 className="text-3xl font-semibold tracking-tight text-white md:text-5xl">
                Parceria contínua, integrada ao time da TRS.
              </h2>
              <p className="mt-6 text-lg leading-8 text-slate-300">
                Este é o modelo recomendado para uma migração gradual, porque permite ajustar decisões técnicas conforme o projeto evolui, sem prender a TRS em um escopo artificial definido cedo demais.
              </p>

              <Card className="mt-8 border-cyan-300/20 bg-cyan-300/[0.06]">
                <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <p className="text-sm uppercase tracking-[0.22em] text-cyan-200/80">
                      Investimento
                    </p>
                    <p className="mt-3 text-5xl font-semibold text-white">
                      R$ 180<span className="text-lg font-normal text-slate-300">/hora</span>
                    </p>
                    <p className="mt-3 text-sm leading-6 text-slate-300">
                      Contratação mensal com carga semanal definida pela TRS.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-black/20 p-4 text-sm text-slate-300">
                    <p>Mínimo: 10h/semana</p>
                    <p>Máximo: 35h/semana</p>
                  </div>
                </div>
              </Card>
            </motion.div>

            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="grid gap-4"
            >
              {continuousWorkItems.map((item) => (
                <motion.div
                  key={item}
                  variants={fadeUp}
                  className="flex gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-4"
                >
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-cyan-200" />
                  <p className="leading-6 text-slate-300">{item}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-32">
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
          >
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.28em] text-cyan-300/80">
              Modelo alternativo
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-white md:text-5xl">
              Escopo fechado para construção da base frontend.
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-300">
              Para um modelo com escopo, valor e prazo definidos, a entrega proposta contempla a construção da fundação técnica da nova plataforma web, incluindo arquitetura, autenticação, permissões, planos, customizações, componentes base, documentação e um módulo de referência funcional.
            </p>
            <p className="mt-5 text-base leading-7 text-slate-400">
              Este modelo oferece previsibilidade comercial. Em contrapartida, exige delimitação clara do que será entregue e do que ficará fora do projeto, já que o risco técnico da estimativa passa a ser absorvido dentro do escopo fechado.
            </p>
          </motion.div>

          <Card className="border-cyan-300/20 bg-cyan-300/[0.06]">
            <div>
              <p className="text-sm uppercase tracking-[0.22em] text-cyan-200/80">
                Como será entregue
              </p>
              <h3 className="mt-3 text-3xl font-semibold tracking-tight text-white">
                Base técnica completa para evolução do frontend web.
              </h3>
              <p className="mt-4 text-sm leading-6 text-slate-300">
                O foco desta proposta é deixar claro exatamente o que será construído: arquitetura, padrões, autenticação, permissões, planos, customizações, componentes base, módulo de referência e documentação para continuidade do time.
              </p>
            </div>

            <div className="mt-6 rounded-2xl border border-white/10 bg-black/20 p-5">
              <p className="text-sm leading-6 text-slate-300">
                O desenvolvimento poderá utilizar endpoints mocados enquanto a API real ainda não estiver disponível. A integração final com endpoints reais dependerá da entrega, estabilidade e compatibilidade das rotas fornecidas pela equipe da TRS.
              </p>
            </div>

            <div className="mt-6">
              <a
                href="#/proposta-detalhada"
                className="inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-3.5 font-semibold text-white transition-all hover:bg-white/[0.08] hover:border-white/20"
              >
                Ver Detalhes do Escopo & Checkpoints <ArrowUpRight className="h-4.5 w-4.5" />
              </a>
            </div>
          </Card>
        </div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-5"
        >
          {fixedScopeSummaryItems.map((item) => (
            <motion.div
              key={item}
              variants={fadeUp}
              className="flex gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-4"
            >
              <Check className="mt-0.5 h-5 w-5 shrink-0 text-cyan-200" />
              <p className="text-sm leading-6 text-slate-300">{item}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.025] py-16 md:py-32">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <SectionTitle
            eyebrow="Escopo fechado"
            title="O que será entregue no projeto fechado."
            description="A entrega abaixo define a base técnica que permitirá ao time da TRS continuar a evolução da plataforma web com padrões claros, arquitetura consistente e um modelo funcional para seguir como referência."
          />

          <div className="mx-auto mt-8 max-w-4xl rounded-3xl border border-amber-300/15 bg-amber-300/[0.06] p-6">
            <p className="text-sm leading-6 text-slate-300">
              O layout do Figma será utilizado como referência visual e estrutural para criação dos componentes base, padrões de interface e módulo de referência. O Figma não representa, por si só, contrato de desenvolvimento integral das telas, e as telas do ERP não serão implementadas por completo neste escopo fechado.
            </p>
          </div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="mt-14 grid gap-5 md:grid-cols-2"
          >
            {fixedScopeGroups.map((group) => (
              <motion.div key={group.title} variants={fadeUp}>
                <Card className="h-full">
                  <div className="flex items-start gap-4">
                    <div className="inline-flex rounded-2xl bg-cyan-500/10 p-3 shadow-inner shadow-cyan-500/20">
                      <ArrowUpRight className="h-5 w-5 text-cyan-300" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white">{group.title}</h3>
                      <div className="mt-5 space-y-3">
                        {group.items.map((item) => (
                          <div key={item} className="flex gap-3">
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-200" />
                            <p className="text-sm leading-6 text-slate-300">{item}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-32">
        <SectionTitle
          eyebrow="Prazo e investimento"
          title="Estimativa de entrega e condições comerciais."
          description="Depois de definido o escopo técnico, a proposta comercial abaixo considera a construção completa da base frontend descrita acima, com entrega de código, documentação e alinhamento técnico para continuidade."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          <Card className="border-cyan-300/20 bg-cyan-300/[0.06]">
            <p className="text-sm uppercase tracking-[0.22em] text-cyan-200/80">
              Prazo estimado
            </p>
            <p className="mt-3 text-4xl font-semibold text-white">
              45 a 75
              <span className="ml-2 text-lg font-normal text-slate-300">dias úteis</span>
            </p>
            <p className="mt-4 text-sm leading-6 text-slate-300">
              Estimativa podendo ser concluída antes, conforme fluidez técnica, disponibilidade dos alinhamentos e evolução dos endpoints necessários.
            </p>
          </Card>

          <Card className="border-cyan-300/20 bg-cyan-300/[0.06] lg:col-span-2">
            <p className="text-sm uppercase tracking-[0.22em] text-cyan-200/80">
              Forma de pagamento
            </p>

            <div className="mt-5 grid gap-3 md:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                <p className="text-2xl font-semibold text-white">30%</p>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  Na aprovação/início do projeto
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                <p className="text-2xl font-semibold text-white">Saldo</p>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  Restante parcelado durante o desenvolvimento
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                <p className="text-2xl font-semibold text-white">Quitação</p>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  Total até a entrega final do código e documentação
                </p>
              </div>
            </div>
          </Card>
        </div>

        <Card className="mt-6 border-cyan-300/25 bg-cyan-300/[0.08]">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.22em] text-cyan-200/80">
                Valor total do projeto
              </p>
              <p className="mt-3 text-5xl font-semibold text-white">
                R$ 42.000,00
              </p>
            </div>

            <p className="max-w-xl text-sm leading-6 text-slate-300">
              Valor fechado para o escopo descrito nesta proposta, considerando arquitetura, implementação da base frontend, módulo de referência funcional, documentação e alinhamento técnico.
            </p>
          </div>
        </Card>
      </section>

      <section className="border-y border-white/10 bg-white/[0.025] py-16 md:py-32">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <SectionTitle
            eyebrow="Stack inicial sugerida"
            title="Tecnologia moderna, mas sem teatro corporativo."
            description="A stack abaixo é uma proposta inicial, baseada no cenário discutido até aqui. Ela pode evoluir conforme as conversas técnicas avancem, principalmente em pontos como autenticação, integração com a API atual e necessidades específicas do produto."
          />

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
          >
            {suggestedStack.map((item) => (
              <motion.div key={item} variants={fadeUp}>
                <Card className="flex items-center gap-3 p-5">
                  <Code2 className="h-5 w-5 text-cyan-200" />
                  <span className="font-medium text-white">{item}</span>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {[
              {
                title: "Organização por domínio",
                text: "Estrutura que facilita localizar, evoluir e manter áreas do produto sem espalhar regra de negócio pela aplicação inteira.",
              },
              {
                title: "Consumo de API padronizado",
                text: "Camada clara para chamadas, validação de dados, tratamento de erro, cache e estados de carregamento.",
              },
              {
                title: "Qualidade automatizada",
                text: "Biome e convenções de projeto para manter consistência sem depender de revisão manual em tudo.",
              },
            ].map((item) => (
              <Card key={item.title}>
                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">{item.text}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-32">
        <div className="grid gap-8 lg:grid-cols-2">
          <Card>
            <LockKeyhole className="h-8 w-8 text-cyan-200" />
            <h2 className="mt-5 text-3xl font-semibold text-white">Limites de atuação</h2>
            <p className="mt-4 leading-7 text-slate-300">
              Para manter a proposta objetiva e evitar ruído de escopo, a atuação fica concentrada na nova plataforma frontend web.
            </p>
            <div className="mt-7 space-y-3">
              {scopeLimits.map((item) => (
                <div key={item} className="flex gap-3 rounded-2xl bg-black/20 p-4">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-200" />
                  <p className="text-sm leading-6 text-slate-300">{item}</p>
                </div>
              ))}
            </div>
          </Card>

          <Card>
            <Users className="h-8 w-8 text-cyan-200" />
            <h2 className="mt-5 text-3xl font-semibold text-white">Forma de trabalho</h2>
            <p className="mt-4 leading-7 text-slate-300">
              A atuação será assíncrona, sem grade fixa de horário, com comunicação aberta pelo WhatsApp e alinhamentos por reunião quando fizer sentido.
            </p>
            <div className="mt-7 space-y-3">
              {responsibilities.map((item) => (
                <div key={item} className="flex gap-3 rounded-2xl bg-black/20 p-4">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-cyan-200" />
                  <p className="text-sm leading-6 text-slate-300">{item}</p>
                </div>
              ))}
            </div>
            <div className="mt-7 rounded-2xl border border-white/10 bg-white/[0.04] p-5">
              <p className="text-sm leading-6 text-slate-300">
                Mensagens podem ser enviadas a qualquer momento. As respostas serão feitas assim que houver disponibilidade, sem compromisso de resposta imediata ou SLA.
              </p>
            </div>
          </Card>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-16 md:px-10 md:pb-32">
        <Card className="overflow-hidden !p-0">
          <div className="grid gap-0 lg:grid-cols-[1fr_0.8fr]">
            <div className="flex flex-col items-center p-6 text-center md:items-start md:p-10 md:text-left lg:p-12">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.28em] text-cyan-300/80">
                Fechamento
              </p>
              <h2 className="text-3xl font-semibold tracking-tight text-white md:text-5xl">
                Uma base web pensada para durar, não só para começar.
              </h2>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                A proposta é estabelecer uma parceria técnica de longo prazo, permitindo que a plataforma web da TRS evolua de forma gradual, segura e sustentável, preservando a maturidade do produto atual e criando uma fundação moderna para os próximos ciclos.
              </p>
            </div>
            <div className="flex flex-col border-t border-white/10 p-6 md:p-10 lg:border-l lg:border-t-0 lg:p-12">
              <div className="mx-auto w-fit md:mx-0">
                <ResoluteLogo />
                <div className="mt-8 grid gap-3">
                <a 
                  href="https://wa.me/5532984337599" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="group flex items-center gap-4 rounded-2xl border border-white/5 bg-white/[0.02] p-4 transition-all hover:bg-white/[0.06] hover:border-white/10"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-cyan-500/10 text-cyan-300 transition-colors group-hover:bg-cyan-500/20 group-hover:text-cyan-200">
                    <MessageCircle className="h-5 w-5" />
                  </div>
                  <span className="text-sm font-medium text-slate-300 transition-colors group-hover:text-white">+55 32 98433-7599</span>
                </a>
                
                <a 
                  href="https://github.com/resolutecode" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="group flex items-center gap-4 rounded-2xl border border-white/5 bg-white/[0.02] p-4 transition-all hover:bg-white/[0.06] hover:border-white/10"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-cyan-500/10 text-cyan-300 transition-colors group-hover:bg-cyan-500/20 group-hover:text-cyan-200">
                    <GitBranch className="h-5 w-5" />
                  </div>
                  <span className="text-sm font-medium text-slate-300 transition-colors group-hover:text-white">@resolutecode</span>
                </a>

                <a 
                  href="mailto:ramonscampos@gmail.com" 
                  className="group flex items-center gap-4 rounded-2xl border border-white/5 bg-white/[0.02] p-4 transition-all hover:bg-white/[0.06] hover:border-white/10"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-cyan-500/10 text-cyan-300 transition-colors group-hover:bg-cyan-500/20 group-hover:text-cyan-200">
                    <Code2 className="h-5 w-5" />
                  </div>
                  <span className="text-sm font-medium text-slate-300 transition-colors group-hover:text-white">ramonscampos@gmail.com</span>
                </a>
              </div>
            </div>
          </div>
          </div>
        </Card>
      </section>
    </main>
  );
}
