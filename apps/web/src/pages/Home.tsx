import SubNavbar from "@/components/SubNavbar";
import CityEvents from "../components/homepageComponents/CityEvents";
import Companies from "../components/homepageComponents/Companies";
import CountryEvents from "../components/homepageComponents/CountryEvents";
import FeaturedEventsSection from "../components/homepageComponents/FeaturedEventsSection";
import Hero from "../components/homepageComponents/Hero";
import RigitiXStandsOut from "../components/homepageComponents/RigitiXStandsOut";
import StateEvents from "../components/homepageComponents/StateEvents";
import Testimonials from "../components/homepageComponents/Testimonials";
import Navbar from "../components/Navbar";




export function Page() {
  return (
    <div className=" w-full bg-[#FAFAFA] space-y-5  ">
      <div className=" w-full px-[4%]  space-y-7 " >
        <Navbar />
        <SubNavbar/>
        <Hero />
        <FeaturedEventsSection />
        <CityEvents />
        <StateEvents />
        <CountryEvents />
        <RigitiXStandsOut />
        <Testimonials />
      </div>
      <Companies />
    </div>
  );
}
