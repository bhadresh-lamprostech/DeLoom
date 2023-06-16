// import React from "react";
// import "../styles/notificationPage/NotificationMainPage.css";

// function NotificationMainPage() {
//   return (
//     <>
//       <div className="NotificationPageMainClass">
//         <div className="Notification_heading_class">
//           <h3 className="NotificationPageMainTitle text-white mb-2">
//             Notifications
//           </h3>
//           <hr />
//         </div>

//         <div className="NotificationsList_main">
//           <div className="NotificationsList">
//             <h3 className="Notification_title">Title</h3>
//             <h5 className="Notification_description">
//               Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
//               commodi laborum, sint quo minima voluptatum consectetur id porro
//               repudiandae at nemo ex expedita ipsam non dignissimos tenetur!
//               Laboriosam, vero inventore!
//             </h5>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default NotificationMainPage;

import React from "react";
import "../styles/notificationPage/NotificationMainPage.css";

function NotificationMainPage() {
  // Array of notification objects
  const notifications = [
    {
      title: "Notification 1",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores commodi laborum, sint quo minima voluptatum consectetur id porro repudiandae at nemo ex expedita ipsam non dignissimos tenetur! Laboriosam, vero inventore!",
    },
    {
      title: "Notification 2",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores commodi laborum, sint quo minima voluptatum consectetur id porro repudiandae at nemo ex expedita ipsam non dignissimos tenetur! Laboriosam, vero inventore!",
    },
    {
      title: "Notification 3",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores commodi laborum, sint quo minima voluptatum consectetur id porro repudiandae at nemo ex expedita ipsam non dignissimos tenetur! Laboriosam, vero inventore!",
    },
  ];

  return (
    <>
      <div className="NotificationPageMainClass">
        <div className="Notification_heading_class">
          <h3 className="NotificationPageMainTitle text-white mb-2">
            Notifications
          </h3>
          <hr />
        </div>

        <div className="NotificationsList_main">
          {notifications.map((notification, index) => (
            <div className="NotificationsList" key={index}>
              <h3 className="Notification_title">{notification.title}</h3>
              <h5 className="Notification_description">
                {notification.description}
              </h5>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default NotificationMainPage;
