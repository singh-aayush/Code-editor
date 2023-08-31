
function initialize(){
 var html = document.getElementById("html-text");
 var css = document.getElementById("css-text");
 var js = document.getElementById("js-text");
 var output = document.getElementById("output").contentWindow.document;

document.body.onkeyup = function(){
   output.open();
    output.writeln(
        html.value + "<style>" + css.value + "</style>" + "<script>" + js.value + "</script>"
    );

   output.close();

}
}

initialize();