# Orçamento de hospedagem e domínio

A versão completa, com tabelas, está publicada em `Educaverde/orcamento_hospedagem.html`.

## Plataformas de deploy avaliadas

| Plataforma | Custo | HTTPS | Integração com GitHub | Observação |
|---|---|---|---|---|
| **Vercel (escolhida)** | Plano gratuito | Automático | Sim, novo deploy a cada push | Já configurada pela equipe: https://educaverde2.vercel.app/ |
| GitHub Pages | Gratuito | Automático | Nativa | Também serviria; site de até 1 GB e cerca de 100 GB de tráfego por mês |
| Netlify | Plano gratuito | Automático | Sim | Exige conta e conexão em outro serviço |
| Railway | Créditos limitados | Automático | Sim | Voltada a aplicações com servidor |

## Justificativa da escolha

O site é estático (HTML, CSS e JavaScript), sem servidor nem banco de dados. A Vercel é ligada ao repositório da equipe no GitHub: a cada push na main ela publica a versão nova, gera HTTPS automaticamente e não tem custo no plano gratuito. Também tem menor impacto ambiental: páginas leves servidas por CDN, sem servidor ligado o tempo todo.

## Custo para manter no ar

| Item | Custo |
|---|---|
| Hospedagem (Vercel, plano gratuito) | R$ 0 |
| Certificado HTTPS | R$ 0 |
| Domínio próprio (opcional) | cerca de R$ 40/ano no Registro.br (.org.br exige CNPJ de ONG) |
| **Total do primeiro ano** | **R$ 0** (ou cerca de R$ 40 com domínio próprio) |

## Planos pagos, se o projeto crescer (referência)

| Plano | Hospedagem | Domínio | SSL | Valor mensal |
|---|---|---|---|---|
| Básico | Compartilhada | .com.br | Incluso | R$ 29,90 |
| Profissional | VPS leve | .org.br | Incluso | R$ 79,90 |
| Avançado | Cloud | .com | Incluso | R$ 149,90 |

Fontes consultadas em 09/11/2026: documentação do GitHub Pages (limites de uso, para comparação) e Registro.br (preço de domínios .br).
