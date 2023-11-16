// Document Object Model (DOM)
/*
<!DOCTYPE html>
  <html lang="en">
    <head>
      <title>Document Object Model</title>
    </head>
    <body>

     <h1 class='title' id='first-title'>First Title</h1>
     <h1 class='title' id='second-title'>Second Title</h1>
     <h1 class='title' id='third-title'>Third Title</h1>
     <h1></h1>

    </body>
  </html>
*/
const allTitles = document.getElementsByTagName("h1");
console.log(allTitles); //HTMLCollections
console.log(allTitles.length); // 4
for (let i = 0; i < allTitles.length; i++) {
  console.log(allTitles[i]); // prints each elements in the HTMLCollection
} // forEach kullanamıyoruz çünkü dizi olarak dönmüyor. (HTML Collection) Eğer kullanmak istersek diziye dönüştürmemiz gerekiyor.
[...allTitles].forEach((item) => console.log(item));

const allTitles2 = document.getElementsByClassName("title");
console.log(allTitles2); //HTMLCollections
console.log(allTitles2.length); // 4

let firstTitle = document.getElementById("first-title");
console.log(firstTitle); // <h1>First Title</h1>

// querySelector : HTML öğesini etiket adına, kimliğine veya sınıfına göre seçmek için kullanılabilir. Etiket adı kullanılırsa yalnızca ilk eşleşen öğeyi getirir.
let firstTitle2 = document.querySelector("h1"); // select the first available h1 element
let firstTitle3 = document.querySelector("#first-title"); // select id with first-title
let firstTitle4 = document.querySelector(".title"); // select the first available element with class title

// querySelectorAll : HTML öğelerini etiket adına veya sınıfına göre seçmek için kullanılabilir.
// Dizi yöntemlerini destekleyen, dizi benzeri bir nesne olan nodeList'i döndürür.
// Her nodeList öğesi arasında döngü yapmak için for döngüsünü veya forEach'i kullanabiliriz
const allTitles3 = document.querySelectorAll("h1");
console.log(allTitles3.length); // 4
for (let i = 0; i < allTitles3.length; i++) {
  console.log(allTitles3[i]);
}
allTitles.forEach((title) => console.log(title));

// Adding attribute
const titles = document.querySelectorAll("h1");
titles[3].className = "title";
titles[3].id = "fourth-title";

//setAttribute()
const titles = document.querySelectorAll("h1");
titles[3].setAttribute("class", "title"); //class:"title"
titles[3].setAttribute("id", "fourth-title"); //id:"fourth-title"

titles[3].classList.add("Adana"); //Mevcut olan classlara ekleme yapar. Diğer yöntemler mevcut olan class ı eziyor ve siliyor
titles[3].classList.remove("Adana");
titles[3].classList.toggle("Adana"); //Eğer Adana class ı varsa çıkar yoksa ekle demek.

//Adding Text to HTML element
//textContent özelliği , bir HTML öğesine metin eklemek için kullanılır.
const titles = document.querySelectorAll("h1");
titles[3].textContent = "Fourth Title";

// Çoğu kişinin textContent ve innerHTML arasında kafası karışır .
// textContent'in amacı bir HTML öğesine metin eklemektir,
// ancak innerHTML bir metni veya HTML öğesini veya öğelerini alt öğe olarak ekleyebilir.

//innerHTML
// Bir ana öğeyi tamamen yeni bir alt içerikle değiştirmek istediğimizde innerHTML özelliğini kullanırız.
// Atadığımız değer bir dizi HTML öğesi olacaktır.
/*
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>JavaScript for Everyone:DOM</title>
  </head>
  <body>
    <div class="wrapper">
        <h1>Asabeneh Yetayeh challenges in 2020</h1>
        <h2>30DaysOfJavaScript Challenge</h2>
        <ul></ul>
    </div>
    <script>
    const lists = `
    <li>30DaysOfPython Challenge Done</li>
            <li>30DaysOfJavaScript Challenge Ongoing</li>
            <li>30DaysOfReact Challenge Coming</li>
            <li>30DaysOfFullStack Challenge Coming</li>
            <li>30DaysOfDataAnalysis Challenge Coming</li>
            <li>30DaysOfReactNative Challenge Coming</li>
            <li>30DaysOfMachineLearning Challenge Coming</li>`
  const ul = document.querySelector('ul')
  ul.innerHTML = lists
    </script>
  </body>
</html>
*/

// innerHTML özelliği aynı zamanda bir ana öğenin tüm alt öğelerini kaldırmamıza da olanak tanır.
// RemoveChild() kullanmak yerine aşağıdaki yöntemi tavsiye ederim.
/*
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>JavaScript for Everyone:DOM</title>
  </head>
  <body>
    <div class="wrapper">
        <h1>Asabeneh Yetayeh challenges in 2020</h1>
        <h2>30DaysOfJavaScript Challenge</h2>
        <ul>
            <li>30DaysOfPython Challenge Done</li>
            <li>30DaysOfJavaScript Challenge Ongoing</li>
            <li>30DaysOfReact Challenge Coming</li>
            <li>30DaysOfFullStack Challenge Coming</li>
            <li>30DaysOfDataAnalysis Challenge Coming</li>
            <li>30DaysOfReactNative Challenge Coming</li>
            <li>30DaysOfMachineLearning Challenge Coming</li>
        </ul>
    </div>
    <script>
  const ul = document.querySelector('ul')
  ul.innerHTML = ''
    </script>
  </body>
</html>
*/

//Adding Style
const titles = document.querySelectorAll("h1");
titles.forEach((title, i) => {
  title.style.fontSize = "24px"; // all titles will have 24px font size
  if (i % 2 === 0) {
    title.style.color = "green";
  } else {
    title.style.color = "red";
  }
});

const titles = document.querySelectorAll("h1");
titles.forEach((title, i) => {
  title.style.fontSize = "24px"; // all titles will have 24px font size
  if (i % 2 === 0) {
    title.style.backgroundColor = "green";
  } else {
    title.style.backgroundColor = "red";
  }
});

//Fark ettiğiniz gibi, CSS'yi JavaScript'te kullandığımızda özellikleri bir camelCase olacaktır.
//Aşağıdaki CSS özellikleri, arka plan renginden arka plan rengine, font-size'den fontSize'ye, font-family'den fontFamily'ye, margin-bottom'dan marginBottom'a değişir.
