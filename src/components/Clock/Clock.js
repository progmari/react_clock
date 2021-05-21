import React from 'react';
import PropTypes from 'prop-types';

export class Clock extends React.Component {
  state = {
    time: new Date(),
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({ time: new Date() });
      //  eslint-disable-next-line
      console.log(this.state.time.toLocaleTimeString());
    }, 1000);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.name !== this.props.name) {
      //  eslint-disable-next-line
      console.log(`The Clock was renamed from ${prevProps.name} to ${this.props.name}`)
    }
  }

  render() {
    return (
      <p>
        {`Current time: ${this.state.time.toLocaleTimeString()}`}
      </p>
    );
  }
}

Clock.propTypes = {
  name: PropTypes.string.isRequired,
};