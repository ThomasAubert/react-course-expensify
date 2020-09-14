
// higher order component (HOC) 
// component that renders another component
// reuse code - render hijacking
// Prop manipulation - abstract state


import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
  <div>
    <h1>Info</h1>
    <p>The info is: {props.info} </p>
  </div>
);

const withAdminWarning = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAdmin && <p>This is private info.</p>}
      <WrappedComponent {...props}/>
    </div>
  );
};

const requireAuthentification = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAuth ? (
        <WrappedComponent {...props}/>) : (
        <p>You need to log in</p>)}
      </div>
  );
};

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentification(Info);
//ReactDOM.render(<AdminInfo isAdmin={true} info='coucou'/>, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuth={false} info='coucou'/>, document.getElementById('app'));