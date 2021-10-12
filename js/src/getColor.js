const getColor = () => {
    guardador.innerHTML = colorList.length;

    listado.innerHTML = "";
    for (const color of colorList) {
        const itemList = document.createElement('li');
        itemList.className = 'item-lista';
        itemList.style.background = color;
        itemList.innerHTML = color;
        listado.appendChild(itemList);
    }
};