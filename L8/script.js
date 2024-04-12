// Добавляем обработчик события, который срабатывает, когда весь HTML-документ загружен и разобран браузером
document.addEventListener("DOMContentLoaded", function() {
    // Выбираем все элементы списка меню внутри тега <nav> и сохраняем их в переменную menuItems
    var menuItems = document.querySelectorAll("nav ul li");
    // Для каждого элемента списка меню добавляем обработчик события "click"
    menuItems.forEach(function(item) {
        // Обработчик события "click" для элемента списка меню
        item.addEventListener("click", function(event) {
            // Ищем подменю (элемент <ul>) внутри текущего элемента списка меню
            var submenu = this.querySelector("ul");
            // Если подменю найдено
            if (submenu) {
                // Предотвращаем стандартное действие ссылки (переход по адресу в href)
                event.preventDefault();
                // Изменяем стиль отображения подменю на противоположный (если подменю скрыто, отображаем его, и наоборот)
                submenu.style.display = (submenu.style.display === "block") ? "none" : "block";
            }
        });
    });
});
