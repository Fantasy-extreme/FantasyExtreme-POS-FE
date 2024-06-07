import logger from '@/lib/logger';
import { Actor } from '@dfinity/agent';
import { AuthClient } from '@dfinity/auth-client';
import React from 'react';
import { create } from 'zustand';
import { ConnectPlugWalletSlice } from '@/types/store';
interface MethodsProps {
  setIsLoading?: React.Dispatch<React.SetStateAction<boolean>>;
  useAuthStore: ReturnType<typeof create>;
  client?: AuthClient;
  handleClose?: () => void;
}

const authMethods = ({
  setIsLoading,
  useAuthStore,
  handleClose,
  client,
}: MethodsProps) => {
  const { auth, setAuth, setUserAuth } = useAuthStore((state) => ({
    auth: (state as ConnectPlugWalletSlice).auth,
    setAuth: (state as ConnectPlugWalletSlice).setAuth,
    setUserAuth: (state as ConnectPlugWalletSlice).setUserAuth,
  }));

  const initAuth = async () => {
    setAuth({ ...auth, isLoading: true });
    const client = await AuthClient.create({
      idleOptions: {
        idleTimeout: 1000 * 60 * 60 * 2, // set to 2 hours
      },
    });
    if (setIsLoading) {
      setIsLoading(true);
      if (await client.isAuthenticated()) {
        const tempAuth = await authenticate(client);
        setIsLoading(false);
        return { success: false, actor: tempAuth };
      } else {
        setIsLoading(false);
        setAuth({
          ...auth,
          state: 'anonymous',
          actor: null,
          client,
          isLoading: false,
        });
        return { success: false, actor: null };
      }
    }
    return { success: false, actor: null };
  };
  const login = async () => {
    let ran = false;
    if (auth && auth.state === 'anonymous' && auth.client && handleClose && setIsLoading) {
      setIsLoading(true);
      await auth.client.login({
        identityProvider: process.env.NEXT_PUBLIC_DFX_NETWORK === 'ic'
          ? 'https://identity.ic0.app/#authorize'
          : `http://${process.env.CANISTER_ID_INTERNET_IDENTITY}.localhost:4943/#authorize`,
        onSuccess: () => {
          authenticate(auth.client as AuthClient);
        },
        onError: () => {
          handleClose();
        },
      });
      const refreshLogin = () => {
        if (auth.client) {
          auth.client.login({
            onSuccess: async () => {
              authenticate(auth.client as AuthClient).then(() => {
                handleClose();
              });
            },
          });
        }
      };

      auth.client.idleManager?.registerCallback?.(refreshLogin);
    } else if (auth && !ran && auth.state === 'anonymous') {
      initAuth();
      ran = true;
    } else {
      logger('Login did not start');
    }
  };
  const logout = async () => {
    setAuth({ ...auth, isLoading: true });

    if (auth.state === 'initialized' && auth.client) {
      await auth.client.logout();

      setAuth({
        ...auth,

        state: 'anonymous',
        actor: null,
        client: null,
        isLoading: false,
      });

      // router.push('/');
    } else {
      logger(auth.client, 'cant logout')
    }
  };
  const getPerms = (role: any) => {
    let userPerms = {
      admin: false,
    };
    if (role.hasOwnProperty('user')) {
      userPerms = {
        admin: false,
      };
    } else if (role.hasOwnProperty('admin')) {
      userPerms = {
        admin: true
      };
    }
    return userPerms;
  };
  const authenticate = async (client: AuthClient) => {
    try {
      setAuth({
        ...auth,
        isLoading: true,
      });
      const myIdentity = client?.getIdentity();
  
  
      setAuth({
        ...auth,
        state: 'initialized',
        client,
        isLoading: false,
        identity: myIdentity
      });
      if (handleClose) handleClose();
      return null;
    } catch (e) {
      setAuth({
        ...auth,
        state: 'error',
      });
      if (handleClose) handleClose();
      logger(e, 'Error while authenticating');
    }
  };


  return {
    initAuth,
    login,
    logout,
    authenticate,
  };
};
export default authMethods;
// export default { initAuth, login, logout, authenticate };

// export default { initAuth, login, logout, authenticate };
