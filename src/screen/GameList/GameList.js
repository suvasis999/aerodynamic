import React,{useEffect,useState} from 'react'
import homeCSS from "./GameList.module.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getGameList } from '../../store/actions/gameAction';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Card , Nav, Navbar } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Spinner from 'react-bootstrap/Spinner';
import { game_url } from '../../services/constants'
import { useNavigate } from "react-router-dom";
import Rightbutton from '../../component/Navbutton/Rightbutton';
import Leftbutton from '../../component/Navbutton/Leftbutton';
import { userLogout } from '../../store/actions/authAction';
import Gamemodal from '../../component/Gamemodal';
import GameplayModal from '../../component/GameplayModal';
import {decode as base64_decode, encode as base64_encode} from 'base-64';

import Paymentmodal from '../../component/Paymenetmodal';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import loginCSS from "../Login/login.module.css";
const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 3
  },
  desktop: {
    breakpoint: { max: 3000, min: 424 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2
  }
};
const  GameList=() =>{
  const [modalShow, setModalShow] =useState(false);
  const [modalPaymentShow,setModalPaymentShow]=useState(false);
  const [gamemeModalShow,setgamemeModalShow]=useState(false);
  
  const gameData = useSelector(state => state.gameRoot.gameList);
  const gameLoading=useSelector(state=>state.gameRoot.gameLoading);
  const [gamelist, setgameList] = useState([]);
  const [userData, setuserData] = useState(JSON.parse(localStorage.getItem('userData')));
  const dispatch = useDispatch();//const uData=JSON.parse(userData);
  const navigate = useNavigate();
  useEffect(() => {
    let data = {
      "bonus": 1
    }
    dispatch(getGameList(data));
    
    setgameList(gameData.GameList);
   
  }, [gameLoading,userData]);

const onOpenGameHandler=(gameid)=>{
    //setgamemeModalShow(true)
// navigate(`/Game/${gameid}`); 
const uData=userData;
     let data = {
     "gameLaunchingUrl": `vpower://token=${uData.Token}`,
     "token": uData.Token,
     "userName": uData.Username,
     "gameId": gameid,
     "backUrl": `vpower://token=${uData.Token}`
   }
   
   let back_url = `${game_url}/backurl`;
   let encoded = base64_encode(back_url);
   const url = `${game_url}?id=${gameid}&token=${uData.Token}&back=${encoded}==&lang=en`;
window.open(url, 'sharer', 'toolbar=0,status=0,width='+window.innerWidth+',height='+window.innerHeight+'');

}

const gameSignOut=()=>{
    console.log(userData);
   const uData=userData;
   console.log(uData.Username);
   dispatch(userLogout(uData.Username,navigate)); 
 }

const renderItem=()=>{
    return(
        <div>hi</div>
    );
}
 

 const showModal=async()=>{
  setModalShow(true)
 }

  return (
    <div>
        <GameplayModal
        show={gamemeModalShow}
        onHide={()=>setgamemeModalShow(false)}
        />
      <Gamemodal
       show={modalShow}
       onHide={() => setModalShow(false)}
       
      />
     <Paymentmodal
     show={modalPaymentShow}
     onHide={() => setModalPaymentShow(false)}
   
     /> 

     
      
    <div className={homeCSS.container}>
    
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
          <Nav.Link href="#Home" style={{color:'#ffffff'}} >Home{ window.innerWidth + 'px'}</Nav.Link></Link>
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
    <div style={{height:'100px'}}>
      <img className={loginCSS.graphics_image} src="./assets/topLine.png" alt="aerodynamic"/>
    </div>
     <div className={homeCSS.gameInner}>
          <Container>
          <Row>
          <Col xs={12} >
            <div>
                <Container>
                    <Row>
                        <Col xs={1}></Col>
                        <Col  xs={10}>
                            <div >
                            <Container>
                                <Row>
                                    <Col xs={3} className={homeCSS.userDiv}>
                                        <div className={homeCSS.userImageDiv}>
                                            <img  src="../assets/web/user.png" alt="aerodynamic" 
                                            className={homeCSS.userImage}/>
                                        </div>
                                        <div className={homeCSS.userTextDiv}>
                                            Welcome user {userData.Username}
                                        </div>
                                    </Col>
                                    <Col xs={6} style={{height:'100px',marginTop:'-35px'}}>
                                        <div className={homeCSS.logoName}>
                                            Aerodynamic
                                        </div>
                                        <div>
                                        <img  src="../assets/web/Coin1.png" alt="aerodynamic" 
                                            className={homeCSS.userCoinImg} 
                                           /> 
                                          <span className={homeCSS.coinText}>1200</span> 
                                        </div>
                                        <div style={{color:'#ffffff',paddingLeft:'30px'}}>Your Balance</div>
                                        <div style={{color:'#FF0000',paddingLeft:'30px',textDecoration:'underline'}}>Request Cashout</div>
                                    </Col>
                                    <Col xs={3} className={homeCSS.userDiv}>
                                    <div className={homeCSS.userImageLogoutDiv}  >
                                        <div  className={homeCSS.userImageLogout} onClick={()=>gameSignOut()}>
                                            <img  src="../assets/web/Logout.png" alt="aerodynamic" 
                                            className={homeCSS.userImageLogout} 
                                           /> 
                                           </div>
                                        </div>
                                        <div className={homeCSS.userTextDiv} >
                                            Logout
                                        </div>
                                    </Col>
                                  </Row>
                            </Container>
                            </div>
                        </Col>
                        <Col xs={1}></Col>
                    </Row>
                </Container>
            </div>
          </Col>
          </Row>
          <Row>
          <Col xs={1}></Col>
          <Col xs={10} className={homeCSS.gameMiddle} style={{marginTop:'90px'}}>
            <Container>
                <Row >

               
          {gamelist && gamelist.length >0 ?
           <></>
           : <Spinner/>}
            {gamelist.map((item) => {
          return (
            <>
              <Col xs={2} className={homeCSS.gameThumb} key={item.GameID}>
              <img src= {item.Image1} 
                  alt='aerodynamci' 
                 className={homeCSS.gameImg} 
                  onClick={()=> onOpenGameHandler(item.GameID)}/>
              </Col>
            </>
          );
        })}
         </Row>
            </Container>
          </Col>
          <Col xs={1}></Col>
        </Row>
          </Container>
           </div>
          
       
    </div>
    </div>
   
    
    
  )
}

export default GameList