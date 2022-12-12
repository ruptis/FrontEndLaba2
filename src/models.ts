export interface IAuthor {
    name: string;
    birthDate: string;
    deathDate: string;
    biography: string;
    mainImage: string;
    images: string[];
    videoEmbedId: string;
    location:
    {
        lat: number;
        lng: number;
    };
    timeline: ITimeline[];
}

export interface ITimeline {
    year: number;
    title: string;
    description: string;
}