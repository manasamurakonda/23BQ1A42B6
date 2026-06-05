import { useEffect, useState } from "react";
import { fetchNotifications } from "../services/notificationService";
import { getTopNotifications } from "../utils/priorityCalculator";

function PriorityInbox() {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const loadNotifications = async () => {
      const data = await fetchNotifications();
      const top10 = getTopNotifications(data, 10);
      setNotifications(top10);
    };

    loadNotifications();
  }, []);
console.log("Notifications:", notifications);
  return (
  <div style={{ padding: "20px" }}>
    <h1>Priority Inbox</h1>

    <h3>Total Notifications: {notifications.length}</h3>

    {notifications.map((item, index) => (
      <div
        key={index}
        style={{
          border: "1px solid #ddd",
          marginBottom: "10px",
          padding: "10px",
          borderRadius: "8px",
        }}
      >
        <h3>{index + 1}. {item.Message}</h3>
      </div>
    ))}
  </div>
);
}

export default PriorityInbox;