var button  = document.querySelectorAll("a");
button.forEach(btn=>{
    btn.addEventlistener("click",function(s){
        var z = s.clientX - s.target.offsetLeft;
        var y = s.clientY - s.target.offsetTop;

        var click = document.createElement("span");
        click.style.left = z + "px";
        click.style.left = y + "px";
        this.appendChild(click);

        setTimeout(()=>{
            click.remove()
        },800);
    })

});