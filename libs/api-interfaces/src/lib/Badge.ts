interface IBadgeShared {
  name: string;
  description: string;
  image: string;
}

export type IBadgeFrontend = IBadgeShared;
export type IBadgeBackend = IBadgeShared;
