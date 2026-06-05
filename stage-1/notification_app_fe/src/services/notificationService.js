import axios from "axios";

const API_URL = import.meta.env.VITE_NOTIFICATION_API;
const TOKEN = import.meta.env.VITE_ACCESS_TOKEN;

export const fetchNotifications = async () => {
  try {
    const response = await axios.get(API_URL, {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
    });

    console.log("SUCCESS RESPONSE:", response.data);

    return response.data.notifications || [];
  } catch (error) {
    console.error("ERROR RESPONSE:", error.response?.data);
    console.error("STATUS:", error.response?.status);

    return [];
  }
};