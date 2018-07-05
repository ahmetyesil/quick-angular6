// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
    production: false,
    base_uri: 'http://api.v216.net',
    panel_uri: 'http://beta.v216.net',
    // base_uri: 'http://beta-api.v216.net',
    // socket_uri: 'http://beta-api.v216.net/ws'
    socket_uri: 'http://localhost:8888'
};
