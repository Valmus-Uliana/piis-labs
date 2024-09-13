const shirts = [{
    "name": "Beep Boop",
    "description": "Once upon a time, a mighty guide guarded the intersection of Forbes and Morewood, and would dutifully direct distracted college students when it was safe to cross the street. Its voice was soothing, strong, and steady. Its name was beep boop.",
    "price": "$19.99",
    "colors": {
        "white": {
            "front": "shirt_images/beepboop-white-front.png",
            "back": "shirt_images/beepboop-white-back.png"
        },
        "blue": {
            "front": "shirt_images/beepboop-blue-front.png",
            "back": "shirt_images/beepboop-blue-back.png"
        },
        "pink": {
            "front": "shirt_images/beepboop-pink-front.png",
            "back": "shirt_images/beepboop-pink-back.png"
        },
        "red": {
            "front": "shirt_images/beepboop-red-front.png",
            "back": "shirt_images/beepboop-red-back.png"
        }
    },
    "default": {
        "front": "shirt_images/default-m-front.png",
        "back": "shirt_images/default-m-back.png"
    }
},
{
    "name": "Car",
    "description": "As you move in to campus, one of the first memories so many students have is driving up to their dorm, unloading their bags, and moving in. How do they arrive to campus? By car, of course!",
    "price": "$10.99",
    "colors": {
        "white": {
            "front": "shirt_images/car-white-front.png",
            "back": "shirt_images/car-white-back.png"
        },
        "blue": {
            "front": "shirt_images/car-blue-front.png",
            "back": "shirt_images/car-blue-back.png"
        },
        "green": {
            "front": "shirt_images/car-green-front.png",
            "back": "shirt_images/car-green-back.png"
        },
        "yellow": {
            "front": "shirt_images/car-yellow-front.png",
            "back": "shirt_images/car-yellow-back.png"
        },
        "red": {
            "front": "shirt_images/car-red-front.png",
            "back": "shirt_images/car-red-back.png"
        }
    },
    "default": {
        "front": "shirt_images/default-w-front.png",
        "back": "shirt_images/default-w-back.png"
    }
},
{
    "name": "Forever Plaid",
    "price": "$13.99",
    "description": "Proudly wear your tartan plaid as a patch on your front shirt pocket. And on the back, ask the important question that all CMU students should know the answer to: got plaid?",
    "colors": {
        "white": {
            "front": "shirt_images/plaid-white-front.png",
            "back": "shirt_images/plaid-white-back.png"
        },
        "pink": {
            "front": "shirt_images/plaid-pink-front.png",
            "back": "shirt_images/plaid-pink-back.png"
        }
    },
    "default": {
        "front": "shirt_images/default-w-front.png",
        "back": "shirt_images/default-w-back.png"
    }
},
{
    "name": "BSUIR",
    "description": "BSUIR mission is to train engineers and scientists capable of generating and implementing innovative ideas, creating competitive high technology products in the spheres of computer science and electronics.",
    "price": "$6.99",
    "colors": {
        "white": {
            "front": "shirt_images/bsuir-white-front.png",
            "back": "shirt_images/bsuir-white-back.png"
        }
    },
    "default": {
        "front": "shirt_images/default-m-front.png",
        "back": "shirt_images/default-m-back.png"
    }
}];

// Ждем полной загрузки DOM перед выполнением кода
document.addEventListener('DOMContentLoaded', () => {
    // Получаем контейнер для отображения деталей рубашки
    const detailsContainer = document.getElementById('details-container');
    // Получаем индекс выбранной рубашки из localStorage
    const selectedShirtIndex = localStorage.getItem('selectedShirt');
    // Получаем данные о выбранной рубашке из массива shirts
    const selectedShirt = shirts[selectedShirtIndex];

    // Проверяем, есть ли выбранная рубашка
    if (selectedShirt) {
        // Генерируем HTML-контент для отображения деталей рубашки
        detailsContainer.innerHTML = `
            <h2>${selectedShirt.name}</h2>
            <img src="${selectedShirt.colors.white.front}" alt="${selectedShirt.name}">
            <p>Price: ${selectedShirt.price}</p>
            <p>${selectedShirt.description}</p>
            <div>
                <button onclick="showFront()">Front</button>
                <button onclick="showBack()">Back</button>
            </div>
            <div id="color-buttons"></div>
        `;

        // Получаем контейнер для кнопок выбора цвета
        const colorButtonsContainer = document.getElementById('color-buttons');
        // Создаем кнопки для каждого доступного цвета рубашки
        Object.keys(selectedShirt.colors).forEach(color => { //вернет массив всех ключей (названий цветов) этого объекта.
            const button = document.createElement('button');
            button.style.backgroundColor = color;
            button.textContent = color;
            button.onclick = () => changeColor(color);
            colorButtonsContainer.appendChild(button);
        });
    } else {
        // Если рубашка не выбрана, отображаем сообщение
        detailsContainer.innerHTML = '<p>No shirt selected.</p>';
    }
});

// Функция для отображения передней стороны рубашки
function showFront() {
    const selectedShirtIndex = localStorage.getItem('selectedShirt');
    const selectedShirt = shirts[selectedShirtIndex];
    document.querySelector('img').src = selectedShirt.colors.white.front;
}

// Функция для отображения задней стороны рубашки
function showBack() {
    const selectedShirtIndex = localStorage.getItem('selectedShirt');
    const selectedShirt = shirts[selectedShirtIndex];
    document.querySelector('img').src = selectedShirt.colors.white.back;
}

// Функция для изменения цвета рубашки
function changeColor(color) {
    const selectedShirtIndex = localStorage.getItem('selectedShirt');
    const selectedShirt = shirts[selectedShirtIndex];
    document.querySelector('img').src = selectedShirt.colors[color].front;
}
