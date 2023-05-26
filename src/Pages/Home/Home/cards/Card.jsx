import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({card}) => {
  console.log(card);
    const{name,picture,years_of_experience,num_recipes,likes,category__id

    }=card
    return (
        <div className="card  w-96 h-80 bg-base-100 shadow-xl">
        <figure className="px-10 mt-2  rounded-xl pt-10">
          <img
            src={picture}
            alt="Shoes"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body  ">
        <h2 className="card-title">Chef Name:{name}</h2>
         <div className='flex'>
          <p>Years of experience:{years_of_experience}</p>
          <p>Likes:{likes}</p>
         </div>
         <p>Numbers of recipes:{num_recipes}</p>
          <div className="card-actions mx-auto">
            {/* <button className="btn btn-primary">See More</button> */}
          <button className="btn-primary"><Link to={`/recipe/${category__id}`}>View Recipes</Link></button>
          </div>
        </div>
      </div>
    );
};

export default Card;