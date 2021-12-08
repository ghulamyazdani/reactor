import { Component } from "react";
import { Link } from "react-router-dom"; // eslint-disable-line

class ErrorBoundary extends Component {
  state = { hasError: false, redirect: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error) {
    console.log(error);
    setTimeout(() => this.setState({ redirect: false }), 5000);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-boundary">
          <h2>Something went wrong.</h2>
          <Link to="/">Go back to home</Link>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
