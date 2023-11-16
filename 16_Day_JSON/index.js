//JSON
/*
JSON, depolama ve taşıma için hafif bir veri formatıdır. 
JSON çoğunlukla veri bir sunucudan istemciye gönderildiğinde kullanılır.
JSON, XML'e göre kullanımı daha kolay bir alternatiftir.
*/
//example
/*
{
"users":[
  {
    "firstName":"Taner",
    "lastName":"Dökmetaş",
    "age":22,
    "email":"tanerdokmets@gmail.com"
  },
  {
    "firstName":"Furkan",
    "lastName":"Dökmetaş",
    "age":18,
    "email":"frkn@gmail.com"
  },
  {
  "firstName":"Ömer",
  "lastName":"Öğüt",
  "age":22,
  "email":"omr@gmail.com"
  }
]
}
*/

//Converting JSON to Javascript object
const usersText = `{
    "users":[
      {
        "firstName":"Taner",
        "lastName":"Dökmetaş",
        "age":22,
        "email":"tanerdokmets@gmail.com"
      },
      {
        "firstName":"Furkan",
        "lastName":"Dökmetaş",
        "age":18,
        "email":"frkn@gmail.com"
      },
      {
        "firstName":"Ömer",
        "lastName":"Öğüt",
        "age":22,
        "email":"omr@gmail.com"
        }
    ]
    }`;

const usersObj = JSON.parse(usersText);
console.log(usersObj); //JSON Javascript objesine dönüşür.

const usersObj2 = JSON.parse(usersText, (key, value) => {
  let newValue =
    typeof value == "string" && key != "email" ? value.toUpperCase() : value;
  return newValue;
});
console.log(usersObj);

//Converting Object to JSON
//Nesneyi JSON olarak değiştirmek istediğimizde JSON.stringify() kullanırız
let categories = [
  {
    name: "css",
    count: 5,
  },
  {
    name: "html",
    count: 8,
  },
];
let categoriesJSON = JSON.stringify(categories);
console.log(categoriesJSON);
/*
[
    {
        "name":"css",
        "count": 5
    },
    {
        "name":"html",
        "count":16
    }
]
*/

const user = {
  firstName: "Taner",
  lastName: "Dökmetaş",
  country: "Turkey",
  city: "Istanbul",
  email: "tanerdokmets@gmail.com",
  skills: ["HTML", "CSS", "JavaScript", "React", "Java"],
  age: 22,
  points: 30,
};

const txt = JSON.stringify(user, [
  "firstName",
  "lastName",
  "country",
  "city",
  "age",
]);
console.log(txt);
/*
{
    "firstName": "Taner",
    "lastName": "Dökmetaş",
    "country": "Turkey",
    "city": "Istanbuk",
    "age": 22
}
*/
