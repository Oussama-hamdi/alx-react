import React from "react";
import "./Notifications.css";

const NotificationItem = ({ type, html, value }) => {
  return (
    <li data-notification-type={type} dangerouslySetInnerHTML={html}>
      {value}
    </li>
  );
};

export default NotificationItem;
