import React from 'react'
import { FaGreaterThan } from "react-icons/fa6";
import Nav from './Nav'
import "./home.css"
import Card from './Card';
import Footer from './Footer';
import { Link } from 'react-router-dom';
const Home = () => {
  return (
    <>
    
    <div id="main">
    <Nav/>
    </div>

    <div id='content'>
        <h1 id='head'>
            Unlimited movies,   TV shows and more  
        </h1>
        <h2 id='cancel'>
        Watch anywhere. Cancel anytime.
        </h2>
        <h6 id='ready-towatch'>
           Ready to watch? Enter your email to create or restart your membership.
        </h6>
        <div id="input-email">
            <input type="text" placeholder='Email address' />
            <Link to={"/login"}><button>
                Get Started 
                <span style={{position:"relative",top:"4px",fontWeight:"none"}}><FaGreaterThan/></span>
            </button>
            </Link>
        </div>
    </div>
    <Card/>
    <h3 id="reasons">
       More reasons to join
    </h3>
    <div id="line2">
    <div id="card1">
            <h1 id='card1-head'> 
                PREMIUM
            </h1>
            <h5 id='card1-body'>
                A cinematic experience with the best picture abd audio quality.
            </h5>
            <h3 id='price'> 
                $9.5/month
            </h3>
        </div>
        <div id="card2">
        <div id="card1">
            <h1 id='card1-head'> 
                PREMIUM
            </h1>
            <h5 id='card1-body'>
                A cinematic experience with the best picture abd audio quality.
            </h5>
            <h3 id='price'> 
                $9.5/month
            </h3>
        </div>
        </div>
        <div id="card3">
        <div id="card1">
            <h1 id='card1-head'> 
                PREMIUM
            </h1>
            <h5 id='card1-body'>
                A cinematic experience with the best picture abd audio quality.
            </h5>
            <h3 id='price'> 
                $9.5/month
            </h3>
        </div>
        </div>
        <div id="card4">

        <div id="card1">
            <h1 id='card1-head'> 
                PREMIUM
            </h1>
            <h5 id='card1-body'>
                A cinematic experience with the best picture abd audio quality.
            </h5>
            <h3 id='price'> 
                $9.5/month
            </h3>
        </div>
        </div>
    </div>

   <Footer/>
   
    </>
  )
}

export default Home