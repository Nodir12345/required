import React, { useState } from "react";
import './Form.css'
export function Form(){
    const [firstName,setFirstName]=useState('')
    const [lastName,setLastName]=useState('')
    const [error,setError]=useState(false)

    const handleSubmit=(e)=>{
        e.preventDefault();
        if(firstName.length===0||lastName.length===0){
            setError(true)
        }
        if(firstName&&lastName)
        {
        console.log("First Name: ",firstName,"\nLast Name: ",lastName)
        }
    }
    return(
        <>
           <form onSubmit={handleSubmit}>
               <div>
                   <input placeholder="First Name" onChange={e=>setFirstName(e.target.value)} />
               </div>
               {error&&firstName.length<=0?
               <label>1chi imputni to'ldiring</label>:""}
               <div>
                   <input placeholder="Last Name" onChange={e=>setLastName(e.target.value)} />
               </div>
               {error&&lastName.length<=0?
               <label>2chi imputni to'ldiring</label>:""}
               <div>
                   <button>
                       Submit
                   </button>
               </div>
           </form>
        </>
    );
}
