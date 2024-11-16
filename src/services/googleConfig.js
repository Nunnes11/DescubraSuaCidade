import * as Google from 'expo-auth-session/providers/google';
import * as WebBrowser from 'expo-web-browser';
import { useState, useEffect } from 'react';
//import * as AuthSession from 'expo-auth-session';

WebBrowser.maybeCompleteAuthSession();

export function useGoogleAuth() {
  const [user, setUser] = useState(null);

  // Substituir pelo redirectUri literal exato do Google Console
  const redirectUri = 'https://auth.expo.io/@Francisco09/DescubraSuaCidade'; 
  console.log('Redirect URI configurado:', redirectUri);

  const [request, response, promptAsync] = Google.useIdTokenAuthRequest({
    clientId: '103989676686-psicdvj1enr01dih5a7g0qr0at4eboik.apps.googleusercontent.com',
    redirectUri: redirectUri, // Usando o literal aqui
  });

  useEffect(() => {
    if (response?.type === 'success') {
      const { id_token } = response.params;
      console.log('Autenticação bem-sucedida:', id_token);
      setUser(id_token);
    }
  }, [response]);

  return { request, promptAsync, user };
}


