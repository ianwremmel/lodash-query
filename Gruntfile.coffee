# Generated on 2014-03-05 using generator-library 0.0.1
module.exports = (grunt) ->
  require('load-grunt-tasks')(grunt)

  grunt.registerTask 'build', [
    
    'jshint'
    
  ]
  
  grunt.registerTask 'test', [
    'build'
    'mochacli'
  ]
  

  grunt.registerTask 'default', ['build']

  grunt.initConfig
    pkg:
      grunt.file.readJSON 'package.json'

    yeoman:
      src: 'src'
      dist: 'dist'
      test: 'test'
    
    jshint:
      options:
        reporter: require('jshint-stylish')
        jshintrc: '.jshintrc'
      src: [
          '<%= yeoman.src %>/**/*.js'
        ]
    
    
    mochacli:
      spec:
        dist: '<%= yeoman.test %>/test.js'
        options:
          reporter: 'spec'
    
