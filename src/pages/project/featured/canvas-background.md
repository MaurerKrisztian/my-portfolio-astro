---
layout: ../../../layouts/project.astro
title: Canvas shapes background
client: Self
publishDate: 2020-03-02 00:00:00
img: /assets/project/sahpesprocejtbackground.webp
description: |
  The goal of this project is to make a cool background with randomized shapes and to be customizable.
tags:
  - HTML Canvas
  - UI
  - Animation
---

The goal of this project is to make a cool background with randomized shapes and to be customizable.

Demo: https://canvas-shapes-background.netlify.app/

Code: https://github.com/MaurerKrisztian/CanvasShapesBackground


Simple example usage:

![codepan image](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/14pnxy4o6w6jt9e35bpv.gif)
 https://codepen.io/maurerkrisztian/pen/rNdGerb

```html
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <script type='text/javascript' src="https://canvas-shapes-background.netlify.app/bundle.js"></script>
</head>
<body>
<canvas id="myCanvas"></canvas>
<script>
    createShapeCanvas("myCanvas", {
        modelNumbers: 11,
        colors: ['blue', 'red', 'green', 'yellow'],
        backgroundColor: 'black', //'none',
        enabledModels: ['Triangle', 'Circle', 'Rect'],
        minSpeed: 11,
        maxSpeed: 11,
        lineWidth: 3,
        sizeMultiplier: 2,
        startPosition: 'random' //  'middle' | 'random',
        isFullScreen: true,
    })
</script>
</body>
</html>
```
I added a configurator with the demo: https://canvas-shapes-background.netlify.app/
- Easily test different configs and copy the configured settings.
 

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/pmy22nxbd7k5ffjatfs9.gif)




"createShapeCanvas" has 2 arg
- canvas id
- config

# config

- startPosition:  'middle' | 'random' initial model position
- enabledModels: thies shapes will be generated randomly
- modelNumbers: generate this amount of models from "enabledModels" array
- colors: pisck random color from this array for shapes
- backgroundColor: canvas background color, can be "none"
- minSpeed: shape min speed
- maxSpeed: shape max speed
- lineWidth: shape border line width
- sizeMultiplier: multiply the generated size with this
- isFullScreen: fullscreen or element size



##  How I made it?
I used HTML Canvas.

I wanted to be easily extendable, so abstracted some thing:
####  Animator: 
- it is responsible for setup every frame and call the modell update()

### Model: 
- has 2 main responsibility: 
- draw() - draw the shape,
- update() 
  - howto behave based on the current x,y position and 
  - xd, dy aka where to want to move and how fast.
If you confused how dx, dy it works it basicly a vector.
it has a direction (this will be the model direction) and a length (this will be the model speed).
![vector](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/y7prvze366i4pe2gaw0o.png)
 

## Example model:

```typescript
export class CircleModel implements IModel {
    static MODEL_NAME = 'Circle'

    color: string;

    constructor(private x: number, private y: number, private dx: number, private dy: number, private radius: number, private lineWidth: number = Setup.CONFIG.lineWidth) {
        this.color = Utils.pickRandomFromArray<string>(Setup.CONFIG.colors)
    }

    draw(context: CanvasRenderingContext2D) {
        context.lineWidth = this.lineWidth;
        context.beginPath();
        context.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        context.strokeStyle = this.color;
        context.stroke();
        context.lineWidth = DEFAULT_LINE_WIDTH;
    }


    update(context: CanvasRenderingContext2D) {
        if (this.x > Context.canvasWidth - this.radius || this.x < 0 + this.radius) {
            this.dx = -this.dx;
        }
        if (this.y > Context.canvasHeight - this.radius || this.y < 0 + this.radius) {
            this.dy = -this.dy;
        }

        this.x = this.x + this.dx;
        this.y = this.y + this.dy;

        this.draw(context);
    }
}
```

I wanted to baunce of from the side of the canvas so 

Good to know where is the canvas side.

Coordinate system:
![Coordinate system](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/xm4ejtneabm0tqnm8z3d.png)
 
So x(0) the left min position and x(canvasWidth) the right side posion, similarly with y.

```typescript
        if (this.x > Context.canvasWidth - this.radius || this.x < 0 + this.radius) {
            this.dx = -this.dx;
        }
```
If the current position (center of the circle) greather than canvas width - radius than change the x direction

Similarly with y.


At the end we need to set the new position:
```typescript
this.x = this.x + this.dx;
this.y = this.y + this.dy;
```

I made 3 model: Cirle, Rect, Triangle. 

But you can add easily your model:
- create a model
- add to ModelFactory

```typescript
    private static createRandomModel() {
        const speed = Utils.generateRandom(Setup.CONFIG.minSpeed, Setup.CONFIG.maxSpeed)
        const randoModelName = Utils.pickRandomFromArray(Setup.CONFIG.enabledModels)
        switch (randoModelName) {
            case CircleModel.MODEL_NAME:
                return this.createRandomCircle(speed)
                break;
            case TriangleModel.MODEL_NAME:
                return this.createRandomTriangle(speed)
                break;
            case RectModel.MODEL_NAME:
                return this.createRandomRect(speed)
                break;
            default:
                throw new Error(`Model not found with name: ${randoModelName}`)
        }
    }
```

## Howto create importable script?

I just added the init function to the window so you can import the bundle script and call this function.

```
window.createShapeCanvas = createShapeCanvas
```

## Future plans:
- add more models
- add more config options
- create a react component and publish to npm

