import React, { useState } from "react";
import { Toast } from "./Toast";
export const Toast = () => {
  const [notifications, setNotifications] = useState([1, 1, 2, 3]);

  return (
    <div>
      {notifications.map((notification) => {
        <Toast />;
      })}
    </div>
  );
};
