import InfoPageClient from "@/components/InfoPageClient";
import { getSiteSettings } from "@/sanity/fetch";

const Page = async () => {
  const settings = await getSiteSettings();
  return <InfoPageClient settings={settings} />;
};

export default Page;
