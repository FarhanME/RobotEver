import React from "react";

const Card = ({username, email}) =>{
    
    return(
        <div className='bg-light-green dib br3 pa3 ma2 grow bw3 shadow-5'>
            <img alt="robots" src="https://robohash.org/test?100x100"/>
            <h2>{username}</h2>
            <p>{email}</p>
            
        </div>
    )
}
export default Card;