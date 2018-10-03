#How to use

Clone this repo and then in command line type:

* `npm install` or `yarn` - install all dependencies
* `gulp` - run dev-server and let magic happen, or
* `gulp build` - build project from sources

--

## List of Gulp tasks

To run separate task type in command line `gulp [task_name]`.
Almost all tasks also have watch mode - `gulp [task_name]:watch`, but you don't need to use it directly.

### Main tasks
Task name          | Description
:------------------|:----------------------------------
`default`          | will start all tasks required by project in dev mode: initial build, watch files, run server with livereload
`build:dev`        | build dev version of project (without code optimizations)
`build`            | build production-ready project (with code optimizations)

### Other tasks
Task name          | Description
:------------------|:----------------------------------
`sass` 	         | compile .sass/.scss to .css. We also use [postcss](https://github.com/postcss/postcss) for [autoprefixer](https://github.com/postcss/autoprefixer) and [Lost](https://github.com/peterramsing/lost), so feel free to include other awesome postcss [plugins](https://github.com/postcss/postcss#plugins) when needed
`webpack`          | compile .js sources into bundle file
`copy`             | copy common files from `./src` path to `./build` path
`swig`             | compile [swig](http://paularmstrong.github.io/swig/)  templates
`nunjucks`         | compile Mozilla's awesome [nunjucks](https://mozilla.github.io/nunjucks/) templates
`jade`             | compile [jade](http://jade-lang.com/) templates
`svgo`             | optimize svg files with [svgo](https://github.com/svg/svgo)
`iconfont`         | compile iconfonts from svg sources
`sprite:svg`       | create svg symbol sprites ([css-tricks](https://css-tricks.com/svg-sprites-use-better-icon-fonts/))
`sprite:png`       | create png sprites
`server`           | run dev-server powered by [BrowserSync](https://www.browsersync.io/)
`clean`            | remove `./build` folder
`list-pages`       | create index file with links to all project pages

_This is a full list of tasks, that we use in our projects, but not all of them should be available in current project. For example, we only use one template engine out of these three [`jade`, `nunjucks`, `swig`]. All available tasks are placed in a folder `./gulp/tasks` as separate *.js files. Usually, file name = task name._

### Dependencies
devDependencies name                | Version
:-----------------------------------|:----------------------------------
`autoprefixer`                      | 8.3.0
`babel-core`                        | 6.18.2
`babel-eslint`                      | 7.2.3
`babel-loader`                      | 7.1.4
`babel-plugin-transform-runtime`    | 6.4.3
`babel-preset-env`                  | 1.6.0
`babel-preset-es2015`               | 6.3.13
`babel-runtime`                     | 5.0.0
`browser-sync`                      | 2.10.0
`css-mqpacker`                      | 6.0.2
`del`                               | 3.0.0
`eslint`                            | 4.3.0
`eslint-config-airbnb`              | 16.1.0
`eslint-formatter-pretty`           | 1.1.0
`eslint-loader`                     | 2.0.0
`gulp`                              | 3.9.1
`gulp-changed`                      | 1.3.0
`gulp-cheerio`                      | 0.6.2
`gulp-consolidate`                  | 0.2.0
`gulp-filter`                       | 5.1.0
`gulp-front-matter`                 | 1.3.0
`gulp-git`                          | 2.0.1
`gulp-if`                           | 2.0.0
`gulp-include`                      | 2.0.3
`gulp-notify`                       | 3.2.0
`gulp-nunjucks-render`              | 2.0.0
`gulp-plumber`                      | 1.0.1
`gulp-postcss`                      | 7.0.1
`gulp-prettify`                     | 0.5.0
`gulp-rename`                       | 1.2.2
`gulp-sass`                         | 4.0.1
`gulp-sourcemaps`                   | 2.6.4
`gulp-svgmin`                       | 1.2.0
`gulp-svgstore`                     | 5.0.5
`gulp-util`                         | 3.0.7
`htmlhint`                          | 0.9.13
`husky`                             | 0.14.3
`jquery`                            | 3.1.1
`lint-staged`                       | 7.0.4
`lodash`                            | 4.3.0
`lost`                              | 7.1.0
`postcss-csso`                      | 3.0.0
`require-dir`                       | 1.0.0
`require-yaml`                      | 0.0.1
`run-sequence`                      | 2.2.1
`select2`                           | 4.0.6-rc.1
`svg4everybody`                     | 2.1.9
`through2`                          | 2.0.1
`webpack`                           | 4.6.0
`webpack-bundle-analyzer`           | 2.11.1
`webpack-glsl-loader`               | 1.0.1


## Flags

We have several useful flags.

* `gulp --open` or `gulp server --open` - run dev server and then open preview in browser
* `gulp --tunnel=[name]` or `gulp server --tunnel [name]` - runs dev server and allows you to easily share a web service on your local development machine (powered by [localtunnel.me](https://localtunnel.me/)). Your local site will be available at `[name].localtunnel.me`.
* `gulp [task_name] --prod` or `gulp [task_name] --production` - run task in production mode. Some of the tasks (like, sass or js compilation) have additional settings for production mode (such as code minification), so with this flag you can force production mode. `gulp build` uses this mode by default.

##Other
You can also use [npm scripts](https://docs.npmjs.com/misc/scripts):

* `npm run start` - same as `gulp default`.
* `npm run build` - same as `gulp build`.
* `npm run ghpages` to push only `./build` folder to **gh-pages** branch on github (very useful for previews).
* `npm run lint` - linting javascript with **eslint**.
* `npm run lint-fix` - fix as many issues as possible relatives to **eslint** settings.


