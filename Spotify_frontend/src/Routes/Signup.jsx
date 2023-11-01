import React, { useState } from 'react'
import { Icon } from '@iconify/react';
import {useCookies}  from 'react-cookie';
import Textinput from '../Component/shared/textinput';
import Password from '../Component/shared/Password';
import { Link, useNavigate } from 'react-router-dom';
import {makeunauthenticatedPOSTRequest} from '../Utils/Serverhelper';

const Signup = () => {
    const [email,setemail] = useState(" ");
    const [confirmEmail,setconfirmEmail] = useState("");;
    const [password,setpassword] =useState(" ");
    const[firstName,setfirstName] = useState("");
    const[username,setusername] = useState("");

    const[lastName,setlastName] = useState("");
  const[cookie,setCookie] = useCookies(["token"]);
  const navigate = useNavigate(); //for redirecting one page to another page after login
    
  //data which we need to send to api
  const signUp = async ()=>{
    if(email  !== confirmEmail){
      alert("Email can not match please check you email");
    return;

    };
    const data = {email,password,username,firstName,lastName};
      // console.log(data);

      const response = await makeunauthenticatedPOSTRequest("/auth/register",data);
      if(response && !response.error){
        
        console.log(response);
        const date = new Date();

        date.setDate(date.getDate() +30);
        const token = response.token;
        setCookie("token",token,{path: "/",expires: date});//at 5:39 min
        
        alert("success");
        navigate("/login");
      }
      else{
        alert("failure");
      }
    };


  return (
    <div className='"w-full h-full flex flex-col items-center'>
    <div className="logo flex justify-center  p-4 border-b border-solid border-gray-200 w-full">
      <Icon icon="logos:spotify" width="150" />
    </div>
    <div className="input_region w-1/3 py-10  flex items-center justify-center flex-col">
      <div  className="font-bold mb-10">Signup for free to start listening</div>
     <Textinput label="What's your email?"
        value={email} setValue={setemail}
       placeholder="enter the email "/>
     <Textinput label="Confirm your email?"  placeholder="enter the email "   value={confirmEmail} setValue={setconfirmEmail}/>
     <Textinput label="enter your user name"  placeholder="enter the username"   value={username} setValue={setusername}/>
    <Password label="what's your password" placeholder="password"   value={password} setValue={setpassword}/>

    <div className="w-full flex justify-between items-center  space-x-8">
      <Textinput label="First Name" placeholder="Enter your first name  " className="mb-6"  value={firstName} setValue={setfirstName}/>
      <Textinput label="Last Name" placeholder="Enter your Last name" value={lastName} setValue={setlastName}/>
    </div>
     
     <div className="btn1 w-full flex my-8 justify-center">
   <button className="bg-green-500  text-lg font-bold p-3 px-10 rounded-full" onClick={(e)=>{e.preventDefault(); signUp();}}>Sign In</button>
      
     </div>
     <div  className="w-full  border border-solid border-gray-300"></div>
     <div className="my-6 font-semibold text-lg">
         Already have an    account?
     </div>
     <div className="border border-gray-500 rounded-full flex flex-col justify-center items-center w-full py-4"><Link to="/login"> LOG IN INSTEAD</Link></div>
    </div>
  </div>
  )
}

export default Signup