import React from 'react'

const Password = ({label,placeholder,value,setValue}) => {
  return (
     <>
     <div className="textinput flex flex-col space-y-2 w-full">
        <label htmlFor={label} className="font-semibold  ">{label}</label>
     <input value={value} onChange={(e)=>{
         setValue(e.target.value)
     }} type="password" id={label} placeholder={placeholder} className='p-2 border border-gray-300 border-solid rounded placeholder-gray-500' />
     </div>
       
     </>
  )
}

export default Password;