function addUser() {
    player1_name = document.getElementById("player1_name_input").value;
    player2_name = document.getElementById("player2_name_input").value;
    localStorage.setItem("player1_name",player1_name);
    localStorage.setItem("player2_name",player2_name);
    window.location = "game_page.html";
}
function send()
{
    number1 = document.getElementById("nuber1").value;
    number2 = document.getElementById("nuber2").value;
    actual_answer = parseInt(number1) * parseInt(number2);
    question_number = "<h4>" +"X"+"</h4>";
  0  input_box = "<br><br><button class='btn btn-info' onclick='input_check_box'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>check</button>";
row = question_number + input_box + check_button ;
document.getElementById("output").innerHTML = row;
document.getElementById("number1").value = "";
document.getElementById("number2").value = "";
}