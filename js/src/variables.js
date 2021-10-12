const color = document.getElementById('color');
const salida = document.querySelector('#salida');
const boton = document.getElementById('btn-guardar');
const guardador = document.getElementById('guardador');
const listado = document.getElementById('listado');

const storage = JSON.parse(localStorage.getItem('colorValue')) || '#ffffff';
const colorList = JSON.parse(localStorage.getItem('colorList')) || [];
