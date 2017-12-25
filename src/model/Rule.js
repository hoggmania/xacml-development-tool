import React from 'react';
import TreeNode from './TreeNode';
import Attributes from './Attributes';
import Target from './Target';
import Obligation from './Obligation';

class Rule extends TreeNode {
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

    canAccept(node){
        return Target | Condition | Obligation
    }

    addTarget(node){
        this.target.push(node);
    }

    addCondition(node){
        this.condition.push(node);
    }

    addObligation(node){
        this.obligation.push(node);
    }

}

export default Rule;

