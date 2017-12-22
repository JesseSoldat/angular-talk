// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyCRo_w0-W7GihV6P5hdy2M6AtknRRf8rEA",
    authDomain: "angularsellers.firebaseapp.com",
    databaseURL: "https://angularsellers.firebaseio.com",
    projectId: "angularsellers",
    storageBucket: "angularsellers.appspot.com",
    messagingSenderId: "351621372830"
  }
};
