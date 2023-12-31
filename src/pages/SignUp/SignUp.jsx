import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../providers/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import SocialLogin from "../shared/SocialLogin/SocialLogin";

const SignUp = () => {

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const {createUser,updateUserProfile} = useContext(AuthContext);

  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log(data);

    createUser(data.email,data.password)
    .then(result =>{
      const logUser = result.user;
      console.log(logUser);

      updateUserProfile(data.name,data.photo)
      
      .then(()=>{
        const saveUser = {name: data.name, email:data.email}
        
        // console.log('user profile updated.')
        fetch('http://localhost:5000/users',{
          method: 'POST',
          headers: {
            "content-Type": "application/json",
          },
          body: JSON.stringify(saveUser)
        })
        .then(res=>res.json())
        .then(data=>{
          if(data.insertedId){
            reset();
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Your work has been saved",
              showConfirmButton: false,
              timer: 1500
            });
            navigate('/');
          }
        })
        
        // navigate('/');
        
      })
      .catch(error =>console.log(error));
    })
    
    
  };

  return (
    <>
    <Helmet>
      <title>e-restaurant || Sign Up</title>
    </Helmet>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Sign Up now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  {...register("name", { required: true })}
                  name="name"
                  placeholder="Name"
                  className="input input-bordered"
                />
                {errors.name && (
                  <span className="text-red-600">Name is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="text"
                  {...register("photo", { required: true })}
                  
                  placeholder="Photo URL"
                  className="input input-bordered"
                />
                {errors.photo && (
                  <span className="text-red-600">photo url is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  {...register("email", { required: true })}
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                />
                {errors.email && (
                  <span className="text-red-600"> Email is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  {...register("password", {
                    required: "Email Address is required",
                    minLength: 6,
                    maxLength: 20,
                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                  })}
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                />
                {errors.password && (
                  <span className="text-red-600">
                    {errors.password.message}
                  </span>
                )}
                {errors.password?.type === "minLength" && (
                  <span className="text-red-600">
                    password must be 6 charecters.
                  </span>
                )}
                {errors.password?.type === "maxLength" && (
                  <span className="text-red-600">
                    password must be less than 20 charecters.
                  </span>
                )}
                {errors.password?.type === "pattern" && (
                  <span className="text-red-600">
                    password must contains a lowercase an Uppercase a special
                    charecter and a number.
                  </span>
                )}

                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn btn-primary"
                  type="submit"
                  value="Sign Up"
                />
              </div>
            </form>
            <p><small> <Link to='/login'>Already Have an account? Login.</Link> </small></p>
            <SocialLogin></SocialLogin>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
