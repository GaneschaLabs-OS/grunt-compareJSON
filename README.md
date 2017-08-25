# grunt-compare_json
> Checks JSON files within a path for duplicate keys and if all files within the same sub directory have the same
> keys - Grunt Wrapper

## Getting Started
This plugin requires Grunt `~1.0.1`

If you haven't used [Grunt](https://gruntjs.com) before, be sure to check out the
[Getting Started](https://gruntjs.com/getting-started) guide, as it explains how to create a
[Gruntfile](https://gruntjs.com/sample-gruntfile) as well as how to install and use Grunt plugins. Once you're familiar
with that process, you may install this plugin with the following command:

```bash
npm install grunt-compare_json --save-dev
```

Once the plugin has bee installed, it can be enabled within your Gruntfile by adding the following line of JavaScript:

```javascript
grunt.loadNpmTasks('grunt-compare_json');
```

## The "compare_json" task
### Overview
In your projects Gruntfile, add a section named `compare_json` to the data object passed into `grunt.initConfig()`.

```javascript
grunt.initConfig({
    compare_json: {
        src: ['./path/of/your/json/']
    }
});
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed
functionality. Lint and test your code using [Grunt](https://gruntjs.com).

## Core lib
[compare_json](https://github.com/GaneschaLabs-OS/compare_json)
