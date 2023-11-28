/*******************************************************************************
 * Copyright (c) 2023 Battle Road Consulting. All rights reserved.
 *******************************************************************************/

module.exports = function(grunt) {
    'use strict';

    var _ghPages = require('gh-pages');

    grunt.registerTask('publishWebsite', 'Publish the website to GitHub Pages.', function() {
        grunt.task.requires('build');
        grunt.log.writeln('Publishing website to GitHub Pages...');
        _ghPages.publish('build', { nojekyll: true }, function(err) {
            let success = true;
            grunt.log.writeln('Finished publishing website to GitHub Pages.');
            if (err) {
                grunt.log.error("publishWebsite Failed with the Following Error: " + err);
                success = false;
            } else {
                grunt.log.ok('Website published to GitHub Pages.');
            }
            return success;
         });
    });
};