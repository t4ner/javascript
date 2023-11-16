// Bir HTML öğesi oluşturmak için etiket adını kullanırız. document.createElement() yöntemini kullanıyoruz
/*
<html>
  <head>
    <title>Document Object Model:30 Days Of JavaScript</title>
  </head>
  <body>
    <script>
      let title = document.createElement('h1')
      title.className = 'title'
      title.style.fontSize = '24px' 
      title.textContent = 'Creating HTML element
      DOM Day 2' console.log(title)
    </script>
  </body>
</html>;
*/

/*
<!DOCTYPE html>
<html>
<head>
    <title>Document Object Model:30 Days Of JavaScript</title>
</head>
<body>
    <script>
        let title
        for (let i = 0; i < 3; i++) {
            title = document.createElement('h1')
            title.className = 'title'
            title.style.fontSize = '24px'
            title.textContent = i
            console.log(title)
        }
    </script>
</body>
</html>
*/

//Appending child to a parent element
//Oluşturulan bir öğeyi HTML belgesinde görmek için onu ana öğeye alt öğe olarak eklemeliyiz. HTML belge gövdesine document.body kullanarak erişebiliriz .
//document.body, AppendChild () yöntemini destekler . Aşağıdaki örneğe bakın.
/*
<!DOCTYPE html>
<html>

<head>
    <title>Document Object Model:30 Days Of JavaScript</title>
</head>
<body>
    <script>
        let title
        for (let i = 0; i < 3; i++) {
            title = document.createElement('h1')
            title.className = 'title'
            title.style.fontSize = '24px'
            title.textContent = i
            document.body.appendChild(title)
        }
    </script>
</body>
</html>
*/

/*
<!DOCTYPE html>
<html>
<head>
    <title>Document Object Model:30 Days Of JavaScript</title>
</head>
<body>
    <h1>Removing child Node</h1>
    <h2>Asabeneh Yetayeh challenges in 2020</h1>
    <ul>
        <li>30DaysOfPython Challenge Done</li>
        <li>30DaysOfJavaScript Challenge Done</li>
        <li>30DaysOfReact Challenge Coming</li>
        <li>30DaysOfFullStack Challenge Coming</li>
        <li>30DaysOfDataAnalysis Challenge Coming</li>
        <li>30DaysOfReactNative Challenge Coming</li>
        <li>30DaysOfMachineLearning Challenge Coming</li>
    </ul>
    <script>
        const ul = document.querySelector('ul')
        ul.innerHTML = ''
    </script>
</body>

</html>
*/
//Yukarıdaki kod parçacığı tüm alt öğeleri temizledi.
