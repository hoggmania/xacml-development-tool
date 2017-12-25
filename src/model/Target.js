import React from 'react';
import TreeNode from './TreeNode';
import Attributes from './Attributes';

class Target extends TreeNode {
    constructor(name, type,text) {
        super(name, type,text);
        this._childElements = new ArrayList(TreeNode);
        this._attributes=new Attributes();
        this._name = name;
        this._type = type;
        this._text = text;
    }


    get name() {
        return this._name;
    }

    set name(Target) {
        this._name = Target;
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

    render() {

        return (
            '(${this.name}, ${this.type},${this.childElements},${this.text})'
        )
    }
}

export default Target;

