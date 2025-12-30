import Layout from "../layout/Layout";
import DashboardCard from "../components/DashboardCard";

function Dashboard() {
  return (
    <Layout>
      <h2>Dashboard</h2>

      <div style={{ display: "flex", gap: "20px", marginTop: "20px" }}>
        <DashboardCard title="Total Students" value="120" />
        <DashboardCard title="Total Courses" value="8" />
        <DashboardCard title="Active Users" value="95" />
      </div>
    </Layout>
  );
}

export default Dashboard;
