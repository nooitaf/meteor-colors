# Colors.js for Meteor

Meteor _Server Only_  wrapper for [Colors.js](https://github.com/Marak/colors.js)
 


# Installation

`meteor add nooitaf:colors`

# Usage

## Enable or disable colorful output
````javascript
colors.enabled = true // default
````
## Output colors
````javascript
// server
console.log('red'.red)
console.log('green'.green)
console.log('blue'.blue)
console.log('~~~~~~'.grey)
console.log('R'.red + 'G'.green + 'B'.blue)
console.log('~~~~~~'.grey)
var test = 'ALLTHECOLORS'
console.log(test.rainbow)
````
<img src="https://raw.githubusercontent.com/nooitaf/meteor-colors/master/screenshot.jpg" alt="screenshot.jpg">

# Colors and styles!

- bold
- italic
- underline
- inverse
- yellow
- cyan
- white
- magenta
- green
- red
- grey
- blue
- rainbow
- zebra
- random


# Creating Custom themes

````javascript
colors.setTheme({
  silly: 'rainbow',
  input: 'grey',
  verbose: 'cyan',
  prompt: 'grey',
  info: 'green',
  data: 'grey',
  help: 'cyan',
  warn: 'yellow',
  debug: 'blue',
  error: 'red'
});

// outputs red text
console.log("this is an error".error);

// outputs yellow text
console.log("this is a warning".warn);
````


# Contributors 

| User | Name |
| ----- | ----- |
| [marak](https://github.com/marak)                     | Marak Squires     |
| [cloudhead](https://github.com/cloudhead)             | Alexis Sellier    |
| [mmalecki](https://github.com/mmalecki)               | Maciej Małecki    |
| [nicoreed](https://github.com/nicoreed)               | Nico Reed         |
| [morganrallen](https://github.com/morganrallen)       | Morgan Allen      |
| [JustinCampbell](https://github.com/JustinCampbell)   | Justin Campbell   |
| [ded](https://github.com/ded)                         | Dustin Diaz       |
