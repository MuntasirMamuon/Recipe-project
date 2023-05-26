import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const ChefRecipeCard = ({recipesCard}) => {
    const[favorite,setFavoite]=useState(false)
    console.log(recipesCard);
    const{recipe_name,cooking_method,ingredients
    }=recipesCard;
    const notify = () =>{
        toast("Wow so easy!");
        setFavoite(true)

    } 
    return (
        <div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title text-2xl font-bold">{recipe_name}</h2>
            <p><span className='text-2xl font-bold'>ingredients:</span>
                <ol>
                    {
                    ingredients.map(ing=><li>{ing}</li>)
                    }
                </ol>
            </p>
            <p><span className='text-2xl font-bold'>cooking Process:</span>
                <ol>
                    {
                    cooking_method.map(cooking=><p>{cooking}</p>)
                    }
                </ol>
            </p>
            <div className="card-actions justify-end">
              <button onClick={notify} disabled={favorite} className="btn btn-primary">Favorite </button>
            </div>
          </div>
        </div>
        <ToastContainer />
      </div>
    );
};

export default ChefRecipeCard;