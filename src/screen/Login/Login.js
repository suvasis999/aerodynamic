import React,{useEffect,useState} from 'react'
import loginCSS from "./login.module.css";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useDispatch } from "react-redux";
import { userLogin,userToken } from '../../store/actions/authAction';
import { useSelector } from "react-redux";
import { useNavigate  } from "react-router-dom";
import { getGameList } from '../../store/actions/gameAction';
import Container from 'react-bootstrap/Container';
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from "react-router-dom";

const Login=()=> {
  const data = useSelector(state => state.authRoot.ErrMessage);
  const userData = useSelector(state => state.authRoot.UserLogin);
  const navigate = useNavigate();
  const [userName, setuserName] = useState( '');
  const [isRem, setIsRem] = useState(false);
  const [show,setShow]=useState('');
  const dispatch = useDispatch();
  useEffect(() => {
   console.log(userData);
   let Gamedata = {
    "bonus": 1
  }
  dispatch(getGameList(Gamedata));
 }, [data,userData]);
  const loginHandler = async () => {
    const data = {
      userName
    };
    dispatch(userLogin(data));
    dispatch(userToken(data.userName,navigate));
  }
  return (
    <div>
      <div className={loginCSS.navBg}>
    <Container >
        <Row className={loginCSS.navBg}>
    <Navbar collapseOnSelect expand="lg"  >
      <Navbar.Brand href="#home">
      <img  src="../assets/web/logo.png" alt="aerodynamic"  />
       
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" className={loginCSS.customNavIcon}/>
      <Navbar.Collapse id="responsive-navbar-nav" className={loginCSS.navbarNav}>
        <Nav className="flex-grow-1 ">
        <Link to="/"  style={{color:'#ffffff',textDecoration:'none'}}>
          <Nav.Link href="#Home" style={{color:'#ffffff'}} >Home</Nav.Link></Link>
          <Link to="/#sectionDownload"  style={{color:'#ffffff',textDecoration:'none'}}>
          <Nav.Link href="#Home" style={{color:'#ffffff'}} >Download</Nav.Link></Link>
         
          <Nav.Link  style={{color:'#ffffff'}}>
          <Link to="/Contact"  style={{color:'#ffffff',textDecoration:'none'}}> Contact us</Link>
           </Nav.Link>
        </Nav>
        <Nav className="d-flex">
            
            <Button variant="success" className={loginCSS.btnJoin}>
            <Link to="/Splash"  style={{color:'#ffffff',textDecoration:'none'}}>
            Play Web Game!
            </Link>
            </Button>
          </Nav>
      </Navbar.Collapse>
    </Navbar>
    
       
        </Row>
    </Container>
    
    </div>
    <div className={loginCSS.container}>
    <div>
      <img className={loginCSS.graphics_image} src="./assets/topLine.png" alt="aerodynamic"/>
    </div>
     <div className={loginCSS.loadBar}>
    </div>
     <div className={loginCSS.loading}>
    
      <img className={loginCSS.loadingImg} src="./assets/aerodynamic.png" alt="aerodynamic"/>
      <div className={loginCSS.frmContainer}>
       <Form className=" col-md-4" style={{margin:'0 auto'}}>
      <Form.Group className="mb-3" >
        <Form.Label style={{color:"#ffffff"}}>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Name" 
         onChange={e => setuserName(e.target.value)}/>
        
      </Form.Group>
      <div style={{color:'yellow'}}>
      {data.message}
      </div>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Remember me" style={{color:"#ffffff"}} 
        onChange={e => setIsRem(!isRem)}/>
      </Form.Group>
     
      <div style={{textAlign:'center'}}>
      <Button variant="primary" type="button" 
      style={{ background: 'linear-gradient(to right, rgba(102, 126, 234, 0.5), rgba(118, 75, 162, 0.5))' }}
      onClick={loginHandler}>
        Submit
      </Button>
      </div>
    </Form>
      </div>
     </div>
      
     
     <div>
     <img className={loginCSS.bottom_graphics} src="./assets/bottomLine.png" alt="aerodynamic"/>
     </div>
   
    </div>
  </div>
  )
}

export default Login