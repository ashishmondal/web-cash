var gulp = require('gulp');
var gutil = require('gulp-util');
var ftp = require('vinyl-ftp');

var server = process.env.FTP_SERVER;
var user = process.env.FTP_USER;
var password = process.env.FTP_PASSWORD;

if (!user || !password) {
	throw 'Username or password not provided!';
}

console.log(user + ':' + password);

gulp.task('deploy', function () {
	var remotePath = '/';

	var conn = ftp.create({
		host: server,
		user: user,
		password: password,
		log: gutil.log
	});

	gulp.src(['dist/**'], { base: '.', buffer: false })
		.pipe(conn.newer(remotePath))
		.pipe(conn.dest(remotePath));
});
