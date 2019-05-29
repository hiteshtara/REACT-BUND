import React, { Component } from 'react';
export class TodoBanner extends Component {
  render = () => (
    <h4>
      {this.props.name}'s to dolist; (
      {this.props.tasks.filter(t => !t.done).length}items to do )
    </h4>
  );
}
