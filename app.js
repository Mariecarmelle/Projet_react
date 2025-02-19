// console.log('Bienvenue dans Node.js !')

// const http = require('http')
// // Creation du seveur
// const server = http.createServer((req, res) => {
// // Configuration de l'en-tête de la réponse
//     res.writeHead(200, { 'Content-Type': 'text/plain' })
//     // Contenu de la réponse
//     res.end('Bienvenue sur mon serveur Node.js !')
// })

// // Démarrage du serveur sur le port 3000
// server.listen(3000, () => {
//     console.log('Serveur démarré sur http://localhost:3000')
// })

// const http = require('http');

// const server = http.createServer((req, res) => {
//     if (req.url === '/') {
//         res.writeHead(200, { 'Content-Type': 'text/plain' });
//         res.end('Bienvenue sur la page d\'accueil !');
//     } else if (req.url === '/about') {
//         res.writeHead(200, { 'Content-Type': 'text/plain' });
//         res.end('Bienvenue sur la page À propos !');
//     } else {
//         res.writeHead(404, { 'Content-Type': 'text/plain' });
//         res.end('Page non trouvée !');
//     }
// });

// server.listen(3000, () => {
//     console.log('Serveur démarré sur http://localhost:3000');
// });

// console.log('Début');

// setTimeout(() => {
//     console.log('Timeout');
// }, 0);

// Promise.resolve().then(() => {
//     console.log('Promise');
// });

// console.log('Fin');


// const math = require('./math.js')
// console.log('Addition :',math.add(2, 5))
// console.log('Multiplication :', math.mutiply(3, 5))

// const fs = require('fs')

// // Ecrire dans un fichier

// fs.writeFile('message.txt', 'Hello Node js !', (err) => {
//     if (err) throw err
//     console.log('Fichier créer avec succès !')

//     fs.readFile('message.txt', 'utf8', (err, data) => { 
//         if (err) throw err
//         console.log('Contenu du fichier :', data)
//     })
// })

// const math = require("./math.js")
// console.log('Addition :', math.add(2, 5))
// console.log('Multiplication :', math.mutiply(3, 5))
// console.log('Soustraction :', math.soustract(7, 5))

const fs = require('fs')

fs.writeFile('log.txt', 'Node.js est génial !', (err) => {
    if (err) throw err
    console.log('cool')
})
fs.readFile('log.txt', 'utf-8', (err, data) => {
    console.log('Contenu du fichier', data)
})

const convers = require('./fichier.js')
console.log('Température en Fahrenheit :', convers.conversTemp(100))
