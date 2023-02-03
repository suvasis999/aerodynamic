import React, { useEffect }  from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {StackedCarousel,ResponsiveContainer } from "react-stacked-center-carousel";
import homeCSS from "./home.module.css";
import { Slide } from './Slide';
import Fab from "@material-ui/core/Fab";
import KeyboardArrowLeftIcon from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import { Link } from "react-router-dom"

const data = [
    {
      image: "../assets/web/game/1.jpg",
      
    },
    {
      image: "../assets/web/game/2.jpg",
      
    },
    {
        image: "../assets/web/game/3.jpg",
        
    }
  ];


function Home() {
    const ref = React.useRef(StackedCarousel);
    const ref2 = React.useRef(StackedCarousel);
    const ref3 = React.useRef(StackedCarousel);
   
    useEffect(() => {
        setInterval(stuff, 100000);
        setInterval(stuff2, 100000);
        setInterval(stuff3, 100000);
      }, []);
    
    function stuff() {
        ref.current?.goNext();
      }
      function stuff2() {
        ref2.current?.goNext();
      }
      function stuff3() {
        ref3.current?.goNext();
      }
  return (
    <div>
    <div className={homeCSS.navBg}>
    <Container >
        <Row className={homeCSS.navBg}>
    <Navbar collapseOnSelect expand="lg"  >
      <Navbar.Brand href="#home">
      <img  src="../assets/web/logo.png" alt="aerodynamic"  />
       
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" className={homeCSS.customNavIcon}/>
      <Navbar.Collapse id="responsive-navbar-nav" className={homeCSS.navbarNav}>
        <Nav className="flex-grow-1 ">
        <Link to="/"  style={{color:'#ffffff',textDecoration:'none'}}>
          <Nav.Link href="#Home" style={{color:'#ffffff'}} >Home</Nav.Link></Link>
          <Nav.Link href="#sectionDownload" style={{color:'#ffffff'}}>Download</Nav.Link>
          <Nav.Link  style={{color:'#ffffff'}}>
          <Link to="/Contact"  style={{color:'#ffffff',textDecoration:'none'}}> Contact us</Link>
           </Nav.Link>
        </Nav>
        <Nav className="d-flex">
            
            <Button variant="success" className={homeCSS.btnJoin}>
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
    <div style={{textAlign:'left'}}>
     <Row style={{padding:'0px',margin:'0px'}}>
        <img className={homeCSS.graphics_image} src="./assets/topLine.png" alt="aerodynamic"/>
    </Row>
        <Row style={{margin:'0px'}}>
        <Col xs={4} style={{paddingLeft:'0px'}}>
        <img  src="./assets/web/girl_img.png" alt="aerodynamic" className={homeCSS.homeGirl}/>
        </Col>
        <Col xs={7}>
            <div className={homeCSS.title}>
                Aerodynamic
            </div>
            <div style={{position:'relative'}}>
           
            <img  src="./assets/headImage.png" alt="aerodynamic" className={homeCSS.homeTop}/>
            </div>
            <div className={homeCSS.descTop}>
            Lorem ipsum dolor sit amet consectetur. Mauris in amet arcu consectetur orci. <br/>
            Elementum auctor ultrices facilisi sit eget congue quis.
            Risus eu enim imperdiet.
            </div>
            <Button variant="success" className={homeCSS.btnJoin}>
            <Link to="/Splash"  style={{color:'#ffffff',textDecoration:'none'}}>
            Play Web Game!
            </Link>
            </Button>
        </Col>
        </Row>
     

     <Container className={homeCSS.gameSection}>
        <Row>
        <Col xs={7}>
        <div className={homeCSS.gameTitle}>
        Aerodynamic<br/>
        casino games
       </div>
       <div>
        <div className={homeCSS.gameDtls}>
        When focusing on the main objectives, 
        Assassin's Creed Valhalla is about 59½ Hours in length. 
        If you're a gamer that strives to see all aspects of the game, 
        you are likely to spend around 136 Hours to obtain 100% completion.
        once you start getting comfortable with the world and the 
        changes needed to play stealthily.
        <br/><br/>
        
        </div>
       </div>
         </Col>
        <Col xs={4} style={{position:'relative',padding:'0px 10px 0px 35px'}}>
        <KeyboardArrowLeftIcon className={homeCSS.leftArrow}  onClick={() => ref.current?.goBack()} />
       
        <ResponsiveContainer
          carouselRef={ref}
          render={(width, carouselRef) => {
            return (
              <StackedCarousel
                ref={carouselRef}
                slideComponent={Slide}
                slideWidth={450}
                carouselWidth={width}
                data={data}
                maxVisibleSlide={5}
                disableSwipe={false}
                customScales={[1, 0.85, 0.7, 0.55]}
                transitionTime={450}
              />
            );
          }}
        />
         
         <KeyboardArrowRightIcon className={homeCSS.rightArrow} onClick={stuff} />
        
        </Col>
        </Row>
     </Container>


     <Container className={homeCSS.gameSection}>
        <Row>
        
        <Col xs={4} style={{position:'relative',padding:'0px 10px 0px 35px'}}>
        <KeyboardArrowLeftIcon className={homeCSS.leftArrow}  onClick={() => ref.current?.goBack()} />
       
        <ResponsiveContainer
          carouselRef={ref2}
          render={(width, carouselRef) => {
            return (
              <StackedCarousel
                ref={carouselRef}
                slideComponent={Slide}
                slideWidth={450}
                carouselWidth={width}
                data={data}
                maxVisibleSlide={5}
                disableSwipe={false}
                customScales={[1, 0.85, 0.7, 0.55]}
                transitionTime={450}
              />
            );
          }}
        />
         
         <KeyboardArrowRightIcon className={homeCSS.rightArrow} onClick={stuff2} />
        
        </Col>
        <Col xs={7}>
        <div className={homeCSS.gameTitle}>
        Aerodynamic<br/>
        fishing games
       </div>
       <div>
        <div className={homeCSS.gameDtls}>
        When focusing on the main objectives, Assassin's Creed Valhalla is
         about 59½ Hours in length. If you're a gamer that strives to 
         see all aspects of the game, you are likely to spend around 
         136 Hours to obtain 100% completion.
         once you start getting comfortable with the world
          and the changes needed to play stealthily.


        </div>
       </div>
         </Col>
        </Row>
     </Container>

     <Container className={homeCSS.gameSection}>
        <Row>
        
        
        <Col xs={7}>
        <div className={homeCSS.gameTitle}>
        Aerodynamic<br/>
        slot games
       </div>
       <div>
        <div className={homeCSS.gameDtls}>
        When focusing on the main objectives, Assassin's Creed 
        Valhalla is about 59½ Hours in length. If you're a gamer
         that strives to see all aspects of the game, you are likely 
         to spend around 136 Hours to obtain 100% completion.
        once you start getting comfortable with the world and the
         changes needed to play stealthily.



        </div>
       </div>
         </Col>
         <Col xs={4} style={{position:'relative',padding:'0px 10px 0px 35px'}}>
        <KeyboardArrowLeftIcon className={homeCSS.leftArrow}  onClick={() => ref.current?.goBack()} />
       
        <ResponsiveContainer
          carouselRef={ref3}
          render={(width, carouselRef) => {
            return (
              <StackedCarousel
                ref={carouselRef}
                slideComponent={Slide}
                slideWidth={450}
                carouselWidth={width}
                data={data}
                maxVisibleSlide={5}
                disableSwipe={false}
                customScales={[1, 0.85, 0.7, 0.55]}
                transitionTime={450}
              />
            );
          }}
        />
         
         <KeyboardArrowRightIcon className={homeCSS.rightArrow} onClick={stuff3} />
        
        </Col>
        </Row>
     </Container>
     <Container className={homeCSS.gameDownload} id="sectionDownload">
        <Row>
            <Col xs={12} style={{textAlign:'center'}}>
                <div className={homeCSS.gameDownDivTitle}>Get the App</div>
                <div className={homeCSS.gameDownButtonDiv}>
                    <Row style={{paddingTop:'30px'}}>
                      <Col xs={6}>
                      <Link to="/application/Aerodynamic.apk" target="_blank" download>
                     <img  src="./assets/web/btn_android.png" alt="aerodynamic" className={homeCSS.Downbtn}
    />
    </Link>
    </Col>
                    <Col xs={6}>
                     <img  src="./assets/web/btn_ios.png" alt="aerodynamic"  className={homeCSS.DownbtnIos}/>
                     </Col>
                    </Row>
                   
                   
                </div>
                <img className={homeCSS.buttomGraohic} src="./assets/web/bottom_graphic.png" alt="aerodynamic"/>
            </Col>
        </Row>
     </Container>
    
    </div>
    <Row style={{padding:'0px',margin:'0px'}}>
    
        <img className={homeCSS.graphics_image} src="./assets/bottomLine.png" alt="aerodynamic"/>
    </Row>
    <Container>
    <Row>
       <Col xs={12} style={{textAlign:'center',color:'#ffffff'}}>
          <div className={homeCSS.footerDiv}>Copyright @ Aerodynamic LLC 2023. All Right Reserved</div>
        </Col>
    </Row>
    </Container>
    </div>
   
  )
}

export default Home