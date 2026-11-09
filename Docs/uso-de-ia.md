# Uso de Inteligência Artificial

## Ferramenta usada

| Ferramenta | Para quê |
|---|---|
| Claude (Anthropic) | Revisão do projeto a partir do roteiro da 2ª entrega, correções de HTML e CSS, JavaScript, documentação, slides e testes |

## Regras que a equipe seguiu

1. Todo código gerado por IA foi lido e testado pela equipe antes do commit.
2. O JavaScript foi pedido com comentários em português, para que qualquer integrante consiga explicar cada parte.
3. A IA não decide conteúdo factual: números, nomes e textos da ONG foram conferidos pela equipe.
4. Nada de usar código que ninguém sabe explicar (regra da disciplina).

## Registro de prompts

### Prompt 1 – revisão para a 2ª entrega (09/11/2026)

**Prompt:** "Em anexo está o README de um trabalho da faculdade de Desenvolvimento Front-End, o repositório do que a gente fez e o que o professor pediu. Consegue visualizar e ajustar o que está errado?" (com o PDF do roteiro e o link do repositório)

**O que a IA fez:** comparou o site com o roteiro e a rubrica; corrigiu o menu da `index.html`, os 6 erros do W3C e a ordem dos títulos; reescreveu o `script.js`; criou a área de apoio e o comparativo de hospedagem; testou tudo em um navegador automatizado; e montou a pasta `/docs`.

**O que foi aceito:**
- Validação do formulário com `preventDefault`, mensagens de erro e borda vermelha
- Rascunho do formulário e alto contraste salvos no `localStorage`
- Menu do celular, filtro de notícias, "Ler mais" e EcoBot
- Cabeçalho e rodapé iguais nas 10 páginas
- Separação do README (apresentação do projeto) e do escopo (`docs/escopo.md`)

**O que foi corrigido ou recusado pela equipe:**
- **Hospedagem:** a IA escreveu a documentação, a página de orçamento e os slides para o GitHub Pages, mas a equipe publicou na Vercel. Corrigimos tudo para a Vercel.
- **Textos alternativos:** a IA chegou a reescrever o `alt` das fotos da galeria sem conseguir ver as imagens. Mantivemos os textos que nós tínhamos escrito.
- **Pasta de documentação:** no repositório a pasta ficou como `Docs` (maiúsculo), e os links do README apontavam para `docs/`. Ajustamos os links.

### Prompt 2 – slides da apresentação (09/11/2026)

**Prompt:** "Faz o que você consegue para mim, por favor" (pedindo os slides, o roteiro de fala e o Lighthouse) e depois "tudo junto em PDF".

**Resultado aceito:** os 14 slides na ordem do roteiro, com notas de fala divididas entre os integrantes e o PDF final.

**O que foi corrigido:** pedimos para trocar "Obrigado! Perguntas?" por apenas "Obrigado!" no último slide. Também completamos os prints que a IA deixou marcados (Trello, commits e pull request).

## Sugestão recusada (para responder na banca)

A IA sugeriu publicar no **GitHub Pages**, porque o código já estava no GitHub. A equipe manteve a **Vercel**, que também é gratuita, gera HTTPS automático e publica a cada push. Ou seja: a IA não sabia do deploy que a equipe já tinha feito, e conferimos antes de aceitar.
