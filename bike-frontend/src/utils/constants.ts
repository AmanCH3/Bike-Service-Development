import dashboard from "../assets/dashboard.png";
import order from "../assets/order.png";

export interface Order {
  id: string;
  date: string;
  customer: string;
  amount: string;
  payment: string;
  status: string;
}

export const orders: Order[] = [
  {
    id: "#Inv0561",
    date: "18 Nov 2023",
    customer: "Esther Howard",
    amount: "$456",
    payment: "Bank",
    status: "Processing",
  },
  {
    id: "#Inv0562",
    date: "18 Nov 2023",
    customer: "Robert Fox",
    amount: "$257",
    payment: "Cash",
    status: "Processing",
  },
  {
    id: "#Inv0563",
    date: "18 Nov 2023",
    customer: "Cameron Williamson",
    amount: "$89",
    payment: "Cash",
    status: "Delivered",
  },
  {
    id: "#Inv0564",
    date: "18 Nov 2023",
    customer: "Jacob Jones",
    amount: "$453",
    payment: "Card",
    status: "Delivered",
  },
  {
    id: "#Inv0565",
    date: "18 Nov 2023",
    customer: "Bessie Cooper",
    amount: "$121",
    payment: "Bank",
    status: "Cancel",
  },
  {
    id: "#Inv0566",
    date: "18 Nov 2023",
    customer: "Floyd Miles",
    amount: "$145",
    payment: "Bank",
    status: "Delivered",
  },
  {
    id: "#Inv0567",
    date: "18 Nov 2023",
    customer: "Annette Black",
    amount: "$155",
    payment: "Bank",
    status: "Delivered",
  },
  {
    id: "#Inv0568",
    date: "18 Nov 2023",
    customer: "Darlene Robertson",
    amount: "$145",
    payment: "Bank",
    status: "Delivered",
  },
  {
    id: "#Inv0569",
    date: "18 Nov 2023",
    customer: "Marvin McKinney",
    amount: "$125",
    payment: "Bank",
    status: "Delivered",
  },
  {
    id: "#Inv0570",
    date: "18 Nov 2023",
    customer: "Floyd Miles",
    amount: "$145",
    payment: "Bank",
    status: "Delivered",
  },
];

/*
  Menu items (navbar)
  =====================================
*/
export const navItems = [
  {
    name: "Dashboard",
    path: "/dashboard",
    icon: dashboard,
    activeClass: "text-muted-foreground hover:bg-muted",
  },
  {
    name: "Order",
    path: "/dashboard/order",
    icon: order,
    activeClass: "text-primary bg-primary-foreground",
  },
  {
    name: "Vehicle",
    path: "/dashboard/vehicle",
    icon: "https://t3.ftcdn.net/jpg/01/71/13/24/360_F_171132449_uK0OO5XHrjjaqx5JUbJOIoCC3GZP84Mt.jpg",
    activeClass: "text-muted-foreground hover:bg-muted",
  },
  {
    name: "Service",
    path: "/dashboard/service",
    icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLPBeEdTkyeK0usr_dTXr-6x62M3GcJy7KFA&s",
    activeClass: "text-muted-foreground hover:bg-muted",
  },
  {
    name: "Setting",
    path: "/dashboard/setting",
    icon: "https://as1.ftcdn.net/v2/jpg/01/85/89/04/1000_F_185890463_CWEQL0eZnPvjJhLxOk9B57qh4sk3bnrd.jpg",
    activeClass: "text-muted-foreground hover:bg-muted blue",
  },
  {
    name: "Log out",
    path: "/dashboard/logout",
    icon: "https://cdn0.iconfinder.com/data/icons/glyph-2-ui-part-1-of-4/100/pack02-05-512.png",
    activeClass: "text-muted-foreground hover:bg-muted",
  },
];
