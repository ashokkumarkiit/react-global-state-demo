import React from 'react';

const StoreContext = React.createContext();
const createStore = function (WrappedComponent) {
  return ( class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        get: key => this.state[key],
        set: (key, value) => {
          const state = this.state;
          state[key] = value;
          this.setState(state);
        },
        remove: (key) => {
          const state = this.state;
          delete state[key];
          this.setState(state);
        },
      };
    }

    render() {
      return (
        <StoreContext.Provider value={this.state}>
          <WrappedComponent {...this.props} />
        </StoreContext.Provider>
      );
    }
  });
};
const withStore = function (WrappedComponent) {
  return (class extends React.Component {
    render() {
      return (
        <StoreContext.Consumer>
          {context => <WrappedComponent store={context} {...this.props} />}
        </StoreContext.Consumer>
      );
    }
  });
}
export { createStore, withStore };
