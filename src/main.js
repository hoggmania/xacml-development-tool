import React from 'react';
import ReactDOM from 'react-dom';
import app from './app';
import main_window from './main_window';
//import tree_main from './tree_main';
//import tabview from './tabview';
//import todo from './Todo';
//import select from './select'
//import sortabletree from './sortable_tree';
import policy_window from './policy_window';
//import policy from './policy_management_window'
//import test from './test';
//import modify from './modify';
//import Template_1 from './Template_1';
//import policy_view from './Policy_viewing_window';







document.addEventListener('DOMContentLoaded', function() {

    ReactDOM.render(
        React.createElement(main_window),
        document.getElementById('mount')
    );
});
