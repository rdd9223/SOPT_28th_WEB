import axios from "axios";

interface IUserData {
  id: number;
  date: number;
  title: string;
  image: string;
  weather: string;
  tags: string[];
  summary: string;
  text: string;
}

const instance = axios.create({
  baseURL: "http://localhost:3001",
});

export const getUserData = async () => {
  try {
    const data = await instance.get("posts");
    console.log("[Success]");
    return data.data.data;
  } catch (err) {
    console.log("[Fail]", err);
    return null;
  }
};

export const createCardData = async (userData: IUserData) => {
  try {
    const data = await instance.post("/posts", {
      data: userData,
    });
    console.log("[SUCCESS] POST card data");
    return data.data.data;
  } catch (e) {
    console.log("[FAIL] POST card data");
    return null;
  }
};
