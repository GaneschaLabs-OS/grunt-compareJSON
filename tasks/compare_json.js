module.exports = function (grunt) { 'use strict';
    const compareJSON = require('compare_json');
    
    grunt.registerMultiTask('compare_json', 'Compares JSON files and returns missing keys and duplicates', function () {
        const done = this.async();
        
        this.files.forEach(function (f) {
            const src = f.src.filter(function (filepath) {
                if (!grunt.file.exists(filepath)) {
                    grunt.log.warn(`Source "${filepath}" not found.`);
                    return false;
                }
                
                return true;
            }).forEach(function (path) {
                grunt.log.writeln(`Comparing files in "${path}"...`);
                
                compareJSON(path).then(function (jsonErrors) {
                    if (jsonErrors.duplicate.length < 1 && jsonErrors.missing.length < 1) {
                        grunt.log.ok(`Either all files in the path "\x1b[33m${jsonErrors.path}\x1b[0m" had no duplicate keys and no differences in the keys, or you passed an folder which contained no JSON files.`);
                        return done();
                    }
                    
                    jsonErrors.duplicate.forEach(function (dupes) {
                        grunt.log.warn(`The file "\x1b[33m${dupes.file}\x1b[0m" has multiple entries for the following keys: \x1b[31m${dupes.duplicateKeys.join(', ')}\x1b[0m.`);
                    });
                    
                    jsonErrors.missing.forEach(function (miss) {
                        grunt.log.warn(`The file "\x1b[33m${miss.file}\x1b[0m" is missing the following keys: \x1b[31m${miss.missingKeys.join(', ')}\x1b[0m.`);
                    });
                    
                    return done(false);
                }).catch(function (err) {
                    grunt.log.error(err);
                    
                    return done(false);
                });
            });
        });
    });
};
