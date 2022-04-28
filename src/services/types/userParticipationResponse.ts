export interface UserParticipationResponse {
    id: number;
    isAdmin: null | boolean;
    team: ITeam;
}

export interface ITeam{
    id: number;
    name: string;
    description: string;
    participants: IParticipant[];
}

export interface IParticipant{
    id: number
    isAdmin: null | boolean;
    user: IUser;
}

export interface IUser{
    username: string;
}