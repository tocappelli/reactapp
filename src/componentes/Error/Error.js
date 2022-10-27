import Error from '../../assets/img/error.png'
import "./Error.css"

const error = ()=>{
  return(
     
     <div className =" container-fluid mt-4">
      <h2 className='textError'>ERROR 404 NOT FOUND</h2>
         <img className=' imgError img-fluid ' src={Error} alt="error" />
    </div>
  )
}

export default error