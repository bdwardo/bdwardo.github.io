module.exports = function(grunt) {
  // Do grunt-related things in here
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    watch: {
      sass: {
        files: ['**/*.scss'],
        tasks: ['sass']
      }
    },

    sass: {
      dist: {
        files: {
          '_styles.css' : '_styles.scss',
          '_layout.css' : '_layout.scss',
          'base.css'  : 'base.scss'
        }
      }
    },
  });
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib');
  grunt.registerTask('default',['watch']);
};
