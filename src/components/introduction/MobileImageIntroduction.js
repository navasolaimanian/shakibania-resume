import Image from 'next/image';
import rectangle69 from '../../../public/images/design/Rectangle 69.png';
import rectangle71 from '../../../public/images/design/Rectangle 71.png';
import person from '../../../public/images/person.png';
import { getData } from '../../../lib/getData';
import Link from 'next/link';

const MobileIntroduction = () => {
  const data = getData('socialMedia.json');

  return (
    <div className="md:hidden relative">
      <Image src={rectangle71} className="absolute left-0 top-3" />
      <div className="relative">
        <Image src={rectangle69} className="absolute right-0 -top-10" />
        <Image src={person} className="absolute right-4 top-12 w-36 h-36" />
        {/* <div className="absolute top-20 left-8"> */}
        <p className="text-[#BDC7D1] text-xs absolute top-[5rem] left-6">Hello! I’m</p>
        <p className="text-[#D6E2EF] font-medium	absolute top-[5rem] left-6 mt-3">Hossein  Shakibania</p>
        {/* </div> */}
      </div>
      <ul className="items-center [&>*]:mx-1 inline-block mt-32 3xl:mt-6 bg-[#798D9C]">
        {data.socialMedias.map(socialMedia =>
          <li>
            <Link href={socialMedia.link}>
              <Image
                alt={socialMedia.alt}
                src={socialMedia.image}
                width={18}
                height={18}
              />
            </Link>
          </li>
        )}
      </ul>
    </div>
  );
};

export default MobileIntroduction;
