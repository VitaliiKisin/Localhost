function go()
{
var name = document.getElementById("name").value
var age = document.getElementById("age").value
var review = document.getElementById("review").value

var str = `Привет: ${name}, вам: ${age}, ваш отзыв: ${review}.   `;

if (age >= 16 && age < 70) { 
 str = str + "И вам все можно"
} else {
 str = str + "Вам надо подрасти"
};

        document.getElementById( "out" ).innerText = str;
        document.getElementById( "name" ).value = "";
        document.getElementById( "age" ).value = "";
        document.getElementById( "review" ).value = "";
    
}
//function send()
//{
    //var message = document.getElementById('text').value;
    
    ////console.log(text);
    //(async () => {
        //var response = await fetch('chat.php?message=' + message);
        //var answer = await response.text();
        
    //}
//)();


    //document.getElementById('text').value = "";
   
//}
//function get() {
    //(async () => {
        //var response = await fetch('chat.php');
        //var answer = await response.text();
        //document.getElementById('messages').innerText = answer;
    //}
//)();
//}
 
