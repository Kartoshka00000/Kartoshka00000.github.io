function calculateSum() {
    var number = document.getElementById("numberInput").value;
    var sum = sumDigits(number);
    document.getElementById("result").innerHTML = "Сумма цифр числа: " + sum;
}

function sumDigits(number) {
    var sum = 0;
    while (number > 0) {
        sum += number % 10; // Получаем последнюю цифру числа и добавляем её к сумме
        number = Math.floor(number / 10); // Удаляем последнюю цифру из числа
    }
    return sum;
}
