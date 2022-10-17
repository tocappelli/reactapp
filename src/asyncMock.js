const products= [{
  id: "1",
  name: 'Nintendo 64',
  price: 15000,
  category: 'Juegos',
  img: "/Images/nintendo64.jpg",
  stock: 10,
  description: 'Nintendo 64 es la cuarta videoconsola de sobremesa producida por Nintendo, desarrollada para suceder a la Super Nintendo. Fue la primera consola concebida para dar el salto del 2D al 3D. Compitió en el mercado de la quinta generación con Saturn de Sega y PlayStation (consola) de Sony, esta última creada a partir de diseños descartados previamente por Nintendo.',
},
{
  id: "2",
  name: 'Family Game',
  price: 20000,
  category: 'Juegos',
  img: '/Images/familygame.jpg',
  stock: 10,
  description: 'Family Game es el nombre genérico que recibieron en Latinoamérica las versiones clónicas de la consola de videojuegos Famicom japonesa de 8 bits.​ No existe información oficial acerca de ninguna licencia por parte de Nintendo para utilizar sus títulos, aunque estas consolas cuentan prácticamente con todo el catálogo de juegos de la original. Especialmente popular en Argentina, llegó a acaparar el 95% de ventas de videoconsolas del país a principios de los años 90.  ',
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
  description: 'Un Tamagotchi es una mascota virtual creada por Aki Maita y comercializada por Bandai el 23 de noviembre de 1996 en Japón. El Tamagotchi es un aparato electrónico con la forma y el tamaño de un huevo, que tiene una pantalla en blanco y negro pixelada, donde se puede ver una mascota virtual.',  

},
{ id: "5",
  name: 'Game Boy',
  price: 1500,
  category: 'Juegos',
  img: '/Images/gameboy.jfif',
  stock: '5',
  description: 'Game Boy (en japonés: ゲームボーイ Gēmu Bōi) es una videoconsola portátil desarrollada y comercializada por Nintendo, lanzada por primera vez en Japón y América del Norte en 1989, y en Europa un año después​. Perteneció a la línea de consolas Game Boy, siendo esta la primera de la serie.'},

{ id: "6",
  name: 'Play Station 1',
  price: 10000,
  category: 'Juegos',
  img: '/Images/play1.jpg',
  stock: '5',
  description: 'PlayStation es la primera videoconsola de Sony, y la primera de dicha compañía en ser diseñada por Ken Kutaragi, y es una videoconsola de sobremesa de 32 bits lanzada por Sony Computer Entertainment el 3 de diciembre de 1994 en Japón. '},

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
  
  { id: "19",
  name: 'El Oso Arturo',
  price: 10,
  category: 'Famosos',
  img: '/Images/arturo.jpg',
  stock: '5',
  description: 'El Oso Arturo es un personaje televisivo nacido en 1997 durante el programa argentino VideoMatch que el conductor Marcelo Tinelli tenía en el canal Telefé.'},

  { id: "20",
  name: 'Beavis and Butt-Head',
  price: 15,
  category: 'Dibujos',
  img: '/Images/beavis.jpg',
  stock: '5',
  description: 'Beavis and Butt-Head es una serie de dibujos animados dirigida principalmente para jóvenes y adolescentes, emitida originalmente por la cadena de televisión MTV. La serie fue transmitida de 1993 a 1997, y tuvo un breve regreso en 2011.'},

  { id: "21",
  name: 'Las Tortugas Ninjas',
  price: 1000,
  category: 'Famosos',
  img: '/Images/ninja.jpg',
  stock: '5',
  description: 'En el año de su lanzamiento Las tortugas ninja fue un film inmensamente exitoso, recaudando más de 135 millones de dólares solo en taquilla. Desde entonces la cinta fue el filme independiente más taquillero de todos los tiempos, hasta que The Blair Witch Project lo superó 9 años después.'},

  { id: "22",
  name: 'Nike Mercurial Vapor',
  price: 1000000,
  category: 'Mundiales',
  img: '/Images/nike.jpg',
  stock: '5',
  description: 'Primer modelo de Nike Mercurial Vapor fabricados especialmente para Ronaldo en 1998.'},
  
  { id: "23",
  name: 'Hugo',
  price: 10000,
  category: 'Dibujos',
  img: '/Images/hugo.jpg',
  stock: '5',
  description: '"Elegí, estoy segura de que perderás"'},
  
]

export const getProductById = (id) => {
  return new Promise (resolve => {
      setTimeout(() => {
          resolve(products.find(prod => {
              return prod.id === id
          }))
      }, 1000)
  })
}


export const getProducts = () => { 
  return new Promise((resolve) => {
    setTimeout(()=>{
     resolve(products)

    },3000)
    
  })
}
export const getProductByCategory = (categoryId) => { 
  return new Promise(resolve => {
    setTimeout(()=>{
     resolve(products.filter(prod => prod.category === categoryId))

    },1000)
    
  })
}


