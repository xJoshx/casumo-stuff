# Casumo assignment

Hey guys, it's Jose. I'm going to create a nice scalable and modular CSS architecture using just `stylus` and `BEM`. The only dependency for this project it's `pug`, not only because it's a very nice html preprocessor: also because it has the best name in the world for a library!1 :relaxed:

## How to build
  `npm install stylus -g` - if you don't have Stylus installed, you should for compiling this project
  `npm install` - install dependencies
  `pug src/modules/index.pug -o ./src/` - compile layout
  `stylus src/stylus/main.styl -o src/css -m` - compile stylus, generating sourcemaps
