let isim = prompt("Adınız:");

if (isim) 
{
    document.querySelector("#myName").innerHTML = isim;
} 
else 
{
    alert("Lütfen Bir İsim Giriniz!");
}



function showTime() 
{
    var a = new Date();
    var myClock = document.querySelector("#myClock");
    var gunler = ["Pazartesi","Salı","Çarşamba","Perşembe", "Cuma","Cumartesi","Pazar"];
    myClock.innerHTML = `Günlerden ${gunler[a.getDay()]} ${a.getHours()}: ${a.getMinutes()}: ${a.getSeconds()}`
    setTimeout (showTime , 1000)
}

showTime();