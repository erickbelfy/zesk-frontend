/* istanbul ignore file */
/*eslint-disable */
import React from 'react';

class ErrorComponent extends React.Component {
    componentDidCatch(error, info) {
        console.log('caught error');
        console.log(error);
        console.log(info);
    }
}