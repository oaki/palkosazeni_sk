module.exports = function(grunt) {
    grunt.initConfig({
        pkg : grunt.file.readJSON('package.json'),

        uncss : {
            dist : {
                files : [{
                    options : {
                        ignore       : ['.open', '.dropdown-menu'],
                        ignoreSheets : [/fonts.gstatic.com/],
                    },
                    nonull  : true,
                    src     : [
                        'http://palkosazeni:8888/'
                    ],
                    dest    : './web/css/main-reduced.css'
                }]
            }
        }

    });

    //npm tasks
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-uncss');

    //tasks
    grunt.registerTask('default', 'Default Task Alias', ['uncss']);

}