import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './TypedText.css';

class TypedText extends Component {

  constructor(props) {
    super(props);
    this.state = { textToShow: this.props.text, shownText: '' };
  }

  componentWillMount() {
    this.timer = setInterval(this.type.bind(this), 50);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
    if (this.props.renderOnce) {
      this.setState({ shownText: this.state.textToShow });
    }
  }

  type() {
    if (this.state.shownText.length <= this.state.textToShow.length - 1) {
      this.setState({
        shownText: this.state.shownText
        + this.state.textToShow[this.state.shownText.length],
      });
    } else {
      clearInterval(this.timer);
    }
  }

  render() {
    return (
      <div>
        <h1 className="typedText">{this.state.shownText}</h1>
      </div>
    );
  }
}

TypedText.defaultProps = {
  renderOnce: false,
};

TypedText.propTypes = {
  renderOnce: PropTypes.bool,
  text: PropTypes.oneOf(PropTypes.string).isRequired,
};

export default TypedText;
