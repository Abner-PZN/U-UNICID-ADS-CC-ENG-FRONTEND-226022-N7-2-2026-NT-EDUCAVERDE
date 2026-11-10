# EducaVerde – Educação que transforma pessoas e o planeta

Site educativo sobre sustentabilidade, inclusão e cidadania, desenvolvido para a disciplina **Front-End para Web (A1 – 2ª entrega)** do Curso Superior de Informática da **UNICID**, com o Prof. Paulo Fratta.

| | |
|---|---|
| **Site publicado** | (https://educaverde2.vercel.app/) |
| **Repositório** | https://github.com/Abner-PZN/U-UNICID-ADS-CC-ENG-FRONTEND-226022-N7-2-2026-NT-EDUCAVERDE |
| **Tecnologias** | HTML5, CSS3 (Grid e Flexbox), JavaScript puro |
| **Hospedagem** | Vercel.app |

## Equipe

| Integrante | RA | Responsabilidade principal |
|---|---|---|
| Abner Barbosa Machado | 46625402 | Produção de conteúdo e repositório GitHub |
| Kauã Freitas Passos Perroni | 47749008 | Estrutura HTML e repositório GitHub |
| Luis Cauan Sena Rodrigues | 46835539 | Desenvolvimento CSS e JAVASCRIPT |
| Denner Souza Silva | 047338164 | Desenvolvimento CSS e JAVASCRIPT |

## Como rodar

**Online:** abra o link do site publicado acima.

**No computador:**

1. Baixe o repositório (`git clone` ou botão *Code → Download ZIP*).
2. Abra `Educaverde/index.html` no navegador.

Não precisa instalar nada: o site é estático. Para testar como no servidor, você pode usar a extensão *Live Server* do VS Code.

## Estrutura de pastas

```
/
├── index.html                  → redireciona para Educaverde/index.html
├── README.md
├── docs/                       → documentação do projeto
│   ├── escopo.md
│   ├── diario-de-bordo.md
│   ├── orcamento.md
│   ├── testes.md
│   ├── melhorias-mvp.md
│   ├── uso-de-ia.md
│   ├── roteiro-apresentacao.md
│   └── prints/                 → prints de desktop, celular e testes
└── Educaverde/                 → código do site
    ├── index.html  sobre.html  projetos.html  impacto.html
    ├── acessibilidade.html  galeria.html  midia.html
    ├── noticias.html  contato.html  orcamento_hospedagem.html
    ├── styles.css
    └── script.js
```

## Funcionalidades em JavaScript

- **Formulário de contato** (`contato.html`): validação com `preventDefault`, mensagem de erro embaixo de cada campo, borda vermelha em destaque e foco no primeiro erro.
- **localStorage**: o rascunho do formulário fica salvo ao recarregar a página, e a preferência de **alto contraste** vale para todas as páginas.
- **Interações com o DOM**: menu no celular, botão de alto contraste, filtro de notícias por categoria, "Ler mais" nas notícias, botões de apoio que preenchem o formulário e o **EcoBot** (assistente de perguntas frequentes).

## Documentação

Veja a pasta [`docs/`](docs/): escopo, diário de bordo, orçamento, evidências de testes, melhorias desde o MVP e registro do uso de IA.

## Créditos

Imagens: [Unsplash](https://unsplash.com/) (uso gratuito). Vídeo: documentário "O lixo nosso de cada dia" (YouTube). Áudio de exemplo: SoundHelix. A EducaVerde é uma organização fictícia criada para fins acadêmicos.
