const c = require('./create_server.js')

c.server.listen(3000, () => {
    console.log('Serveur démarré sur http://localhost:3000')
})
// const express = require('express');
// const app = express();
// const port = 5000;

// app.use(express.json()); // Middleware pour lire les JSON envoyés dans les requêtes

// let tasks = [
//     { id: 1, title: "Apprendre Node.js", completed: false },
//     { id: 2, title: "Créer une API", completed: false }
// ];

// // ➤ Récupérer toutes les tâches 📋
// app.get('/tasks', (req, res) => {
//     res.json(tasks);
// });

// // ➤ Ajouter une nouvelle tâche ➕
// app.post('/tasks', (req, res) => {
//     const { title } = req.body;
//     if (!title) {
//         return res.status(400).json({ error: "Le champ 'title' est requis" });
//     }
//     const newTask = { id: tasks.length + 1, title, completed: false };
//     tasks.push(newTask);
//     res.status(201).json(newTask);
// });

// // ➤ Supprimer une tâche❌
// app.delete('/tasks/:id', (req, res) => {
//     const taskId = parseInt(req.params.id);
//     tasks = tasks.filter(task => task.id !== taskId);
//     res.json({ message: `Tâche ${taskId} supprimée` });
// });

// // ➤ Marquer une tâche comme terminée ✅
// // app.put('/tasks/:id', (req, res) => {
// //     const taskId = parseInt(req.params.id);
// //     const task = tasks.find(task => task.id === taskId);
// //     if (!task) {
// //         return res.status(404).json({ error: "Tâche non trouvée" });
// //     }
// //     task.completed = true;
// //     res.json(task);
// // });

// // ➤ Route pour gérer les erreurs 404
// app.use((req, res) => {
//     res.status(404).send('Page non trouvée !');
// });

// // ➤ Démarrer le serveur
// app.listen(port, () => {
//     console.log(`🚀 Serveur Express démarré sur http://localhost:${port}`);
// });

// const express = require('express')
// const morgan = require('morgan')

// const app = express()
// const port = 3000
// app.use(morgan('dev'))
// app.use(express.static(__dirname + '/public'))
// app.use(express.json()) //Middleware pour lire les json envoyés dans les requête
// app.use(express.urlencoded({ extended: true }))

// let monsters = [
//     {id: 1, name: 'Albert', level: 3, desc: 'I am tired'},
//     {id: 2, name: 'Marc', level: 4, desc: 'I want to go house'},
//     {id: 3, name: 'Will', level: 5, desc: 'Please God'}
// ]

// // Récupérer tout les monstres

// app.get('/mons', (req, res) => {
//     res.json(monsters)
// });
// app.get('/monsters/:id', function(req, res) {
//     const monster = monsters[req.params.id - 1]
// res.end(monster.name+ ' ' +monster.desc) 
// })

// app.post('/create_monster', (req, res) => {
//     const {id, name, level, desc} = req.body
    
//      if (!id || !name || !level || !desc) {
//         return res.status(400).json({ message: 'Veuillez les information'})
//      }
//      const newmonstre = { id, name, level, desc}
//      monsters.push(newmonstre)
//      res.status(201).json({message: 'Monstre ajouté avec succès', user: newmonstre})
// })

// app.listen(port, () => {
//     console.log(`Server starts http://localhost:${port}`)
// })