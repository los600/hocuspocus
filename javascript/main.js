let cardsCake = [
  {
    nombre: "Bloody cake",
    peso: "300gr",
    precio: "22€",
    img: "./images/Blood cake.jpg",
  },
  {
    nombre: "Ghost cake",
    peso: "250gr",
    precio: "23€",
    img: "./images/ghostcake.png",
  },
  {
    nombre: "Pumpkin cake",
    peso: "280gr",
    precio: "28€",
    img: "./images/pumpkin.png",
  },
  {
    nombre: "Spider cake",
    peso: "210gr",
    precio: "35€",
    img: "./images/spidercake.png",
  },
];

let DOMcardsCake = document.getElementById("DOMcakes");

function printCards(object) {
  DOMcardsCake.innerHTML += `<div class="cakeShow__card">
  <img src="${object.img}" class="carta-imagen" />
  <div class="information">
    <h3 class="nombre">${object.nombre}</h3>
    <p class="precio">${object.precio}</p>
    <p2 class="peso">${object.peso}</p2>
    <a href="#">
      <img
        class="infologo"
        src="./images/iconinfo.png"
        alt="info"
      />
    </a>
    <button class="addbutton">add</button>
  </div>
</div>`;
}

function loadCards() {
  DOMcardsCake.innerHTML = "";
  cardsCake.forEach((object) => printCards(object));
}

loadCards();
