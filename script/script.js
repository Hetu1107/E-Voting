var vote = document.getElementById("id");
var v = document.getElementById("vote");
var host = document.getElementById("host");
var join = document.getElementById("join_voting")
function join_voting(){
    vote.style.display = "block";
    v.style.display = "none";
    host.style.display = "none";
    join.style.display = "block";
}

function addFields(){
    var number = document.getElementById("member").value;
    var container = document.getElementById("container");
    while (container.hasChildNodes()) {
        container.removeChild(container.lastChild);
    }
    for (i=0;i<number;i++){
        container.appendChild(document.createTextNode("Option " + (i+1)));
        var input = document.createElement("input");
        input.type = "text";
        input.name = "member" + i;
        input.placeholder = "enter name...."
        container.appendChild(input);
        input.style.marginTop = "10px";
        // Append a line break 
        container.appendChild(document.createElement("br"));
    }
}