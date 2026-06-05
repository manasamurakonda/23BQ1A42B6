import { useEffect, useState } from "react";
import { getNotifications } from "../services/notificationService";

const weights = {
  Placement: 3,
  Result: 2,
  Event: 1,
};

function PriorityNotifications() {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const data = await getNotifications();

    const top10 = data
      .map((item) => ({
        ...item,
        score:
          (weights[item.Type] || 0) * 100000000000 +
          new Date(item.Timestamp).getTime(),
      }))
      .sort((a, b) => b.score - a.score)
      .slice(0, 10);

    setNotifications(top10);
  };

  return (
    <div>
      <h1>Priority Notifications</h1>

      {notifications.map((item) => (
        <div key={item.ID}>
          {item.Message}
        </div>
      ))}
    </div>
  );
}

export default PriorityNotifications;