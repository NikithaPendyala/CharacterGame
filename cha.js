var float;
document.getElementById("bt1").addEventListener('click', function () {
    clearInterval(float);
    float = setInterval(function () {
      document.getElementById("tb2").value += document.getElementById("tb1").value.charAt(0);
        document.getElementById("tb1").value = document.getElementById("tb1").value.substr(1);
        if(document.getElementById("tb1").value.length == 0){
                      clearInterval(float);
        }

    }, 1000)
});

document.getElementById("bt3").addEventListener('click', function () {
    clearInterval(float);
    float = setInterval(function () {
        document.getElementById("tb1").value = document.getElementById("tb2").value.charAt(document.getElementById("tb2").value.length-1) + document.getElementById("tb1").value;


        document.getElementById("tb2").value = document.getElementById("tb2").value.substr(0,document.getElementById("tb2").value.length-1);
        if(document.getElementById("tb2").value.length == 0){
            clearInterval(float);
       }    }, 1000)
});

document.getElementById("bt2").addEventListener('click', function () {
    clearInterval(float);
     
});
