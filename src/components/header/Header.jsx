import "./Header.css";
const Header = () => {
  return (
    <>
      <div className="header_mainContainer">
        <div className="header-LeftSide">
          <ul>
            <li>WOMEN</li>
            <li>MEN</li>
            <li>KIDS</li>
          </ul>
        </div>
        <div className="header-RightSide">
          <ul>
            <li>TRACK ORDER</li>
            <li>CONTACT US</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
