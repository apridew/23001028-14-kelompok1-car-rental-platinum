import Navbar from "../../components/Navbar";
import Hero from "../../components/Hero";
import OurService from "../../components/OurService";
import WhyUs from "../../components/WhyUs";
import Testimonial from "../../components/Testimonial";
import Footer from "../../components/Footer";
import CTABanner from "../../components/CTABanner";
import Faq from "../../components/Faq";

const LandingPage = () => {
  return (
    <>
      <Navbar />
      <Hero showButtonRent={true} />
      <OurService />
      <WhyUs />
      <Testimonial />
      <CTABanner />
      <Faq />
      <Footer />
    </>
  );
};

export default LandingPage;
