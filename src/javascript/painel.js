const imagens = document.querySelectorAll(".slider-box");
const setaVoltar = document.getElementById("seta-voltar");
const setaAvancar = document.getElementById("seta-avancar");

let imagemAtual = 0;

setaAvancar.addEventListener("click", function () {
  if (imagemAtual === imagens.length - 1) {
    return;
  }

  esconderImagemAberta();

  imagemAtual++;
  imagens[imagemAtual].classList.add("ativo");

  mostrarOuEsconderSetas();
});

setaVoltar.addEventListener("click", function () {
  if (imagemAtual === 0) {
    return;
  }

  esconderImagemAberta();

  imagemAtual--;
  imagens[imagemAtual].classList.add("ativo");

  mostrarOuEsconderSetas();
});

function esconderImagemAberta() {
  const imagemAberta = document.querySelector(".ativo");
  imagemAberta.classList.remove("ativo");
}

function mostrarOuEsconderSetas() {
  const naoEhAPrimeiraImagem = imagemAtual !== 0;
  if (naoEhAPrimeiraImagem) {
    setaVoltar.classList.remove("opacidade");
  } else {
    setaVoltar.classList.add("opacidade");
  }

  const ultimaImagem = imagemAtual === imagens.length - 1;
  if (ultimaImagem) {
    setaAvancar.classList.add("opacidade");
  } else {
    setaAvancar.classList.remove("opacidade");
  }
}
