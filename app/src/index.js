import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const data = [
    {
        name: 'Jeremy Brady',
        email: 'jeremy.brady702@gmail.com',
        role: 'TL',
        id: 1
    },
    {
        name: 'Benita',
        email: 'Benita@nomail.com',
        role: 'student',
        id: 2
    },
    {
        name: 'Brad',
        email: 'Brad@nomail.com',
        role: 'student',
        id: 3
    },
    {
        name: 'Ian',
        email: 'Ian@nomail.com',
        role: 'student',
        id: 4
    },
    {
        name: 'Julie',
        email: 'Julie@nomail.com',
        role: 'student',
        id: 5
    },
    {
        name: 'Nick',
        email: 'Nick@nomail.com',
        role: 'student',
        id: 6
    },
    {
        name: 'Rebecca',
        email: 'Rebecca@nomail.com',
        role: 'student',
        id: 7
    },
    {
        name: 'Zach',
        email: 'Zach@nomail.com',
        role: 'student',
        id: 8
    }
    
]


ReactDOM.render(<App members={data} />, document.getElementById('root'));


