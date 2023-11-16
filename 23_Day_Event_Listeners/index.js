//Event Listener
/*
Yaygın HTML olayları: onclick, onchange, onmouseover, onmouseout, onkeydown, onkeyup, onload. Herhangi bir DOM nesnesine olay dinleyici yöntemini ekleyebiliriz.
HTML elementlerinde farklı olay türlerini dinlemek için addEventListener() metodunu kullanırız
*/
selectedElement.addEventListener("eventlistner", function (e) {
  // the activity you want to occur after the event will be in here
});
// or
selectedElement.addEventListener("eventlistner", (e) => {
  // the activity you want to occur after the event will be in here
});

//click
/*
<!DOCTYPE html>
<html>
  <head>
    <title>Document Object Model</title>
  </head>
  <body>
    <button>Click Me</button>
    <script>
      const button = document.querySelector('button')
      button.addEventListener('click', e => {
        console.log("Butona Tıkladın"))
      })
    </script>
  </body>
</html>
*/

//Bir event doğrudan HTML öğesine satır içi komut dosyası olarak da eklenebilir.
<button onclick="console.log('Butona Tıkladın')">Click Me</button>;

<button onclick="clickMe()">Click Me</button>;
const clickMe = () => {
  alert("We can attach event on HTML element");
};

/*
click - öğe tıklandığında
dblclick - öğe çift tıklandığında
mouseenter - fare noktası öğeye girdiğinde
mouseleave - fare işaretçisi öğeyi terk ettiğinde
mousemove - fare işaretçisi öğenin üzerinde hareket ettiğinde
mouseover - fare işaretçisi öğenin üzerinde hareket ettiğinde
mouseout - fare işaretçisi öğeden dışarı çıktığında
input - değer giriş alanına girdiğinde
change - giriş alanındaki değer değiştiğinde
blur - öğe odaklanmadığında
keydown - bir tuşa basıldığında
keyup - bir tuş kalktığında
keypress - herhangi bir tuşa bastığımızda
onload - tarayıcı bir sayfayı yüklemeyi tamamladığında
*/

<input id="name"></input>;
const input = document.getElementById("name");
input.addEventListener("input", (e) => {
  console.log("Bir şeyler yazılıyor.. ", e.target.value);
});
