import create from 'zustand';
import { ICharacter } from '../services/interface';

interface CharacterStore {
  data: ICharacter[];
  setData: (data: ICharacter[]) => void;
}

export const useCharacterStore = create<CharacterStore>((set) => ({
  data: [],
  setData: (data) => set({ data }),
}));
