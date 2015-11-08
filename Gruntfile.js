module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		sass: {
			dist: {
				files: {
                    'dist/css/quartz.css': 'sass/quartz.scss'
                }
			}
		},
		watch: {
			sass: {
				files: [
                    'sass/**/*.scss'
                ],
				tasks: ['sass']
			}
		}
	});
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.registerTask('default',['watch']);
}