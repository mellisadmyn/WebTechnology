function compute() {
    /*in javascript
    document.getElementById("term1").innerHTML = "The First Term (a)";
    document.getElementById("distance").innerHTML = "The Distance (b)";
    document.getElementById("term_nth").innerHTML = "The n-th Term You're Looking For (n)";
    */
    
    //in jquery
    $("#term1").html("The First Term (a)");
    $("#distance").html("The Distance (b)");
    $("#term_nth").html("The n-th Term You're Looking For (n)");

    //initialize variable
    var result = 0;

    /*
    declare each parameter 
    use parseFLoat to change the data type 
    change the string in the input text term1, distance, and term_nth to float
    */
    
    /*in javascript
    var term1 = parseFloat(document.FormReg.term1.value);
    var distance = parseFloat(document.FormReg.distance.value);
    var term_nth = parseFloat(document.FormReg.term_nth.value);
    */

    //in jquery
    var term1 = parseFloat($("input[name='term1']").val());
    var distance = parseFloat($("input[name='distance']").val());
    var term_nth = parseFloat($("input[name='term_nth']").val());

    //the formula
    result = term1 + (term_nth - 1) * distance;
    
    //display result in result text using DOM
    /*in javascript
    document.FormReg.result.value = result;
    */

    //in jquery
    $("input[name='result']").val(result)
}