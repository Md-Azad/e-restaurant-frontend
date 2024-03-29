import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useCart from "../../hooks/useCart";

const FoodCard = ({item}) => {
    const {name,image,price,recipe,_id} = item;
    const [,refetch] = useCart();
    const {user} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const handleAddToCart = (item)=>{
      console.log(item);
      if(user && user.email){
        const cartItem = {menuItemId: _id, name,image,price,email: user.email};
        console.log(cartItem);
        
        fetch('https://e-restaurant.onrender.com/carts',{
          method: 'POST',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(cartItem)
        })
        .then(res =>res.json())
        .then(data =>{
          if(data.insertedId){
            refetch();
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Your work has been saved",
              showConfirmButton: false,
              timer: 1500
            });
          }
        })
      }
      else{
        Swal.fire({
          title: "Please login to order",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Login Now!"
        }).then((result) => {
          if (result.isConfirmed) {
            navigate('/login',{state: {from: location}})
          }
        });
      }
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
