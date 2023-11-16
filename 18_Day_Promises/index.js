//Promise, JavaScript'teki eşzamansız işlemleri gerçekleştirmenin bir yoludur.
/*
pending:başlangıç ​​durumu, ne yerine getirildi ne de reddedildi.
fulfilled:İşlemin başarıyla tamamlandığı anlamına gelir.
rejected:işlemin başarısız olduğu anlamına gelir
*/
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("İşlem Başarılı");
  }, 1500);
});
promise
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.warn(err);
  });
//1.5 saniye sonra konsola işlem başarılı yazılır.
//eğer reject olsaydı catch bloğu çalışır
//resolce ve reject her zaman then ve catch metotlarında yakalanır

const API_URL = "https://jsonplaceholder.typicode.com/posts";
fetch(API_URL)
  .then((res) => res.json())
  .then((data) => console.log(data))
  .catch((err) => console.error(err));
//fetch methodu promise olarak (pending) gelir

//Async Await
//Async koyduğumuz yerler promise e dönüşür.
const square = async function (n) {
  return n * n;
};
square(2); //Promise {<resolved>: 4}

async function getPosts() {
  const response = await fetch(API_URL);
  const data = await response.json();
  console.log(data);
}
getPosts(); //response cevap vermeden data çalışmıcak data çalışöadan console.log çalışmayacak

async function getPosts() {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();
    console.log(data);
  } catch (err) {
    console.log(err);
  }
}
getPosts();
