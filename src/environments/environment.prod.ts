// `.env.ts` is generated by the `npm run env` command
// `npm run env` exposes environment variables as JSON for any usage you might
// want, like displaying the version or getting extra config from your CI bot, etc.
// This is useful for granularity you might need beyond just the environment.
// Note that as usual, any environment variables you expose through it will end up in your
// bundle, and you should not use it for any sensitive information like passwords or keys.
import { env } from './.env';

export const environment = {
  production: true,
  version: env.npm_package_version,
  serverUrl: 'https://api.chucknorris.io',
  defaultLanguage: 'en-US',
  supportedLanguages: ['en-US', 'es-ES'],
  firebaseConfig: {
    apiKey: 'AIzaSyDfKZJN0e3SqkjNFMtsGAC4MzhRl8Ukv5w',
    authDomain: 'clon-instagram-59a9e.firebaseapp.com',
    projectId: 'clon-instagram-59a9e',
    storageBucket: 'clon-instagram-59a9e.appspot.com',
    messagingSenderId: '934090957867',
    appId: '1:934090957867:web:647d0351a6f907833f766e',
  },
};
