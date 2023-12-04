import Main from "@/components/main_content/Main";
import Mark from "@/components/markating/Mark";
import Service from "@/components/service/Service";
import Travel from "@/components/travel_point/Travel";
import Featured from "@/components/featured/Featured";
import Testimonials from "@/components/testimonials/Testimonials";
import Subscribe from "@/components/subscribe/Subscribe";
import ScrollAnimation from "@/components/scrollanimation/ScrollAnimation";

export default async function Home() {
  await new Promise((resolve) => {
    setInterval(() => {
      resolve();
    }, 8000);
  });
  return (
    <main className={`mt-[113px] w-full overflow-hidden`}>
      <ScrollAnimation />
      <Main />
      <Mark />
      <Service />
      <Travel />
      <Featured />
      <Testimonials />
      <Subscribe />
    </main>
  );
}
