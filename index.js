var Drake = function() {
    var R = parseFloat(document.getElementById('R').value);
    var fp = parseFloat(document.getElementById('fp').value); 
    var ne = parseFloat(document.getElementById('ne').value);
    var fe = parseFloat(document.getElementById('fe').value);
    var fi = parseFloat(document.getElementById('fi').value);
    var fc = parseFloat(document.getElementById('fc').value);
    var L = parseFloat(document.getElementById('L').value);
    
    var output = document.getElementById('output');


    if(isNaN(R) || isNaN(fp) || isNaN(ne) || isNaN(fe) || isNaN(fi) || isNaN(fc) || isNaN(L)) {
        output.textContent = "Please enter numbers only";
    }   else{
        var result = R * 0.01 * fp * ne * fe * 0.01 * fi * 0.01 * fc * 0.01 * L
        
        output.textContent = "Your Result is " + result.toFixed(5) + " civillisations are out there";
    }
        
};


