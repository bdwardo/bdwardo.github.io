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
        options: { sourcemap: 'none' },
        files: {
          'style.css' : 'style.scss'
        }
      }
    },
  });
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib');
  grunt.registerTask('default',['watch']);
};
