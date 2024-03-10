import React, { useState } from "react";
import MUIDataTable from "mui-datatables";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  MenuItem,
  Select,
} from "@mui/material";
import Navbar from "../component/Navbar";
import Sidebar from "../component/sidebar";
import Box from "@mui/material/Box";

const orders = [
    { id: 1, orderId: "ORD001", customerName: "John Doe", orderDate: "2024-03-10", status: "Pending" },
    { id: 2, orderId: "ORD002", customerName: "Jane Smith", orderDate: "2024-03-09", status: "Delivered" },
    { id: 3, orderId: "ORD003", customerName: "Alice Johnson", orderDate: "2024-03-08", status: "Processing" },
    { id: 4, orderId: "ORD004", customerName: "Bob Brown", orderDate: "2024-03-07", status: "Pending" },
    { id: 5, orderId: "ORD005", customerName: "Charlie Davis", orderDate: "2024-03-06", status: "Delivered" },
    { id: 6, orderId: "ORD006", customerName: "Emma Wilson", orderDate: "2024-03-05", status: "Cancelled" },
    { id: 7, orderId: "ORD007", customerName: "James Taylor", orderDate: "2024-03-04", status: "Processing" },
    { id: 8, orderId: "ORD008", customerName: "Sophia Martinez", orderDate: "2024-03-03", status: "Pending" },
    { id: 9, orderId: "ORD009", customerName: "Michael Brown", orderDate: "2024-03-02", status: "Processing" },
    { id: 10, orderId: "ORD010", customerName: "Olivia Wilson", orderDate: "2024-03-01", status: "Delivered" },
    { id: 11, orderId: "ORD011", customerName: "William Johnson", orderDate: "2024-02-29", status: "Pending" },
    { id: 12, orderId: "ORD012", customerName: "Ava Taylor", orderDate: "2024-02-28", status: "Delivered" },
    { id: 13, orderId: "ORD013", customerName: "Alexander Davis", orderDate: "2024-02-27", status: "Processing" },
    { id: 14, orderId: "ORD014", customerName: "Mia Wilson", orderDate: "2024-02-26", status: "Pending" },
    { id: 15, orderId: "ORD015", customerName: "Ethan Brown", orderDate: "2024-02-25", status: "Processing" },
    { id: 16, orderId: "ORD016", customerName: "Isabella Martinez", orderDate: "2024-02-24", status: "Delivered" },
    { id: 17, orderId: "ORD017", customerName: "James Smith", orderDate: "2024-02-23", status: "Pending" },
    { id: 18, orderId: "ORD018", customerName: "Sophia Johnson", orderDate: "2024-02-22", status: "Processing" },
    { id: 19, orderId: "ORD019", customerName: "Logan Taylor", orderDate: "2024-02-21", status: "Cancelled" },
    { id: 20, orderId: "ORD020", customerName: "Charlotte Brown", orderDate: "2024-02-20", status: "Delivered" },
  ];
  
  

const EditDeleteOrder = ({ order, onUpdateStatus, onDelete }) => {
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState(order.status);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleUpdateStatus = () => {
    onUpdateStatus({ ...order, status });
    handleClose();
  };

  const handleDelete = () => {
    onDelete(order.id);
    handleClose();
  };

  return (
    <>
      <Button variant="outlined" color="primary" onClick={handleOpen}>
        Edit/Delete
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Edit or Delete Order</DialogTitle>
        <DialogContent>
          <Select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            fullWidth
            margin="normal"
          >
            <MenuItem value="Pending">Pending</MenuItem>
            <MenuItem value="Processing">Processing</MenuItem>
            <MenuItem value="Delivered">Delivered</MenuItem>
            <MenuItem value="Cancelled">Cancelled</MenuItem>
          </Select>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleUpdateStatus} color="primary">
            Update Status
          </Button>
          <Button onClick={handleDelete} color="secondary">
            Delete
          </Button>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

const OrdersManagement = () => {
  const [data, setData] = useState(orders);

  const columns = [
    {
      name: "orderId",
      label: "Order ID",
    },
    {
      name: "customerName",
      label: "Customer Name",
    },
    {
      name: "orderDate",
      label: "Order Date",
    },
    {
      name: "status",
      label: "Status",
    },
    {
      name: "actions",
      label: "Actions",
      options: {
        customBodyRender: (value, tableMeta, updateValue) => {
          const order = data[tableMeta.rowIndex];
          return (
            <EditDeleteOrder
              order={order}
              onUpdateStatus={handleUpdateOrderStatus}
              onDelete={handleDeleteOrder}
            />
          );
        },
      },
    },
  ];

  const options = {
    filter: true,
    sort: true,
    selectableRows: "none",
  };

  const handleUpdateOrderStatus = (updatedOrder) => {
    setData(
      data.map((order) =>
        order.id === updatedOrder.id ? updatedOrder : order
      )
    );
  };

  const handleDeleteOrder = (id) => {
    setData(data.filter((order) => order.id !== id));
  };

  return (
    <div style={{ background: "#eceff1", height: "100vh" }}>
      <Navbar />
      <Box height={70} />
      <Box sx={{ display: "flex" }}>
        <Sidebar />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <MUIDataTable
            title="Orders"
            data={data}
            columns={columns}
            options={options}
          />
        </Box>
      </Box>
    </div>
  );
};

export default OrdersManagement;
