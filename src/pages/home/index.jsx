import HeroSection from "./hero";
import BookYourSession from "./book";
import OurServices from "./our-services";
import HowItWorks from "./how-it-works";
import ContactUs from "./contact-us";

export default function Homepage({}) {
  return (
    <div className="container mx-auto">
      <HeroSection />

      <BookYourSession />

      <div className="bg-brown-100 md:p-16 md:my-8 md:relative">
        <OurServices />

        <HowItWorks />

        <ContactUs />
      </div>
    </div>
  );
}
