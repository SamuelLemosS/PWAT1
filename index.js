const digitar = document.getElementById("digitar");
const bt = document.getElementById("bt");
const value = document.getElementById("value");

const click = () => {
    var vetor=[];
    var tarefa=digitar.value;
    vetor.push(tarefa);
    for(i=0;i<vetor.length;i++){
        value.innerHTML += "<li>Tarefa"+i+ " = "+vetor[i]+ "<br /></li>";
    }
}

bt.onclick = click;
