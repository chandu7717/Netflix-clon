import React from 'react'
import "./footer.css"
import { FaGreaterThan } from "react-icons/fa6";
import { TbLanguageHiragana } from "react-icons/tb";
import { Link } from 'react-router-dom';



const Footer = () => {
  return (
    <footer>
      <h3 className='footer-watch'> 
      Ready to watch? Enter your email to create or restart your membership.
      </h3>
      <div id="footer-input-email">
            <input type="text" placeholder='Email address' />
            <Link to={"/signin"}><button>
                Get Started 
                <span style={{position:"relative",top:"4px",fontWeight:"none"}}><FaGreaterThan/></span>
            </button>
            </Link>
        </div>

        <div id="faq">
           Questions? Call 000-800-919-1694
        </div>

        <div id="links">
            <ul id='line1-one'>
               <li>
                <a href="">FAQ</a>
               </li>
               <li>
                <a href="">Investor Relation</a>
               </li>
               <li>
                <a href="">Privacy</a>
               </li>
               <li>
                <a href="">Speed Test</a>
               </li>
            </ul>

            {/* /////////////// */}

            <ul id='line2-two'>
               <li>
                <a href="">Help Centre</a>
               </li>
               <li>
                <a href="">Jobs</a>
               </li>
               <li>
                <a href="">Cookey Preference</a>
               </li>
               <li>
                <a href="">Legal Notices</a>
               </li>
            </ul>

            {/* ///////////////////// */}
            <ul id='line3-three'>
               <li>
                <a href="">Account </a>
               </li>
               <li>
                <a href="">Way Watch</a>
               </li>
               <li>
                <a href="">Corporate information</a>
               </li>
               <li>
                <a href="">Only On Netflix</a>
               </li>
            </ul>

            <ul id='line4-four'>
               <li>
                <a href="">Media Centre </a>
               </li>
               <li>
                <a href="">Term to use</a>
               </li>
               <li>
                <a href="">Contact Us</a>
               </li>
            </ul>
            <div id="lang">
        <span><TbLanguageHiragana size={22} color='white' style={{position:"relative",left:"80px",top:"7px"}}/></span>
        <select name="" id="">
           
                <option value="English">English</option>
                <option value="Kannada">Kannada</option>
            </select>

        </div>
        
        </div>

        <p id='bharath'>
            Netflix Bharath
        </p>
    </footer>
    
  )
}

export default Footer