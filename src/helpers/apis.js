import axios from "axios";

// API Register
export const registerCustomer = async (data) => {
  const res = await axios.post(
    "https://api-car-rental.binaracademy.org/customer/auth/register",
    data
  );
  console.log("API Register:", res.data);
  return res;
};

// API Sign In
export const signInCustomer = async (data) => {
  const res = await axios.post(
    "https://api-car-rental.binaracademy.org/customer/auth/login",
    data
  );
  console.log("API Sign In:", res.data);
  return res;
};

// API Car Detail
export const getCarDetail = async (id) => {
  const res = await axios.get(
    `https://api-car-rental.binaracademy.org/customer/car/${id}`
  );
  console.log("API Car Detail", res);
  return res;
};

// API Order
export const orderCar = async (data) => {
  const token = localStorage.getItem("token");

  const config = {
    headers: {
      access_token: token,
    },
  };

  const res = await axios.post(
    `https://api-car-rental.binaracademy.org/customer/order`,
    data,
    config
  );

  console.log("API Custom Order:", res.data);
  return res;
};

// API Order Detail
export const getOrderDetail = async (id) => {
  const token = localStorage.getItem("token");

  const config = {
    headers: {
      access_token: token,
    },
  };
  const res = await axios.get(
    `https://api-car-rental.binaracademy.org/customer/order/${id}`,
    config
  );
  console.log("API Order Detail:", res.data);
  return res;
};

// API Upload Slip
export const uploadSlip = async (id, data) => {
  const token = localStorage.getItem("token");

  const config = {
    headers: {
      access_token: token,
    },
  };
  const res = await axios.put(
    `https://api-car-rental.binaracademy.org/customer/order/${id}/slip`,
    data,
    config
  );
  console.log("API Upload Slip:", res.data);
  return res;
};
