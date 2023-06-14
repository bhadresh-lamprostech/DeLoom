import {
  createCampaign,
  dashboard,
  logout,
  workspace,
  profile,
  withdraw,
} from "../assets";

export const navlinks = [
  {
    name: "dashboard",
    imgUrl: dashboard,
    link: "/home",
  },
  {
    name: "campaign",
    imgUrl: createCampaign,
    link: "/create-campaign",
  },
  {
    name: "workspace",
    imgUrl: workspace,
    link: "/workspace-page",
  },
  // {
  //   name: "withdraw",
  //   imgUrl: withdraw,
  //   link: "/",
  //   disabled: true,
  // },
  // {
  //   name: "profile",
  //   imgUrl: profile,
  //   link: "/profile-page",
  // },
  // {
  //   name: "logout",
  //   imgUrl: logout,
  //   link: "/",
  //   disabled: true,
  // },
];
