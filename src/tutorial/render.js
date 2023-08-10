import React from 'react';
import ReactDOM from 'react-dom';

const renderApp = (AppComponent) => {
  ReactDOM.render(
    <React.StrictMode>
      <AppComponent />
    </React.StrictMode>,
    document.getElementById('root')
  );
};

export default renderApp;
