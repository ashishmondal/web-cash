// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
	production: false,
	firebase: {
		apiKey: "AIzaSyBVM2n-UvLs7eOP5qJ4UuGpqhuyQTRAnOc",
		authDomain: "webcash-1337.firebaseapp.com",
		databaseURL: "https://webcash-1337.firebaseio.com",
		projectId: "webcash-1337",
		storageBucket: "webcash-1337.appspot.com",
		messagingSenderId: "228927938698"
	}
};
