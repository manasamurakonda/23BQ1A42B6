import axios from "axios";

const API_URL = import.meta.env.VITE_NOTIFICATION_API;
const TOKEN = import.meta.env.VITE_ACCESS_TOKEN;

export const getNotifications = async () => {
  try {
    const response = await axios.get(API_URL, {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
    });

    console.log("API Response:", response.data);

    return response.data.notifications || [];
  } catch (error) {
    console.log(
      "ERROR:",
      JSON.stringify(error.response?.data, null, 2)
    );

    return [];
  }
};