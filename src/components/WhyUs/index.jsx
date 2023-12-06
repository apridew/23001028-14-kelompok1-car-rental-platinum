import "./style.css";
import WhyUsCard from "../WhyUsCard";

const cardContent = [
  {
    iconImg: "bi bi-hand-thumbs-up",
    title: "Mobil Lengkap",
    description: "Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat",
  },
  {
    iconImg: "bi bi-tag",
    title: "Harga Murah",
    description: "Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat",
  },
  {
    iconImg: "bi bi-clock",
    title: "Layanan 24 Jam",
    description: "Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga tersedia di akhir minggu",
  },
  {
    iconImg: "bi bi-award",
    title: "Sopir Profesional",
    description: "Sopir yang profesional, berpengalaman, jujur, ramah dan selalu tepat waktu",
  },
];
const WhyUs = () => {
  return (
    <section id="why-us">
      <div className="container">
        <div className="row">
          <div className="col">
            <h4 className="fw-bold">Why Us?</h4>
            <p>Mengapa harus pilih Binar Car Rental?</p>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row d-flex flex-lg-nowrap justify-content-md-between">
          {cardContent.map((data, id) => (
            <WhyUsCard key={id} all={data} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
