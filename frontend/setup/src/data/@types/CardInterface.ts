export interface Card {
    id: number;
    lastLevel: string;
    front: string;
    back: string;
    updatedAt: string;
    createdAt: string;
    picture: string;
    nextView: string;
    daysLastView: number;
    content?: JSX.Element;
    study: boolean;
}