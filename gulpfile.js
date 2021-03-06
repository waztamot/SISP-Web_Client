const elixir = require('laravel-elixir');

require('laravel-elixir-livereload');
require('laravel-elixir-vue');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

 elixir(mix => {
  mix.webpack('./develop/js/app.js', 
            './public/js/app.js');
  mix.sass('./develop/css/main.sass', 
            './public/css/main.css');
  mix.livereload();
});
