var list = document.getElementById('list');
var button = document.getElementById('button');
var input = document.getElementById('input');

var count = 1;

button.addEventListener('click', clickButton)

function clickButton(){
    var li = document.createElement('li');
    
    li.setAttribute("class", "list-group-item");
    li.setAttribute("id","li"+count);

    li.innerHTML = input.value;
    li.innerHTML += "<button style='float:right; clear:right;' class='btn btn-outline-primary' type='button'  onclick='remove("+count+")'>delete</button>"
    li.innerHTML += "<button style='float:right;' class='btn btn-outline-secondary'type='button'  onclick='modify("+count+")'>modify</button>"

    list.appendChild(li);
    count = count + 1; //count++;(같은 의미)

    input.value = "";

    
}

function remove(count){
    var li = document.getElementById("li"+count);
    list.removeChild(li);
}

function modify(count){
    var li = document.getElementById("li"+count);
    var text = prompt("수정할 내용을 적어주세요");
    li.innerHTML = text;
    li.innerHTML += "<button style='float:right; clear:right;' class='btn btn-outline-primary' type='button'  onclick='remove("+count+")'>delete</button>"
    li.innerHTML += "<button style='float:right;' class='btn btn-outline-secondary'type='button'  onclick='modify("+count+")'>modify</button>"
}