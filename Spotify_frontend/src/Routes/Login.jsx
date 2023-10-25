import React, { useContext } from 'react'
import { Icon } from '@iconify/react';
import Textinput from '../Component/shared/textinput';
import Password from '../Component/shared/Password';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {useCookies}  from 'react-cookie';
import {makeunauthenticatedPOSTRequest} from '../Utils/Serverhelper';

const LoginComponent = () => {
  const [email,setemail] = useState("");
  const [password,setpassword] = useState("");
  const [cookie,setCookie] =useCookies(["token"]);
  const navigate = useNavigate();
  //sinup function for login
  const login = async ()=>{
  
    const data = {email,password};
    // console.log(data);

    const response = await makeunauthenticatedPOSTRequest("/auth/login",data);
    if(response && !response.error){

      console.log(response);
      const date = new Date();  
      date.setDate(date.getDate() +30);
      const token = response.token;
      setCookie("token",token,{path: "/",expires: date});//at 5:39 min
      alert("success");
      navigate("/home");
    }
    else{
      alert("failure");
    }
  };
  //sinup function for login

  return (
    <div className='"w-full h-full flex flex-col items-center'>
      <div className="logo flex justify-center  p-4 border-b border-solid border-gray-200 w-full">
        <Icon icon="logos:spotify" width="150" />
      </div>
      <div className="input_region w-1/3 py-10  flex items-center justify-center flex-col">
        <div  className="font-bold mb-10">Continue to Login</div>
       <Textinput label="Email or Username" value={email} setValue={setemail} placeholder="enter the email or user"/>
      <Password label="password" value={password} setValue={setpassword} placeholder="password"/>
       
       <div className="btn1 w-full flex my-8 justify-end">
     <button className="bg-green-500  text-lg font-bold p-3 px-10 rounded-full"  onClick={(e)=>{e.preventDefault(); login();}}>Login</button>
        
       </div>
       <div  className="w-full  border border-solid border-gray-300"></div>
       <div className="my-6 font-semibold text-lg">
           Don't have account?
       </div>
       <div className="border border-gray-500 rounded-full flex flex-col justify-center items-center w-full py-4"> <Link to="/signup">Sign up for Spotify</Link></div>
      </div>
    </div>
  )
}

export default LoginComponent;