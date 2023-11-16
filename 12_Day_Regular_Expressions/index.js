//Regular Expressions (Düzenli İfadeler)
// Regex (Regular Expressions), metin işleme ve desen eşleme (pattern matching) için kullanılan güçlü bir araçtır.
// JavaScript'te, RegExp sınıfını kullanarak regex ifadeleri oluşturabilirsiniz.
// İşte temel regex kullanımıyla ilgili bazı bilgiler:

//Regex oluşturma;
let regex = /pattern/; // Örnek bir regex

let regex2 = new RegExp("pattern"); // Örnek bir regex

/*
Temel Desenler:
[]: A set of characters
[a-c] means, a or b or c
[a-z] means, any letter a to z
[A-Z] means, any character A to Z
[0-3] means, 0 or 1 or 2 or 3
[0-9] means any number 0 to 9
[A-Za-z0-9] any character which is a to z, A to Z, 0 to 9
\: uses to escape special characters
\d mean: match where the string contains digits (numbers from 0-9)
\D mean: match where the string does not contain digits
. : any character except new line character(\n)
^: starts with
r'^substring' eg r'^love', a sentence which starts with a word love
r'[^abc] mean not a, not b, not c.
$: ends with
r'substring$' eg r'love$', sentence ends with a word love
*: zero or more times
r'[a]*' means a optional or it can occur many times.
+: one or more times
r'[a]+' means at least once or more times
?: zero or one times
r'[a]?' means zero times or once
\b: word bounder, matches with the beginning or ending of a word
{3}: Exactly 3 characters
{3,}: At least 3 characters
{3,8}: 3 to 8 characters
|: Either or
r'apple|banana' mean either of an apple or a banana
(): Capture and group
*/

//Regex metodları
//test()
let regex3 = /pattern/;
let result3 = regex3.test("sample text");
console.log(result3); // true veya false döndürür

//exec()
let regex4 = /pattern/;
let result4 = regex4.exec("sample text");
console.log(result4); // Eşleşen örneği veya null

//replace()
let regex5 = /pattern/;
let newText = "sample text".replace(regex5, "new");
console.log(newText); // 'sample new'

let regex6 = /[aeiou]/;
console.log(regex6.test("apple")); // true
console.log(regex6.test("xyz")); // false

let regex7 = /\d{2,4}/;
console.log(regex7.test("123")); // true
console.log(regex7.test("12345")); // false

let regex8 = /apple/;
let newText2 = "I have an apple.".replace(regex8, "orange");
console.log(newText2); // "I have an orange."

//match()
const str = "I love JavaScript";
const pattern = /love/;
const result = str.match(pattern);
console.log(result);

const pattern1 = "[Aa]pple"; // this square bracket means either A or a
const txt1 =
  "Apple and banana are fruits. An old cliche says an apple a day keeps the  doctor way has been replaced by a banana a day keeps the doctor far far away. ";
const matches1 = txt1.match(pattern1);
console.log(matches1); //["Apple", index: 0, input: "Apple and banana are fruits. An old cliche says an apple a day keeps the  doctor way has been replaced by a banana a day keeps the doctor far far away.", groups: undefined]

const pattern2 = /[Aa]pple|[Bb]anana/g; // this square bracket mean either A or a
const txt2 =
  "Apple and banana are fruits. An old cliche says an apple a day a doctor way has been replaced by a banana a day keeps the doctor far far away. Banana is easy to eat too.";
const matches2 = txt2.match(pattern2);
console.log(matches2); //["Apple", "banana", "apple", "banana", "Banana"]

const pattern3 = /\d+/g; // d is a special character which means digits
const txt3 = "This regular expression example was made in January 12,  2020.";
const matches3 = txt3.match(pattern3);
console.log(matches3); // ["12", "2020"], this is not what we want

const pattern4 = /[a]./g; // this square bracket means a and . means any character except new line
const txt4 = "Apple and banana are fruits";
const matches4 = txt4.match(pattern4);
console.log(matches4); // ["an", "an", "an", "a ", "ar"]
