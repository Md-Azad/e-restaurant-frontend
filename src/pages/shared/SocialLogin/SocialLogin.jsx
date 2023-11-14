import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../../providers/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";

const SocialLogin = () => {

    const {googleLogin} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    const handleGoogleLogin =()=>{
        googleLogin()
        .then(result =>{
            const loggedUser = result.user;
            console.log(loggedUser);
            
            const saveUser = {name: loggedUser.displayName, email:loggedUser.email}
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
            
            navigate(from, { replace: true });
          }
        })
           
        })
    }
  return (
    <div>
      <div className="divider"></div>
      <div className="w-full text-center my-6">
        <button onClick={handleGoogleLogin} className="btn btn-circle btn-outline">
          <FaGoogle></FaGoogle>
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
