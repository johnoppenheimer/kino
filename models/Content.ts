import { IUser } from 'models/User';

export interface IContent {
    id: number;
    title: string;
    status: string;
    overview: string;
    inCinemas: Date;
    images?: {
        coverType: string;
        url: string;
    }[];
    downloader: boolean;
    remotePoster: string;
    year: number;
    hasFile: boolean;
    monitored: boolean;
    isAvailable: boolean;
    added: Date;
    addedBy?: IUser;
    imdbId: string;
    tmdbId: string;
    type: 'movie' | 'tv';
}

export default class Content implements IContent {
    public id: number;
    public title: string;
    public status: string;
    public overview: string;
    public inCinemas: Date;
    public images?: { coverType: string; url: string }[];
    public downloader: boolean;
    public remotePoster: string;
    public year: number;
    public hasFile: boolean;
    public monitored: boolean;
    public isAvailable: boolean;
    public added: Date;
    public addedBy?: IUser;
    public imdbId: string;
    public tmdbId: string;
    public type: 'movie' | 'tv';
}
