import create from "zustand";
import { ICharacter } from "../services/interface";

interface FavoriteStore {
  favorite: number[];
  filteredFavData: ICharacter[];
  // getArray: number[];
  // searchTerm: string;
  setFavorite: (favorite: number[]) => void;
  setFilteredFavData: (filteredFavData: ICharacter[]) => void;
  // setSearchTerm: (searchTerm: string) => void;
  // filterData: (searchTerm: string) => void;
}

export const useFavoriteStore = create<FavoriteStore>((set) => ({
  favorite: [],
  filteredFavData: [],
  // getArray: [],
  // searchTerm: "",
  setFavorite: (favorite) => set({ favorite }),
  setFilteredFavData: (filteredFavData) => set({ filteredFavData }),
  // setSearchTerm: (searchTerm) => set({ searchTerm }),
  // filterData: () => {
  //   set((state) => {
  //     if (!state.searchTerm) {
  //       return {
  //         filteredFavData: state.favorite,
  //       };
  //     }

  //     const filteredFavorite = state.favorite.filter((characterId) => {
  //       const character = state.data.find((char) => char._id === characterId);
  //       return character?.name
  //         .toLowerCase()
  //         .includes(state.searchTerm.toLowerCase());
  //     });

  //     return {
  //       filteredFavData: filteredFavorite,
  //     };
  //   });
  // },
}));
