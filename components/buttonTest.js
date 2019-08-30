import React from 'react';
import { Button } from 'react-native';

class GeneralButton extends React.Component {
  render() {
    return (
      <Button
        className="GeneralButton"
        type="submit"
        title="words"
      >
        {this.props.text}
      </Button>
    );
  }
}

export default GeneralButton;
