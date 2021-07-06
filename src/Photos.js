 import React from 'react'
import { useGlobalContext } from './context'
import Photo from './Photo'

export default function Photos() {
    const {photos} = useGlobalContext();
 
    return (
        <section className="photos"> 
               <div className="photos-center">
            {photos.map((photo)=>{
                return <img src={photo.urls.regular} key={photo.id} />   


                  
            })}
                
        </div>
        </section>

    )
}
