
document.querySelector("#conecta").addEventListener("click", () => {
    if (document.querySelector("input[name='optLogin']:checked").value == "cidadao") {
      window.location.href = "./agendamentos.html";
    } else if (document.querySelector("input[name='optLogin']:checked").value == "administrativo") {
      window.location.href = "./agendamentos-adm.html";
    }
  });  
