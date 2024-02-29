import Search from "../../../public/svg/search.svg";
import Heart from "../../../public/svg/heart.svg";
import User from "../../../public/svg/user.svg";
import Cart from "../../../public/svg/cart.svg";
import "./SecHeader.css";
const SecHeader = () => {
  return (
    <>
      <div className="secHeader-mainContainer">
        <div className="secHeader-leftSide">
          <ul>
            <li>TOPWEAR</li>
            <li>BOTTOMWEAR</li>
            <li>SNEAKERS</li>
            <li>COLLECTIONS</li>
            <li>THEME</li>
            <li>MEMBERSHIP</li>
          </ul>
        </div>
        <div className="secHeader-rightSide">
          <img src={Search} alt="search" />
          <img src={User} alt="search" />
          <img src={Heart} alt="search" />
          <img src={Cart} alt="search" />
        </div>
      </div>
    </>
  );
};

export default SecHeader;
