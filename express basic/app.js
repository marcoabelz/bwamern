const express = require('express')
const app = express()
const port = 3000

app.set('views', './views') // specify the views directory
app.set('view engine', 'ejs') // register the template engine

app.get('/', (req, res) => {
  const buah = [
    { name: 'apel', no: 1 },
    { name: 'jeruk' },
    { name: 'pepaya' }
  ]
  res.render('index', {
    name: 'Abel Zefanya',
    umur: 25,
    buah: buah
  })
})

app.get('/:name/:umur', (req, res) => {
  res.send(`Nama saya : ${req.params.name} <br/> dan umur saya : ${req.params.umur} Tahun`)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})