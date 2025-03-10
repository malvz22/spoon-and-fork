export interface Member {
  name: {
    first: string;
    last: string;
  };
  picture: {
    large: string;
  };
}

export interface ApiProps {
  api: Member[];
}
