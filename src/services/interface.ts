export interface ICharacter {
    _id: number;
    films: string[];
    shortFilms: string[];
    tvShows: string[];
    name: string;
    imageUrl: string;
}

export interface IApi {
    characters: ICharacter[];
}