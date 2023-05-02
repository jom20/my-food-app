import React from 'react';

class TextInput extends React.Component {
  render() {
    return (
      <div>
        <input type="text" placeholder="Enter text here" />
        <button>Submit</button>
      </div>
    );
  }
}

export default TextInput;

