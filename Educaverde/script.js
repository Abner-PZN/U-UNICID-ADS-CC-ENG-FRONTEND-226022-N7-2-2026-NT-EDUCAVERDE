/* =========================================================
   EducaVerde - script.js
   Funcionalidades:
   1. Menu no celular (abrir/fechar)
   2. Alto contraste (preferência salva no localStorage)
   3. Formulário de contato: validação, rascunho no localStorage,
      contador de caracteres e botões de apoio
   4. Notícias: filtro por categoria e "Ler mais"
   5. EcoBot: assistente de perguntas frequentes
   ========================================================= */

document.addEventListener('DOMContentLoaded', () => {
  iniciarMenu();
  iniciarAltoContraste();
  iniciarFormulario();
  iniciarNoticias();
  iniciarEcoBot();
});

/* ---------- 1. MENU NO CELULAR ---------- */
function iniciarMenu() {
  const botao = document.querySelector('.menu-toggle');
  const menu = document.getElementById('menu-principal');
  if (!botao || !menu) return;

  botao.addEventListener('click', () => {
    // aria-expanded diz ao leitor de tela se o menu está aberto
    const aberto = botao.getAttribute('aria-expanded') === 'true';
    botao.setAttribute('aria-expanded', String(!aberto));
    menu.classList.toggle('aberto', !aberto);
  });

  // Tecla Esc fecha o menu e devolve o foco ao botão
  document.addEventListener('keydown', (evento) => {
    if (evento.key === 'Escape' && menu.classList.contains('aberto')) {
      botao.setAttribute('aria-expanded', 'false');
      menu.classList.remove('aberto');
      botao.focus();
    }
  });
}

/* ---------- 2. ALTO CONTRASTE ---------- */
function iniciarAltoContraste() {
  const CHAVE = 'educaverde-alto-contraste';
  const botao = document.querySelector('.contrast-toggle');

  // Lê a preferência salva. O try/catch evita erro se o navegador bloquear o localStorage.
  let ativo = false;
  try {
    ativo = localStorage.getItem(CHAVE) === 'sim';
  } catch (erro) { /* segue sem salvar */ }

  aplicar(ativo);

  if (!botao) return;
  botao.addEventListener('click', () => {
    ativo = !ativo;
    aplicar(ativo);
    try {
      localStorage.setItem(CHAVE, ativo ? 'sim' : 'nao');
    } catch (erro) { /* segue sem salvar */ }
  });

  function aplicar(ligado) {
    document.body.classList.toggle('alto-contraste', ligado);
    if (botao) botao.setAttribute('aria-pressed', String(ligado));
  }
}

/* ---------- 3. FORMULÁRIO DE CONTATO ---------- */
function iniciarFormulario() {
  const form = document.getElementById('form-contato');
  if (!form) return; // só existe na página contato.html

  const CHAVE_RASCUNHO = 'educaverde-rascunho-contato';
  const status = document.getElementById('form-status');
  const mensagem = document.getElementById('mensagem');
  const contador = document.getElementById('contador');

  // Mensagens de erro de cada campo (o que aparece embaixo do campo)
  const regras = {
    nome: (campo) => campo.value.trim().length < 3 ? 'Digite seu nome completo (mínimo 3 letras).' : '',
    email: (campo) => {
      if (!campo.value.trim()) return 'Digite seu e-mail.';
      return campo.validity.typeMismatch ? 'Digite um e-mail válido, como nome@exemplo.com.' : '';
    },
    telefone: (campo) => {
      if (!campo.value.trim()) return 'Digite seu telefone com DDD.';
      return campo.validity.patternMismatch ? 'Use o formato (11) 91234-5678.' : '';
    },
    assunto: (campo) => campo.value ? '' : 'Escolha um assunto.',
    mensagem: (campo) => campo.value.trim().length < 10 ? 'A mensagem precisa ter pelo menos 10 caracteres.' : '',
    aceite: (campo) => campo.checked ? '' : 'Marque esta opção para podermos responder.',
  };

  // Mostra ou limpa o erro de um campo. Retorna true se o campo está válido.
  function validarCampo(campo) {
    const erro = regras[campo.name](campo);
    const spanErro = document.getElementById('erro-' + campo.name);
    spanErro.textContent = erro;
    campo.classList.toggle('campo-invalido', erro !== ''); // borda em destaque (CSS)
    campo.setAttribute('aria-invalid', String(erro !== ''));
    return erro === '';
  }

  // --- Envio ---
  form.addEventListener('submit', (evento) => {
    evento.preventDefault(); // impede o envio padrão para validar com JS

    let primeiroInvalido = null;
    Object.keys(regras).forEach((nome) => {
      const campo = form.elements[nome];
      if (!validarCampo(campo) && !primeiroInvalido) primeiroInvalido = campo;
    });

    if (primeiroInvalido) {
      status.className = 'form-status erro';
      status.textContent = 'Confira os campos destacados em vermelho.';
      primeiroInvalido.focus(); // leva o usuário (e o leitor de tela) ao primeiro erro
      return;
    }

    // Tudo certo: como o site é estático, apenas simulamos o envio
    const nome = form.elements.nome.value.trim().split(' ')[0];
    status.className = 'form-status sucesso';
    status.textContent = `Obrigado, ${nome}! Sua mensagem foi registrada e responderemos em breve.`;
    form.reset();
    atualizarContador();
    try { localStorage.removeItem(CHAVE_RASCUNHO); } catch (erro) { /* ignora */ }
  });

  // --- Validação enquanto a pessoa corrige o campo ---
  form.addEventListener('input', (evento) => {
    const campo = evento.target;
    if (campo.classList.contains('campo-invalido')) validarCampo(campo);
    salvarRascunho();
  });
  form.addEventListener('change', salvarRascunho);

  // --- Rascunho no localStorage ---
  function salvarRascunho() {
    const dados = {
      nome: form.elements.nome.value,
      email: form.elements.email.value,
      telefone: form.elements.telefone.value,
      assunto: form.elements.assunto.value,
      mensagem: form.elements.mensagem.value,
    };
    try {
      localStorage.setItem(CHAVE_RASCUNHO, JSON.stringify(dados));
    } catch (erro) { /* ignora */ }
  }

  function carregarRascunho() {
    let dados = null;
    try {
      dados = JSON.parse(localStorage.getItem(CHAVE_RASCUNHO));
    } catch (erro) { /* ignora */ }
    if (!dados) return;

    Object.keys(dados).forEach((nome) => {
      if (form.elements[nome]) form.elements[nome].value = dados[nome];
    });
    status.className = 'form-status info';
    status.textContent = 'Recuperamos o rascunho que você começou a preencher.';
  }

  // --- Contador de caracteres da mensagem ---
  function atualizarContador() {
    contador.textContent = `${mensagem.value.length} de ${mensagem.maxLength} caracteres`;
  }
  mensagem.addEventListener('input', atualizarContador);

  // --- Botão "Limpar" ---
  document.getElementById('limpar-form').addEventListener('click', () => {
    form.reset();
    form.querySelectorAll('.campo-invalido').forEach((c) => {
      c.classList.remove('campo-invalido');
      c.setAttribute('aria-invalid', 'false');
    });
    form.querySelectorAll('.error-msg').forEach((s) => { s.textContent = ''; });
    status.className = 'form-status';
    status.textContent = '';
    atualizarContador();
    try { localStorage.removeItem(CHAVE_RASCUNHO); } catch (erro) { /* ignora */ }
  });

  // --- Botões da área "Como apoiar": preenchem o assunto e levam ao formulário ---
  document.querySelectorAll('.btn-apoio').forEach((botao) => {
    botao.addEventListener('click', () => {
      form.elements.assunto.value = botao.dataset.assunto;
      salvarRascunho();
      form.scrollIntoView({ behavior: 'smooth' });
      form.elements.nome.focus({ preventScroll: true });
    });
  });

  carregarRascunho();
  atualizarContador();
}

/* ---------- 4. NOTÍCIAS: FILTRO E "LER MAIS" ---------- */
function iniciarNoticias() {
  const botoesFiltro = document.querySelectorAll('.filter-btn');
  const cards = document.querySelectorAll('.news-card[data-categoria]');
  const statusFiltro = document.getElementById('filtro-status');

  botoesFiltro.forEach((botao) => {
    botao.addEventListener('click', () => {
      const filtro = botao.dataset.filtro;

      // Marca só o botão clicado como ativo
      botoesFiltro.forEach((b) => b.setAttribute('aria-pressed', String(b === botao)));

      // Mostra os cards da categoria escolhida (ou todos)
      let visiveis = 0;
      cards.forEach((card) => {
        const mostrar = filtro === 'todas' || card.dataset.categoria === filtro;
        card.hidden = !mostrar;
        if (mostrar) visiveis++;
      });

      if (statusFiltro) statusFiltro.textContent = `${visiveis} notícia(s) exibida(s).`;
    });
  });

  // "Ler mais" mostra/oculta o parágrafo extra de cada notícia
  document.querySelectorAll('.news-card .link-button').forEach((botao) => {
    botao.addEventListener('click', () => {
      const texto = document.getElementById(botao.getAttribute('aria-controls'));
      const aberto = botao.getAttribute('aria-expanded') === 'true';
      texto.hidden = aberto;
      botao.setAttribute('aria-expanded', String(!aberto));
      botao.textContent = aberto ? 'Ler mais' : 'Ler menos';
    });
  });
}

/* ---------- 5. ECOBOT (perguntas frequentes) ---------- */
function iniciarEcoBot() {
  // Respostas prontas: o EcoBot procura palavras-chave na pergunta
  const respostas = [
    { chaves: ['voluntari', 'ajudar', 'participar'], texto: 'Você pode ser voluntário(a)! Acesse a página Contato e escolha o assunto "Quero ser voluntário(a)".', link: 'contato.html#apoie' },
    { chaves: ['doar', 'doação', 'doacao', 'apoiar'], texto: 'Aceitamos doações de livros, sementes e materiais recicláveis. Veja a área "Como apoiar" na página Contato.', link: 'contato.html#apoie' },
    { chaves: ['acessib', 'deficiência', 'deficiencia', 'contraste', 'leitor'], texto: 'O site tem alto contraste (botão redondo no topo), navegação por teclado e textos alternativos. Veja a página Acessibilidade.', link: 'acessibilidade.html' },
    { chaves: ['projeto', 'horta', 'recicla'], texto: 'Temos projetos de hortas, reciclagem, arborização e formação de jovens. Conheça todos na página Projetos.', link: 'projetos.html' },
    { chaves: ['reciclar', 'lixo', 'resíduo', 'residuo'], texto: 'Dica: separe o lixo em reciclável (papel, plástico, metal e vidro limpos) e orgânico. O orgânico pode virar adubo na compostagem!' },
  ];
  const perguntasRapidas = ['Como ser voluntário?', 'Como doar?', 'Recursos de acessibilidade', 'Dica de reciclagem'];

  // Cria o botão e o painel do EcoBot via DOM (aparece em todas as páginas)
  const botao = document.createElement('button');
  botao.type = 'button';
  botao.className = 'ecobot-toggle';
  botao.setAttribute('aria-expanded', 'false');
  botao.setAttribute('aria-controls', 'ecobot-painel');
  botao.innerHTML = '<span aria-hidden="true">🌱</span> EcoBot';

  const painel = document.createElement('section');
  painel.id = 'ecobot-painel';
  painel.className = 'ecobot-painel';
  painel.hidden = true;
  painel.setAttribute('aria-label', 'EcoBot, assistente de perguntas frequentes');
  painel.innerHTML = `
    <p class="ecobot-titulo">Olá! Sou o EcoBot. Como posso ajudar?</p>
    <div class="ecobot-mensagens" aria-live="polite"></div>
    <div class="ecobot-rapidas"></div>
    <form class="ecobot-form">
      <label for="ecobot-pergunta" class="sr-only">Digite sua pergunta</label>
      <input id="ecobot-pergunta" type="text" placeholder="Digite sua pergunta" autocomplete="off">
      <button type="submit" class="btn btn-primary">Enviar</button>
    </form>`;

  document.body.append(botao, painel);

  const mensagens = painel.querySelector('.ecobot-mensagens');
  const campo = painel.querySelector('#ecobot-pergunta');

  perguntasRapidas.forEach((texto) => {
    const b = document.createElement('button');
    b.type = 'button';
    b.className = 'ecobot-chip';
    b.textContent = texto;
    b.addEventListener('click', () => responder(texto));
    painel.querySelector('.ecobot-rapidas').append(b);
  });

  botao.addEventListener('click', () => {
    const aberto = !painel.hidden;
    painel.hidden = aberto;
    botao.setAttribute('aria-expanded', String(!aberto));
    if (!aberto) campo.focus();
  });

  painel.querySelector('.ecobot-form').addEventListener('submit', (evento) => {
    evento.preventDefault();
    if (campo.value.trim()) responder(campo.value.trim());
    campo.value = '';
  });

  function responder(pergunta) {
    const texto = pergunta.toLowerCase();
    const achou = respostas.find((r) => r.chaves.some((chave) => texto.includes(chave)));

    adicionar('ecobot-usuario', pergunta);
    if (achou) {
      adicionar('ecobot-resposta', achou.texto, achou.link);
    } else {
      adicionar('ecobot-resposta', 'Ainda não sei responder isso. Envie sua dúvida pela página Contato!', 'contato.html');
    }
  }

  // textContent (e não innerHTML) evita que o texto digitado vire código na página
  function adicionar(classe, texto, link) {
    const p = document.createElement('p');
    p.className = classe;
    p.textContent = texto;
    if (link) {
      const a = document.createElement('a');
      a.href = link;
      a.textContent = 'Abrir página';
      p.append(' ', a);
    }
    mensagens.append(p);
    mensagens.scrollTop = mensagens.scrollHeight;
  }
}
