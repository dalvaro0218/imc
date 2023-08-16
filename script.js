// variables
const form = document.querySelector("form");
const inputWeight = document.querySelector("#weight");
const inputHeight = document.querySelector("#height");

const modalWrapper = document.querySelector(".modal-wrapper");
const modalMessage = document.querySelector(".modal .title span");
const modalBtnClose = document.querySelector(".modal button.close");

const Modal = {
  wrapper: document.querySelector(".modal-wrapper"),
  message: document.querySelector(".modal .title span"),
  buttonClose: document.querySelector(".modal button.close"),

  open() {
    Modal.wrapper.classList.add("open");
  },
  close() {
    Modal.wrapper.classList.remove("open");
  },
};

function calcIMC(weight, height) {
  // formatei o que vem como parâmetro para number
  // pois os parâmetros vem como string
  // assim evita do JS calcular de forma errada
  return (Number(weight) / (Number(height) / 100) ** 2).toFixed(2);
}

form.onsubmit = (event) => {
  event.preventDefault();

  const weight = inputWeight.value; // value estava com letra a maiúscula "Value"
  const height = inputHeight.value;

  const result = calcIMC(weight, height);

  const message = `Seu IMC é de ${result}`;

  Modal.message.innerText = message;
  Modal.open();
};

Modal.buttonClose.onclick = () => {
  Modal.close();
};
