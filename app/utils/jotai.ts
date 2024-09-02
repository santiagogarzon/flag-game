import AsyncStorage from "@react-native-async-storage/async-storage";
import { createStore } from "jotai";
import { createJSONStorage } from "jotai/utils";

export const store = createStore();
export const storage = createJSONStorage<any>(() => AsyncStorage);
