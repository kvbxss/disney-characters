export interface ICharacter {
    id: string;
    films: string[];
    shortFilms: string[];
    tvShows: string[];
    name: string;
    imageUrl: string;
}

export interface IApi {
    disneys: ICharacter[];
    nextPage: string;
}