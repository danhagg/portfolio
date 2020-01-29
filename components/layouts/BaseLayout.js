import React from 'react';

// Function not a class
// props must be obtained a different way... 
// can be passed as param as no 'this' context

const BaseLayout = (props) => {
    return (
        <React.Fragment>
        {props.children}
        </React.Fragment>
    )
}

export default BaseLayout;