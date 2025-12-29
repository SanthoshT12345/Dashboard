import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import DashboardCard from "../components/DashboardCard";

function Dashboard() {
  return (
    <div>
      <Navbar />

      {/* MAIN LAYOUT */}
     <div style={{ display: "flex", marginTop: "70px" }}>
  <Sidebar />

  <div style={{ padding: "100px", marginLeft: "300px", flex: 1 }}>
    <h2>Dashboard</h2>

    <div style={{ display: "flex", gap: "20px" }}>
      <DashboardCard title="Total Users" value="120" />
      <DashboardCard title="Courses" value="8" />
      <DashboardCard title="Active Students" value="95" />
    </div>
  </div>
</div>

    </div>
  );
}

export default Dashboard;
