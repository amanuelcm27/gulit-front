import { useGlobalContext } from "../../context/GlobalProvider";
import { logout } from "../../utils/authentication";
import images from "../../constants/images";
import NavItem from "../../components/NavItem";
import DropDownItem from "../../components/DropDownItem";
import SubmitButton from "../../components/SubmitButton";
const OnBoarding = () => {
  const { userInfo, setIsLoggedIn, setUserInfo } = useGlobalContext();

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
    <div className="w-full items-center ">
      <div className="w-full h-[80px] flex items-center bg-orange-400 shadow-custom">
        <div className="flex-1">
          <img src={images.logo} className="w-[80px]" />
        </div>
        <div className="flex items-center m-5">
          <NavItem name="Home" />
          <NavItem name="Stores" />
          <NavItem name="About" />
          <div className="relative group">
            <img src={images.user} className="w-10 cursor-pointer" />
            <div className="absolute right-0 w-[250px] rounded-md bg-gray-200 shadow-custom opacity-0 pointer-events-none transition-opacity duration-300 group-hover:opacity-100 group-hover:pointer-events-auto">
              <DropDownItem icon={images.user} name={userInfo.username} />
              <DropDownItem
                logout={logout_user}
                icon={images.logout}
                name="Logout"
              />
            </div>
          </div>
        </div>
      </div>
      <div
        style={{ backgroundImage: `url(${images.header})` }}
        className={`w-full h-[650px] bg-cover `}
      >
        <div className="w-full h-full  bg-opacity-50 bg-black">
          <div className="w-[70%] h-full p-10 flex flex-col justify-center">
            <span className=" text-white font-extrabold text-7xl ">
              Turn Clicks into Customers Build Your Online Store Now
            </span>
            <SubmitButton  otherStyles="mt-10 text-4xl text-left font-bold w-1/2 "  name="Start Selling" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default OnBoarding;
