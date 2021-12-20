let name={
    firstname:"priya",
    lastname:"sabi",
}
let printfulname=function(state,country){
    console.log(this.firstname+" "+this.lastname+" from "+ state +"," + country )

}
printfulname.call(name,"pondycherry","India");
printfulname.apply(name,["pondycherry","India"])
let printmyname = printfulname.bind(name,"pondycherry","India");
console.log(printmyname);
printmyname();