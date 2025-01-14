import React, { Component } from 'react';
import html from '../logo/html.png';

import css from '../logo/css.png'
import js from '../logo/js.png'
import man_workings from '../logo/man_workings.png'
import sql from '../logo/sql.png'
import dotnet from '../logo/dotnet.png'
import c from '../logo/c#.jpg'
import java from '../logo/java.png'
import react from '../logo/react.png'
import {AnimationOnScroll} from 'react-animation-on-scroll'
import "animate.css/animate.compat.css"



const element_four = {
    
   marginTop: '50px',
   marginLeft: '400px'
  
   
 }

const element_five = {
    
   marginTop: '-450px',
   marginLeft: '250px'
 }

 const element_six = {
   
   marginTop: '50px',
   marginLeft: '170px'
   
 }

 const element_seven = {
   
   marginTop: '50px',
   marginLeft: '220px'
 }

 const element_eight = {
   
   marginTop: '-180px',
   marginLeft: '1200px'
 }

 const element_nine = {
   
   marginTop: '-390px',
   marginLeft: '650px'
 }

 const element_ten = {
   
   marginTop: '80px',
   marginLeft: '700px'
 }

 const element_eleven = {
   
   marginTop: '90px',
   marginLeft: '700px'

 }

export default class About extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="about">
         <div className="row">

           
            {/* <div className="nine columns main-col">

               
            </div> */}

      <AnimationOnScroll style={element_four} animateIn="fadeIn"  animateOut="fadeOut"  duration={2.0}>
        
        
        <img style={{ height: 550, marginLeft: -200, marginTop: 0  }} src={man_workings} alt="Logo" />
        
        </AnimationOnScroll>

        <AnimationOnScroll style={element_five} animateIn="bounceInLeft"  animateOut="fadeOut"  duration={2.0}>
        
        
        <img style={{ height: 80, marginTop: -100  }} src={html} alt="Logo" />
        
        </AnimationOnScroll>

        <AnimationOnScroll style={element_six} animateIn="bounceInLeft"  animateOut="fadeOut"  duration={2.0}>
        
        <div class="rolling">
        <img style={{ height: 100  }} src={css} alt="Logo" />
        <span >Let's Share daskljdlkakdad sajdkjsa;da;l </span>
    
        </div>
        </AnimationOnScroll>

        <AnimationOnScroll style={element_seven} animateIn="bounceInLeft"  animateOut="fadeOut"  duration={2.0}>
        
        
        <img style={{ height: 80  }} src={js} alt="Logo" />
        
        </AnimationOnScroll>

       

        <AnimationOnScroll style={element_nine} animateIn="bounceInRight"  animateOut="fadeOut"  duration={2.0}>
        
        
        <img style={{ height: 80  }} src={sql} alt="Logo" />
        
        </AnimationOnScroll>

        <AnimationOnScroll style={element_ten} animateIn="bounceInRight"  animateOut="fadeOut"  duration={2.0}>
        
        
        <img style={{ height: 80  }} src={react} alt="Logo" />
        
        </AnimationOnScroll>

        <AnimationOnScroll style={element_eleven} animateIn="bounceInRight"  animateOut="fadeOut"  duration={2.0}>
        
        
        <img style={{ height: 60,marginLeft:-100   }} src={dotnet} alt="Logo" />
        
        </AnimationOnScroll>

         </div>
      </section>
    );
  }
}