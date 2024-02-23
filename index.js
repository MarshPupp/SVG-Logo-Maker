const fs = require('fs');
const inquirer = require('inquirer');
const { triangle, circle, square } = require('./lib/shapes');

async function logoMaker() {
    function getUserInput() {
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
                choices: ['circle', 'triangle', 'square']
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
        this.text = '';
        this.textColor = '';
        this.shape = '';
        this.shapeColor = '';
    };

    generateSvgFile()

    // Write SVG content to file
    fs.writeFileSync('logo.svg', svgCon)
}

logoMaker();
