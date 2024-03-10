import React from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Navbar from "../component/Navbar";
import Sidebar from "../component/sidebar";
import Box from "@mui/material/Box";
import MUIDataTable from "mui-datatables";
import "../style.css";

const currentDate = new Date();
const currentMonth = currentDate.getMonth();
const currentYear = currentDate.getFullYear();

const orders = [
  {
    id: 1,
    customer: "Alice",
    product: "Book",
    deliveryDate: new Date(currentYear, currentMonth, 15),
  },
  {
    id: 2,
    customer: "Bob",
    product: "Laptop",
    deliveryDate: new Date(currentYear, currentMonth, 18),
  },
  {
    id: 3,
    customer: "Charlie",
    product: "Shoes",
    deliveryDate: new Date(currentYear, currentMonth, 20),
  },
  {
    id: 4,
    customer: "David",
    product: "Headphones",
    deliveryDate: new Date(currentYear, currentMonth, 22),
  },
  {
    id: 5,
    customer: "Eva",
    product: "Watch",
    deliveryDate: new Date(currentYear, currentMonth, 25),
  },
  {
    id: 6,
    customer: "Frank",
    product: "Camera",
    deliveryDate: new Date(currentYear, currentMonth, 28),
  },
  {
    id: 7,
    customer: "Frank",
    product: "Camera",
    deliveryDate: new Date(currentYear, currentMonth, 28),
  },
  {
    id: 8,
    customer: "Grace",
    product: "Phone",
    deliveryDate: new Date(currentYear, currentMonth, 20),
  },
  {
    id: 9,
    customer: "Henry",
    product: "Tablet",
    deliveryDate: new Date(currentYear, currentMonth, 20),
  },
  {
    id: 10,
    customer: "Isabel",
    product: "Earphones",
    deliveryDate: new Date(currentYear, currentMonth, 20),
  },
  {
    id: 11,
    customer: "Jack",
    product: "Smartwatch",
    deliveryDate: new Date(currentYear, currentMonth, 25),
  },
  {
    id: 12,
    customer: "Katherine",
    product: "Backpack",
    deliveryDate: new Date(currentYear, currentMonth, 25),
  },
  {
    id: 13,
    customer: "Leo",
    product: "Camera",
    deliveryDate: new Date(currentYear, currentMonth, 28),
  },
  {
    id: 14,
    customer: "Mia",
    product: "Printer",
    deliveryDate: new Date(currentYear, currentMonth, 28),
  },
];

const TileContent = ({ date, view }) => {
  if (view === "month") {
    const ordersByDate = orders.filter(
      (order) => order.deliveryDate.toDateString() === date.toDateString()
    );
    return (
      <div className="tile-content">
        {ordersByDate.length > 0 && <p>{ordersByDate.length} orders</p>}
      </div>
    );
  }
  return null;
};

const OrdersCalendarView = () => {
  const [date, setDate] = React.useState(new Date());

  const onChange = (date) => {
    setDate(date);
  };

  const columns = [
    {
      name: "id",
      label: "ID",
    },
    {
      name: "customer",
      label: "Customer",
    },
    {
      name: "product",
      label: "Product",
    },
  ];

  const ordersByDate = orders.filter(
    (order) => order.deliveryDate.toDateString() === date.toDateString()
  );

  const data = ordersByDate.map((order) => ({
    id: order.id,
    customer: order.customer,
    product: order.product,
  }));

  const options = {
    filter: true,
    search: false,
    selectableRows: "none",
    print: false,
    download: false,
    viewColumns: false,
    setTableProps: () => ({
        style: {
          minWidth: "95vh", // Set the minimum width
          minHeight: "100px", // Set the minimum height
        },
      }),
  };

  return (
    <>
      <div className="bgcolor">
        <Navbar />
        <Box height={70} />
        <Box sx={{ display: "flex" }}>
          <Sidebar />
          <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <div className="orders-calendar-view">
              <Calendar onChange={onChange} value={date} tileContent={TileContent} />
              <div className="orders-list-container">
                <h3>Orders for {date.toDateString()}</h3>
                <MUIDataTable  title={"Orders"} data={data} columns={columns} options={options} />
              </div>
            </div>
          </Box>
        </Box>
      </div>
    </>
  );
};

export default OrdersCalendarView;
