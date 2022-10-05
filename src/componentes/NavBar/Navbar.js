import "./Navbar.css"
import logo from '../../assets/img/logo1.png'
import CartWidget from "../CartWidget/CartWidget"

const Navbar = () => {
   return (
   <nav className="navbar navbar-expand-lg justify-content-center d-flex ">
    
    <div className =" container-fluid  fontButton">
      <img className="logo" src={logo} alt="logo" />
      <button type="button" className="btn ">HOME</button>
      <button type="button" className="btn ">ABOUT US</button>
      <button type="button" className="btn ">PRODUCTOS</button>
    </div>
      <div className ="d-flex container-fluid justify-content-end text-end">
        <CartWidget />
      </div>
   </nav>
  
  )

}



export default Navbar;