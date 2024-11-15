import * as Google from 'expo-auth-session/providers/google';
import * as WebBrowser from 'expo-web-browser';
import { useState, useEffect } from 'react';
import * as AuthSession from 'expo-auth-session';

WebBrowser.maybeCompleteAuthSession();

export function useGoogleAuth() {
  const [user, setUser] = useState(null);

  const [request, response, promptAsync] = Google.useAuthRequest({
    clientId: '103989676686-psicdvj1enr01dih5a7g0qr0at4eboik.apps.googleusercontent.com',
    redirectUri: AuthSession.makeRedirectUri({
      scheme: 'descubra',
    }),
  });

  useEffect(() => {
    if (response?.type === 'success') {
      const { authentication } = response;
      console.log('Autenticação bem-sucedida:', authentication);
      setUser(authentication);
    }
  }, [response]);

  return { request, promptAsync, user };
}

