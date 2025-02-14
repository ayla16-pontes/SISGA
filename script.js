// Variável de controle para verificar se o usuário está autenticado
let isAuthenticated = false;

function authenticate(event) {
  event.preventDefault(); // Evita o recarregamento da página

  // Simulação de login bem-sucedido
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Verificação simples (substitua pela sua lógica de autenticação)
  if (username === "admin" && password === "1234") {
    alert('Login bem-sucedido!');
    navigate('home'); // Navega para a página inicial
    document.querySelector('.menu-toggle').classList.remove('hidden'); // Mostra o botão
  } else {
    alert('Usuário ou senha incorretos!');
  }
}

// Função para mostrar páginas e verificar autenticação
function navigate(section) {
  // Esconde todas as seções
  document.querySelectorAll('.page').forEach(page => {
    page.classList.remove('active');
  });

  // Mostra a seção desejada
  document.getElementById(section).classList.add('active');
}

// Função para alternar entre páginas
function showPage(pageId) {
  const pages = document.querySelectorAll('.page');
  pages.forEach(page => {
    page.classList.remove('active');
  });
  document.getElementById(pageId).classList.add('active');
}

// Função para exibir a página de atividades
function showAtividadePage() {
    if (isAuthenticated) {
        document.getElementById('login-page').style.display = 'none';
        document.getElementById('atividade-page').classList.add('active');
    }
}

// Função para alternar a visibilidade da interface de Agendamento de Aulas
function toggleAulasInterface() {
    const aulasContainer = document.getElementById('aulas-container');
    if (aulasContainer.classList.contains('hidden')) {
      aulasContainer.classList.remove('hidden');
    } else {
      aulasContainer.classList.add('hidden');
    }
  }
  
  // Função para adicionar uma aula à lista
  function addAula(event) {
    event.preventDefault(); // Evita o recarregamento da página
  
    // Obtém os valores do formulário
    const dataAula = document.getElementById('data-aula').value;
    const descricaoAula = document.getElementById('descricao-aula').value;
  
    // Valida se os campos foram preenchidos
    if (!dataAula || !descricaoAula) {
      alert('Por favor, preencha todos os campos!');
      return;
    }
  
    // Cria um novo item na lista
    const listaAulas = document.getElementById('lista-aulas');
    const novoItem = document.createElement('li');
    novoItem.textContent = `${dataAula} - ${descricaoAula}`;
  
    // Adiciona o item à lista
    listaAulas.appendChild(novoItem);
  
    // Limpa os campos do formulário
    document.getElementById('data-aula').value = '';
    document.getElementById('descricao-aula').value = '';
  }  

 // Função para alternar a visibilidade da interface de Participantes
function toggleParticipantesInterface() {
    const participantesContainer = document.getElementById('participantes-container');
    if (participantesContainer.classList.contains('hidden')) {
      participantesContainer.classList.remove('hidden');
    } else {
      participantesContainer.classList.add('hidden');
    }
  }
  
  // Função para adicionar um participante à lista
  function addParticipante(event) {
    event.preventDefault(); // Evita o recarregamento da página
  
    // Obtém os valores do formulário
    const nomeParticipante = document.getElementById('nome-participante').value;
    const idadeParticipante = document.getElementById('idade-participante').value;
    const cpfParticipante = document.getElementById('cpf-participante').value;
    const aulaParticipante = document.getElementById('aula-participante').value;
  
    // Valida se os campos foram preenchidos
    if (!nomeParticipante || !idadeParticipante || !cpfParticipante || !aulaParticipante) {
      alert('Por favor, preencha todos os campos!');
      return;
    }
  
    // Cria um novo item na lista
    const listaParticipantes = document.getElementById('lista-participantes');
    const novoItem = document.createElement('li');
    novoItem.textContent = `Nome: ${nomeParticipante}, Idade: ${idadeParticipante}, CPF: ${cpfParticipante}, Aula: ${aulaParticipante}`;
  
    // Adiciona o item à lista
    listaParticipantes.appendChild(novoItem);
  
    // Limpa os campos do formulário
    document.getElementById('nome-participante').value = '';
    document.getElementById('idade-participante').value = '';
    document.getElementById('cpf-participante').value = '';
    document.getElementById('aula-participante').value = '';
  }

 // Array para armazenar os relatórios salvos
const relatorios = [];

// Função para criar e salvar o relatório
function criarRelatorio(event) {
  event.preventDefault(); // Evita o recarregamento da página

  // Obtém os valores do formulário
  const tipoRelatorio = document.getElementById('tipo-relatorio').value;
  const conteudoRelatorio = document.getElementById('conteudo-relatorio').value;

  // Valida se os campos foram preenchidos
  if (!tipoRelatorio || !conteudoRelatorio) {
    alert('Por favor, preencha todos os campos!');
    return;
  }

  // Salva o relatório no array
  const novoRelatorio = {
    tipo: tipoRelatorio,
    conteudo: conteudoRelatorio,
    data: new Date().toLocaleString(),
  };
  relatorios.push(novoRelatorio);

  // Atualiza a exibição dos relatórios salvos
  exibirRelatorios();

  // Limpa o formulário após salvar
  document.getElementById('tipo-relatorio').value = '';
  document.getElementById('conteudo-relatorio').value = '';
}

// Função para exibir os relatórios salvos no sistema
function exibirRelatorios() {
  const listaRelatorios = document.getElementById('lista-relatorios');
  listaRelatorios.innerHTML = ''; // Limpa a lista antes de renderizar

  // Gera os relatórios dinamicamente
  relatorios.forEach((relatorio, index) => {
    const relatorioDiv = document.createElement('div');
    relatorioDiv.className = 'relatorio-item';

    relatorioDiv.innerHTML = `
      <h4>${relatorio.tipo} - ${relatorio.data}</h4>
      <p>${relatorio.conteudo}</p>
      <button onclick="removerRelatorio(${index})">Excluir Relatório</button>
    `;

    listaRelatorios.appendChild(relatorioDiv);
  });
}

// Função para remover um relatório
function removerRelatorio(index) {
  relatorios.splice(index, 1); // Remove o relatório do array
  exibirRelatorios(); // Atualiza a exibição
}

function toggleMenu() {
  const navbar = document.querySelector('.navbar');
  navbar.classList.toggle('active');
}

// Adicione um evento de clique para fechar o menu ao clicar em um link
document.querySelectorAll('.navbar a').forEach(link => {
  link.addEventListener('click', () => {
    const navbar = document.querySelector('.navbar');
    navbar.classList.remove('active'); // Fecha o menu ao clicar em um link
  });
});


  