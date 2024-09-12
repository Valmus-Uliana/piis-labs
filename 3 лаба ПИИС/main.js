import shirts from '/shirts.js';

function generateContent() {
    const container = document.getElementById('shirts-container');

    shirts.forEach(shirt => {
        const shirtElement = document.createElement('div');
        shirtElement.className = 'shirt';

        const img = document.createElement('img');
        const defaultColor = shirt.colors.white || shirt.default;
        img.src = defaultColor.front ;
        img.alt = shirt.name || 'Изображение отсутствует';
        shirtElement.appendChild(img);

        const title = document.createElement('h2');
        title.textContent = shirt.name || 'Без названия';
        shirtElement.appendChild(title);

        const description = document.createElement('p');
        description.textContent = shirt.description || 'Описание отсутствует';
        shirtElement.appendChild(description);

        const button = document.createElement('button');
        button.textContent = 'See Page';
        shirtElement.appendChild(button);

        container.appendChild(shirtElement);
    });
}

//при загрузке страницы будет выполняться эта функция
window.onload = generateContent;