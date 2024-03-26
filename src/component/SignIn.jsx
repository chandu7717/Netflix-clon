import React from 'react'
import "./sign.css"

const SignIn = () => {
  return (

    
   <>
    <div id="sign-in">
        <h1 className='sign'>
          Sign In
        </h1>
        <table>
          <tr>
            <td>
            <input type="text" placeholder='Email or phone number'/><br></br>
          </td>
          </tr>
          <tr >
            <td>
            <input type="password" placeholder='password' id='row2'/><br></br>
            </td>
          </tr>
          <tr>
            <td>
              <button id="sign">SignIn</button>
            </td>
          </tr>
          <tr>
            <td>
              <a href="#" id='forgot'>Forget Password ?</a>
            </td>
          </tr>
          <tr id="check">
            <td >
              <input type="checkbox"  id="check"/>
              <label htmlFor="Remember me">Remember me</label>

            </td>
          </tr>
          <tr>
           <div id="signup">
              <a href="#">SignUp Now</a>
              <label htmlFor="" id='new'>New to Netflix ? </label>
           </div>
          </tr>
          <tr>
            <td>
              <h3>
              This page is protected by Google reCAPTCHA to ensure you
              <br /> not a bot.
               <a href="#">Learn more</a>
            </h3>
            </td>
          </tr>
        </table>
        
    </div>
    
   </> 
  )
}

export default SignIn