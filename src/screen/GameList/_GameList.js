import React,{useEffect,useState} from 'react'
import homeCSS from "./GameList.module.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getGameList } from '../../store/actions/gameAction';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Card } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Spinner from 'react-bootstrap/Spinner';
import { game_url } from '../../services/constants'
import { useNavigate } from "react-router-dom";
import Rightbutton from '../../component/Navbutton/Rightbutton';
import Leftbutton from '../../component/Navbutton/Leftbutton';
import { userLogout } from '../../store/actions/authAction';
import Gamemodal from '../../component/Gamemodal';
import Paymentmodal from '../../component/Paymenetmodal';
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
  const gameData = useSelector(state => state.gameRoot.gameList);
  const gameLoading=useSelector(state=>state.gameRoot.gameLoading);
  const [gamelist, setgameList] = useState([]);
  const [userData, setuserData] = useState(localStorage.getItem('userData'));
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    let data = {
      "bonus": 1
    }
    dispatch(getGameList(data));
    setgameList(gameData.GameList);
   
  }, [gameLoading,userData]);

const onOpenGameHandler=(gameid)=>{
 navigate(`/Game/${gameid}`);
}

const gameSignOut=async()=>{
   const uData=JSON.parse(userData);
   dispatch(userLogout(uData.Username,navigate)); 
 }
 

 const showModal=async()=>{
  setModalShow(true)
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

     
      
    <div className={homeCSS.container}>
    <div >
      <img className={homeCSS.graphics_image} src="./assets/homescreen/BgimageMain.png" 
      alt="aerodynamic" style={{height:'100vh'}}/>
    </div>
     <div className={homeCSS.loadBar}>
        <div className={homeCSS.gameContainer}>
          <div className={homeCSS.gameHeader}>
          <Container>
            <Row>
              <Col xs={1} md={1} lg={1}>
                  <div className={homeCSS.profile_Avtar}>
                    <img  src="./assets/profile/img_1.jpg" alt="aerodynamic" />
                  </div>
              </Col>
              <Col xs={3} md={3} lg={3}>
                  <div className={homeCSS.deposti_btn} onClick={()=>setModalPaymentShow(true)}>
                    <div className={homeCSS.arrow}>
                      <img  src="./assets/home/left_polygon.png" alt="aerodynamic" />
                    </div>
                    <div className={homeCSS.btnLbl}>Deposit</div>
                  </div>
              </Col>
              <Col xs={4} md={4} lg={4}>
                  <div className={homeCSS.amt_chkDiv}>
                    <div className={homeCSS.btnLblAmt}>0</div>
                  </div>
              </Col>
              <Col xs={3} md={3} lg={3}>
                  <div className={homeCSS.deposti_btn}>
                    <div className={homeCSS.redeemArrow}>
                      <img  src="./assets/home/left_polygon.png" alt="aerodynamic" />
                    </div>
                    <div className={homeCSS.btnLbl}>Redeem</div>
                  </div>
              </Col>
              <Col xs={1} md={1} lg={1}></Col>
            </Row>
          </Container>
          </div>
          <div className={homeCSS.gameInner}>
          <Container>
          <Row>
          <Col style={{position:'relative'}}>
          <img className={homeCSS.gameLeft} src="./assets/homescreen/leftsaidimage.png" 
      alt="aerodynamic" />
      <div style={{position:'absolute',top:'0px'}}>
             <Leftbutton modalopen={()=>setModalShow(true)} openGame={()=>navigate('/gamelist')}/>
      </div>
          </Col>
          <Col xs={10} className={homeCSS.gameMiddle}>
          {/*<Spinner animation="border" variant="warning" />*/}
          {gamelist && gamelist.length >0 ? <Carousel 
          itemClass={homeCSS.carouselItem} partialVisible={false}
            centerMode={true}
            swipeable={true}
            draggable={true}
            showDots={false}
            responsive={responsive}
            ssr={true} // means to render carousel on server-side.
            infinite={true}
            autoPlaySpeed={1000}
            keyBoardControl={true}
            customTransition="all .5"
            transitionDuration={500}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
        >
          {gamelist.map((item,index) => {
            return (
              <div className={homeCSS.cardGame} key={item.GameID}>
                  <img src= {item.Image1} 
                  alt='aerodynamci' 
                  style={{marginLeft: "auto", marginRight: "auto", display: "flex", 
                  justifyContent: "center",cursor:'pointer'}} 
                  onClick={()=> onOpenGameHandler(item.GameID)}/>
               </div>
           ); 
           }) }
            
        </Carousel>: <Spinner/>}
          </Col>
          <Col style={{position:'relative'}}>
          <img className={homeCSS.gameRight} src="./assets/homescreen/Rightsaidimage.png" 
      alt="aerodynamic" />
          <div style={{position:'absolute',top:'0px'}}>
             <Rightbutton logout={gameSignOut} modalopen={()=>setModalShow(true)}/>
          </div>
          </Col>
        </Row>
          </Container>
           </div>
           {/*<div className={homeCSS.gameFooter}>
         <Container>
            <Row>
              <Col xs={1} md={1} lg={1}>
                  <div className={homeCSS.profile_Avtar}>
                    <img  src="./assets/profile/img_1.jpg" alt="aerodynamic" />
                  </div>
              </Col>
              <Col xs={1} md={1} lg={1}>
                  <div className={homeCSS.profile_Avtar}>
                    <img  src="./assets/profile/img_1.jpg" alt="aerodynamic" />
                  </div>
              </Col>
              <Col xs={1} md={1} lg={1}>
                  <div className={homeCSS.profile_Avtar}>
                    <img  src="./assets/profile/img_1.jpg" alt="aerodynamic" />
                  </div>
              </Col>
              <Col xs={6} md={6} lg={6}>
                  <div className={homeCSS.deposti_btn_dailyWheel}>
                    <div className={homeCSS.spinnerImg}>
                        <img  src="./assets/home/spinner.png" alt="aerodynamic" />
                    </div>
                   
                  </div>
              </Col>
              <Col xs={1} md={1} lg={1}>
                  <div className={homeCSS.profile_Avtar}>
                    <img  src="./assets/profile/img_1.jpg" alt="aerodynamic" />
                  </div>
              </Col>
              <Col xs={1} md={1} lg={1}>
                  <div className={homeCSS.profile_Avtar}>
                    <img  src="./assets/profile/img_1.jpg" alt="aerodynamic" />
                  </div>
              </Col>
              <Col xs={1} md={1} lg={1}>
                  <div className={homeCSS.profile_Avtar}>
                    <img  src="./assets/profile/img_1.jpg" alt="aerodynamic" />
                  </div>
              </Col>
            </Row>
          </Container>
          </div>*/}
        </div>
    </div>
    </div>
    </div>
    
    
  )
}

export default GameList