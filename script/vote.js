

function func()
{
    var n = document.getElementById("jk").value;
    document.getElementById("jk").style.display = "none";
    document.getElementById("k").style.display = "none";
   document.getElementById("main").style.display = "flex";
   var m = document.getElementById("j");
   while (m.hasChildNodes()) {
    m.removeChild(m.lastChild);
        }
    for(i=0;i<n;i++)
    {
        var newlabel = document.createElement("label");
        newlabel.setAttribute("class","custom-radio");
        m.appendChild(newlabel);
        var t = document.createElement("input");
        t.type = "radio";
        t.name = "radio";
        newlabel.appendChild(t);
        var e = document.createElement("span");
        e.setAttribute("class","radio-btn");
        newlabel.appendChild(e);
        var b = document.createElement("i");
        b.setAttribute("class","fas fa-vote-yea");
        e.appendChild(b);
        var h = document.createElement("h2");
        h.innerText = "Holaaaaa";
        e.appendChild(h);

    }
}