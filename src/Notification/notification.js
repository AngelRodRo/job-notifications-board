import React from 'react';
import './notification.css';
const notification = (props) => {
    return (
        <div className="Notification">
            <p>{props.content}</p>
            <p className="Notification__date"> {props.date}</p>
            <a className="Notification__link" href={props.link} target="_blank">More info</a>
        </div>
    )
}

export default notification;