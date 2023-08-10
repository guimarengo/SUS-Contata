function tipoCompromisso(compromisso) {
    if (compromisso.consulta === true) {
      return "Consulta";
    } else if (compromisso.exame === true) {
      return "Exame";
    } else {
      return "Procedimento";
    }
  }
  
  let agendamento1 = {
    nome: "Cidadão Teste",
    data: "05/07/2023",
    horario: "08:00",
    compromisso: {
      consulta: true,
      exame: false,
      procedimento: false,
    },
    UBS: {
      nome: "UBS 1",
      logradouro: "Av. do Exemplo",
      numero: "123",
      bairro: "Saúde",
    },
  };
    
  let agendamento2 = {
    nome: "Cidadão Teste",
    data: "05/08/2023",
    horario: "08:30",
    compromisso: {
      consulta: false,
      exame: true,
      procedimento: false,
    },
    UBS: {
      nome: "UBS 2",
      logradouro: "Av. do Outro Exemplo",
      numero: "1234",
      bairro: "Saúde",
    },
  };
  
  let agendamento3 = {
    nome: "Cidadão Teste",
    data: "05/09/2023",
    horario: "10:00",
    compromisso: {
      consulta: false,
      exame: false,
      procedimento: true,
    },
    UBS: {
      nome: "UBS 3",
      logradouro: "Av. do Outro Outro Exemplo",
      numero: "321",
      bairro: "Saúde",
    },
  };

  agendamento1.tipo = tipoCompromisso(agendamento1.compromisso);
  agendamento2.tipo = tipoCompromisso(agendamento2.compromisso);
  agendamento3.tipo = tipoCompromisso(agendamento3.compromisso);

  document.addEventListener("DOMContentLoaded", () => {
    document.querySelector("#agendamento1").innerHTML = `${agendamento1.tipo} ${agendamento1.data}`
    document.querySelector("#agendamento2").innerHTML = `${agendamento2.tipo} ${agendamento2.data}`
    document.querySelector("#agendamento3").innerHTML = `${agendamento3.tipo} ${agendamento3.data}`
    document.querySelector("#descricao1").innerHTML = 
    `${agendamento1.tipo} no dia ${agendamento1.data} às ${agendamento1.horario}

${agendamento1.UBS.nome}: ${agendamento1.UBS.logradouro}, ${agendamento1.UBS.numero} - ${agendamento1.UBS.bairro}`
    document.querySelector("#descricao2").innerHTML = 
    `${agendamento2.tipo} no dia ${agendamento2.data} às ${agendamento2.horario}

${agendamento2.UBS.nome}: ${agendamento2.UBS.logradouro}, ${agendamento2.UBS.numero} - ${agendamento2.UBS.bairro}`
    document.querySelector("#descricao3").innerHTML = 
    `${agendamento3.tipo} no dia ${agendamento3.data} às ${agendamento3.horario}

${agendamento3.UBS.nome}: ${agendamento3.UBS.logradouro}, ${agendamento3.UBS.numero} - ${agendamento3.UBS.bairro}`
  });

  let calendarioIcone = document.querySelector("#calendar img")
  let calendar = document.querySelector("#calendar")
  let detalhes1 = document.querySelector("#detalhes1")
  let detalhes2 = document.querySelector("#detalhes2")
  let detalhes3 = document.querySelector("#detalhes3")
  let divDetalhes1 = document.querySelector("#divDetalhes1")
  let divDetalhes2 = document.querySelector("#divDetalhes2")
  let divDetalhes3 = document.querySelector("#divDetalhes3")
  let iframe = document.querySelector("#calendario-google")

detalhes1.addEventListener('click', function() {
  if (divDetalhes1.style.display === 'block') {
    divDetalhes1.style.display = 'none';
  } else {
    divDetalhes1.style.display = 'block';
    divDetalhes1.style.transform = 'none';
  }
});
detalhes2.addEventListener('click', function() {
  if (divDetalhes2.style.display === 'block') {
    divDetalhes2.style.display = 'none';
  } else {
    divDetalhes2.style.display = 'block';
    divDetalhes2.style.transform = 'none';
  }
});
detalhes3.addEventListener('click', function() {
  if (divDetalhes3.style.display === 'block') {
    divDetalhes3.style.display = 'none';
  } else {
    divDetalhes3.style.display = 'block';
    divDetalhes3.style.transform = 'none';
  }
});

calendar.addEventListener('click', function() {
  if (iframe.style.display === 'block') {
    iframe.style.display = 'none';
  } else {
    iframe.style.display = 'block';
    iframe.style.transform = 'none';
  }
});

calendar.iframe.display.addEventListener("change", () => {
  iframe.style.translate = "200px"
})