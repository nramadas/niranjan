import React, { ComponentType } from 'react';

interface State {
  Component: ComponentType | null;
}

export default function makeAsync(loader: Promise<ComponentType>) {
  return class AsyncComponent extends React.Component<any, State> {
    mounted: boolean = false;
    state: State = { Component: null };

    async componentDidMount() {
      this.mounted = true;
      loader.then(Component => this.mounted && this.setState({ Component }));
    }

    componentWillUnmount() {
      this.mounted = false;
    }

    render() {
      return this.state.Component ? (
        <this.state.Component {...this.props} />
      ) : null;
    }
  };
}
