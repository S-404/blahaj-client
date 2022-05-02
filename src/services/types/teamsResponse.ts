export interface TeamsResponse {
    teams: ITeam[];
}

export interface ITeamFields{
    name: string;
    description: string;
}

export interface IParticipant{
    id: number;
    userId: number;
    teamId: number;
    isAdmin: null | boolean;
}

export interface ITeam extends ITeamFields{
    id: number;
    participants: IParticipant[];
}


export interface UserParticipationResponse extends IParticipant{
    team: ITeam;
}

export interface UserParticipantsResponse extends IParticipant{
    user: IUser;
}

export interface IUser{
    username: string;
}