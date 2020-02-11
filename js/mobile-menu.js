function menuToggle(){
    // document.getElementById("test").style.display = "none";

    var x = document.getElementById("test");
    if(x.style.display === "none"){
        x.style.display = "flex";
    }
    else{
        x.style.display = "none";
    }
}