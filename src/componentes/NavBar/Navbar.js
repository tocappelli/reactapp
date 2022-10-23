import "./Navbar.css"
import logo from '../../assets/img/logo1.png'
import CartWidget from "../CartWidget/CartWidget"
import { Link,NavLink } from "react-router-dom"




const Navbar = () => {
   return (
   <nav className="navbar justify-content-center d-flex  ">
    <div className =" container-fluid fontButton ">
      <Link to="/">
      <img className="logo" src={logo} alt="logo" />
      </Link>
      <Link to="/" className="btn fs-5 ">INICIO</Link>
      <Link to="/about" className="btn fs-5 ">SOBRE LOS 90`</Link>
      <NavLink to={"/category/Juegos"} className={({isActive})=> isActive ? "ActiveOption": "Option"}>Juegos</NavLink>
      <NavLink to={"/category/Famosos"} className={({isActive})=> isActive ? "ActiveOption": "Option"}>Famosos</NavLink>
      <NavLink to={"/category/Mundiales"} className={({isActive})=> isActive ? "ActiveOption": "Option"}>Mundiales</NavLink>
      <NavLink to={"/category/Politicos"} className={({isActive})=> isActive ? "ActiveOption": "Option"}>Políticos</NavLink>
      <NavLink to={"/category/Dibujos"} className={({isActive})=> isActive ? "ActiveOption": "Option"}>Dibujos</NavLink>
      
    </div>
      <div className ="d-flex">
        <CartWidget />
      </div>
   </nav>
  
  )

}



export default Navbar;