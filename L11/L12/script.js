document.getElementById("openWindowLink").addEventListener("click", function(event) {
    event.preventDefault(); // Предотвращаем переход по ссылке
    var newWindow = window.open("", "NewWindow", "width=400,height=300"); // Открываем новое окно
    newWindow.document.write("<p>Привет, новое окно!</p>"); // Добавляем текст в новое окно
});
