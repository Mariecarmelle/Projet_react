const add = (a, b) => a + b
const mutiply = (a, b) => a * b
const soustract = (a, b) => a - b

module.exports = { add, mutiply, soustract }

// const http = require('http')

// const server = http.createServer((req, res) => {
    // if (req.url === '/') {
    
    // res.writeHead(200, { 'Content-Type': 'text/plain' }) // Définit les en-têtes une seule fois
    //     res.end('Bienvenue sur mon serveur Node.js!')
    // } else if (req.url === '/contact') {
        // res.end('Contactez-moi au 0758377230');
    // } else {
        // res.writeHead(404, { 'Content-Type': 'text/plain' });
        // res.end('Page non trouvée !');
    // }
// })

// server.listen(3000, () => {
//     console.log('Serveur démarré sur http://localhost:3000')
// })
