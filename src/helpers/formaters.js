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

export const dateFormater = (inputDate) => {
  const date = new Date(inputDate);
  const months = [
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember",
  ];

  const currentDate = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();

  const dateFormated = `${currentDate} ${month} ${year}`;
  return dateFormated;
};

export const daysRentFormatter = (startDate, finishDate) => {
  const startRentAt = new Date(startDate);
  const finishRentAt = new Date(finishDate);

  const differenceMs = finishRentAt.getTime() - startRentAt.getTime();

  const differenceDays = differenceMs / (1000 * 60 * 60 * 24);

  const daysRent = Math.floor(differenceDays);

  return daysRent;
};

export const orderCarFormatter = (name, category, start, end) => {
  const dataCarDetail = [
    {
      title: "Nama/Tipe Mobil",
      content: name,
    },
    {
      title: "Kategori",
      content: category,
    },
    {
      title: "Tanggal Mulai Sewa",
      content: dateFormater(start),
    },
    {
      title: "Tanggal Akhir Sewa",
      content: dateFormater(end),
    },
  ];

  return dataCarDetail;
};

export const scrollTop = () => {
  return window.scrollTo(0, 0);
};

export const getTomorrowDate = () => {
  const today = new Date();
  const tomorrow = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate() + 1
  );

  const hours = today.getHours();
  const minutes = today.getMinutes();

  tomorrow.setHours(hours);
  tomorrow.setMinutes(minutes);

  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: false,
    timeZone: "Asia/Jakarta",
  };

  return tomorrow.toLocaleDateString("id-ID", options);
};
