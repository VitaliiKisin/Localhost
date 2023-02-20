function go()
{
var name = document.getElementById("name").value
var age = document.getElementById('age').value
var review = document.getElementById("review").value

var str = 'Привет: ${name}, вам: $age, ваш отзыв: ${review}';

if (age >= 16 && age < 70) {
 str = str + 'И вам все можно'
} else {
 str = str + 'Вам надо подрасти'
};

document.getElementById("out").innerText = str;
document.getElementById("name").value = "";
document.getElementById(review).value = ""
}

 
