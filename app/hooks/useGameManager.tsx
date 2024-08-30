import { atom, useAtom } from "jotai";
import { find, keys, toLower } from "lodash";
import { useEffect } from "react";
import flagsInfo from "assets/flags-info.json";

const maxLives = 4;
const liveTimeIncrementation = 1000 * 60 * 60; // one hour
const livesAtom = atom<number>(3);
const lastUpdate = atom<Date>(new Date());
const unlockedFlagsAtom = atom<string[]>();

export type Flag = (typeof flagsInfo.Africa)[0];
export type Group = {
  id: string;
  image: string;
};

const worldPack: Group[] = [
  { id: "asia", image: require("assets/images/world/asia.png") },
  {
    id: "south america",
    image: require("assets/images/world/south america.png"),
  },
  { id: "africa", image: require("assets/images/world/africa.png") },
  { id: "europe", image: require("assets/images/world/europe.png") },
  {
    id: "north & central america",
    image: require("assets/images/world/north & central america.png"),
  },
  { id: "oceania", image: require("assets/images/world/oceania.png") },
];

const packs = { world: worldPack };
export type PackId = keyof typeof packs;

export const useGameManager = () => {
  const [lives, setLives] = useAtom(livesAtom);
  const completedFlags = 12;

  const getGroups = (pack: PackId) => packs[pack];

  const getFlags = (pack: PackId, groupId: string) => {
    if (pack === "world") {
      const group = find(
        flagsInfo,
        (_, key) => toLower(key) === toLower(groupId)
      );

      return group;
    }
    return [];
  };

  const completeFlag = (flagId: string) => {};

  const updateLifes = () => {};

  updateLifes();

  return {
    packs,
    getGroups,
    getFlags,
    completeFlag,
    lives,
    completedFlags,
  };
};
