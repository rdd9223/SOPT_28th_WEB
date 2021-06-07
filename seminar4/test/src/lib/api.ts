import axios from "axios";
import { IRawData } from "../interfaces/card.interface";

const instance = axios.create({
  baseURL: "http://localhost:3001",
});

export const getUserData = async () => {
  try {
    const data = await instance.get("/posts");
    console.log("[Success]");

    return data.data.data;
  } catch (err) {
    console.log("[Fail]", err);
    return null;
  }
};

export const createCardData = async (userData: IRawData) => {
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
