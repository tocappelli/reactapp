import "./Navbar.css"
import logo from '../../assets/img/logo1.png'
import CartWidget from "../CartWidget/CartWidget"

const Navbar = () => {
   return (
   <nav className="navbar navbar-expand-lg   ">
    <div>
      <img className="logo" src={logo} alt="logo" />
    </div>
      <div className ="d-flex container-fluid justify-content-center fontButton">
      <button type="button" className="btn ">HOME</button>
      <button type="button" className="btn ">ABOUT US</button>
      <button type="button" className="btn ">PRODUCTOS</button>
      </div>
      <div className ="d-flex container-fluid justify-content-end fontButton">
      <CartWidget />
      </div>
   </nav>
  
  )

}



export default Navbar;