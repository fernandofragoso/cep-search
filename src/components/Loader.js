import React from 'react';

function Loader(Component) {
  return function LoaderComponent({ isLoading, ...props }) {
    if (!isLoading) return (<Component {...props} />);
    return (<p>Loading</p>);
  }
}

export default Loader;