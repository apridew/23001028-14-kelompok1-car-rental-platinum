import user1img from "../assets/img/testimonial/img_photo1.png";
import user2img from "../assets/img/testimonial/img_photo2.png";

export const ourServiceList = [
  { list: "Sewa Mobil Dengan Supir di Jakarta 12 Jam" },
  { list: "Sewa Mobil Lepas Kunci di Jakarta 24 Jam" },
  { list: "Sewa Mobil Jangka Panjang Bulanan" },
  { list: "Gratis Antar - Jemput Mobil di Bandara" },
  { list: "Layanan Airport Transfer / Drop In Out" },
];

export const whyUsContent = [
  {
    iconImg: "bi bi-hand-thumbs-up",
    title: "Mobil Lengkap",
    description:
      "Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat",
  },
  {
    iconImg: "bi bi-tag",
    title: "Harga Murah",
    description:
      "Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat",
  },
  {
    iconImg: "bi bi-clock",
    title: "Layanan 24 Jam",
    description:
      "Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga tersedia di akhir minggu",
  },
  {
    iconImg: "bi bi-award",
    title: "Sopir Profesional",
    description:
      "Sopir yang profesional, berpengalaman, jujur, ramah dan selalu tepat waktu",
  },
];

export const accordionData = [
  {
    bsTarget: "#collapseOne",
    ariaExpanded: "true",
    ariaControls: "collapseOne",
    title: "Apa saja syarat yang dibutuhkan ?",
  },
  {
    bsTarget: "#collapseTwo",
    ariaExpanded: "false",
    ariaControls: "collapseTwo",
    title: "Berapa hari minimal sewa mobil lepas kunci ?",
  },
  {
    bsTarget: "#collapseThree",
    ariaExpanded: "false",
    ariaControls: "collapseThree",
    title: "Berapa hari sebelumnya sabaiknya booking sewa mobil ?",
  },
  {
    bsTarget: "#collapseFour",
    ariaExpanded: "false",
    ariaControls: "collapseFour",
    title: "Apakah Ada biaya antar-jemput ?",
  },
  {
    bsTarget: "#collapseFive",
    ariaExpanded: "false",
    ariaControls: "collapseFive",
    title: "Bagaimana jika terjadi kecelakaan ?",
  },
];

export const cardTestimonial = [
  {
    starIcon: "bi bi-star-fill",
    img: user1img,
    userDesc: "John Dee 32, Bromo",
  },
  {
    starIcon: "bi bi-star-fill",
    img: user2img,
    userDesc: "Jane Marie 28, Jakarta",
  },
  {
    starIcon: "bi bi-star-fill",
    img: user1img,
    userDesc: "Bryan Chan 22, Bali",
  },
  {
    starIcon: "bi bi-star-fill",
    img: user2img,
    userDesc: "Sarah Carl 26, Bogor",
  },
];

export const detailCarList = [
  { list: "Tidak termasuk biaya makan sopir Rp 75.000/hari" },
  {
    list: "Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam",
  },
  { list: "Tidak termasuk akomodasi penginapan" },
];

export const icons = [
  { icon: "bi bi-facebook" },
  { icon: "bi bi-instagram" },
  { icon: "bi bi-twitter" },
  { icon: "bi bi-envelope" },
  { icon: "bi bi-twitch" },
];

export const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 2,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 767, min: 300 },
    items: 2,
    slidesToSlide: 1,
  },
};

export const banksTransfer = [
  {
    name: "BCA",
    desc: "BCA Transfer",
  },
  {
    name: "BNI",
    desc: "BNI Transfer",
  },
  {
    name: "Mandiri",
    desc: "Mandiri Transfer",
  },
];

export const bankPaymentOptions = [
  {
    name: "ATM",
  },
  {
    name: "M -",
  },
  {
    name: "Klik",
  },
  {
    name: "Internet Banking",
  },
];
