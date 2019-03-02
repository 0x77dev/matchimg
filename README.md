# Match
A Node.js library (or cli tool) to match something on image.
# Demo:
* Original Image:
![Original Image](findwaldo.jpg)
* Find this
![Find this](waldo.jpg)
* Output Window
![Output Image](screenshot0.png)
![Output Image cut](screenshot1.png)
# Usage:
* CLI :
```console
# install lib
$ npm i -g matchimg
# or yarn
# yarn global add matchimg
# then 
$ matchimg
Match> 
```
* Node.js: 
```javascript
// For exmaple:
const Match = require("matchimg");
// ASync Function that returns cv:
Match("findwaldo.jpg", "waldo.jpg").then((cv)=>{
    // Wait for key
    cv.waitKey();
    // And Exit
    process.exit(0);
});
```