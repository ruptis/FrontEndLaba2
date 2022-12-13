export interface IDirector {
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
    pathUrl: string;
}
export default IDirector;

export interface ITimeline {
    year: number;
    title: string;
    description: string;
}