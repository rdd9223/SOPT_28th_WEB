import axios from "axios";

export const getUserData = async (name) => {
  try {
    const { data } = await axios.get(`https://api.github.com/users/${name}`);
    return data;
  } catch (err) {
    console.log(err.message);
  }
};
