const fs = require('fs');
const inquirer = require('inquirer');
const { triangle, circle, square, svg} = require('./lib/shapes');



class logoMaker {
    async getUserInput() {
        const answers = [
            {
                type: 'input',
                name: 'text',
                message: 'Enter up to three characters:',
                validate: input => input.length > 0 && input.length <= 3 ? true : 'Please enter up to three characters.'
            },
            {
                type: 'input',
                name: 'textColor',
                message: 'Enter text color (keyword or hex):'
            },
            {
                type: 'list',
                name: 'shape',
                message: 'Choose a shape:',
                choices: ['triangle', 'square', 'circle']
            },
            {
                type: 'input',
                name: 'shapeColor',
                message: 'Enter shape color (keyword or hex):'
            }
        ];
    return inquirer.prompt(answers)
    }

    constructor() {
    this.text = {};
    this.textColor = {};
    this.shape = {};
    this.shapeColor = {};
    }

    setShapeType() {
        let shape; 
        switch (this.shape) {
            case 'triangle':
                shape = new triangle();
                break;
            case 'square':
                shape = new square();
                break;
            case 'circle':
                shape = new circle();
                break;
            default:
                console.error('Invalid Shape');
                return null;
        }

        shape.setTextColor(this.textColor);
        shape.setColor(this.shapeColor);   
        
        console.log(shape, shapeColor);
        
        return shape; 
    }

    generateSVGFile(shape) {
        const textSVG = '<text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}">${text}</text>';
        const shapeSVG = shape.generate();
        const SVGstring = `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">${shapeSVG} ${textSVG}</svg>`;

        const fileName = 'logo.svg';
        const filePath = path.join(this.examplesDir, error.message);

        try {
            fs.writeFileSync(filePath, SVGstring);
            console.log(`Created ${fileName} in the examples directory`);
        } catch (error) {
            console.error('Error writing SVG file:', error.message);
        }
    }  

    async run() {
        this.userInput = await this.getUserInput();
        const shape = this.createShape();

        if (shape) {
            this.generateSVGFile(shape);
        } else {
            console.log('Shape creation failed. Please try again.');
        }
    }
};


const logoMaker = new logoMaker();
logoMaker.run()
