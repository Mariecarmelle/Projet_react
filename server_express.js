const express = require('express')
const morgan = require('morgan')

const app = express()
app.use(morgan('dev'))
app.use(express.static(__dirname + '/public'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// app.post('/user', (req, res) => {
//     const { name, age } = req.body

//     if (!name || !age) {
//         return res.status(400).json({ message: "Nom et âge requis" })
//     }
//     res.json({message: `Utilisateur ${name}, ${age} ans, ajouté!`})
// })
const monsters = [
    {name: 'Albert', level: 3, desc: 'Aucun danger ne l\'impressionne'},
    {name: 'Zombie', level: 2, desc: 'Les coups d\'urinre, les affectionne et la justice le passionne'},
    {name: 'Vampire', level: 5, desc: 'Nicky larson ne craint personne, surtout si la fille est mignonne'},
]

app.get('/monsters/:id', function(req, res) {
    const monster = monsters[req.params.id - 1]
res.json(monster.name+ ' ' +monster.desc) 
})

app.post('/create_monster', function(req, res) {
    // const { name, desc, level } = req.json;
    console.log(req.json)

    monsters.push({
        name: req.json.name,
        desc: req.json.desc,
        level: parseInt(req.json.level, 10)
        
    })
    console.log()
    res.json('OK!')
} )
// Route principale
// app.get('/', (req, res) => {
//     res.end('Bienvenue dans mon serveur Express Kiss!')
// })


// app.get('/hello/:name', (req, res) => {
//     res.end(`Bonjour ${req.params.name} !`)
// })
// app.get('/users', (req, res) => {
//     const users = [
//         { id: 1, name: 'Marie'},
//         { id: 2, name: 'Carmelle'},
//         { id: 3, name: 'Elvira'}
//     ]
//     res.json(users)
// })

// Exercices du jour

// app.get('/date', (req, res) => {
//     const now = new Date()
//     const date = {
//         date: now.toDateString(),
//         time: now.toLocaleTimeString()
//     }
//     res.json(date)
// })

// app.get('/carre/:nombre', (req, res) => {
//     const nombre = req.params.nombre
//     const carre = nombre * nombre
//     res.json(carre)
// })

// app.get('/infos', (req, res) => {
//     const infos = { name: 'Marie', old: 19, passion: 'programmer' }
//     res.json(infos)
// })

app.listen(3000, () => {
    console.log('Express marche')
})