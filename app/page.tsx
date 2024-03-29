import HomeStunningHomepages from "@/components/Home/Home-Stunning-Homepages";
import HomeAction from "@/components/Home/home-action";
import HomeAdvanceOption from "@/components/Home/home-advance-option";
import HomeCarousal from "@/components/Home/home-carousal";
import HomeFeatures from "@/components/Home/home-features";
import HomeFullCarousal from "@/components/Home/home-full-carousal";
import HomeMain from "@/components/Home/home-main";
import HomeTemplateFeatures from "@/components/Home/home-template-features";
import HomeTheme from "@/components/Home/home-theme";

export default function Home() {
  return (
    <div>
      <HomeMain />
      <HomeFeatures />
      <HomeStunningHomepages />
      <HomeFullCarousal/>
      <HomeAdvanceOption />
      <HomeCarousal />
      <HomeTemplateFeatures/>
      <HomeTheme/>
      <HomeAction/>
    </div>
  );
}
