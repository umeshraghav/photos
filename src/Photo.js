import React from 'react'

export default function Photo({likes,id, profile_image,urls,user, alt_description, description}) {
 
    return (
        <article className="photo">
         <img src={urls.regular}  alt={alt_description} /> 
         <div className="photo-info">
                <div>
                    <h4>{user.name}</h4>
                    <p>Likes: {likes} </p>
                    <p>{description}</p>
                </div>
                <a href={user.portfolio_url}  >
          <img src={user.profile_image.medium} alt='' className='user-img' />
        </a>
         </div>
        </article>
    )
}
