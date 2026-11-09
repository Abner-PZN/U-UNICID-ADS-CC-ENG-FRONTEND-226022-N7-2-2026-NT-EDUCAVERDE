# Evidências de testes

Prints na pasta [`docs/prints/`](prints/).

## 1. Validação W3C (HTML)

Ferramenta: Nu Html Checker (o mesmo motor do validator.w3.org), em 09/11/2026.

| Página | Erros | Avisos |
|---|---|---|
| index.html | 0 | 0 |
| sobre.html | 0 | 0 |
| projetos.html | 0 | 0 |
| impacto.html | 0 | 0 |
| acessibilidade.html | 0 | 0 |
| galeria.html | 0 | 0 |
| midia.html | 0 | 0 |
| noticias.html | 0 | 0 |
| contato.html | 0 | 0 |
| orcamento_hospedagem.html | 0 | 0 |

> **Equipe:** depois do deploy, validem de novo pela URL publicada em https://validator.w3.org/ e tirem um print de cada página para os slides.

## 2. Testes funcionais (JavaScript)

| # | Teste | Resultado esperado | Resultado |
|---|---|---|---|
| 1 | Enviar o formulário vazio | 6 mensagens de erro, bordas vermelhas, foco no campo Nome | ✅ Passou |
| 2 | Preencher parte do formulário e recarregar a página | Dados voltam e aparece o aviso "Recuperamos o rascunho" | ✅ Passou |
| 3 | Enviar o formulário preenchido corretamente | Mensagem de sucesso e rascunho apagado do localStorage | ✅ Passou |
| 4 | Clicar em "Quero doar materiais" | Assunto do formulário muda para "Quero doar ou apoiar" | ✅ Passou |
| 5 | Ativar alto contraste e trocar de página | Modo continua ativo na nova página | ✅ Passou |
| 6 | Filtrar notícias por "Educação" | Só 1 notícia visível | ✅ Passou |
| 7 | Clicar em "Ler mais" | Texto extra aparece e botão vira "Ler menos" | ✅ Passou |
| 8 | Perguntar "como posso doar?" ao EcoBot | Resposta sobre doações com link para Contato | ✅ Passou |
| 9 | Abrir o menu no celular (390 px) | Menu abre em lista; Esc fecha | ✅ Passou |
| 10 | Erros no console do navegador | Nenhum | ✅ Passou |

## 3. Links

Todos os links internos das 10 páginas foram verificados: **nenhum link quebrado**.

## 4. Acessibilidade e teclado

| Teste | Resultado |
|---|---|
| 1º Tab da página abre o link "Pular para o conteúdo" | ✅ |
| Todos os links e botões mostram contorno de foco azul | ✅ |
| Formulário: erros lidos pelo leitor de tela (`aria-describedby` + `aria-invalid`) | ✅ |
| Todas as imagens com `alt` | ✅ |
| `lang="pt-BR"` em todas as páginas | ✅ |
| Lighthouse – Acessibilidade (versão local, 09/11/2026) | 100 (index, contato e notícias) |
| Lighthouse – Desempenho / Boas práticas / SEO (versão local) | 100 / 96 / 100 |
| Lighthouse no site publicado | _preencher após o deploy_ |

> O único item abaixo de 100 em boas práticas foi "erros no console", causado pelas imagens externas bloqueadas no ambiente de teste (sem internet). No site publicado esse item deve passar.

## 5. Responsividade

| Largura | Dispositivo | Resultado |
|---|---|---|
| 390 px | Celular | ✅ Sem rolagem horizontal nas 10 páginas, menu em botão |
| 1280 px | Notebook | ✅ Menu em botão, layout em colunas |
| 1366 px ou mais | Computador | ✅ Menu completo na barra superior |

## 6. Testes no site publicado

> **Equipe:** preencham depois de ativar o GitHub Pages.

| Teste | Resultado |
|---|---|
| Site abre com HTTPS no computador | Abre normalmente |
| Site abre com HTTPS no celular | Abre normalmente |
| As 10 páginas abrem pela URL publicada | Abre normalmente |
