/*******************************************************************************
 * Copyright (c) 2023 Battle Road Consulting. All rights reserved.
 *******************************************************************************/

module.exports = {
    watch: {
        files: ['src/public/**/*'],
        tasks: ['jshint', 'copy'],
        options: {
            livereload: true
        }
    }
};
  