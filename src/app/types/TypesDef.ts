export type TypesDef = {
    allianceName : string;
    date: number;
    player: string;
    city: string;
    tib_prod: number;
    cry_prod: number;
    power_prod: number;
    tib_res: number;
    cry_res: number;
    power_res: number;
    off: number;
    def: number;
};

export type AllianceType = {
    date: number;
    id: number;
    rank: number;
    name: string;
    score: number;
};

export type PlayerType = {
    allianceName : string;
    date: number;
    name: string;
    rank: number;
    researchPoints: number;
    credits: number;
    creditProd: number;
    controlHub: boolean;
    nextBase: string;
    baseCount: number;
};

export type FetchDataType = {
    alliance: AllianceType[];
    players: PlayerType[];
    cities: TypesDef[];
}