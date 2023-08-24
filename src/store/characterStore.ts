import create from 'zustand';
import { ICharacter } from '../services/interface';

interface CharacterStore {
  data: ICharacter[];
  favorite: number[];
  filteredFavData: number[];
  getArray: number[];
  searchTerm: string;
  setData: (data: ICharacter[]) => void;
  setFavorite: (favorite: number[]) => void;
  setFilteredFavData: (filteredFavData: number[]) => void;
  setSearchTerm: (searchTerm: string) => void; 
  filterData: (searchTerm: string) => void;
}

export const useCharacterStore = create<CharacterStore>((set) => ({
  data: [],
  favorite: [],
  filteredFavData: [],
  getArray: [],
  searchTerm: '', 
  setData: (data) => set({ data }),
  setFavorite: (favorite) => set({ favorite }),
  setFilteredFavData: (filteredFavData) => set({ filteredFavData }),
  setSearchTerm: (searchTerm) => set({ searchTerm }),
  filterData: () => {
    set((state) => {
      if (!state.searchTerm) {
        return {
          
          filteredFavData: state.favorite,
        };
      }

     

      const filteredFavorite = state.favorite.filter((characterId) => {
        const character = state.data.find((char) => char._id === characterId);
        return character?.name.toLowerCase().includes(state.searchTerm.toLowerCase());
      });

      return {
        
        filteredFavData: filteredFavorite,
      };
    });
  },
}));
