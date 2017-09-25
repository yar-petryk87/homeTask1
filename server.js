var express = require('express')
var app = express()
var port = process.env.PORT || 8000
app.set('view engine' , 'pug')


app.get('/' , function (req, res) {
	
  res.render(
  		'index' , 
  		{ heading: `ЕНЕЇДА` ,
  		  message_first: `Еней був парубок моторний,` ,
  		  message_second: `І хлопець хоть куди козак,` ,
    	  message_third: `Удавсь на всеє зле проворний,` ,
  		  message_fourth: `Завзятіший од всіх бурлак.` ,
  		  

  	}
  )
 
})

app.listen(port , function() {
	console.log("Everything is OK")
})
