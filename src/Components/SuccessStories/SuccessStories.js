import React, { Component } from 'react';
import './SuccessStories.css';
import { SuccessStoriesText } from '../../TEXT';
import UserStory from '../UserStory/UserStory';

export class SuccessStories extends Component {
    render() {
        return (
            <div id="successStories">
                <h3>People who love Availy</h3>
                <ul>
                    {SuccessStoriesText.map(story => {
                        return (
                            <UserStory
                                id={story.id}
                                key={story.id}
                                story={story}
                            />
                        )
                    })}
                </ul>
            </div>
        )
    }
}

export default SuccessStories;