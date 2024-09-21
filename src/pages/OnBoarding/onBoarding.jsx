import { useGlobalContext } from "../../context/GlobalProvider";
import { logout } from "../../utils/authentication";


 const OnBoarding = () => {
  const { userInfo, setIsLoggedIn , setUserInfo} = useGlobalContext();

  const logout_user = async () => {
    try {
      await logout();
      setIsLoggedIn(false);
      setUserInfo(null);

    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className=" text-4xl flex items-center justify-center font-semibold bg-orange-400 h-screen  ">
  
        <h1> Welcom {userInfo.username} </h1>
        <button onClick={logout_user} className="p-5 bg-orange-300 m-4">
        SIGN OUt
      </button>
    </div>
  )
};
export default OnBoarding
