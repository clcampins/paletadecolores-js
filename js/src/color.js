color.value = storage;


getColor();
setColor();

color.addEventListener('input', setColor);
//color.addEventListener('change', () => saveColor(color.value));
boton.addEventListener('click', () => saveColor(color.value));


