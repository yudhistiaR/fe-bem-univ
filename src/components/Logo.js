import Image from "next/image";
import Link from "next/link";

const Logo = ({ isMobile }) => {
  return (
    <Link href="/" className="flex justify-center items-center gap-4">
      <Image
        src="/img/kabinet.png"
        width={isMobile ? 35 : 45}
        height={0}
        alt="kabinet"
        className="relative top-0"
      />
      {!isMobile && (
        <div className="font-bold">
          <p>BEM UNISKA MAB {new Date().getFullYear().toString()}</p>
          <p>KABINET ESKALASI KARYA</p>
        </div>
      )}
    </Link>
  );
};

export default Logo;
