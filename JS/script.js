var form = document.querySelector('form');
var usuario = document.getElementById('usuario');
var clave = document.getElementById('clave');
var submit = document.getElementById('submit');
var para = document.querySelector('p');

 
form.onsubmit = function(e) {
  if (usuario.value === '' || clave.value === '')  {
    e.preventDefault();
    para.textContent = 'Completá ambos datos!';
  }  
}