import CustomImage from "./CustomImage"

export default function RecipeCard({recipe}){
    return (
        <div className="recipe-card">
            <CustomImage imgSrc={recipe.image} pt="65%"/>
            <div className="recipe-card-info">
                <img className="auther-img" src={recipe.authorImg} alt=""/>
                <p className="recipe-title">{recipe.title}</p>
                <p className="recipe-desc">If you love this recipe, try these easy and tasty beef burritos with Perfect Italiano Mexican Style cheese!</p>
                <a className="view-btn" href="#!">Comments</a>
            </div>
        </div>
    )
}