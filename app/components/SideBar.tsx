import Footer from "./Footer";
import NavBar from "./NavBar";
import NavLinks from "./NavLinks";

const SideBar: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="drawer">
      <input id="sidebar" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        <NavBar />
        {/* Page content here */}
        <div id="content-wrapper" className="flex flex-col min-h-screen">
          <div className="grow px-12 py-5 sm:px-24 md:px-30 lg:px-40 lg:py-10">
            {children}
          </div>
        </div>
        <Footer />
      </div>
      <div className="drawer-side">
        <label
          htmlFor="sidebar"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <div className="flex flex-row p-4 w-52 min-h-full bg-base-200 pt-20">
          {/* Sidebar content here */}
          <NavLinks placedIn="sidebar" />
        </div>
      </div>
    </div>
  );
};

export default SideBar;
