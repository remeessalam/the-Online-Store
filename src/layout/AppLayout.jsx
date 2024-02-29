import Header from "../components/header/Header";
import SecHeader from "../components/header/SecHeader";
import "./Layout.css";
const AppLayout = ({ Outlet }) => {
  return (
    <>
      <div className="appLayout-header">
        <Header />
        <SecHeader />
      </div>
      <Outlet />
    </>
  );
};

export default AppLayout;
