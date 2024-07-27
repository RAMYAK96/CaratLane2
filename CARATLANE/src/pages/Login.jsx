import React,{useState} from "react"
import axios from 'axios'
import {Link,useNavigate} from "react-router-dom"
import "../pages/Login.css"
import { FcGoogle } from "react-icons/fc"
import { FaFacebook } from "react-icons/fa";

const Login = () => {
    const [formData,setFormData] = useState({
        email: '',
        password: ''
    })
    const [errors, setErrors] = useState({})
    const [valid, setValid] = useState(true)
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        let isvalid = true;
        let validationErrors = {};
        if(formData.email ==="" || formData.email === null){
            isvalid = false;
            validationErrors.email = "Email or Phone Number Required"
        }
        if(formData.password === "" || formData.password === null){
            isvalid = false;
            validationErrors.email = "Password Required"
        }
        else if(formData.password.length < 6){
            isvalid= false;
            validationErrors.password= "Password length must be atleast 6 characters"
        }
           
    axios.get('http://localhost:3000/users',formData)
    .then(result => {
        result.data.map(user=>{
            if(user.email==formData.email || user.email==formData.phone){
                if(user.password===formData.password){
                    alert("Login Successful")
                    navigate('/')
                }
                else{
                    isvalid=false;
                    validationErrors.password = "Wrong Password"
                    alert("Wrong Password")
                }
            }
            else if(formData.email !== ""){
                isvalid = false;
                validationErrors = "Wrong Email"
            }
        })
        setErrors(validationErrors)
        setValid(isvalid)
    })
    .catch(err => console.log(err))
    }
    return (
    <body>
      <div className="xyz"></div>
      <img
          className="fingerprint-icon"
          src="https://img.icons8.com/color/48/000000/fingerprint.png"
          alt="Fingerprint Icon"
          style={{}}
        />
        <p style={{alignItems:"center",justifyContent:"center",marginLeft:"650px",marginTop:"20px",fontWeight:"bold",fontSize:"20px"}}>Login to CaratLane</p>
        <p className="subtitle" style={{fontSize:"13px",justifyContent:"center",alignItems:"center",marginLeft:"591px"}}>
          Login to unlock best prices and become an insider <br/> for our exclusive launches & offers. Complete your <br/> profile and get ₹250 worth of xCLusive Points.
        </p>
        {/* <button class="social facebook">
          <a id="goog" href="https://www.facebook.com/" target="_blank">
            Facebook
          </a>
        </button>
        <button class="social googlee">
          <a id="goog" href="https://accounts.google.com/" target="_blank">
            Google
          </a>
        </button> */}
        {
          valid ? <></>:
          <span className='text-danger'>
                {errors.email},{errors.password}
          </span>
        }

        <p style={{height:"50px"}}></p>
        <input class="blkin" 
        type="text" 
        id="mail"
        placeholder="Enter Mobile Number Or Email"
        onChange={(event) => setFormData({...formData, email: event.target.value})}
        style={{width:"330px",height:"40px",backgroundColor:"lightgray"}}
        />
        <p class="subhead"></p>
        <input class="blkin" 
        type="password" 
        id="pass" 
        placeholder="Enter Password"
        onChange={(event) => setFormData({...formData, password: event.target.value})}
        style={{width:"330px",height:"40px",backgroundColor:"lightgray"}}
        />
        <button id="reg" 
        onClick={handleSubmit}
        style={{width:"330px",height:"40px"}}
        >CONTINUE TO LOGIN</button>
        <div>
        <div className="icons">
          <a href="https://accounts.google.com/">
            <FcGoogle />{" "}
          </a>
          <a href="https://www.facebook.com/">
            <FaFacebook />
          </a>
        </div>
        </div>

        <div style={{display:"flex",marginLeft:"608px",marginBottom:"80px"}}>
          <div style={{color:"black"}}>New to Caratlane?</div>
          <div>
            <a id="sign" href="Signup">
              Create an account
            </a>
          </div>
        </div>
    </body>
  );
}
export default Login