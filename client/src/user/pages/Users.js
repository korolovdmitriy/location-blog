import React from "react";
import UsersList from "../components/UsersList";

function Users() {
  const USERS = [
    {
      id: "u1",
      name: "Dmytro",
      image:
        "https://akns-images.eonline.com/eol_images/Entire_Site/20221115/rs_1200x1200-221215142043-avatar-5.jpg",
      places: 3,
    },
  ];

  return <UsersList items={USERS} />;
}

export default Users;
