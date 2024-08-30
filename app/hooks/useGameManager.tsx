import { atom, useAtom } from "jotai";
import { find, keys, toLower } from "lodash";
import { useEffect } from "react";
import flagsInfo from "assets/flags-info.json";

const maxLifes = 4;
const lifeTimeIncrementation = 1000 * 60 * 60; // one hour
const lifesAtom = atom<number>(3);
const lastUpdate = atom<Date>(new Date());
const unlockedFlagsAtom = atom<string[]>();

// structure pack -> group -> flag

export type Flag = {};

export type Group = {
  flags: Flag[];
};

export type Pack = {
  id: string;
  image: string;
};

const worldPack: Pack[] = [
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

export const useGameManager = () => {
  const [lifes, setLifes] = useAtom(lifesAtom);
  const completedFlags = 12;

  const getGroups = (pack: keyof typeof packs) => packs[pack];
  const getFlags = (pack: keyof typeof packs, groupId: string) => {
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
    lifes,
    completedFlags,
  };
};
