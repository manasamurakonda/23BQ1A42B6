import { useEffect, useState } from "react";
import { getNotifications } from "../services/notificationService";
import NotificationCard from "../components/NotificationCard";

function AllNotifications() {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const data = await getNotifications(1, 50);
    setNotifications(data);
  };

  return (
    <div>
      <h1>All Notifications</h1>

      {notifications.map((item) => (
        <NotificationCard
          key={item.ID}
          item={item}
        />
      ))}
    </div>
  );
}

export default AllNotifications;