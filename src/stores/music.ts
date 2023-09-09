import { defineStore } from "pinia";
import Music from "@/models/music";

export const useMusicStore = defineStore("music", {
  state: () => {
    return { musicList: [] as Music[], editMusicDetail:{} };
  },
});
