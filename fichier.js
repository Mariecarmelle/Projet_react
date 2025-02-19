// const fs = require('fs')
// fs.writeFile("message.txt", "Bonjour Node js !", (err) => {
//     if (err) throw err 
//     console.log ("Fichier créé avec succès!")
// })


// fs.appendFile("message.txt", "\nCeci est une nouvelle phrase", (err) => {
//     if (err) throw err
//     console.log("text ajouté")
// } )
// fs.readFile("message.txt", "utf-8", (err, data) => {
//     if (err) throw err
//     console.log("Contenu du fichier :", data)
// })

function conversTemp (celcius) {
    const fahrenheit = celcius * 1.8 + 32
    return fahrenheit
}

module.exports = { conversTemp }
