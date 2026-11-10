# Roteiro da apresentação – EducaVerde

O tempo total é de 20 minutos: 10 de slides, 5 de demonstração e 5 de perguntas. O texto de fala de cada slide está nas **notas do apresentador** do deck.

## Quem fala o quê

| Integrante | Slides | Tempo aproximado |
|---|---|---|
| Abner | 1 Capa · 9 GitHub · 14 Demonstração (passos 1, 2, 5 e 6) | 1min20 + 3min de demo |
| Kauã | 2 Problema · 3 Objetivos · 4 Equipe · 10 Uso de IA | 3min |
| Luis Cauan | 6 MVP · 7 JavaScript (menu, contraste, filtro e EcoBot) · 8 Acessibilidade | 2min |
| Denner | 5 Arquitetura (HTML) · 7 JavaScript (formulário e localStorage) · 14 Demonstração (passos 3 e 4) | 1min10 + 2min de demo |
| Victor | 11 Deploy · 12 Objetivos alcançados · 13 Aprendizados | 2min |

Denner e Luis Cauan apresentam juntos o bloco técnico (slides 5 a 8): o Denner fala do HTML e do JavaScript; o Luis Cauan, do CSS, da acessibilidade e das melhorias desde o MVP.

## Respostas para as perguntas da banca

**"O que este trecho de JavaScript faz, linha a linha?"** *(responde: Denner)*
O `addEventListener('submit')` escuta o envio do formulário. O `preventDefault()` impede que o navegador envie e recarregue a página. O `validarCampo()` testa cada campo com uma regra; se falhar, escreve a mensagem no `<span>` de erro, adiciona a classe `campo-invalido` (borda vermelha) e marca `aria-invalid="true"`. Se houver erro, o foco vai para o primeiro campo errado. Se estiver tudo certo, mostra a mensagem de sucesso e apaga o rascunho do `localStorage`.

**"Como o localStorage funciona aqui?"** *(responde: Denner)*
A cada tecla (evento `input`), os campos viram um objeto, que é transformado em texto com `JSON.stringify` e salvo com `localStorage.setItem`. Ao abrir a página, o `getItem` + `JSON.parse` lê esse texto e preenche os campos de novo. O alto contraste usa a mesma ideia: salva "sim" ou "nao".

**"Qual ponto do MVP foi mais difícil de corrigir, e como vocês resolveram?"** *(responde: Luis Cauan)*
O menu da página inicial, que usava âncoras (`#sobre`) e não levava às outras páginas. Padronizamos o mesmo cabeçalho e rodapé nas 10 páginas, com `aria-current="page"` marcando a página atual.

**"Que sugestão da IA vocês recusaram, e por quê?"** *(responde: Kauã)*
A IA escreveu a documentação, a página de orçamento e os slides pensando no GitHub Pages, mas nós já tínhamos publicado na Vercel. Conferimos e corrigimos tudo para a Vercel. Também mantivemos os nossos textos alternativos da galeria, porque a IA reescreveu sem conseguir ver as fotos.

**"Como uma pessoa cega usaria o formulário de vocês?"** *(responde: Luis Cauan)*
O primeiro Tab mostra o link "Pular para o conteúdo". Cada campo tem um `<label>` ligado pelo `for`, então o leitor de tela lê o nome do campo. Se houver erro, a mensagem está ligada ao campo por `aria-describedby`, o campo é marcado com `aria-invalid` e o foco vai direto para ele. O aviso de sucesso fica numa área `role="status"`, que o leitor anuncia sozinho.

**"Por que a Vercel?"** *(responde: Victor)*
O site é estático (não precisa de servidor), a Vercel é ligada ao repositório do GitHub, gera HTTPS automático, publica a cada push na main e não tem custo. O GitHub Pages também serviria, mas a Vercel já estava configurada.

**"Como o menu do celular funciona?"** *(responde: Luis Cauan)*
Um `<button>` com `aria-expanded`. No clique, o JavaScript inverte esse valor e liga ou desliga a classe `aberto` no `<nav>`. O CSS só mostra o menu quando ele tem essa classe. A tecla Esc fecha o menu.
