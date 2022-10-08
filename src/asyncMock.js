const products= [{
  id: "1",
  name: 'Nintendo 64',
  price: 15000,
  category: 'Juegos',
  img: "/Images/nintendo64.jpg",
  stock: 10,
  description: 'Descripcion game boy ',
},
{
  id: "2",
  name: 'Family Game',
  price: 20000,
  category: 'Juegos',
  img: '/Images/familygame.jpg',
  stock: 10,
  description: 'Descripcion family game ',
},
{
  id: "3",
  name: 'Sega',
  price: 20000,
  category: 'Juegos',
  img: '/Images/sega.jpg',
  stock: 10,
  description: 'Descripcion sega game',
},
{
  id: "4",
  name: 'Tamagochi',
  price:500,
  category: 'Juegos',
  img: '/Images/tamagochi.jpg',
  stock: '5',
  description: 'Descripcion Tamagochi',  

},
{ id: "5",
  name: 'Game Boy',
  price: 1500,
  category: 'Juegos',
  img: '/Images/gameboy.jfif',
  stock: '5',
  description: 'Descripcion Gameboy'},

{ id: "6",
  name: 'Play Station 1',
  price: 10000,
  category: 'Juegos',
  img: '/Images/play1.jpg',
  stock: '5',
  description: 'Descripcion ps1'},

{ id: "7",
  name: '"Menem"',
  price: 1,
  category: 'Politicos',
  img: '/Images/menem.jpg',
  stock: '1',
  description: '"Si yo decía lo que iba a hacer, no me votaba nadie"'},

{ id: "8",
  name: '"Cavallo"',
  price: 1,
  category: 'Politicos',
  img: '/Images/cavallo.jpg',
  stock: '1',
  description: '"Hacia fin de siglo, la deuda pública será insignificante."'

  },

{ id: "9",
  name: '"Tinelli"',
  price: 10,
  category: 'Famosos',
  img: '/Images/tinelli.jpg',
  stock: '10',
  description: '"El año pasado me dediqué a viajar, pero tuvimos problemas con los dólares"'},

{ id: "10",
  name: '"Axel Rose"',
  price: 15,
  category: 'Famosos',
  img: '/Images/roses.jfif',
  stock: '5',
  description: '"Descubrí que grito de la misma manera que grita una persona que está a punto de ser devorada por un tiburón o que ha pisado un alga marina"'},

{ id: "11",
  name: '"Oliver Atom"',
  price: 10,
  category: 'Dibujos',
  img: '/Images/oliver.jpg',
  stock: '5',
  description: '“El balón es mi mejor amigo”'},

{ id: "12",
  name: '"USA 1994"',
  price: 1994,
  category: 'Mundiales',
  img: '/Images/usa.png',
  stock: '5',
  description: 'Una de las Copas del Mundo que más recuerdos engloba, tanto buenos y como malos, es la que se celebró en los Estados Unidos en 1994. Fue considerada por muchos como la más importante de la etapa moderna de este deporte, incluso aquella que abrió el camino para los siguientes torneos que se disputaron con posterioridad. Esta Copa del Mundo fue revolucionaria, cambió muchas cosas tanto dentro como fuera del terreno de juego. De ella se recuerdan muchos de los momentos más significativos de este deporte. Todos ellos quedaran grabados en la memoria de los aficionados a este centenario deporte.'},

  { id: "13",
  name: '"Me cortaron las piernas "',
  price: 1,
  category: 'Mundiales',
  img: '/Images/diego.jpg',
  stock: '5',
  description: '"No quiero dramatizar pero creanme que me cortaron las piernas"'},
  
  { id: "14",
  name: 'Mario Bros',
  price: 5000,
  category: 'Famosos',
  img: '/Images/mario bros.png',
  stock: '5',
  description: '"Mamma mia"'},

  { id: "15",
  name: 'Duhalde',
  price: 0.5,
  category: 'Politicos',
  img: '/Images/duhalde.jpg',
  stock: '5',
  description: '"El que depositó dólares, recibirá dólares. El que depositó pesos, recibirá pesos"'},
  
  { id: "16",
  name: 'El Cabezazo',
  price: 5,
  category: 'Mundiales',
  img: '/Images/ortega.jpg',
  stock: '5',
  description: '"Perdimos por mi culpa"'},
  
  { id: "17",
  name: 'El Champan',
  price: 5,
  category: 'Famosos',
  img: '/Images/champan.jpg',
  stock: '5',
  description: 'El famosos plato pizza con champagne, menu recordado por todos'},

  { id: "18",
  name: 'Cabezas',
  price: 1,
  category: 'Famosos',
  img: '/Images/cabezas.jpg',
  stock: '5',
  description: 'José Luis Cabezas fue un reportero gráfico y fotógrafo argentino.​​​Su homicidio se convirtió en el mayor emblema de la lucha de la prensa argentina en pos de la libertad de expresión.'}, 

]

export const getProductById = (id) => {
  return new Promise (resolve => {
      setTimeout(() => {
          resolve(products.find(prod => {
              return prod.id === id
          }))
      }, 500)
  })
}


export const getProducts = () => { 
  return new Promise((resolve) => {
    setTimeout(()=>{
     resolve(products)

    },1000)
    
  })
}
export const getProductByCategory = (categoryId) => { 
  return new Promise(resolve => {
    setTimeout(()=>{
     resolve(products.filter(prod => prod.category === categoryId))

    },500)
    
  })
}

