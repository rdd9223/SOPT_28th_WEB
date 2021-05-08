import axios from "axios";

const getUserData = async () => {
  try {
    const data = await axios.get("http://localhost:4000/posts");
    console.log("[Success]");
    return data.data.data;
  } catch (err) {
    console.log("[Fail]", err);
    return null;
  }
};

export default getUserData;
