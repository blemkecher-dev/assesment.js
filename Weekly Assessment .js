console.log("//______________________________Exercice1: Water the plant with a for Loop")
function plantIsWatered(cups){
    let poured = 0;
    const needed=4;
    let watered=false;
    for( let i= 1;i<=cups ; i++ )
        {poured+=1}
   watered = poured >= needed;
   {return "watered"}


}
//LOGS
console.log(plantIsWatered(3));
console.log(plantIsWatered(4));
console.log("______________________________________________Exercice2_______________")
function plantIsWateredWhile(cups){
    let poured = 0;
    const needed=4;
    let watered=false;
    let counter=1;
    while(counter<=cups)
        {poured+=1;}
}

