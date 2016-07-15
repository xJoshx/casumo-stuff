# Casumo assignment

Hey guys, it's Jose. I'm going to create a nice scalable and modular CSS architecture using just `stylus` and `BEM`. The only dependences for this project are `normalize.css` `pug`, not only because it's a very nice html preprocessor: also because it has the best name in the world for a library!1 :relaxed: . You will need some additional dependencies to create some production ready code with Gulp (I know, I know, but I take my job seriously :sunglasses: )

## How to build
  - `npm install stylus -g` - if you don't have Stylus installed, you should for compiling this project
  - `npm install pug-cli -g` - call the pug to the work! :dog:
  - `npm install` - install dependencies
  - `mkdir src/css` - create css output where the files will be compiled from stylus (I thought this directory was automatically created with stylus compile, but not)
  - `pug src/modules/index.pug -o ./src/` - compile layout
  - `stylus src/stylus/main.styl -o src/css -m` - compile stylus, generating sourcemaps
  - `gulp production` - prepare project to production. Yeah, I know, this is not necessary, but I needed to autoprefix my styles before sending you this assignment, and It was like 5 more minutes to configure the build procces. I'm just using gulp to prepare everything to production. I could use gulp to watch changes and compile pug & stylus, but I think for this test is enough with the previous configuration and the gulp task
