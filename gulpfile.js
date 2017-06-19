var gulp = require('gulp');
var fs = require('fs');

var aws_creds = JSON.parse(fs.readFileSync('.aws.json'));

var s3 = require('gulp-s3-upload')({
	accessKeyId: aws_creds.ACCESS_KEY_ID,
	secretAccessKey: aws_creds.SECRET_ACCESS_KEY
});

gulp.task('deploy', function() {
    gulp.src('./build/**')
        .pipe(s3({
            Bucket: aws_creds.BUCKET_NAME,
						ACL: 'public-read'
        }, {
            maxRetries: 5
        }))
    ;
});


gulp.task('default', function() {
	console.log("Gulp Commands Available");
	console.log("	deploy : deploy build/ to s3");
});
