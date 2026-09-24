import type { ErrorInfo } from 'react';
import { Component } from 'react';
import BrokenPage from './brokenPageUI';

interface PropsType {
  children: React.ReactNode;
}

interface StateType {
  hasError: boolean;
}

class ErrorBoundary extends Component<PropsType, StateType> {
  constructor(props: PropsType) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('ErrorBoundary caught an error: ', error, errorInfo);
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return <BrokenPage />;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
