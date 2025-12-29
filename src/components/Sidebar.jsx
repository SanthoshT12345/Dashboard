function Sidebar() {
  return (
    <div
      style={{
        width: "200px",
        background: "#888",
        padding: "10px",
        height: "calc(100vh - 70px)", // FULL height minus navbar
        position: "fixed",
        top: "70px",
        left: 0,
      }}
    >
      <p>Home</p>
      <p>Courses</p>
      <p>Students</p>
      <p>Reports</p>
    </div>
  );
}

export default Sidebar;
