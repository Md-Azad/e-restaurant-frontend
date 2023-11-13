import { Helmet } from "react-helmet-async";
import useCart from "../../../hooks/useCart";
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";

const Mycart = () => {
  const [cart,refetch] = useCart();
  const total = cart.reduce((sum, item) => item.price + sum, 0);

  const handleDelete =(item) =>{
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
            fetch(`http://localhost:5000/carts/${item._id}`,{
                method: 'DELETE'
            })
            .then(res=> res.json())
            .then(data =>{
                if(data.deletedCount>0){
                    refetch();
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                      });

                }
            })
          
        }
      });
  }

  return (
    <div className="w-full ml-4">
      <Helmet>
        <title>e-restaurant || My Cart</title>
      </Helmet>
      <div className="uppercase font-semibold h-[60px] flex space-x-6 justify-evenly items-center">
        <h3 className="text-3xl">Total items: {cart.length}</h3>
        <h3 className="text-3xl">Total Price: $ {total}</h3>
        <button className="btn btn-warning btn-sm">Pay</button>
      </div>

      {/* table */}
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Food</th>
              <th>Item Name</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
                cart.map((item,index)=><tr
                    key={item._id}
                >
                <td>
                  {index+1}
                </td>
                <td>
                  <div className="flex items-center gap-3">
                    
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={item.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      
                    </div>
                    
                  </div>
                </td>
                <td>
                  {item.name}
                </td>
                <td className="text-left">${item.price}</td>
                <td>
                  <button onClick={()=>handleDelete(item)} className="btn btn-ghost btn-lg bg-red-600 text-white"><FaTrashAlt></FaTrashAlt></button>
                </td>
              </tr>)
            }
            

          </tbody>
          
        </table>
      </div>
    </div>
  );
};

export default Mycart;
