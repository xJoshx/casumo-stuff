# Casumo assignment

Hey guys, it's Jose. I'm going to create a nice scalable and modular CSS architecture using just `stylus` and `BEM`. The only dependency for this project it's `pug`, not only because it's a very nice html preprocessor: also because it has the best name in the world for a framework!1 :D

## How to build
Commands:
  `npm install` - install dependencies
  `pug src/pug/index.pug -o ./src/ -w` - compile layout and watch for new changes
  `stylus src/stylus/main.styl -o src/css -m -w` - compile stylus and watch for new changes, generating sourcemaps
