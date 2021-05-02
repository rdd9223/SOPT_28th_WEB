import axios from "axios";

export const getUserData = async (name: string) => {
  try {
    const { data } = await axios.get("https://api.github.com/users/" + name);
    return data;
  } catch (e) {
    return null;
  }
};
