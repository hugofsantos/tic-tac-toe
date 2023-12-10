const dimensoes = ['3', '4', '5', '6', '7', '8', '9', '10'];

dimensoes.forEach((item) => {
  $('select').append('<option>' + item + '</option>');
});

onsubmit = () => {
  const select = document.getElementById('select');
  const form = document.getElementById('form');
  const dimensao = select.value;
  const modo = form.modo.value;
  form.action = `./tabuleiro.html?dimensao=${dimensao}&modo=${modo}`;
};