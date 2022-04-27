export interface TeamsResponseTypes {
    teams: ITeam[];
}

export interface ITeam {
    id: number;
    name: string;
    description: string;
    participants: IParticipant[];
}

export interface IParticipant{
    id: number;
    userId: number;
    teamId: number;
    isAdmin?: boolean
}