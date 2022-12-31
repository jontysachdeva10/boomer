import React from 'react';
import ReactDOM from 'react-dom';

import { Button } from '@boomer/react';
import '@boomer/scss/lib/Button.css';

ReactDOM.render(
    <Button className='bmr-button-container' label='Example Button' />,
    document.querySelector('#root')
)