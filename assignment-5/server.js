const express = require("express")
const bodyParser = require("body-parser")
const path = require("path")

const app = express()
const port = 5000
app.use(bodyParser.json())

app.use(express.static("public"))

const people = [{
    id: 1,
    name: 'Ryker',
    age: 14,
    weight: 130,
}, {
    id: 2,
    name: 'Jon',
    age: 40,
    weight: 265,
}, {
    id: 3,
    name: 'Nicson',
    age: 2,
    weight: 5,
    intelligence: "-brain-dead"  
}];

app.get("/person/:id", function(req, res){
    console.log(req.params)
    const id = req.params.id
        const person = people.find(function(person){
            return person.id === Number(id)
        })
    res.send(person)
})

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, "./public/index.html"))
})

app.get('/ryker', (req, res) => {
    res.send('Hey')
  })

  app.get('/nicson', (req, res) => {
    res.send('brocowski')
  })

  app.get('/jon', (req, res) => {
    res.send('dude')
  })

app.listen(port, () => {
  console.log(`app listening on port ${port}`)
})