
function finalizarCompra() {
  alert("✅ Compra finalizada com sucesso!\nObrigado por comprar na Aura Perfumes.");
  localStorage.removeItem("carrinho");
  window.location.href = "index.html";
}
