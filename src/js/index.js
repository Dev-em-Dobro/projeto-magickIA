// Objetivo principal - Baseado nas categorias e no preço máximo do produto, o usuário poderá filtrar as cartas que deseja visualizar

const cartas = document.querySelectorAll(".carta");
const botaoFiltrar = document.querySelector(".btn-filtrar");

function filtrarCartas() {
  const categoria = document.querySelector("#categoria").value;
  const precoMaximo = document.querySelector("#preco").value;

  if (precoMaximo != "" && precoMaximo <= 0) return;

  cartas.forEach((carta) => {
    if (deveMostrarCarta(carta, categoria, precoMaximo)) {
      mostrarCarta(carta);
    } else {
      esconderCarta(carta);
    }
  });
}

function deveMostrarCarta(carta, categoria, precoMaximo) {
  const categoriaCarta = carta.dataset.categoria; // Acessa o atributo data-categoria
  const precoCarta = parseFloat(carta.dataset.preco); // Acessa o atributo data-preco

  const correspondeCategoria =
    !categoria || categoriaCarta.toLowerCase() === categoria.toLowerCase();
  const correspondePreco =
    !precoMaximo || precoCarta <= parseFloat(precoMaximo);

  return correspondeCategoria && correspondePreco;
}

function mostrarCarta(carta) {
  carta.classList.add("mostrar");
  carta.classList.remove("esconder");
}

function esconderCarta(carta) {
  carta.classList.add("esconder");
  carta.classList.remove("mostrar");
}

botaoFiltrar.addEventListener("click", filtrarCartas);
