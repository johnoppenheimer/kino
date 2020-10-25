import { IUser } from 'models/User';

export interface IContent {
    getId(): string;
    exist(): string;
}

export default class Content {
    public id?: number;
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
    public tvdbId?: string;
    public type: 'movie' | 'tv';
    public exist: boolean = false;

    public getId(): string {
        if (this.id) {
            return String(this.id);
        }

        if (this.imdbId) {
            return this.imdbId;
        }

        if (this.tmdbId) {
            return this.tmdbId;
        }

        if (this.tvdbId) {
            return this.tvdbId;
        }
    }
}
