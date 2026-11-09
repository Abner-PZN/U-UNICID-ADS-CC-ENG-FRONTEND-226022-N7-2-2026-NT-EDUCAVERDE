# Melhorias desde o MVP (1ª entrega)

> **Equipe:** se o professor apontou pontos específicos na correção do MVP, acrescentem cada um nesta tabela com as palavras dele. Os itens abaixo são os problemas encontrados na revisão do código da 1ª entrega.

| # | Ponto do MVP | Antes | Depois |
|---|---|---|---|
| 1 | Menu da página inicial não levava às outras páginas | Links da `index.html` apontavam para âncoras (`#sobre`, `#projetos`), ficando sempre na mesma página | Menu idêntico nas 10 páginas, com links para `sobre.html`, `projetos.html` etc. e a página atual marcada com `aria-current="page"` |
| 2 | Erros no W3C Validator | 6 erros: títulos pulando de h1 para h3 (5 páginas) e `aria-label` inválido em `div` | 0 erros e 0 avisos nas 10 páginas |
| 3 | JavaScript incompleto | Só 2 páginas carregavam o `script.js`; formulário usava `alert()` e não salvava dados | `script.js` em todas as páginas, validação com mensagens e borda em destaque, rascunho no localStorage, menu mobile, alto contraste, filtro de notícias e EcoBot |
| 4 | Menu no celular | 10 links empilhados ocupando a tela inteira | Botão "Menu" com `aria-expanded`, que abre e fecha a lista |
| 5 | Equipe no contato | Nomes fictícios (Marina, Lucas, Fernanda) | Integrantes reais da equipe e suas funções |
| 6 | Sem área de doações/apoio | Não existia | Seção "Como apoiar" em `contato.html` com voluntariado, doação de materiais e parcerias |
| 7 | "Ler mais" das notícias | `href="#"` (link quebrado) | Botão que mostra/oculta o texto completo, mais filtro por categoria |
| 8 | Contraste do botão principal | Texto branco sobre verde claro (#39A871), abaixo do AA | Verde escuro do escopo (#2E7D32 → #123D2D), contraste AA |
| 9 | Foco do teclado pouco visível | Só alguns elementos tinham foco | Contorno azul de 3 px em todos os elementos e link "Pular para o conteúdo" |
| 10 | Identidade diferente do escopo | Fonte Inter e verdes fora da paleta | Poppins + Arial e paleta do escopo (#2E7D32, #1565C0, #555555) |
| 11 | Vídeo indisponível | Embed de uma live do YouTube que já foi removida | Documentário "O lixo nosso de cada dia", com descrição em texto |
| 12 | Orçamento sem justificativa do deploy | Só três planos pagos | Comparativo GitHub Pages × Netlify × Vercel × Railway e justificativa da escolha |
| 13 | Documentação | README com formatação quebrada e sem pasta `/docs` | README com URL, equipe e como rodar; pasta `/docs` completa |
| 14 | Créditos das imagens | Sem indicação de fonte | Crédito "Foto: Unsplash" na galeria e no rodapé |

**Prints de antes e depois:** colocar em `docs/prints/` (sugestão: `antes-menu-index.png` × `depois-menu-index.png`, `antes-w3c.png` × `depois-w3c.png`, `antes-celular.png` × `depois-celular.png`). Os prints de "antes" podem ser tirados abrindo o commit antigo no GitHub.
