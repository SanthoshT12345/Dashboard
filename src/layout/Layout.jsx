import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

function Layout({ children }) {
  return (
    <>
      <Navbar />
      <div style={{ display: "flex", marginTop: "70px" }}>
        <Sidebar />
        <div style={{ marginLeft: "200px", padding: "20px", flex: 1 }}>
          {children}
        </div>
      </div>
    </>
  );
}

export default Layout;
