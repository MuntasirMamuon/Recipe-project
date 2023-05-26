import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import RecipeDetailsCard from './RecipeDetailsCard/RecipeDetailsCard';

const RecepiDetails = () => {
    const{id}=useParams();
    const RecipeDetails=useLoaderData();
  
    return (
        <div className=''>
            {
                RecipeDetails.map(recipe=><RecipeDetailsCard key={recipe._id
                } recipe={recipe}></RecipeDetailsCard>)
            }
        </div>
    );
};

export default RecepiDetails;