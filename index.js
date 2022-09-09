const digitar = document.getElementById("digitar");
const bt = document.getElementById("bt");
const value = document.getElementById("value");
var vetor=[];

const click = () => {
    var tarefa=digitar.value;
    vetor.push(tarefa);
    console.log(vetor)
    value.innerHTML=""
    for(i=0;i<vetor.length;i++){
        value.innerHTML += "<li>Tarefa "+(i+1)+ " = "+vetor[i]+ "<br /></li>";
    }
}

bt.onclick = click;
