import Introduction from "@/components/Introduction";
import News from "@/components/News";
import Image from "next/image";
import { getData } from "../../lib/getData";
import Publications from "@/components/Publications";

export default function Home() {

  const news = getData('news.json');
  const publications = getData('publications.json');

  return (
    <div className="">
      <Introduction />
      <News data={news} />
      <Publications data={publications} />
    </div>
  );
}
