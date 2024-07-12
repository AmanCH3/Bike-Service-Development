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
