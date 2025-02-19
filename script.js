// JOUR 1

// EXERCISE 1
// let nom = 'Marie Elvira'
// let age = 20
// let etudiant = true
// console.log('My name is',nom, `i have`, age, 'years old', 'and', etudiant, 'i am a student')

// // EXERCISE 2

// function sum(c, e) {
//     return c + e
// }

// console.log(sum(5, 5))

// // EXERCISE 3

// let firstname = prompt('Enter your firstname')
// if (!firstname) {
//     alert('You must enter your firstname')
// }
// alert('Hello ' + firstname)


// JOUR 2

// EXERCISE 1

// const carre = (a) => a * a
// console.log(carre(5))

// const pair = (a) => a%2 === 0

// console.log(pair(6))

// // EXERCISE 2

// let tab = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// tab.push(11)
// tab.pop()
// tab.filter((a) => a%2 === 0)
// tab.map((a) => a * a)
// console.log(tab)

// // DEFI DU JOUR

// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// console.log(array)
// array.filter((a) => a%2 === 0)
// console.log(array)
// let sum = 0
// for (let i = 0; i < array.length; i++) {
//      sum = sum + array[i]
// }
// console.log(sum)

// JOUR 3

// EXERCISE 1

// let utilisateur = {
//     nom : 'Marie Elvira',
//     age : 20,
//     etudiant : true,
//     afficherInfos : function() {
//         console.log(`My name is ${this.nom}, I've ${this.age}, and ${this.etudiant}, I'm Student`)
//     },
//     langages : ['HTML', 'CSS', 'JS']
// }
// utilisateur.afficherInfos()
// console.log(utilisateur.langages)

// // EXERCISE 2
// // const body = document.querySelector('body')
// const title = document.querySelector('h1')
// const button = document.querySelector('button')
// button.addEventListener('click', () => {
//     title.textContent = 'WELCOME'
//     let newparagraph = document.createElement('p')
//     newparagraph.textContent = 'Le titre à changé'
//     document.body.appendChild(newparagraph)
// })

// // DEFI DU JOUR

// const input = document.querySelector('.input')
// const btn = document.querySelector('.btn')

// btn.addEventListener('click', () => {
//     if (!input.value) {
//         alert('Veuillez entrer un prénom')

//     } else {
//         let nomperso = document.createElement('p')
//         nomperso.innerText = ('Bonjour ' + input.value)
        
//         // alert(nomperso.innerText)
//         document.body.appendChild(nomperso)
//         input.value = ''
//     }
// })

// JOUR 4

// ACTIVITE PRATIQUE

// EXERCISE 1

// let listesprenoms = ['Marie', 'Elvira', 'Carmelle', 'Yann', 'Emerson' ]
// listesprenoms.forEach(prenoms => {
//     console.log(prenoms)
//     // console.log(prenoms.length)
// })

// let majusculeprenoms = listesprenoms.map (prenoms => prenoms.toUpperCase()) 
// console.log(majusculeprenoms)

// let filterprenoms = listesprenoms.filter(prenomms => prenomms.length > 5)
// console.log(filterprenoms)

// let countprenoms = listesprenoms.reduce((acc, prenoms) => acc + prenoms.length, 0)
// console.log(countprenoms)

// // EXERCISE 2

// const buttons = document.querySelector('.button')
// const ul = document.createElement('ul')
// document.body.appendChild(ul)
// buttons.addEventListener('click', () => {
    
//      const element = document.createElement('li')
//      let count = document.querySelectorAll('li').length
//     element.textContent = 'Element ' + count
//      ul.appendChild(element)
// })

// DEFI DU JOUR

// const input = document.querySelector('.inputtache')
// const button = document.querySelector('.ajouter')
// const listetaches = document.querySelector('.liste')

// button.addEventListener('click', () => {
//    if (!input.value) {
//     alert('Veuillez entrer une tâche')
//    } else {
//     let tache = document.createElement('li')
//     tache.innerText = input.value
//     input.value = ''
//     console.log(tache)
//     listetaches.appendChild(tache)
//     let btnsupprimer = document.createElement('button')
//     btnsupprimer.innerText = '  Supprimer'
//     tache.appendChild(btnsupprimer)
//     btnsupprimer.addEventListener('click', () => {
//         listetaches.removeChild(tache)

//     })
//    }
// })

// JOUR 5

// EXERCISE 1

// fetch('https://api.chucknorris.io/jokes/random')
// .then(response => response.json())
// .then(data => console.log(data.value))

// // EXERCISE 2
// async function getData() {
//     const paragraph = document.querySelector('.p')
//     try {
//         const response = await fetch('https://api.chucknorris.io/jokes/random')
//         const data = await response.json()
//         paragraph.textContent = data.value
//         console.log(data)
//     } catch (error) {
//         console.error(error)
//     }
// }

// const buttoncat = document.querySelector('.blague')
// buttoncat.addEventListener('click', () => {
//     getData()
// })

// // DEFI DU JOUR
//     const btnCat = document.querySelector('.cat')
  
// async function getCat() {
//     const image = document.createElement('img')
//     document.body.appendChild(image)
//     const container = document.createElement('div');
// container.style.textAlign = 'center'; // Centrer les images
// container.style.marginTop = '20px';
// document.body.appendChild(container);
// container.appendChild(image);

//     try {
//         const response = await fetch ('https://api.thecatapi.com/v1/images/search')
//         const data = await response.json()
//         image.src = data[0].url
//         console.log(data)
//     } catch (error) {
//         console.error(error)
//     }
// }
// btnCat.addEventListener('click', () => {
    
//     getCat()
// })

// Jour 10
console.log('Hello Node')