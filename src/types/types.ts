import { ReactNode } from "react";

export interface FaciliStoneProviderProps {
  children: ReactNode;
}

export interface UserProps {
  name: string;
  email: string;
  BirthDate: string;
  createdAt: string;
  updatedAt: string;
  enabledFeatures: [];
  document: string;
  metadatas: {
    validDocument: boolean;
    verified: boolean;
  };
  address: string;
  salaryBase: number;
  id: string;
}

export interface CardProps {
  createdAt: string;
  updatedAt: string;
  status: string;
  id: number;
  user_id: string;
  metadatas: {
    name: string;
    digits: number;
    limit: number;
  };
}

export interface AuditProps {
  id: string;
  createdAt: string;
  type: string;
  before: {
    createdAt: string;
    id: string;
    metadatas: {
      name: string;
      digits: number;
    };
    digits: number;
    name: string;
    status: string;
    updatedAt: null;
    user_id: 1;
  };
  after: {
    createdAt: string;
    id: string;
    metadatas: {
      name: string;
      digits: number;
    };
    digits: number;
    name: string;
    status: string;
    updatedAt: null;
    user_id: 1;
  };
  requestedBy: string;
}

export interface AnalystsProps {
  id: number;
  user_id: number;
  email: string;
  password: string;
  roles: [];
}

export interface CreateContextProps {
  users: UserProps[];
  cards: CardProps[];
  audits: AuditProps[];
  email: string;
  password: string;
  user: any;
  handleSideBar: () => void;
  cpfMask: (cpf: string) => string;
  statusChange: (cardJson: CardProps, id: number) => any;
  registerAuditLog: (obj: any, userID: any) => any;
  inputEmail: (event: any) => void;
  inputPassword: (event: any) => void;
  authLogin: () => any;
  logOut: () => any;
}
