import AboutHero from "@/components/About-page-components/About-Hero";
import OurJourney from "@/components/About-page-components/OurJourney";
import OurMission from "@/components/About-page-components/OurMission";
import OurStory from "@/components/About-page-components/OurStory";
import TeamMembers from "@/components/About-page-components/TeamMembersSection";
import Navbar from "@/components/Navbar";
import SubNavbar from "@/components/SubNavbar";


export function Page() {
    return (
        <div>
            <Navbar/>
            <SubNavbar/>
            <AboutHero/>
            <OurMission/>
            <OurStory/>
            <OurJourney/>
            <TeamMembers/>
        </div>
    )
}