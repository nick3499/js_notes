var nineteenEightyFour = {
  author: 'George Orwell',
  title: 'Nineteen Eighty-Four',
  year: 1949
}

document.getElementById("demo").innerHTML = nineteenEightyFour.author +
' published <em>' + nineteenEightyFour.title +
'</em> in ' + nineteenEightyFour.year + '.'

document.getElementById("demo2").innerHTML = 'Keys: ' +
Object.keys(nineteenEightyFour) + '<br>Values: ' +
Object.values(nineteenEightyFour)
