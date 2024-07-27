import React, { useState } from 'react'
import {Link,useNavigate} from "react-router-dom"
import "../pages/SignUp.css"
import axios from 'axios'
import { FcGoogle } from "react-icons/fc"
import { FaFacebook } from "react-icons/fa";
import { radio } from '@nextui-org/theme'
const SignUp = () => {
    const [formData,setFormData] = useState({
        fname: '',
        lname: '',
        email: '',
        password: '',
        cpassword: '',
        phone: ''
    })
    const [errors, setErrors] = useState({})
    const [valid, setValid] = useState(true)
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        let isvalid = true;
        let validationErrors = {};
        if(formData.fname === "" || formData.fname === null){
            isvalid = false;
            validationErrors.fname = "First Name Required"
        }
        if(formData.lname === "" || formData.lname === null){
            isvalid = false;
            validationErrors.lname = "Last Name Required"
        }
        if(formData.email ==="" || formData.email === null){
            isvalid = false;
            validationErrors.email = "Email Required"
        }
        if(formData.phone ==="" || formData.phone === null){
          isvalid = false;
          validationErrors.phone = "Phone Number Required"
        }
        if(formData.phone.length!==10){
          isvalid = false;
          validationErrors.phone = "Phone Number must be 10 digits"
        }
        if(formData.password === "" || formData.password === null){
            isvalid = false;
            validationErrors.email = "Password Required"
        }
        else if(formData.password.length < 6){
            isvalid= false;
            validationErrors.password= "Password length must be atleast 6 characters"
        }

        if (formData.cpassword !== formData.password){
            isvalid = false;
            validationErrors.cpassword = "Confirm Password is not matching with the passowrd"
        }
        setErrors(validationErrors)
        setValid(isvalid)

      if(Object.keys(validationErrors).length === 0){    
        axios.post('http://localhost:3000/users',formData)
        .then(result => {
          alert("Registered Successfully")
          navigate("/Login")
        })
        .catch(err => console.log(err))
      }
    }
  return (
    <body style={{height:"100%",width:"100%"}}>
        <div className="abcd"></div>
        <div className="header">
          <img
            className="fingerprint-icon"
            src="https://img.icons8.com/color/48/000000/fingerprint.png"
            alt="Fingerprint Icon"
          />
          <h1 className="title">Signup with CaratLane</h1>
          <p className="subtitle">
            Unlock Best prices and become an insider for our exclusive <br/>launches
            & offers. Complete your profile and get ₹250 worth<br/> of xCLusive
            Points.
          </p>
        </div>
        <p id="use">USING</p>
        <div style={{marginLeft:"589px"}}>
        <div className="icons">
          <a href="https://accounts.google.com/">
            <FcGoogle />{" "}
          </a>
          <a href="https://www.facebook.com/">
            <FaFacebook />
          </a>
        </div>
        </div>
        {/* <button className="social facebook">
          <a id="goog" href="https://www.facebook.com/" target="_blank">
            Facebook
          </a>
        </button>
        <button className="social googlee">
          <a id="goog" href="https://accounts.google.com/" target="_blank">
            Google
          </a>
        
        </button> */}
        <p className="hr-sect" id="head" style={{fontSize:"15px"}}>
          Or Continue With
        </p>
        {valid ? (
          <></>
        ) : (
          <span className="text-danger">
            {errors.fname},{errors.lname},{errors.email},{errors.password}
            {errors.cpassword}
          </span>
        )}
        {/* <div id="namebox">
          <p className="subhead first">ISD Code</p>
          <div>
            <select name="" id="isd">
              <option value="" disabled selected hidden></option>
              <option className="opt" value="91">
                +91
              </option>
              <option className="opt" value="44">
                +44
              </option>
              <option className="opt" value="61">
                +61
              </option>
            </select>
          </div>
        </div> */}
        <div className="mobile">
          <div>
            <p class="subhead first"></p>
            <input
              className="blkin"
              type="number"
              id="mobile"
              placeholder="Mobile Number"
              onChange={(event) =>
                setFormData({ ...formData, phone: event.target.value })
              }
              style={{height:"40px",marginRight:"-10px",width:"480px",backgroundColor:'lightgray'}}
            />  
          </div>
          <div>
            <p class="subhead"></p>
            <input
              className="blkin"
              type="email"
              id="mail"
              placeholder="Enter Email"
              onChange={(event) =>
                setFormData({ ...formData, email: event.target.value })
              }
              style={{height:"40px",width:"480px",marginLeft:"50px",backgroundColor:'lightgray'}}
            />
          </div>
        </div>

        <div id="namebox">
          <input
            className="blkin"
            type="text"
            id="firstname"
            placeholder="First Name"
            onChange={(event) =>
              setFormData({ ...formData, fname: event.target.value })
            }
            style={{height:"40px",marginRight:"40px",backgroundColor:'lightgray'}}
          />
          <input
            className="blkin"
            type="text"
            id="lastname"
            placeholder="Enter Last Name"
            onChange={(event) =>
              setFormData({ ...formData, lname: event.target.value })
            }
            style={{height:"40px",backgroundColor:'lightgray'}}
          />
        </div>
        <div className="pass">
          <input
            className="blkin"
            type="password"
            id="enterpass"
            placeholder="Enter Password"
            onChange={(event) =>
              setFormData({ ...formData, password: event.target.value })
            }
            style={{height:"40px",marginRight:"30px",width:"947px",backgroundColor:'lightgray'}}
          />
          <p className="subhead"></p>
          <input
            className="blkin"
            type="password"
            id="confirmpass"
            placeholder="Confirm Password"
            onChange={(event) =>
              setFormData({ ...formData, cpassword: event.target.value })
            }
            style={{height:"40px",width:"940px",backgroundColor:'lightgray'}}
          />
        </div>
        <div style={{display:"flex",marginLeft:"395px"}}>
          <div style={{display:"flex",margin:"12px"}}>
            <input type={"radio"}/>
            <p>Male</p>
          </div>
          <div style={{display:"flex",margin:"12px"}}>
            <input type={"radio"}/>
            <p>Female</p>
          </div>
          <div style={{display:"flex",margin:"12px"}}>
            <input type={"radio"}/>
            <p>Others</p>
          </div>
        </div>
        {/* <select placeholder="Gender" id="gender">
          <option value="" disabled selected hidden>
            Gender
          </option>
          <option className="opt" value="Male">
            Male
          </option>
          <option className="opt" value="Female">
            Female
          </option>
        </select> */}
        <div className="googleconnect">
          <input id="check" type="checkbox" />
          <div className="WP">
            <label>Opt for WhatsApp support</label>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeHq-vaUK8MlOy8sPlCE5cHlSF9w7jUJ6YDQ&usqp=CAU"
              alt=""
            />
          </div>
          <div style={{fontSize:"10px"}}>
            We will be sharing Delivery & precious order related communication.
            Also provide you with an interactive whatsapp support
          </div>
        </div>
        <div style={{width:"700px",marginLeft:"395px"}}>
        <button id="reg" onClick={handleSubmit}>
          SIGN ME UP
        </button>
        </div>
        <div id="last" style={{marginLeft:"410px",display:"flex"}}>
          <div >Already have an account?</div>
          <div>
            <a id="log" href="Login">
              LOG IN
            </a>
          </div>
        </div>
    </body>
  );

}

export default SignUp
