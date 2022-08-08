interface IBadgeShared {
  name: string;
  description: string;
  image: string;
}

export interface IBadgeFrontend extends IBadgeShared {
  _id: string;
}
export type IBadgeBackend = IBadgeShared;
