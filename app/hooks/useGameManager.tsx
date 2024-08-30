import { atom, useAtom } from "jotai";
import { useEffect } from "react";

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
  groups: Group[];
};

export const useGameManager = () => {
  const [lifes, setLifes] = useAtom(lifesAtom);
  const completedFlags = 12;
  const packs: Pack[] = [];
  const getGroups = (pack: string) => [];
  const getFlags = (pack: string, group: string) => [];

  const completeFlag = (flagId: string) => {};
  const asd = () => {};

  const updateLifes = () => {
    // get last live updates
    // add lives
  };

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
