# Arquitetura frontend

O escopo contempla a definição e implementação da arquitetura principal da aplicação frontend, visando criar uma base técnica sólida, modular, escalável e preparada para evolução contínua da plataforma web.

A arquitetura deverá ser estruturada para suportar crescimento progressivo do sistema, expansão de módulos, evolução de regras de negócio, integração contínua com a API existente e manutenção futura por diferentes desenvolvedores da equipe.

A estrutura arquitetural deverá contemplar:

- separação clara entre camada visual, regras de negócio, integração e serviços
- organização modular por domínio ou contexto funcional
- desacoplamento entre componentes visuais e regras de negócio
- padronização estrutural da aplicação
- estratégia de crescimento contínuo sem necessidade de reestruturações frequentes
- reutilização de componentes e fluxos
- previsibilidade arquitetural
- legibilidade e manutenção do código
- organização preparada para trabalho em equipe
- organização preparada para continuidade do projeto pela equipe interna

## Estrutura da aplicação

A estrutura do projeto deverá contemplar:

- separação entre layout, componentes, módulos, serviços, hooks e regras
- separação entre componentes reutilizáveis e componentes específicos de domínio
- estruturação dos módulos da aplicação
- padronização de nomenclatura
- organização consistente de pastas e responsabilidades
- estratégia de compartilhamento de componentes e regras
- estrutura preparada para expansão futura de funcionalidades

## Padronização de formulários

O escopo contempla:

- padronização estrutural dos formulários da aplicação
- padronização de validações
- padronização de mensagens de erro
- padronização visual de campos
- padronização de estados de loading
- padronização de estados desabilitados
- padronização de feedback visual ao usuário
- estratégia reutilizável para construção de novos formulários

## Padronização de tratamento de erro

O escopo contempla:

- tratamento centralizado de erros
- padronização de feedback visual
- estrutura preparada para erros de autenticação
- estrutura preparada para erros de permissão
- estrutura preparada para erros de integração
- estratégia reutilizável para exibição de falhas
- padronização de mensagens visuais da aplicação

## Estados de loading e empty states

O escopo contempla:

- padronização visual de estados de carregamento
- padronização visual de estados vazios
- padronização de feedbacks de ausência de informação
- padronização de estados de erro em listagens e módulos
- reutilização estrutural dos estados da aplicação

---

# Componentes base

O escopo contempla a criação da base inicial de componentes reutilizáveis da aplicação, seguindo a identidade visual definida no Figma e os padrões necessários para sustentação da arquitetura frontend.

Os componentes deverão ser estruturados de forma reutilizável, modular e preparada para evolução futura da plataforma.

A implementação deverá contemplar:

- componentes reutilizáveis
- separação entre comportamento e apresentação visual
- padronização visual da interface
- padronização de estados dos componentes
- suporte à reutilização em diferentes módulos da aplicação
- integração consistente com formulários e fluxos internos

## Componentes previstos na base inicial

A base inicial de componentes deverá contemplar, quando aplicável ao contexto da aplicação:

- botões
- botões de ícone
- inputs
- campos de formulário
- selects
- checkbox
- toggles/switches
- tabs
- chips/tags
- paginação
- itens de menu
- componentes de navegação
- cards
- modais/dialogs
- feedbacks visuais
- componentes estruturais do dashboard
- componentes estruturais da área autenticada

## Estados e variações

Os componentes poderão possuir diferentes estados visuais e comportamentais, incluindo:

- active
- inactive
- hover
- focus
- selected
- disabled
- loading
- success
- error

quando aplicável ao contexto de cada componente.

## Navegação e componentes estruturais

O escopo contempla também a criação da estrutura base de componentes responsáveis pela navegação e composição geral da interface, incluindo:

- sidebar
- header
- itens de menu
- navegação lateral expandida
- navegação lateral recolhida
- componentes de usuário autenticado
- estrutura de tabs
- estrutura de paginação
- estrutura de navegação interna

## Responsividade

A aplicação deverá possuir comportamento responsivo compatível com o contexto de um sistema administrativo corporativo.

O escopo contempla:

- adaptação estrutural da interface para diferentes resoluções
- adaptação do layout principal
- adaptação da navegação lateral
- adaptação de espaçamentos e organização visual
- adaptação de componentes para resoluções menores
- comportamento responsivo do dashboard
- comportamento responsivo dos componentes principais
- usabilidade compatível com notebooks, desktops e resoluções intermediárias

A responsividade será implementada priorizando:

- experiência desktop
- notebooks
- telas corporativas
- resoluções intermediárias
- navegação funcional em dispositivos menores quando aplicável

Por se tratar de um ERP administrativo com grande volume de informação, tabelas, dashboards, permissões e fluxos complexos, determinadas telas, módulos ou estruturas poderão possuir limitações naturais de usabilidade em resoluções muito pequenas, especialmente em dispositivos mobile.

O objetivo da responsividade será garantir adaptação funcional e estrutural da aplicação, sem compromisso de transformar todos os módulos do ERP em experiências totalmente equivalentes a aplicativos mobile nativos.

Dependendo da complexidade do módulo, poderão ser necessárias adaptações futuras específicas para determinadas telas caso exista necessidade real de operação mobile completa.

---

# Autenticação e layout interno da aplicação

O escopo contempla a implementação da estrutura visual e funcional base da área interna da aplicação, incluindo o fluxo completo de autenticação, layout principal do sistema, navegação lateral, cabeçalho, dashboard inicial e comportamento geral da interface.

O Figma será utilizado como referência visual para construção dos componentes, layouts e comportamento esperado da aplicação, sem caracterizar obrigação de implementação integral de todas as telas existentes no design.

---

# Autenticação

O escopo contempla a estruturação do fluxo completo de autenticação da nova plataforma web, considerando que o acesso ao sistema não acontece em uma única tela, mas em uma jornada composta por múltiplas etapas.

A autenticação deverá contemplar:

- seleção do ambiente de acesso
- carregamento das informações necessárias para continuidade do login, caso essa etapa se mantenha necessária
- preenchimento de usuário e senha
- seleção da empresa
- seleção da filial, quando aplicável
- criação da sessão autenticada
- persistência do contexto selecionado
- uso de JWT para autenticação das requisições
- proteção das rotas internas
- tratamento de sessão expirada (se aplicável)
- logout

O fluxo deverá considerar que o usuário pode ter acesso a diferentes ambientes, empresas e filiais, e que essas escolhas fazem parte do contexto necessário para utilização do sistema.

A estrutura de autenticação deverá ser preparada para receber dados da API, mas poderá utilizar dados mocados durante o desenvolvimento quando os endpoints reais ainda não estiverem disponíveis.

## Etapas do fluxo de autenticação

### 1. Seleção do ambiente de acesso

- listagem dos ambientes disponíveis
- seleção do ambiente antes da autenticação
- controle visual do ambiente selecionado
- validação para impedir avanço sem ambiente selecionado
- estrutura preparada para recebimento dos ambientes via API
- suporte a dados mocados quando necessário

### 2. Carregamento das informações

- estado ou tela intermediária de carregamento
- feedback visual de carregamento
- tratamento visual de erro durante carregamento
- possibilidade de adaptação ou remoção da etapa conforme definição técnica final do fluxo

### 3. Login do usuário

- preenchimento de usuário e senha
- estrutura visual baseada no Figma fornecido
- validação de campos obrigatórios
- tratamento de credenciais inválidas
- loading durante autenticação
- suporte ao recebimento do JWT
- persistência segura da sessão
- ação de retorno para etapa anterior

### 4. Seleção de empresa e filial

- listagem das empresas disponíveis para o usuário
- listagem das filiais disponíveis
- validação de seleção obrigatória
- suporte a múltiplas empresas por usuário
- suporte a múltiplas filiais por empresa
- persistência do contexto selecionado
- disponibilização do contexto para toda a aplicação
- redirecionamento para área interna após conclusão do fluxo

---

# Layout interno da aplicação

O escopo contempla a implementação da estrutura visual base da área autenticada da aplicação, utilizando o dashboard apresentado no Figma como referência para construção da interface principal.

---

# Sidebar

O escopo contempla:

- implementação da sidebar principal da aplicação
- suporte ao estado aberto
- suporte ao estado recolhido/fechado
- comportamento visual de expansão e recolhimento
- exibição da identidade visual no estado aberto
- adaptação visual da sidebar no estado fechado
- estrutura de itens de menu
- suporte a item ativo
- agrupamento visual dos menus
- divisores entre grupos de navegação
- suporte a ícones nos itens de menu
- comportamento responsivo para mobile
- abertura e fechamento da navegação em telas menores
- menus mocados para representação estrutural da aplicação

Os menus serão implementados de forma mocada, com funcionamento real apenas para:

- Início
- Módulo de Referência

Os demais itens poderão existir visualmente na navegação sem implementação funcional de tela dentro deste escopo.

---

# Header

O escopo contempla a implementação do cabeçalho principal da aplicação.

O header deverá contemplar:

- campo de busca
- estrutura visual e comportamental da busca
- suporte ao comportamento futuro de pesquisa
- três ícones de ação
- estados visuais dos ícones
- indicadores visuais mocados quando aplicável
- componente de usuário autenticado
- integração do usuário com a sessão autenticada

---

# Busca

A busca será implementada com comportamento funcional básico, porém sem pesquisa real em todo o sistema.

O escopo contempla:

- campo digitável
- controle de estado da pesquisa
- estrutura preparada para integração futura
- retorno mocado apenas para o módulo de referência
- navegação para o módulo de referência ao selecionar o resultado disponível

Será utilizado um nome fictício para o módulo de referência utilizado durante demonstração do comportamento.

---

# Ícones de ação

Os ícones presentes no header serão implementados de forma mocada.

O escopo contempla:

- exibição visual dos ícones
- estados visuais básicos
- indicadores mocados quando aplicável
- estrutura preparada para futura integração funcional

Não contempla implementação real de notificações, mensagens, tarefas ou outros fluxos definitivos relacionados aos ícones.

---

# Usuário autenticado

O componente de usuário autenticado deverá ser funcional dentro do contexto da autenticação implementada.

O escopo contempla:

- exibição do nome do usuário autenticado
- exibição de informações complementares do usuário
- integração com sessão autenticada
- comportamento de dropdown/menu do usuário quando aplicável
- opção de logout
- limpeza da sessão autenticada
- redirecionamento para o fluxo de autenticação após logout

---

# Dashboard inicial

O dashboard apresentado no Figma será utilizado como referência visual para implementação da tela inicial da aplicação.

O escopo contempla a implementação visual completa da estrutura do dashboard, incluindo:

- cards informativos
- indicadores resumidos
- gráficos
- tabelas
- listagens
- blocos de mensagens
- widgets
- composição visual geral da tela
- organização responsiva dos elementos
- estados visuais compatíveis com o layout definido

Os dados apresentados no dashboard serão implementados de forma mocada, apenas para demonstração visual e validação da arquitetura frontend.

O escopo não contempla:

- regras reais de negócio
- cálculos financeiros reais
- dashboards analíticos definitivos
- integração real com métricas do ERP
- atualização em tempo real
- consolidação real de dados

Os gráficos serão implementados utilizando a biblioteca definida durante o desenvolvimento do projeto.

A aparência final dos gráficos poderá variar parcialmente em relação ao Figma, dependendo das limitações, comportamento e características visuais da biblioteca escolhida, mantendo a proposta estrutural e visual geral apresentada no design.

---

# RBAC e permissões

O escopo contempla a implementação da estrutura base de controle de acesso da aplicação, considerando um modelo granular de permissões baseado nas regras existentes do ERP atual.

A estrutura deverá permitir controle visual e funcional da aplicação com base nas permissões retornadas pela API.

O modelo deverá ser preparado para suportar crescimento contínuo da aplicação e expansão futura das regras de acesso.

## Estrutura de permissões

O escopo contempla:

- estrutura de roles/perfis
- estrutura de permissões por usuário
- estrutura de permissões por rotina
- estrutura de permissões por ação
- organização centralizada das permissões
- persistência das permissões na sessão autenticada
- disponibilização das permissões para toda a aplicação

## Permissões granulares

A estrutura deverá suportar permissões granulares por funcionalidade, incluindo ações como:

- acessar
- visualizar
- inserir
- editar
- excluir
- exportar
- imprimir

e outras ações equivalentes existentes no ERP.

## Controle de acesso visual e funcional

O escopo contempla:

- bloqueio de rotas sem permissão
- bloqueio de funcionalidades sem permissão
- ocultação de elementos sem acesso
- desabilitação de ações sem permissão
- proteção de componentes
- proteção de páginas
- proteção de ações críticas
- controle de renderização baseado em permissão

## Guards e helpers

O escopo contempla:

- guards de rota
- guards de componente
- hooks reutilizáveis de validação de acesso
- helpers reutilizáveis de permissão
- estrutura preparada para reutilização em toda a aplicação

## Integração com API

A estrutura deverá ser preparada para integração com o endpoint de permissões definido pela API.

Durante o desenvolvimento, poderá ser utilizada estrutura mocada para simulação das permissões enquanto os endpoints reais não estiverem disponíveis.

## Objetivo da implementação

A implementação do RBAC terá como objetivo criar uma base reutilizável, escalável e preparada para continuidade futura da plataforma, sem limitar a evolução das regras de negócio do ERP.

---

# Customizações por cliente

O escopo contempla a implementação da estrutura base necessária para suportar customizações específicas por cliente.

A estrutura deverá ser preparada para evolução contínua do sistema sem necessidade de criação de regras isoladas e hardcodes espalhados pela aplicação.

## Customizações por cliente

O escopo contempla:

- estrutura para regras específicas por cliente
- separação entre regra global e regra customizada
- estrutura preparada para múltiplos comportamentos específicos
- organização preparada para evitar acoplamentos indevidos
- estratégia para evitar hardcodes espalhados pela aplicação
- helpers reutilizáveis para validação de customizações
- estrutura centralizada para consulta de configurações do cliente
- preparação para recebimento das customizações via API

## Helpers e reutilização

O escopo contempla:

- helpers reutilizáveis
- hooks reutilizáveis
- estrutura centralizada de validação
- reaproveitamento das regras em múltiplos módulos

## Integração com API

As customizações deverão ser preparadas para integração com a API existente.

Durante o desenvolvimento, poderão ser utilizadas estruturas mocadas enquanto os endpoints reais não estiverem disponíveis.

---

# Integração com API

O escopo contempla a estruturação da camada de integração da aplicação frontend com a API existente do ERP.

A implementação deverá ser preparada para crescimento contínuo da aplicação, organização por domínio e evolução futura da API.

## Estrutura de integração

O escopo contempla:

- client HTTP padronizado
- padronização de chamadas
- organização de serviços por domínio
- estrutura reutilizável de integração
- separação entre integração e interface visual
- padronização de requests
- padronização de responses

## Desenvolvimento com mocks

Durante o desenvolvimento, poderão ser utilizados endpoints mocados quando os endpoints reais ainda não estiverem disponíveis ou concluídos pela equipe responsável pela API.

A estrutura deverá permitir substituição progressiva dos mocks pelas integrações reais sem necessidade de reestruturação da aplicação.

## Limites do escopo

O escopo não contempla:

- desenvolvimento da API
- manutenção do backend existente
- alterações em Delphi
- criação de infraestrutura backend
- criação de banco de dados
- responsabilidade sobre regras de negócio do backend

---

# Módulo de referência

O escopo contempla a implementação de um módulo funcional de referência, utilizado como base prática para validação da arquitetura frontend, componentes, integração, autenticação, permissões e customizações.

O módulo terá como objetivo servir como modelo estrutural para continuidade do desenvolvimento da aplicação pela equipe interna.

## Estrutura do módulo

O módulo deverá contemplar:

- listagem de registros
- visualização de registros
- criação de registros
- edição de registros
- exclusão de registros
- fluxo completo de CRUD
- navegação integrada ao layout principal
- integração com autenticação
- integração com permissões
- integração com customizações

## Funcionalidades previstas

O escopo contempla:

- filtros
- busca
- paginação
- validação de formulários
- loading states
- error states
- empty states
- feedbacks visuais
- estados de sucesso e erro

## Persistência

O módulo de referência utilizará persistência mocada/local para demonstração completa do fluxo funcional, sem dependência de backend, banco de dados ou endpoints reais.

Essa persistência faz parte do próprio objetivo do módulo: servir como referência técnica isolada para arquitetura, componentes, formulários, validações, listagem, filtros, permissões e fluxo de CRUD.

O módulo de referência não será integrado a endpoints reais da API e não representa uma funcionalidade definitiva do ERP.

## Objetivo do módulo

O módulo de referência terá como objetivo:

- validar a arquitetura proposta
- validar os padrões definidos
- demonstrar o fluxo completo da aplicação
- servir como referência para novos módulos
- servir como base de continuidade para a equipe interna

---

# Documentação e alinhamento técnico

O escopo contempla a criação da documentação técnica necessária para continuidade do projeto pela equipe interna.

A documentação deverá possuir caráter técnico e estrutural, visando facilitar manutenção, expansão e continuidade da aplicação.

## Documentação prevista

O escopo contempla:

- documentação da arquitetura
- documentação da estrutura do projeto
- documentação dos padrões definidos
- documentação das estratégias utilizadas
- documentação dos fluxos principais
- documentação das estruturas reutilizáveis
- guia para criação de novas funcionalidades
- guia para continuidade do desenvolvimento

## Alinhamento técnico

O escopo contempla:

- reuniões técnicas de alinhamento
- transferência de conhecimento
- orientação sobre continuidade do projeto
- explicação da arquitetura implementada

## Objetivo

A documentação e alinhamento técnico terão como objetivo garantir que a equipe interna consiga evoluir a aplicação após a conclusão do escopo contratado.
