//hides output 
document.getElementById("output").style.visibility = "hidden";

input = document.getElementById("input").addEventListener("input", function(e){
    //output visible
    document.getElementById("output").style.visibility = "visible";
    let input = e.target.value;
    
    switch(document.getElementById("select-weight").selectedIndex){
        case 0:
         return alert("Please select unit");
        break;
        case 1 :
           var pounds = input;
           var grams = input/0.0022046;
           var kg = input/2.2046;
           var oz = input * 16;
         break;
         case 2:
          var pounds = input * 0.0022046;
           var grams = input;
           var kg = pounds/2.2046;
           var oz = pounds * 16;
         break;
         case 3:
            var pounds = input * 2.205
            var grams = input * 1000;
            var kg = input
            var oz = input * 35.274
            ;
         break;
         case 4:
            var pounds = input / 16
            var grams = input * 28.35;
            var kg = input / 35.274
            var oz = input 
            ;
         break;
        
     }

     document.getElementById("lbsOutput").innerHTML = pounds;
     document.getElementById("gramsOutput").innerHTML = grams;
     document.getElementById("kgOutput").innerHTML = kg;
     document.getElementById("ozOutput").innerHTML = oz;
})