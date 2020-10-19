import {
  faComments,
  faPlus,
  faShoppingCart,
  faThList,
  faUserFriends,
} from "@fortawesome/free-solid-svg-icons";

export const buttonList = [
  {
    id: "user-order",
    icon: faShoppingCart,
    title: "Order",
    name: "user",
  },
  {
    id: "user-service-list",
    icon: faThList,
    title: "Service list",
    name: "user",
  },
  {
    id: "user-review",
    icon: faComments,
    title: "Review",
    name: "user",
  },
  {
    id: "admin-service-list",
    icon: faThList,
    title: "Service list",
    name: "admin",
  },
  {
    id: "admin-add-service",
    icon: faPlus,
    title: "Add Service",
    name: "admin",
  },
  {
    id: "admin-make-admin",
    icon: faUserFriends,
    title: "make admin",
    name: "admin",
  },
];
