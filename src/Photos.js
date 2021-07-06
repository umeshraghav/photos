 import React from 'react'
import { useGlobalContext } from './context'
import Photo from './Photo'

export default function Photos({photo}) {
    const {photos} = useGlobalContext();
 
    return (
        <section className="photos"> 
               <div className="photos-center">
            {photos.map((image, index)=>{
                return <Photo key={index} {...image}/>  
                  
            })}
                
        </div>
        </section>

    )
}
