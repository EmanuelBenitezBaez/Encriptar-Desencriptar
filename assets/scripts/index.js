const textarea = document.getElementById("textoIngresado");
const btnEncriptar = document.querySelector(".btn-encriptar");
const btnDesencriptar = document.querySelector(".btn-desencriptar");
const btnCopiar = document.querySelector(".btn-copiar");
const imgContent = document.querySelector(".img-content");
const mensaje = document.querySelector(".parrafos");


function encryptText() {
  let text = textarea.value.toLowerCase();
  text = text.replace(/e/g, "enter");
  text = text.replace(/i/g, "imes");
  text = text.replace(/a/g, "ai");
  text = text.replace(/o/g, "ober");
  text = text.replace(/u/g, "ufat");
  return text;
}



function decryptText() {
  let text = textarea.value.toLowerCase();
  text = text.replace(/enter/g, "e");
  text = text.replace(/imes/g, "i");
  text = text.replace(/ai/g, "a");
  text = text.replace(/ober/g, "o");
  text = text.replace(/ufat/g, "u");
  return text;
}


btnEncriptar.addEventListener("click", () => {
  const encryptedText = encryptText();
  textarea.value = encryptedText;
  mensaje.children[0].textContent = "Texto encriptado";
  mensaje.children[1].textContent = encryptedText;

});

btnDesencriptar.addEventListener("click", () => {
  const decryptedText = decryptText();
  textarea.value = decryptedText;
  mensaje.children[0].textContent = "Texto desencriptado";
  mensaje.children[1].textContent = decryptedText;
 
});

btnCopiar.addEventListener("click", () => {
  const textToCopy = textarea.value;
  navigator.clipboard.writeText(textToCopy).then(() => {
    alert("Texto copiado al portapapeles");
  });
});
