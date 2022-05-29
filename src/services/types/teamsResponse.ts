export interface TeamsResponse {
    teams: ITeam[];
}

export interface ITeamFields {
    id?: number;
    name: string;
    description: string;
}


export interface IParticipant {
    id: number;
    userId: number;
    teamId: number;
    user: IUser;
    isAdmin: null | boolean;
}

export interface ITeam extends ITeamFields {
    id: number;
    participants: IParticipant[];
}


export interface UserParticipationResponse extends IParticipant {
    team: ITeam;
}


export interface IUser {
    username: string;
    job?: string;
}