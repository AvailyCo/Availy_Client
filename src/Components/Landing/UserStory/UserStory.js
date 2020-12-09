import React, { Component } from 'react';
import './UserStory.css';

export class UserStory extends Component {
  render() {
    const story = this.props.story;

    return (
      <li className="userStory">
        <img
          src={story.imgURL}
          className="successImg"
          alt="user story pic"
        />
        <blockquote>{story.desc}</blockquote>
        <cite>{story.name}</cite>
      </li>
    )
  }
}

export default UserStory;