import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {BrowserRouter , Routes, Route, Link} from 'react-router-dom'
import Cart from './Cart';
import ProductList from './ProductList';
import Home from './Home'
import About from './About';
import Contact from './Contact';


function CollapsibleExample() {
  return (
    <BrowserRouter>
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container >
        <Navbar.Brand href="#home"> <img className='piza' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmsr4fh0kWlgmCaY8K3KLvanKHvx8cO-c48Ey2gUH2zuw_6dNTRuR2LespmPlpj_8vtQ&usqp=CAU" alt='logo'/></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" style={{fontWeight:"900"} }>Home</Nav.Link>
            <Nav.Link as={Link} to="/home"style={{fontWeight:"900"} }>shop</Nav.Link>
            <Nav.Link as={Link} to="about"style={{fontWeight:"900"} }>About</Nav.Link>
            <Nav.Link as={Link} to="contact"style={{fontWeight:"900"} }>Contact us</Nav.Link>
             <Nav.Link as={Link} to="cart"style={{fontWeight:"900"} }><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGbsN70iBBN-glkT3uWToyKaBw2MiCFI8jXQ&usqp=CAU'style={{width:"30px"}} alt='cart'/></Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <div>
  <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/home' element={<ProductList/>} />
    <Route path='/about' element={<About/>} />
    <Route path='/cart' element={<Cart/>} />
    <Route path='/contact' element={<Contact/>} />
   
  </Routes>
 </div>
 </BrowserRouter> 
  );

}

export default CollapsibleExample;