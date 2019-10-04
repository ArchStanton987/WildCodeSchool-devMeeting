// Tableau avec la liste des couleurs enregistrées
const borderColors = ['#FBAB6C' , '#E362C2' , '#7782FA' , '#6AE6C2' , '#D7FF7D' , 
'#FB726C' , '#9562E3' , '#78E1FA' , '#72E66A' , '#FFE77D' ,
'#F53FFB' , '#3963E3' , '#4AFAA7' , '#D7E640' , '#FFB34F'
]

const articles = document.getElementsByClassName ('article-assoc')

// Fonction renvoyant un nombre aléatoire entre 0 et num
function randomNumber (num) {
    return (Math.floor(Math.random() * Math.floor(num)))
}

// Fonction modifiant la taille de la bordure gauche + couleur aléatoire
function randomLeftBorders() {
    for (let i = 0 ; i < articles.length ; i++) {
        articles[i].style.borderWidth = "1px 1px 1px 4px"
        articles[i].style.transition = "border-color 2s"
        articles[i].style.borderColor = `#8080801a #8080801a #8080801a ${borderColors[randomNumber(borderColors.length)]}`
        }
}

// Fonction déterminant l'interval de temps pour le changement de couleurs
function colorTimer () {
    setInterval(randomLeftBorders, 5000)
}

randomLeftBorders()

colorTimer()

// Fonction pour rendre aléatoire le coté de la bordure

/* const topBorder = "7px 1px 1px 1px "
const rightBorder = "1px 7px 1px 1px"
const bottomBorder = "1px 1px 7px 1px"
const leftBorder = "1px 1px 1px 7px"

const borderSide = [topBorder, rightBorder, bottomBorder, leftBorder] */

/* function assignColorSide() {
    for (let i = 0 ; i < articles.length ; i++) {
        let side = borderSide[randomNumber(2)]
        switch (side){
            case topBorder:
                articles[i].style.borderWidth = topBorder
                articles[i].style.borderColor = `${borderColors[randomNumber(borderColors.length)]} #8080801a #8080801a #8080801a`
                break
            case rightBorder:
                articles[i].style.borderWidth = rightBorder
                articles[i].style.borderColor = `#8080801a ${borderColors[randomNumber(borderColors.length)]} #8080801a #8080801a`
                break
            case bottomBorder: 
                articles[i].style.borderWidth = bottomBorder
                articles[i].style.borderColor = `#8080801a #8080801a ${borderColors[randomNumber(borderColors.length)]} #8080801a`
                break
            default:
                articles[i].style.borderWidth = leftBorder
                articles[i].style.borderColor = `#8080801a #8080801a #8080801a ${borderColors[randomNumber(borderColors.length)]}`
            }               
    }
} 
assignColorSide()*/