//Web Strorages
/*
Web Depolama(sessionStorage ve localStorage),
geleneksel çerezlere göre önemli avantajlar sunan yeni bir HTML5 API'sidir.
*/
//İki Web Depolama nesnesi vardır.
/*
1.sessionStroge
2.localStroge
*/
/*
localStorage, sessionStorage'a benzer, ancak localStorage'da depolanan verilerin
son kullanma tarihi olmamasına rağmen, sessionStorage'da depolanan veriler sayfa
oturumu sona erdiğinde, yani sayfa kapatıldığında temizlenir.
*/
//Anahtarlar ve değerler her zaman dizelerdir
//sessionStorage ve localStorage'ın benzer yöntemleri olduğundan sadece localStorage'a odaklanacağız.
/*
localStorage - localStorage nesnesini görüntülemek için
localStorage.clear() - yerel depolamadaki her şeyi kaldırmak için
localStorage.setItem() - verileri localStorage'da depolamak için. Bir anahtar ve bir değer parametresi alır.
localStorage.getItem() - localStorage'da depolanan verileri görüntülemek için. Parametre olarak anahtar alır.
localStorage.removeItem() - saklanan öğeyi localStorage'dan kaldırmak için. Parametre olarak key alır.
localStorage.key() - localStorage'da depolanan verileri görüntülemek için. Parametre olarak index alır.
*/

localStorage.setItem("firstName", "Taner");
console.log(localStorage); //Storage {firstName: 'Taner', length: 1}
localStorage.setItem("age", 22);
console.log(localStorage); // Storage {age: '200', firstName: 'Taner', length: 2}

const user = {
  firstName: "Taner",
  age: 22,
  skills: ["HTML", "CSS", "JS", "React"],
};
const userText = JSON.stringify(user);
localStorage.setItem("user", userText);

let skills = localStorage.getItem("skills");
let skillsObj = JSON.parse(skills);
console.log(skillsObj); //['HTML','CSS','JS','React']

localStorage.clear(); //yerel depolamada her şeyi temizleyecek.

const basket = JSON.parse(localStorage.getItem("basket")) || [];
const products = [
  {
    id: 1,
    title: "Macbook Pro 2021",
    price: 40000,
  },
  {
    id: 2,
    title: "Keycharon K6",
    price: 2000,
  },
  {
    id: 3,
    title: "nUohY K9",
    price: 3000,
  },
];
function saveToStroge() {
  localStorage.setItem("basket", JSON.stringify(basket));
}
function addBasket(productId) {
  basket.push(productId);
  saveToStroge();
}
function removeBasket(productId) {
  basket = basket.filter((id) => id !== productId);
  saveToStroge();
}
addBasket(2);
addBasket(3);
console.log(basket); //2,3
removeBasket(3)
console.log(basket) //2