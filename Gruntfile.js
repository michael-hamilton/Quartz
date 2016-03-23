module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		sass: {
			dist: {
				files: {
					'dist/css/quartz-base.css': 'sass/quartz.scss',
                    'dist/css/quartz.css': 'sass/quartz-full.scss'
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
		},
		cssmin: {
			target: {
				files: [{
					expand: true,
					cwd: 'dist/css',
					src: ['*.css', '!*.min.css'],
					dest: 'dist/css',
					ext: '.min.css'
				}]
			}
		}

	});
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.registerTask('default',['watch']);
	grunt.registerTask('build',['sass', 'cssmin']);
}