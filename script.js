function hello(){
    for (i = 99;i > 0;i=i-1) {
        if (i > 1) {
            document.getElementById("main").innerHTML+=(i + " bottles of beer on the wall, " + i + " bottles of beer");
            document.getElementById("main").innerHTML+=(" Take one down, pass it around, " + (i - 1) + " bottles of beer on the wall. " );
        } else {
            document.getElementById("main").innerHTML+=(i + " bottle of beer on the wall, " + i + " bottle of beer. ");
            document.getElementById("main").innerHTML+=("Take one down, pass it around, " + " no more bottles of beer . ");
            document.getElementById("main").innerHTML+=("Go to the store and buy some more, 99 bottles of beer on the wall. ");
        }
    }
    
}