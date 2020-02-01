import React, { ComponentType } from 'react';

interface State {
  Component: ComponentType | null;
}

export default function makeAsync(loader: Promise<ComponentType>) {
  return class AsyncComponent extends React.Component<any, State> {
    state: State = { Component: null };

    async componentDidMount() {
      loader.then(Component => this.setState({ Component }));
    }

    render() {
      return this.state.Component ? (
        <this.state.Component {...this.props} />
      ) : null;
    }
  };
}
