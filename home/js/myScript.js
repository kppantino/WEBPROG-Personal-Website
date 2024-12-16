function myFunction() {
    document.getElementById("demo").innerHTML = "Paragraph changed.";
  }

  
  function myFunction2() {
    const element = document.getElementsByTagName("body");

    document.getElementById("demo").innerHTML = '<br> FUnction 2 Trial :))) : <br>'
    + element[0].innerHTML;
    
  }