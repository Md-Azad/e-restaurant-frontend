import useAuth from "../../../hooks/useAuth";


const UserHome = () => {
    const {user} = useAuth();
    return (
        <div className="w-full ml-8">
            <h1> Hi, Welcome Back: {user.displayName}</h1>
            
        </div>
    );
};

export default UserHome;