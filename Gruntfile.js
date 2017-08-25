module.exports = function (grunt) { 'use strict';
    require('load-grunt-tasks')(grunt, { scope: 'devDependencies' });
    
    grunt.initConfig({
        jshint: {
            files: [
                'Gruntfile.js',
                'tasks/*.js'
            ],
            options: {
                funcscope: true,
                notypeof: true,
                nocomma: true,
                eqeqeq: true,
                maxparams: 2,
                freeze: true,
                esnext: true,
                shadow: true,
                strict: true,
                curly: true,
                noarg: true,
                maxdepth: 2
            }
        },
        
        md_link_checker: {
            options: {
                tokenFilePath: '~/.token'
            },
            src: ['./README.md']
        },
        
        replace_tab: {
            src: ['./task/*.js']
        },
        
        'minor-major-milestone': {
            minor: {
                options: {
                    elem: 'minor'
                }
            },
            major: {
                options: {
                    elem: 'major'
                }
            },
            milestone: {
                options: {
                    elem: 'milestone'
                }
            }
        }
    });
    
    grunt.loadTasks('tasks');
    
    grunt.registerTask('default', ['jshint', 'replace_tab', 'md_link_checker']);
    grunt.registerTask('minor', ['minor-major-milestone:minor']);
    grunt.registerTask('major', ['minor-major-milestone:major']);
    grunt.registerTask('milestone', ['minor-major-milestone:milestone']);
};
