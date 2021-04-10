
    document.querySelector('.tugma').addEventListener('click' , function(){
    var ekran = document.querySelector('.ekran');
    console.log(parseInt(ekran.value));
    ekran.value = parseInt(ekran.value) + 1;
    
})
document.querySelector('.off').addEventListener('click' , function(){
    document.querySelector('.ekran').value = 0;
})
