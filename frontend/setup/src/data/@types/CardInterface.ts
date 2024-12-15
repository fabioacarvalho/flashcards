export interface Card {
    id: string;
    lastLevel: string;
    front: string;
    back: string;
    updatedAt: Date;
    createdAt: Date;
    picture: string;
    nextView: Date;
    daysLastView: string;
    content?: JSX.Element;
    study: boolean;
}