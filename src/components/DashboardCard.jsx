function DashboardCard({ title, value }) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "20px",
        borderRadius: "6px",
        minWidth: "180px",
      }}
    >
      <h4>{title}</h4>
      <p>{value}</p>
    </div>
  );
}

export default DashboardCard;
