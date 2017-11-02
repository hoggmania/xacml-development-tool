import React from 'react';
import ReactDOM from 'react-dom';

import main_window from './containers/main_window';
//import tree_main from './tree_main';
//import tabview from './tabview';
//import todo from './Todo';
//import select from './select'
import sortabletree from './containers/sortable_tree';
//import policy_window from './policy_window';
//import policy from './policy_management_window'
//import test from './test';
//import modify from './modify';
//import Template_1 from './Template_1';
//import policy_view from './Policy_viewing_window';
// import app2 from './app2';
// import newa from './test_axios';
// import editAttributeDetails from './editAttributeDetails';
//import table from '.table';
//import reactdnd from './reactdnd';
import index1 from './drag_drop/index';
import index2 from './dnd/index';
// import itemlister from './ItemLister';
// import App from './App';
import rest from './rest';
import welcome_window from './containers/welcome_window';
// import Abc from './Abc';
import MyComponent from './MyComponent2';
import tabs from './TABS';

document.addEventListener('DOMContentLoaded', function () {

    ReactDOM.render(
        React.createElement(tabs),
        document.getElementById('mount')
    );
});
