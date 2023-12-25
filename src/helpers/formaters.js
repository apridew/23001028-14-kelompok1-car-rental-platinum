export const idrFormater = (amount) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
};

export const categoryTextFormater = (category) => {
  let categoryText = "";
  if (category === "small") {
    categoryText = "2 - 4 people";
  } else if (category === "medium") {
    categoryText = "4 - 6 people";
  } else if (category === "large") {
    categoryText = "6 - 8 people";
  } else {
    categoryText = "Undefined";
  }
  return categoryText;
};

export const statusTextFormater = (status) => {
  let statusText = "";
  if (status == "true") {
    statusText = "Tidak Tersedia";
  } else {
    statusText = "Tersedia";
  }

  return statusText;
};

export const dataCarFormater = (name, category, price, status) => {
  const dataCarDetail = [
    {
      title: "Nama Mobil",
      content: name,
      icon: "bi bi-car-front-fill",
    },
    { title: "Kategori", content: category, icon: "bi bi-people" },
    {
      title: "Harga Sewa per Hari",
      content: idrFormater(price),
      icon: "bi bi-tags",
    },
    { title: "Status", content: status, icon: "bi bi-bounding-box" },
  ];

  return dataCarDetail;
};

export const scrollTop = () => {
  return window.scrollTo(0, 0);
};
