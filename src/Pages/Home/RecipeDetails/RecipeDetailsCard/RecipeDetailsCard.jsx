import React from "react";
import ChefRecipeCard from "../../ChefRecipeCards/ChefRecipeCard";

const RecipeDetailsCard = ({ recipe }) => {
  const {_id,
    description,
    name,
    num_recipes,
    likes,
    years_of_experience,
    picture,recipes
  } = recipe;
//   console.log(recipe);
  return (
    <div>
      <div className="px-10 py-5">
        <div className="card card-side bg-base-100 shadow-xl">
          <figure className="w-96">
            <img src={picture} alt="Movie" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Chef Name :{name}</h2>
            <span className="mt-0 mb-0">
              <span className="text-style mt-0">Chef Description :</span>{" "}
              {description}
            </span>
            <span className="mb-0">
              <span className="text-style mt-0">Likes:</span>
              {likes}
            </span>
            <span className="mb-0">
              <span className="text-style mt-0">Number of recipes:</span>
              {num_recipes}
            </span>
            <span>
              <span className="text-style mt-0">Years of experience:</span>
              {years_of_experience}
            </span>
            {/* <div className="card-actions justify-end">
            <button className="btn btn-primary">Watch</button>
          </div> */}
          </div>
        </div>
      </div>

{/* chef recipe cards section */}

     <div className=" grid lg:grid-cols-3 ">
     {
        recipes.map( recipesCard=><ChefRecipeCard key={_id} recipesCard={recipesCard}></ChefRecipeCard>)
      }
     </div>
    </div>
  );
};

export default RecipeDetailsCard;
