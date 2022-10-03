const products= [{
  id: '1',
  name: 'game boy',
  price: 15000,
  category: 'juegos',
  
  stock: 10,
  description: 'Descripcion game boy ',
},
{
  id: '2',
  name: 'family game',
  price: 20000,
  category: 'juegos',
  
  stock: 10,
  description: 'Descripcion family game ',
},
{
  id: '3',
  name: 'sega',
  price: 20000,
  category: 'juegos',
  
  stock: 10,
  description: 'Descripcion sega game',
}]

export const getProduct = () => { 
  return new Promise((resolve, reject) => {
    setTimeout(()=>{
     resolve(products)

    },1000)
    
  })
}