import React from 'react';

interface Props {
  name: string;
  isActive: boolean;
}

interface State {
  count: number;
}

class Sample extends React.Component<
  Props,
  State
> {
  state = {};

  handleClick = () => {};

  render() {
    const {} = this.state;
    const {} = this.props;

    return (
      <div>
        <p>Hello {}</p>
        <p>
          You've clicked {} times.
          <button onClick={this.handleClick}>
            +
          </button>
        </p>
      </div>
    );
  }
}