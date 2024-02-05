import axios from "axios";

export const registerCustomer = async (data) => {
  const res = await axios.post(
    "https://api-car-rental.binaracademy.org/customer/auth/register",
    data
  );
  console.log(res.data);
};

export const signInCustomer = async (data) => {
  const res = await axios.post(
    "https://api-car-rental.binaracademy.org/customer/auth/login",
    data
  );
  console.log(res.data);
  return res;
};
