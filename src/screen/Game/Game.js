import React,{useEffect,useState} from 'react'
import gameCSS from "./game.module.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Spinner from 'react-bootstrap/Spinner';
import { useParams } from "react-router-dom";
import { game_url } from '../../services/constants'
import Iframe from '../../component/Iframe';
import Rightbutton from '../../component/Navbutton/Rightbutton';
import Leftbutton from '../../component/Navbutton/Leftbutton';
import { userLogout } from '../../store/actions/authAction';
import Gamemodal from '../../component/Gamemodal';
import { useNavigate } from "react-router-dom";
import {decode as base64_decode, encode as base64_encode} from 'base-64';
import Paymentmodal from '../../component/Paymenetmodal';

const  Game=() =>{
  const [userData, setuserData] = useState(localStorage.getItem('userData'));
  const [modalShow, setModalShow] =useState(false);
  const [modalPaymentShow,setModalPaymentShow]=useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
    const routeParams = useParams();
    const [gameURl, setgameURl] = useState('');
     useEffect(() => {
    let param=routeParams;
     showGame();
  }, [userData]);

  const gameSignOut=async()=>{
    const uData=JSON.parse(userData);
    console.log(uData.Username)
    dispatch(userLogout(uData.Username,navigate)); 
  }

  const gobackToList=()=>{ 
    navigate('/gamelist');
  }
  
  const showGame=()=>{
    let locData= localStorage.getItem('userData') ;
    const uData=JSON.parse(locData);
    let param=routeParams;
    let data = {
     "gameLaunchingUrl": `vpower://token=${uData.Token}`,
     "token": uData.Token,
     "userName": uData.Username,
     "gameId": param.Id,
     "backUrl": `vpower://token=${uData.Token}`
   }
   
   let back_url = `${game_url}/backurl`;
   let encoded = base64_encode(back_url);
   const url = `${game_url}?id=${param.Id}&token=${uData.Token}&back=${encoded}==&lang=en`;
   setgameURl(url);
  // window.open(url, "_self");
   console.log('&&&&'+url);
  }

  return (
    <div> 
       <Gamemodal
       show={modalShow}
       onHide={() => setModalShow(false)}
      />
       <Paymentmodal
     show={modalPaymentShow}
     onHide={() => setModalPaymentShow(false)}
   
     />

    <div className={gameCSS.container}>
    <div>
      <img className={gameCSS.graphics_image} src="../assets/homescreen/BgimageMain.png" 
      alt="aerodynamic" style={{height:'100vh'}}/>
    </div>
     <div className={gameCSS.loadBar}>
        <div className={gameCSS.gameContainer}>
          <div className={gameCSS.gameHeader}>
          <Container>
            <Row>
              <Col xs={1} md={1} lg={1}>
                  <div className={gameCSS.profile_Avtar}>
                    <img  src="../assets/profile/img_1.jpg" alt="aerodynamic" />
                  </div>
              </Col>
              <Col xs={3} md={3} lg={3}>
                  <div className={gameCSS.deposti_btn} onClick={()=>setModalPaymentShow(true)}>
                    <div className={gameCSS.arrow}>
                      <img  src="../assets/home/left_polygon.png" alt="aerodynamic" />
                    </div>
                    <div className={gameCSS.btnLbl}>Deposit</div>
                  </div>
              </Col>
              <Col xs={4} md={4} lg={4}>
                  <div className={gameCSS.amt_chkDiv}>
                    <div className={gameCSS.btnLblAmt}>0</div>
                  </div>
              </Col>
              <Col xs={3} md={3} lg={3}>
                  <div className={gameCSS.deposti_btn}>
                    <div className={gameCSS.redeemArrow}>
                      <img  src="../assets/home/left_polygon.png" alt="aerodynamic" />
                    </div>
                    <div className={gameCSS.btnLbl}>Redeem</div>
                  </div>
              </Col>
              <Col xs={1} md={1} lg={1}></Col>
            </Row>
          </Container>
             </div>
          <div className={gameCSS.gameInner}>
          <Container>
          <Row>
          <Col style={{position:'relative'}}>
          <img className={gameCSS.gameLeft} src="../assets/homescreen/leftsaidimage.png" 
      alt="aerodynamic" />
      <div style={{position:'absolute',top:'0px'}}>
             <Leftbutton modalopen={()=>setModalShow(true)}  openGame={()=>navigate('/gamelist')}/>
      </div>
          </Col>
          <Col xs={10} className={gameCSS.gameMiddle}> 
            <Iframe source={gameURl}/>
          </Col>
          <Col style={{position:'relative'}}>
          <img className={gameCSS.gameRight} src="../assets/homescreen/Rightsaidimage.png" 
      alt="aerodynamic" />
          <div style={{position:'absolute',top:'0px'}}>
             <Rightbutton logout={gameSignOut} modalopen={()=>setModalShow(true)}
              goback={gobackToList}/>
          </div>
          </Col>
        </Row>
          </Container>
           </div>
         {/* <div className={gameCSS.gameFooter}></div>*/}
        </div>
    </div>
    </div>
    </div>
    
    
  )
}

export default Game