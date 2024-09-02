import { atom, useAtom, useAtomValue } from "jotai";
import { cloneDeep, find, kebabCase, keys, min, size, toLower } from "lodash";
import flagsInfo from "assets/flags-info.json";
import flagsColorInfo from "app/flags-svgr/flags-colors.json";
import { countLeafNodes } from "app/utils/objects";
import { atomWithStorage } from "jotai/utils";
import { storage } from "app/utils/jotai";
import { testerModeActiveAtom } from "app/screens/Options/Options";

const maxLives = 5;
const liveTimeIncrementation = 1000 * 60 * 60; // one hour
const livesAtom = atomWithStorage<number>("lives", maxLives, storage, {
  getOnInit: true,
});
const lastLivesUpdateAtom = atomWithStorage<number>("lastUpdate", 0, storage, {
  getOnInit: true,
});
const completedFlagsAtom = atomWithStorage<{
  [packId: string]: { [groupId: string]: { [countryName: string]: boolean } };
}>("completedFlags", {}, storage, { getOnInit: true });

export type PackId = keyof typeof packs;
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

export const getFlagId = (flag: Flag) =>
  kebabCase(toLower(flag.country)) as keyof typeof flagsColorInfo;

export const useGameManager = () => {
  const testing = useAtomValue(testerModeActiveAtom);
  const [lastLiveUpdate, setLastLivesUpdate] = useAtom(lastLivesUpdateAtom);
  const [lives, setLives] = useAtom(livesAtom);
  const [completedFlags, setCompletedFlags] = useAtom(completedFlagsAtom);

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

  const completedFlagsAmount = countLeafNodes(completedFlags);

  const isFlagCompleted = (flag: Flag, group: Group, packId: PackId) => {
    try {
      return completedFlags[packId][group.id][flag.country] === true;
    } catch {
      return false;
    }
  };

  const completeFlag = (flag: Flag, group: Group, packId: PackId) => {
    const newCompletedFlags = cloneDeep(completedFlags);
    if (!newCompletedFlags[packId]) {
      newCompletedFlags[packId] = {};
    }
    if (!newCompletedFlags[packId][group.id]) {
      newCompletedFlags[packId][group.id] = {};
    }
    newCompletedFlags[packId][group.id][flag.country] = true;

    setCompletedFlags(newCompletedFlags);
  };

  const updateLifes = () => {
    const millisDifference = Date.now() - lastLiveUpdate;
    const livesToAdd = Math.floor(millisDifference / liveTimeIncrementation);

    if (livesToAdd > 0) {
      setLastLivesUpdate(Date.now());
      setLives(min([lives + livesToAdd, maxLives]) as number);
    }
  };

  const loseLife = () => {
    if (!testing) {
      return;
    }
    setLives((lives || 0) - 1);
  };

  updateLifes();

  return {
    packs,
    getGroups,
    getFlags,
    completeFlag,
    lives: testing ? 5 : lives,
    completedFlagsAmount: testing ? 300 : completedFlagsAmount,
    completedFlags,
    loseLife,
    isFlagCompleted,
  };
};
