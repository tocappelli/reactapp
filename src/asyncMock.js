const products= [{
  id: '1',
  name: 'Nintendo 64',
  price: 15000,
  category: 'juegos',
  img: "./Images/nintendo64.jpg",
  stock: 10,
  description: 'Descripcion game boy ',
},
{
  id: '2',
  name: 'Family Game',
  price: 20000,
  category: 'juegos',
  img: './Images/familygame.jpg',
  stock: 10,
  description: 'Descripcion family game ',
},
{
  id: '3',
  name: 'Sega',
  price: 20000,
  category: 'juegos',
  img: './Images/sega.jpg',
  stock: 10,
  description: 'Descripcion sega game',
},
{
  id: '4',
  name: 'Tamagochi',
  price:500,
  category: 'juegos',
  img: './Images/tamagochi.jpg',
  stock: '5',
  description: 'Descripcion Tamagochi',  

},{
id: '5',
  name: 'Game Boy',
  price: 1500,
  category: 'juegos',
  img: './Images/gameboy.jfif',
  stock: '5',
  description: 'Descripcion Gameboy'},
  {
    id: '6',
      name: 'Play Station 1',
      price: 10000,
      category: 'juegos',
      img: './Images/play1.jpg',
      stock: '5',
      description: 'Descripcion ps1'},
      {
        id: '7',
          name: 'Menem',
          price: 1,
          category: 'politico',
          img: './Images/menem.jpg',
          stock: '1',
          description: 'Descripcion menem'},
          {
            id: '8',
              name: 'Cavallo',
              price: 1,
              category: 'politico',
              img: './Images/cavallo.jpg',
              stock: '1',
              description: 'Descripcion cavallo'},
              {
                id: '9',
                  name: 'Tinelli',
                  price: 10,
                  category: 'conductor',
                  img: './Images/tinelli.jpg',
                  stock: '10',
                  description: 'Descripcion tinelli'},
                  {
                    id: '10',
                      name: 'Axel Rose',
                      price: 15,
                      category: 'cantante',
                      img: './Images/roses.jfif',
                      stock: '5',
                      description: 'Descripcion roses'},
                      {
                        id: '11',
                          name: 'Oliver Atom',
                          price: 10,
                          category: 'dibujo',
                          img: './Images/oliver.jpg',
                          stock: '5',
                          description: 'Descripcion oliver'},
                          {
                            id: '12',
                              name: 'USA 1994',
                              price: 1994,
                              category: 'mundial',
                              img: './Images/usa.png',
                              stock: '5',
                              description: 'Descripcion usa'},  ]

export const getProduct = () => { 
  return new Promise((resolve) => {
    setTimeout(()=>{
     resolve(products)

    },1000)
    
  })
}