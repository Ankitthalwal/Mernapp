import React from 'react'

const Textinput = ({ label, placeholder, className, value ,setValue,labelClassname}) => {
   return (
      <>
         <div className={`textinput flex flex-col space-y-2 w-full ${className}`}>
            <label htmlFor={label} className={`font-semibold ${labelClassname} `} >{label}</label>
            <input type="text" id={label} placeholder={placeholder} className='p-2 border border-gray-300 border-solid rounded placeholder-gray-500'  
              value={value} onChange={(e)=>{
               setValue(e.target.value)
            }}
            />
         </div>

      </>
   )
}

export default Textinput