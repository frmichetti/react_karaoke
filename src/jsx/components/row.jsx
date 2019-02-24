import React from 'react';

export default props => (
    <div className={'row'}>
      { React.Children.map(props.children, chield => React.cloneElement(chield, {...props})) }
    </div>
)