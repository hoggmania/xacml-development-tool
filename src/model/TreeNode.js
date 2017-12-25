import React from 'react';
import Attributes from './Attributes.js';

class TreeNode {
    constructor(name, type,text) {

        this._text=text;
        this._childElements = new ArrayList(TreeNode);
        this._attributes=new Attributes();
        this._name = name;
        this._type = type;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

    get type() {
        return this._type;
    }

    set type(value) {
        this._type = value;
    }

    get text() {
        return this._text;
    }

    set text(value) {
        this._text = value;
    }

    get childElements() {
        return this._childElements;
    }

    set childElements(value) {
        this._childElements = value;
    }

    get attributes() {
        return this._attributes;
    }

    set attributes(value) {
        this._attributes = value;
    }



    // addelement(node){
    //     this.element.push(node);
    // }

    render() {
        return (
            '(${this.name}, ${this.type},${this.text, ${this.childElements}, ${this.attributes}, })'
        )
    }
}

export default TreeNode;

