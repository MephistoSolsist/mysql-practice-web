import Music from "@/models/music";
import axios from "axios";
axios.defaults.baseURL = "http://127.0.0.1:8000/";

const login = (user_id: string, password: string) => {
  return new Promise((resolve, reject) => {
    axios
      .post("user/login", {
        userId: user_id,
        password: password,
      })
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

const register = (user_id: string, alias: string, password: string) => {
  return new Promise((resolve, reject) => {
    axios
      .post("user/register", {
        userId: user_id,
        alias: alias,
        password: password,
      })
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

const getMusicList = () => {
  return new Promise((resolve, reject) => {
    axios
      .get("music/")
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

const deleteMusic = (music:Music) => {
  return new Promise((resolve, reject) => {
    axios
      .delete("music/"+music.musicId)
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

const uploadMusic = (music:Music) => {
  return new Promise((resolve, reject) => {
    axios
      .post("music/",music)
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

const updateMusic = (music:Music) => {
  return new Promise((resolve, reject) => {
    axios
      .put("music/",music)
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export { login, register, getMusicList,deleteMusic,uploadMusic,updateMusic };
