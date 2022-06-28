const container = document.querySelector('.painting');
const clearButton = document.querySelector('.clear');
const saveButton = document.querySelector('.save');
const colorMenu = document.querySelector('.color-menu')
const currentColorBar = document.querySelector('#currentColor');
const painting = document.querySelector('.painting');
const loadButton = document.querySelector('.load')
const floodButton = document.querySelector('.flood')
const h1 = document.querySelector('h1');


//color selection
let arrayOfColors = ['lightcoral','lightgreen','lightblue', 'purple', 'yellow', 'lightsalmon', 'white','lightskyblue', 'black', 'brown', 'DarkGoldenRod', 'DimGrey', 'DarkSlateBlue', 'Gold', 'Maroon', 'MistyRose'];


function createPixelGrid() {
   let currentColor = 'white'
   //color menu ///
    for (let i = 0; i < arrayOfColors.length; i++) {
            const color = document.createElement('button');
            //color button properites
            color.className = 'colors';
            color.id = arrayOfColors[i];
            color.style.backgroundColor = arrayOfColors[i];
            colorMenu.append(color);
            //on click ....
            color.addEventListener('click', () => {
                currentColor = arrayOfColors[i];
                currentColorBar.style.backgroundColor = arrayOfColors[i];
                h1.style.color = currentColor;
            
        })
       //highlight
        color.addEventListener('mouseenter', () => {
        color.style.borderColor = 'white'
            
                })
        color.addEventListener('mouseleave', () => {
                    color.style.borderColor = "grey"
                })
   }  
    //////////////////////////////////////////////////////
   
   let press = false;
    //pixel grid ...///
        for (let i = 1; i <= 360; i++) {
            //create pixel and append
            const pixel = document.createElement('button');
            container.append(pixel);
            pixel.className = 'pixel';
            pixel.id = i;
            pixel.style.backgroundColor = 'white'
           

                //draw and brush
                pixel.addEventListener('mousedown', (e) => {
                    press = true;
                    e.target.style.backgroundColor = currentColor;
                })
                pixel.addEventListener('mouseover', (e) => {
                    if(press) {
                    e.target.style.backgroundColor = currentColor;
                    }
                })
                pixel.addEventListener('mouseup', (e) => {
                    press = false;
                } )
                //highlight
                pixel.addEventListener('mouseenter', () => {
                    pixel.style.borderColor = 'white';
                })
                pixel.addEventListener('mouseleave', () => {
                    pixel.style.borderColor = 'grey';
                })
                //clear
                clearButton.addEventListener('click', () => {
                    pixel.style.backgroundColor = 'white'
                })            
                //flood
                floodButton.addEventListener('click', (e) => {
                    pixel.style.backgroundColor = currentColor;
                })
        }
        const pixel = document.querySelectorAll('.pixel');
    //////////////////////////////////////////////////////
     

    //clear button .../
    clearButton.addEventListener('mouseenter', () => {
            clearButton.style.backgroundColor = 'red'
            clearButton.style.borderColor = 'white';
        
    })
    clearButton.addEventListener('mouseleave', () => {
        clearButton.style.backgroundColor = "whitesmoke"
        clearButton.style.borderColor = 'grey';
    })
    //////////////////////////////////////////////////////

    //save button ...
     saveButton.addEventListener('click', () => {
        let pixelColors = [];
        let nameOfSave = prompt('Save Successful! Please enter your save name:')
            for (let i = 0; i < pixel.length; i++) {
                let pixCSS = window.getComputedStyle(pixel[i], null);
                let backgroundColors = pixCSS.getPropertyValue('background-color')
                pixelColors.push(backgroundColors);
            }
       window.localStorage.setItem(nameOfSave, JSON.stringify(pixelColors))
 })
        saveButton.addEventListener('mouseenter', () => {
        saveButton.style.backgroundColor = 'lightblue'
        saveButton.style.borderColor = 'white';
    
        })
        saveButton.addEventListener('mouseleave', () => {
            saveButton.style.backgroundColor = "whitesmoke"
            saveButton.style.borderColor = 'grey';
        })
    //////////////////////////////////////////////////////

    //load button ...
    loadButton.addEventListener('click', () => {
        let nameOfFile = prompt('Please enter a save name to load:');
        let loadedSave = JSON.parse(window.localStorage.getItem(nameOfFile));
        for (let i = 0; i < pixel.length; i++) {
            pixel[i].style.backgroundColor = loadedSave[i];
        }
    })
        loadButton.addEventListener('mouseenter', () => {
        loadButton.style.backgroundColor = 'lightgreen'
        loadButton.style.borderColor = 'white';
        
            })
        loadButton.addEventListener('mouseleave', () => {
                loadButton.style.backgroundColor = "whitesmoke"
                loadButton.style.borderColor = 'grey';
            })
    //////////////////////////////////////////////////////
  
   
    //flood button ...
    floodButton.addEventListener('mouseenter', () => {
        floodButton.style.backgroundColor = 'yellow'
        floodButton.style.borderColor = 'white'
            })
        floodButton.addEventListener('mouseleave', () => {
            floodButton.style.backgroundColor = "whitesmoke"
            floodButton.style.borderColor = 'grey'
            })

    
    
s
}

createPixelGrid();

    
 







