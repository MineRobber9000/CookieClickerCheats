function FreeStuff(){
    Object.keys(Buyables).forEach(function (e) {
        Buyables[e].price = 0;
    });
    StoreToRebuild = 1;
}

function CookieClickAuto(number1, number2){
    click = setInterval(ClickCookie, number1);
    setTimeout(function(){ clearInterval(click) }, number2 * 1000)
}
