import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const img_hosting_token = import.meta.env.VITE_IMAGE_UPLOAD_TOKEN;
const AddItem = () => {
  const [axiosSecure] = useAxiosSecure();
  const {register,handleSubmit,reset} = useForm();
  const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`
  
  const onSubmit = (data) => {
    
    const formData = new FormData();
    formData.append('image',data.image[0]);
    fetch(img_hosting_url,{
      method: 'POST',
      body:formData
    })
    .then(res=>res.json())
    .then(imgResponse=>{
      if(imgResponse.success){
        const imgUrl = imgResponse.data.display_url;
        const {name, price,recipe,category} = data;
        const newItem = {name, price: parseFloat(price),recipe,category, image: imgUrl}
        console.log(newItem);
        axiosSecure.post('/menu',newItem)
        .then(data=>{
          console.log("after posting a new item",data.data);
          if(data.data.insertedId){
            reset();
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "New Item added",
              showConfirmButton: false,
              timer: 1500
            });

          }
        })
      }
     
    })
    console.log(data);
  };
  

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full px-10">
      <SectionTitle
        subHeading="What's New"
        heading="Add an Item"
      ></SectionTitle>
      <div className="form-control w-full mb-4">
        <label className="label">
          <span className="label-text">Recipe Name*</span>
        </label>
        <input
          type="text"
          placeholder="Recipe Name" {...register("name", {required: true, maxLength: 80})}
          className="input input-bordered w-full "
        />
      </div>
      <div className="flex space-x-10 mb-4">
        <div className="form-control w-full ">
          <label className="label">
            <span className="label-text">Category*</span>
          </label>
          <select defaultValue="Pick One" className="select select-bordered" {...register("category", { required: true })}>
            <option disabled >
              Pick one
            </option>
            <option>Pizza</option>
            <option>Salad</option>
            <option>Drinks</option>
            <option>Dessert</option>
            <option>Soup</option>
          </select>
        </div>
        <div className="form-control w-full ">
          <label className="label">
            <span className="label-text">Price*</span>
          </label>
          <input
            type="number"
            placeholder="Price"{...register("price", {required: true, maxLength: 80})}
            className="input input-bordered w-full "
          />
        </div>
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Recipe Details*</span>
        </label>
        <textarea
          className="textarea textarea-bordered h-24"
          placeholder="Recipe Details" {...register("recipe", {required: true, maxLength: 120})}
        ></textarea>
      </div>
      <div className="mt-6">
        <input
          type="file"
          className="file-input file-input-bordered file-input-secondary w-full max-w-xs " {...register("image", {required: true, maxLength: 80})}
        />
      </div>
      <input
        className="btn btn-sm btn-neutral mt-6"
        type="submit"
        value="Add Item"
      />
    </form>
  );
};

export default AddItem;
