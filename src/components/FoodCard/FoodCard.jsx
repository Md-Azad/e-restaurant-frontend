const FoodCard = ({item}) => {
    const {name,image,price,recipe} = item;
    const handleAddToCart = (item)=>{
      console.log(item)
    }
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img
          src={image}
          alt="Shoes"
        />
        
      </figure>
      <p className="absolute right-0 mt-4 mr-4 bg-slate-900 text-white">${price}</p>
      <div className="card-body text-center">
        <h2 className="card-title mx-auto">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions justify-center">
          <button onClick={()=>handleAddToCart(item)} className="btn btn-primary">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
