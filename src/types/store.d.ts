import { Identity } from '@dfinity/agent';
import { Principal } from '@dfinity/principal';

interface Auth {
  state: 'initializing-auth' | 'anonymous' | 'initialized' | 'error';
  actor: Actor | null;
  client: AuthClient | null;
  isLoading: boolean;
  connectedWithWeb2: boolean;
  identity: Identity;
}
export interface UserPermissions {
  admin: boolean;
}

interface UserAuth {
  name: string;
  role: string;
  email:string;
  userPerms: null | UserPermissions;
  rewardPercentage: number;
}
export interface ConnectStore {
  auth: Auth;
  userAuth: UserAuth;
  setAuth: (input: Auth) => void;
  setUserAuth: (input: UserAuth) => void;
}

export interface ConnectPlugWalletSlice {
  auth: Auth;
  userAuth: UserAuth;
  setAuth: (input: Auth) => void;
  setUserAuth: (input: UserAuth) => void;
}
