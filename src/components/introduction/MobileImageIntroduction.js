import Image from 'next/image';
import mobileintroductionRectangle1 from '../../../public/images/design/mobileintroductionRectangle1.svg';
import mobileintroductionRectangle2 from '../../../public/images/design/mobileintroductionRectangle2.svg';
import person from '../../../public/images/person.png';
import { getData } from '../../../lib/getData';
import Link from 'next/link';

const MobileIntroduction = () => {
  const data = getData('mobileSocialMedia.json');

  return (
    <div className="md:hidden relative">
      <Image src={mobileintroductionRectangle2} className="absolute left-0 top-3" />
      <div className="relative">
        <Image src={mobileintroductionRectangle1} className="absolute right-0 -top-10" />
        <Image src={person} className="absolute right-4 top-12 w-36 h-36" />
        <div className="absolute top-[4.5rem] right-[10.5rem]">
          <p className="text-[#BDC7D1] text-xs">Hello! I’m</p>
          <p className="text-[#D6E2EF] font-medium">Hossein  Shakibania</p>
        </div>
        <ul className="absolute top-[9rem] right-[10rem] flex items-center w-fit rounded-lg [&>*]:mx-1 px-1 3xl:mt-6 bg-[#D5DADE]">
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
    </div>
  );
};

export default MobileIntroduction;
