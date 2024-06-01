import { HomePageWrapper } from "@/components";
import {
  AboutSection,
  ContactSection,
  FirstProjectSection,
  HomeSection,
  WorkSection,
} from "@/views";

const HomePage = () => {
  return (
    <HomePageWrapper
      homeSection={<HomeSection />}
      aboutSection={<AboutSection />}
      workSection={<WorkSection />}
      firstProjectSection={<FirstProjectSection />}
      contactSection={<ContactSection />}
    />
  );
};

export default HomePage;
