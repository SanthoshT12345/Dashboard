import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div
      style={{
        width: "200px",
        background: "#888",
        padding: "10px",
        height: "calc(100vh - 70px)",
        position: "fixed",
        top: "70px",
        left: 0,
      }}
    >
      <p><Link to="/">Home</Link></p>
      <p><Link to="/courses">Courses</Link></p>
      <p><Link to="/students">Students</Link></p>
    </div>
  );
}

export default Sidebar;
