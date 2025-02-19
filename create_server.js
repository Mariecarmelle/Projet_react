const exp = require('constants')
const http = require('http')

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' }) // Définit les en-têtes une seule fois
        res.end('Bienvenue sur mon serveur Node.js On continue!')
})



exports.server = server

const express = require('express')
const app = express()
const port = 3000
app.use(express.urlencoded({ extended: true }))
app.use(express.json()) //Middleware pour lire les json envoyés dans les requête

let monsters = [
    {id: 1, name: 'Albert', level: 3, desc: 'I am tired'},
    {id: 2, name: 'Marc', level: 4, desc: 'I want to go house'},
    {id: 3, name: 'Will', level: 5, desc: 'Please God'}
]

// Récupérer tout les monstres

app.post('/create_monster', (req, res) => {
    const { name, level, desc} = req.body
    
    //  if (!name || !level || !desc) {
    //     return res.status(400).json({ message: 'Veuillez les information'})
    //  }
     const newmonstre = { id: monsters.length + 1, name, level, desc}
     monsters.push(newmonstre)
     res.status(201).json({message: 'Monstre ajouté avec succès', user: newmonstre})
})

app.use((req, res) => {
    res.status(404).send('Page non trouvée !');
});

app.listen(port, () => {
    console.log(`Server starts http://localhost:${port}`)
})