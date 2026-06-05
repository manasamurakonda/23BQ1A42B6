const weights = {
  Placement: 3,
  Result: 2,
  Event: 1,
};

export const getTopNotifications = (notifications, limit = 10) => {
  return notifications
    .map((notification) => ({
      ...notification,
      score:
        (weights[notification.Type] || 0) * 1000000000000 +
        new Date(notification.Timestamp).getTime(),
    }))
    .sort((a, b) => b.score - a.score)
    .slice(0, limit);
};