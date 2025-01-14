import React, { Component } from 'react';
import { Parallax } from 'react-parallax';
import TypeWriterEffect from 'react-typewriter-effect';
import FancyText from '@carefully-coded/react-text-gradient';
import image1 from '../header-background.jpg'
export default class Header extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (

      
      
      
      <React.Fragment>

      <Parallax bgImage= { image1 } blur={{ min: -15, max: 5 }} strength={100}  >
      <header id="home">
         <nav id="nav-wrap">
            <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
          <a className="mobile-btn" href="#" title="Hide navigation">Hide navigation</a>
            <ul id="nav" className="nav">
               <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
               <li><a className="smoothscroll" href="#about">About</a></li>
             <li><a className="smoothscroll" href="#resume">Resume</a></li>
               <li><a className="smoothscroll" href="#portfolio">Works</a></li>
               <li><a className="smoothscroll" href="#testimonials">Testimonials</a></li>
               <li><a className="smoothscroll" href="#contact">Contact</a></li>
            </ul>
         </nav>

         <div className="row banner">
            <div className="banner-text">
            <h1 className="responsive-headline">
            <span style={{ fontSize: '50px' }}>I am</span> <br />
            <FancyText gradient={{ from: '#F858E0', to: '#77156C', type: 'linear' }}
            animateTo={{ from: '#6DEDD0', to: '#7AE23A' }}
            animateDuration={2000}>
              Raghuram 
               </FancyText>
               </h1>
               <h2>
               <TypeWriterEffect
            textStyle={{ color: 'white', fontSize: 60, fontWeight: 'bold', fontFamily: 'Courier New'  }}
            startDelay={100}
            cursorColor="black"
            text="< web  developer />"
            typeSpeed={150}
            
          />
          
          </h2>
               <h3 style={{color:'#fff', fontFamily:'sans-serif '}}> I am a Full Stack Developer based in US. worked on more <br/>  10 web  projects  proficient in frontend, backend and database 
               ,currently <br/> working as full stack web developer at starmark software<br/>
               </h3>
              
              
            </div>
         </div>

         <p className="scrolldown">
            <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
         </p>

      </header>
      
      </Parallax>
     
    </React.Fragment>
      
    );
  }
}