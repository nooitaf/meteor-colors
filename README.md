##Colors.js for Meteor

Meteor wrapper for [Colors.js](https://github.com/Marak/colors.js)  

_At the moment only suppported on the server._  


## Installation

    mrt add colors

## Usage
<img src="https://raw.githubusercontent.com/nooitaf/meteor-colors/master/screenshot.jpg" alt="screenshot.jpg">
````javascript
//server
console.log('red'.red)
console.log('green'.green)
console.log('blue'.blue)
console.log('~~~~~~'.grey)
console.log('R'.red + 'G'.green + 'B'.blue)
console.log('~~~~~~'.grey)
var test = 'ALLTHECOLORS';
console.log(test.rainbow);
````

## Colors and styles!

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


## Creating Custom themes

```js
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
```


### Contributors 

|[marak](https://github.com/marak) | (Marak Squires)  
|[cloudhead](https://github.com/cloudhead) | (Alexis Sellier)  
|[mmalecki](https://github.com/mmalecki) | (Maciej Małecki)  
|[nicoreed](https://github.com/nicoreed) | (Nico Reed)  
|[morganrallen](https://github.com/morganrallen) | (Morgan Allen)  
|[JustinCampbell](https://github.com/JustinCampbell) | (Justin Campbell)  
|[ded](https://github.com/ded) | (Dustin Diaz)  
