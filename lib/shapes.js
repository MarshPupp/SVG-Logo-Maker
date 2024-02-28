
class shape {
    constructor() {
        this.color = '';
        this.textColor = '';
    }

    setColor(color) {
        this.color = color;
    }

    setTextColor(textColor) {
        this.textColor = textColor;
        }
    
    generate() {
        throw new Error('Method "generate" must be implemented by subclasses');
    }
}

    class triangle extends shape {
        generate() {
            return '<polygon points="150,0 50,150 250,150" fill="${this.color}" stroke="${this.textColor}" />';
        }
    }

    class square extends shape {
        generate() {
            return '<rect x="50" y="50" width"200" height"200" fill="${this.color}" stroke="${this.textColor}" />';
        }
    } 

    class circle extends shape {
        generate() {
            return '<circle cx="150" cy="100" r="80" fill="${this.color}" stroke="${this.textColor}" />';
        }
    }
    
    module.exports = {triangle, square, circle};
