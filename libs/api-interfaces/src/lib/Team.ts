interface ITeamShared {
  name: string;
  shortName: string;
  image: string;
}

export interface ITeamFrontend extends ITeamShared {
  _id: string;
}

export type ITeamBackend = ITeamShared;
