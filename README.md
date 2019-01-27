# The Catador's Roll

Catador: A professional cigar taster who determines a cigar's qualities of taste, texture, and aroma. [source](https://www.thompsoncigar.com/infotemplate/CigarGlossary)

## Steps

In the project directory, we attempt to hand-roll you, the Catador, the finest cigar:

1. npm run eject
  - not sure if this will end up being a good idea later when wanting to utilize [React-Materialize](https://react-materialize.github.io/#/)
2. removed all styling from components aside from the global styling available in [index.css]
3. using [App.js] as root element vs. [Index.js] for layout to accomodate for future development
4. added [NPM prop-types](https://www.npmjs.com/package/prop-types)
5. created handler methods to add and remove leaf to the CatadorRoller
6. added control functions (RollControls) to add and remove tobacco leaf to cigar order (CatadorRoller)
7. set base cigar build price at \$5 and added price to individual leaf types (as defined in CigarLeaf)
8. disallowed removing of ingredients that aren't in the roller so Roller doesn't crash
9. add modal for cigar order - have a wrapping element with styling for the content inside


# Brasas Tejas - Organization - Project 3

Application users can customize, review, and rate cigars.

## Tools

- Dependency Management Tool: Node Package Manager
- Bundler: Webpack
- Compiler: Babel
- Database: MySQL and Sequelize

## Contributors

- Kathryn: React, NPM Prop Types
- Jacob: Authentication, CSS
- John: Postman API, MySQL, Sequelize
- Peter: React, Front End

## MVP

PHASE ONE

- Create User Account that can customize cigars.

## Wireframe	
![Initial Wireframe](/public/images/Catador.png?raw=true "Wireframe")

## Websites

- Heroku: Click [here](https://catador-p3.herokuapp.com//).
- GitHub: Click [here](https://github.com/BrasasTejas/Catador).
