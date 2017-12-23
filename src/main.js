import React from 'react';
import ReactDOM from 'react-dom';
import MainTabWindow from './MainTabWindow';

document.addEventListener('DOMContentLoaded', function () {

    ReactDOM.render(
        React.createElement(MainTabWindow),
        document.getElementById('mount')
    );
});
