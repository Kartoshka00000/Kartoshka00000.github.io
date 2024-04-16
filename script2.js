// Создаем объект для хранения данных пользователя
var userData = {
    name: "",
    email: "",
    message: ""
};

// Функция для обновления объекта данных пользователя
function updateUserData() {
    userData.name = document.getElementById("name").value;
    userData.email = document.getElementById("email").value;
    userData.message = document.getElementById("message").value;
}

// Функция для отображения данных пользователя на странице
function showUserData() {
    document.getElementById("userData").innerHTML = "<p><strong>Имя:</strong> " + userData.name + "</p>" +
                                                      "<p><strong>Email:</strong> " + userData.email + "</p>" +
                                                      "<p><strong>Сообщение:</strong> " + userData.message + "</p>";
}

// Обработчик отправки формы
document.getElementById("userForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Предотвращаем отправку формы
    updateUserData(); // Обновляем данные пользователя
    document.getElementById("userForm").reset(); // Очищаем форму
});

// Обработчик нажатия кнопки "Показать данные"
document.getElementById("showDataButton").addEventListener("click", function() {
    showUserData(); // Показываем данные пользователя
});
