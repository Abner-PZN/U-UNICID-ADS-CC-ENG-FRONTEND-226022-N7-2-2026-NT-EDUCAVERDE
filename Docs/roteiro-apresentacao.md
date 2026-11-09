# Roteiro da apresentação – EducaVerde

O tempo total é de 20 minutos: 10 de slides, 5 de demonstração e 5 de perguntas. O texto de fala de cada slide está nas **notas do apresentador** do deck.

## Quem fala o quê 

| Integrante | Slides | Tempo aproximado |
|---|---|---|
| Abner | 1 Capa · 5 Arquitetura · 9 GitHub · 11 Deploy · 14 Demonstração | 2min40 + 5min de demo |
| Kauã | 2 Problema · 3 Objetivos · 4 Equipe · 12 Objetivos alcançados · 13 Aprendizados | 3min20 |
| Luis Cauan | 6 MVP · 7 JavaScript · 8 Acessibilidade · 10 Uso de IA | 3min30 |

## Antes de apresentar

- [ ] Trocar os colchetes dos slides: print do Trello (4), prints de commits e do PR (9), correção da IA (10), [confirmar] (12) e trecho do diário (13)
- [ ] Rodar o Lighthouse no site publicado e conferir se o "100" do slide 8 se mantém
- [ ] Testar o QR code da capa com o celular depois do deploy
- [ ] Gravar o vídeo de plano B com os 6 passos da demonstração
- [ ] Ensaiar com cronômetro: no máximo 23 minutos (acima disso, perde 0,10)

## Respostas para as perguntas da banca

**"O que este trecho de JavaScript faz, linha a linha?"**
O `addEventListener('submit')` escuta o envio do formulário. O `preventDefault()` impede que o navegador envie e recarregue a página. O `validarCampo()` testa cada campo com uma regra; se falhar, escreve a mensagem no `<span>` de erro, adiciona a classe `campo-invalido` (borda vermelha) e marca `aria-invalid="true"`. Se houver erro, o foco vai para o primeiro campo errado. Se estiver tudo certo, mostra a mensagem de sucesso e apaga o rascunho do `localStorage`.

**"Como o localStorage funciona aqui?"**
A cada tecla (evento `input`), os campos viram um objeto, que é transformado em texto com `JSON.stringify` e salvo com `localStorage.setItem`. Ao abrir a página, o `getItem` + `JSON.parse` lê esse texto e preenche os campos de novo. O alto contraste usa a mesma ideia: salva "sim" ou "nao".

**"Qual ponto do MVP foi mais difícil de corrigir, e como vocês resolveram?"**
O menu da página inicial, que usava âncoras (`#sobre`) e não levava às outras páginas. Padronizamos o mesmo cabeçalho e rodapé nas 10 páginas, com `aria-current="page"` marcando a página atual.

**"Que sugestão da IA vocês recusaram, e por quê?"**
A IA reescreveu os textos alternativos das fotos da galeria sem conseguir ver as imagens. Um `alt` precisa descrever o que a foto realmente mostra, então mantivemos os nossos. *(Se tiverem um exemplo próprio, usem o de vocês.)*

**"Como uma pessoa cega usaria o formulário de vocês?"**
O primeiro Tab mostra o link "Pular para o conteúdo". Cada campo tem um `<label>` ligado pelo `for`, então o leitor de tela lê o nome do campo. Se houver erro, a mensagem está ligada ao campo por `aria-describedby`, o campo é marcado com `aria-invalid` e o foco vai direto para ele. O aviso de sucesso fica numa área `role="status"`, que o leitor anuncia sozinho.

**"Por que GitHub Pages?"**
O site é estático (não precisa de servidor), o código já está no GitHub, o HTTPS é automático, o site atualiza a cada push e não tem custo.

**"Como o menu do celular funciona?"**
Um `<button>` com `aria-expanded`. No clique, o JavaScript inverte esse valor e liga ou desliga a classe `aberto` no `<nav>`. O CSS só mostra o menu quando ele tem essa classe. A tecla Esc fecha o menu.
