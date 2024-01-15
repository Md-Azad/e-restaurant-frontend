import { useContext, useEffect } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate, useLocation, useNavigation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigation();

  useEffect(() => {
    let timeoutId;

    if (loading) {
        <progress className="progress w-56"></progress>
      timeoutId = setTimeout(() => {
        
        navigate("/login");
      }, 5000);
    }
    return () => clearTimeout(timeoutId); 
  }, [loading, navigate]);

//   if(loading){
//       return <progress className="progress w-56"></progress>
//   }

  if (user) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;
