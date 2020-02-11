module.exports = function(grunt){
	var localAppDir = 'C:\\wab\\server\\apps\\8\\widgets\\AppUpdate';
	var localStemAppDir = 'C:\\wab\\client\\stemapp\\widgets\\AppUpdate';
	//var NT245stemAppDir = '\\\\nt245\\d$\\wab\\client\\stemapp\\widgets\\AppUpdate';

	
	grunt.initConfig({
		jshint: {
		    files: ['Gruntfile.js',
                'C:/ICT/Widgets/AppUpdate/trunk/Widget.js',
				'C:/ICT/Widgets/AppUpdate/trunk/nls/strings.js',
				'C:/ICT/Widgets/AppUpdate/trunk/config.json',
				'C:/ICT/Widgets/AppUpdate/trunk/manifest.json',
				'C:/ICT/Widgets/AppUpdate/trunk/setting/nls/strings.js',
				'C:/ICT/Widgets/AppUpdate/trunk/setting/Setting.js']
		  },
		sync: {
			main:{
				files: [
				{
					cwd: 'C:/ICT/Widgets/AppUpdate/trunk/',
                    src: ['**',
                        '!**/Gruntfile.js',
                        '!**/startGrunt.bat',
                        '!node_modules/**'
                    ],
					dest: localStemAppDir
				},
                // {
				    // cwd: 'C:/ICT/Widgets/AppUpdate/trunk/',
				    // src: ['**'],
				    // dest: NT245stemAppDir
				// }
                {
				    cwd: 'C:/ICT/Widgets/AppUpdate/trunk/',
                    src: ['**',
                        '!**/Gruntfile.js',
                        '!**/startGrunt.bat',
                        '!node_modules/**'
                    ],
				    dest: localAppDir
				}
	]
			}
		},
		watch: {
			JS:{
			  files: ['<%= jshint.files %>'],
			  tasks: ['jshint', 'sync'],
			  options: {
				  event: ['changed'],
				}
			},
			HTML:{
			    files: ['C:/ICT/Widgets/AppUpdate/trunk/Widget.html',
						'C:/ICT/Widgets/AppUpdate/trunk/setting/Setting.html'],
				  tasks: ['sync'],
				  options: {
					  event: ['changed'],
					}
			},
			CSS: {
			    files: ['C:/ICT/Widgets/AppUpdate/trunk/css/style.css', 
						'C:/ICT/Widgets/AppUpdate/trunk/setting/css/style.css'],
			    tasks: ['sync'],
			    options: {
			        event: ['changed'],
			    }
			}
		},
		concurrent:{
		    tasks: ['watch:JS', 'watch:HTML', 'watch:CSS'],
			options: {
                logConcurrentOutput: true
            }
		}
		
	});
	
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-sync');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-concurrent');

  grunt.registerTask('default', ['concurrent']);
};