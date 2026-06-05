import axios from "axios";

const API_URL = import.meta.env.VITE_NOTIFICATION_API;
const TOKEN = import.meta.env.VITE_ACCESS_TOKEN;

export const fetchNotifications = async () => {
  try {
    console.log("API URL:", API_URL);
    console.log("TOKEN:", TOKEN);

    const response = await axios.get(API_URL, {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
    });

    console.log("FULL RESPONSE:", response.data);

    return response.data.notifications || [];
  } catch (error) {
    console.error("API ERROR:", error);
    return [];
  }
};