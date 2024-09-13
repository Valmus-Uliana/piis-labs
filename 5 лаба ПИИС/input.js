document.addEventListener('DOMContentLoaded', () => {
    // Выбираем все элементы с классом 'target'
    const targets = document.querySelectorAll('.target');
    let draggedElement = null; // Переменная для хранения перетаскиваемого элемента
    let isSticky = false; // Флаг для проверки, приклеен ли элемент
  
    // Проходим по каждому элементу с классом 'target'
    targets.forEach(target => {
      // Добавляем обработчик события mousedown для каждого элемента
      target.addEventListener('mousedown', (e) => {
        if (!isSticky) { // Если элемент не приклеен
          draggedElement = target; // Устанавливаем перетаскиваемый элемент
          draggedElement.style.position = 'absolute'; // Делаем позицию элемента абсолютной
          moveAt(e.pageX, e.pageY); // Перемещаем элемент к позиции курсора
        }
      });
  
      // Добавляем обработчик события dblclick для каждого элемента
      target.addEventListener('dblclick', (e) => {
        if (!isSticky) { // Если элемент не приклеен
          isSticky = true; // Устанавливаем флаг приклеивания в true
          draggedElement = target; // Устанавливаем перетаскиваемый элемент
          draggedElement.style.position = 'absolute'; // Делаем позицию элемента абсолютной
          draggedElement.style.backgroundColor = 'yellow'; // Изменяем цвет фона на желтый
          moveAt(e.pageX, e.pageY); // Перемещаем элемент к позиции курсора
        } else { // Если элемент уже приклеен
          isSticky = false; // Устанавливаем флаг приклеивания в false
          draggedElement.style.backgroundColor = ''; // Сбрасываем цвет фона
          draggedElement = null; // Очищаем перетаскиваемый элемент
        }
      });
  
      // Добавляем обработчик события mouseup для каждого элемента
      target.addEventListener('mouseup', () => {
        if (!isSticky) { // Если элемент не приклеен
          draggedElement = null; // Очищаем перетаскиваемый элемент
        }
      });
    });
  
    // Добавляем обработчик события mousemove для документа
    document.addEventListener('mousemove', (e) => {
      if (draggedElement) { // Если есть перетаскиваемый элемент
        moveAt(e.pageX, e.pageY); // Перемещаем элемент к позиции курсора
      }
    });
  
    // Добавляем обработчик события keydown для документа
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && draggedElement) { // Если нажата клавиша Escape и есть перетаскиваемый элемент
        draggedElement.style.backgroundColor = ''; // Сбрасываем цвет фона
        draggedElement = null; // Очищаем перетаскиваемый элемент
        isSticky = false; // Устанавливаем флаг приклеивания в false
      }
    });
  
    // Функция для перемещения элемента к указанной позиции
    function moveAt(pageX, pageY) {
      if (draggedElement) { // Если есть перетаскиваемый элемент
        draggedElement.style.left = pageX - draggedElement.offsetWidth / 2 + 'px'; // Устанавливаем левую позицию
        draggedElement.style.top = pageY - draggedElement.offsetHeight / 2 + 'px'; // Устанавливаем верхнюю позицию
      }
    }
  });
  