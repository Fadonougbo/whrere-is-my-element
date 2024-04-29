**This library shows the position of an element on the page with colors**

# Installation

### using npm 

```bash
    npm i @fadonougbo/wime
```
Then

```js
    import {Wime} from "@fadonougbo/wime"

    Wime.showElements()

```
### using cdn
```html 

    <script src="https://cdn.jsdelivr.net/gh/Fadonougbo/wime@master/build/src/index.min.js" type="module" defer  ></script>
```

# Usage

Add `wime` class to element yo want to visually detect

```html
    <p>
        Lorem ipsum dolor  adipisicing elit. Quasi at <span class="wime" >voluptates</span> magni quia 
   </p>
```
Elements with the `wine` class will have a `box shadow` with a random color

![demo](https://raw.githubusercontent.com/Fadonougbo/github_images/master/demo.png)

You can set the colors to use
```js
    import {Wime} from "@fadonougbo/wime"

    Wime.showElements(["black","#45ff87","tomato","rgb(255,0,255)"])
```


