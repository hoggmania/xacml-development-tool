import React from 'react';

class Attributes {

    constructor(PolicyId, RuleCombiningAlgId, Version, MatchId, DataType,attributeId, category, dataType,mustBePresent,Effect,RuleId,FunctionId) {

        this._PolicyId = PolicyId;
        this._RuleCombiningAlgId = RuleCombiningAlgId;
        this._Version = Version;
        this._MatchId = MatchId;
        this._DataType = DataType;
        this._attributeId = attributeId;
        this._category = category;
        this._dataType = dataType;
        this._mustBePresent = mustBePresent;
        this._Effect = Effect;
        this._RuleId = RuleId;
        this._FunctionId = FunctionId;
    }
    get PolicyId() {
        return this._PolicyId;
    }

    set PolicyId(value) {
        this._PolicyId = value;
    }

    get RuleCombiningAlgId() {
        return this._RuleCombiningAlgId;
    }

    set RuleCombiningAlgId(value) {
        this._RuleCombiningAlgId = value;
    }

    get Version() {
        return this._Version;
    }

    set Version(value) {
        this._Version = value;
    }

    get MatchId() {
        return this._MatchId;
    }

    set MatchId(value) {
        this._MatchId = value;
    }

    get DataType() {
        return this._DataType;
    }

    set DataType(value) {
        this._DataType = value;
    }


    get attributeId() {
        return this._attributeId;
    }

    set attributeId(value) {
        this._attributeId = value;
    }

    get category() {
        return this._category;
    }

    set category(value) {
        this._category = value;
    }

    get dataType() {
        return this._dataType;
    }

    set dataType(value) {
        this._dataType = value;
    }

    get mustBePresent() {
        return this._mustBePresent;
    }

    set mustBePresent(value) {
        this._mustBePresent = value;
    }

    get Effect() {
        return this._Effect;
    }

    set Effect(value) {
        this._Effect = value;
    }

    get RuleId() {
        return this._RuleId;
    }

    set RuleId(value) {
        this._RuleId = value;
    }

    get FunctionId() {
        return this._FunctionId;
    }

    set FunctionId(value) {
        this._FunctionId = value;
    }



    render() {
        return (
            '(${this.attributeId}, ${this.category}, ${this.dataType}, ${this.mustBePresent})'
        )
    }
}

export default Attributes;

