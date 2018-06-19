let app = new PIXI.Application(800, 800, { antialias: true, backgroundColor: 0xF3F3F3 });
document.body.appendChild(app.view);



// --------------------------------------------------------------------------------------
/** 
 * KlElement Class
*/
class KlElement extends PIXI.Container {
  constructor(imageUrl) {
    super();

    const svg = '<?xml version="1.0" encoding="UTF-8"?><svg width="280px" height="316px" viewBox="0 0 280 316" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><title>Combined Shape</title><desc>Created with Sketch.</desc><defs></defs><g id="Welcome" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="Desktop" transform="translate(-677.000000, -426.000000)" fill="#FFFFFF" fill-rule="nonzero"><g id="Shapes" transform="translate(68.000000, 362.000000)"><g id="Group-2-Copy-3" transform="translate(749.000000, 222.000000) rotate(-360.000000) translate(-749.000000, -222.000000) translate(609.000000, 64.000000)"><path d="M280,140.681634 L280,259.049617 C280,290.470261 254.617866,316 223.235394,316 L57.0852348,316 C25.7027631,316 0.320628677,290.470261 0.320628677,259.049617 L0.320628677,146.691937 C-1.47171776,129.832466 4.29165675,112.786377 16.5764299,100.430164 L99.7913159,16.7313607 C121.970817,-5.57712025 157.990647,-5.57712025 180.170148,16.7313607 L262.871237,99.9133801 C273.724553,110.534489 280,125.156296 280,140.681634 Z" id="Combined-Shape"></path></g></g></g></g></svg>';
    const texture = PIXI.Texture.fromImage('data:image/svg+xml;charset=utf8,' + svg);
    const image = PIXI.Sprite.fromImage(imageUrl);
    
    let shapeSize = 200;
    
    this._image = new PIXI.Container();
    this._maskShape = new PIXI.Sprite(texture);
    
    // set shape dimensions
    this._maskShape.width = shapeSize;
    this._maskShape.height = shapeSize;
    this._maskShape.x = shapeSize / 2;
    this._maskShape.y = shapeSize / 2;
    this._maskShape.anchor.set(0.5);

    // set image dimensions
    // TODO: set ratio dimensions
    image.width = shapeSize;
    image.height = shapeSize;

    // Add the elements
    this._image.addChild(image);
    this.addChild(this._image);
    this.addChild(this._maskShape);
    
    // Set the mask
    this._image.mask = this._maskShape;

    // Set interactive behaviours
    this._maskShape.interactive = true;
  } 

  // ------------------------------------------------------------------------------------

  set rotation (rad) {
    this._maskShape.rotation = rad;
  }

  get rotation () {
    return this._maskShape.rotation = 0;
  }
}

// --------------------------------------------------------------------------------------


let spacer = 10;
let shapes = [
  new KlElement('https://upload.wikimedia.org/wikipedia/en/8/8d/Ath-2365.jpg'),
  new KlElement('https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Buttes-Chaumont_01.jpg/200px-Buttes-Chaumont_01.jpg'),
  new KlElement('https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Buttes-Chaumont_01.jpg/200px-Buttes-Chaumont_01.jpg'),
  new KlElement('https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Buttes-Chaumont_01.jpg/200px-Buttes-Chaumont_01.jpg')
];


shapes[0].rotation = 1.5708;
shapes[1].rotation = - 1.5708;
shapes[2].rotation = - 1.5708;
shapes[3].rotation = 1.5708;

shapes[0].x = 10;
shapes[0].y = 150;

shapes[1].x = (shapes[0].x + shapes[0].width + spacer) - 57 ;
shapes[1].y = shapes[0].y + 104;

shapes[2].x = shapes[1].x;
shapes[2].y = shapes[1].y - shapes[1].height - spacer;

shapes[3].x = shapes[1].x + 57;
shapes[3].y = shapes[1].y + shapes[1].height + spacer;

let shapeOver = function (shapePos) {
  for (let i = 0; i < shapes.length; i++) {
    if(i !== shapePos) {
      shapes[i].filters[0].blur = 50;
    }
  }  
};

let mouseOut = function () {
  for (let i = 0; i < shapes.length; i++) {
      shapes[i].filters[0].blur = 0;
  }  
};

for (let i = 0; i < shapes.length; i++) {
  shapes[i].interactive = true;
  shapes[i].filters = [new PIXI.filters.BlurFilter(0, 20)];
  
  shapes[i].mouseover = function (mouseData) {
    shapeOver(i);
  };
  
  shapes[i].mouseout = mouseOut;
  
  app.stage.addChild(shapes[i]);
}

let drawStage = function() {
  console.log(arguments);
};


    // shapes[0].filters = [blurFilter];
    // shapes[2].filters = [blurFilter];
    // shapes[3].filters = [blurFilter];











// var bg = PIXI.Sprite.fromImage('https://s3-media1.fl.yelpcdn.com/bphoto/FelL8leIefz2vfLVJFgVqQ/348s.jpg');

// bg.anchor.set(0);

// bg.x = 0;
// bg.y = 0;
// bg.width = 300;
// bg.height = 300;



// var container = new PIXI.Container();
// app.stage.addChild(container);
// container.addChild(bg);

// let svg = '<?xml version="1.0" encoding="UTF-8"?><svg width="280px" height="316px" viewBox="0 0 280 316" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><title>Combined Shape</title><desc>Created with Sketch.</desc><defs></defs><g id="Welcome" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="Desktop" transform="translate(-677.000000, -426.000000)" fill="#FFFFFF" fill-rule="nonzero"><g id="Shapes" transform="translate(68.000000, 362.000000)"><g id="Group-2-Copy-3" transform="translate(749.000000, 222.000000) rotate(-360.000000) translate(-749.000000, -222.000000) translate(609.000000, 64.000000)"><path d="M280,140.681634 L280,259.049617 C280,290.470261 254.617866,316 223.235394,316 L57.0852348,316 C25.7027631,316 0.320628677,290.470261 0.320628677,259.049617 L0.320628677,146.691937 C-1.47171776,129.832466 4.29165675,112.786377 16.5764299,100.430164 L99.7913159,16.7313607 C121.970817,-5.57712025 157.990647,-5.57712025 180.170148,16.7313607 L262.871237,99.9133801 C273.724553,110.534489 280,125.156296 280,140.681634 Z" id="Combined-Shape"></path></g></g></g></g></svg>';
// let texture = PIXI.Texture.fromImage('data:image/svg+xml;charset=utf8,' + svg);
// var bunny = new PIXI.Sprite(texture);
// bunny.width = 200;
// bunny.height = 200;
// bunny.x = 150;
// bunny.y = 150;
// bunny.anchor.set(0.5);
// bunny.rotation = 1.5708;

// app.stage.addChild(bunny);
// container.mask = bunny;
// container.interactive = true;

// container.mouseover = function(mouseData) {
//   blurFilter1.blur = 5;
// }
// container.mouseout = function(mouseData) {
//   blurFilter1.blur = 0;
// }

// /*
// app.ticker.add(function() {
//     let amount = 0.25;
//     //bunny.rotation += 0.01;
//     if(blurFilter1.blur < 7 || blurFilter1.blur < 0) {
//       blurFilter1.blur += amount;  
//     } else {
//       blurFilter1.blur = 0;            
//     }
    
// });
// */


// var blurFilter1 = new PIXI.filters.BlurFilter();
// blurFilter1.blur = 0;
// container.filters = [blurFilter1];

