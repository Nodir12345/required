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
                   <input placeholder=" Name" onChange={e=>setFirstName(e.target.value)} />
               </div>
               {error&&firstName.length<=5?
               <label>5tadan ko'p text kiriting</label>:""}
               <div>
                   <input type="number" placeholder="Phone" onChange={e=>setLastName(e.target.value)} />
               </div>
               {error&&lastName.length<=7?
               <label>7tadan ko'p son kiriting</label>:""}
               <div>
                   <button >
                       Submit
                   </button>
               </div>
           </form>
        </>
    );
}
