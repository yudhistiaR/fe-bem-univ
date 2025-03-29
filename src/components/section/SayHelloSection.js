"use client";

import Image from "next/image";
import MainLayout from "../layout/MainLayout";
import { TypewriterEffectSmooth } from "../ui/typewriter-effect";

import useMobileView from "@/hooks/useMobileView";

const words = [
  {
    text: "BEM",
    className: "text-base-200 text-4xl md:text-6xl",
  },

  {
    text: "UNISKA",
    className: "text-base-200 text-4xl md:text-6xl",
  },
  {
    text: "MAB",
    className: "text-base-200 text-4xl md:text-6xl",
  },
  {
    text: new Date().getFullYear().toString(),
    className: "text-base-200 text-4xl md:text-6xl",
  },
];

const SayHelloSection = () => {
  const isMobie = useMobileView();

  return (
    <MainLayout>
      <div className="flex justify-evenly items-start">
        {!isMobie && (
          <div className="relative w-full overflow-hidden">
            <Image
              width={460}
              height={100}
              src="/img/wapres.png"
              alt="SayHelloSection"
              objectFit="cover"
            />
          </div>
        )}
        <div className="space-y-3 antialiased">
          <h1 className="text-4xl md:text-7xl font-bold uppercase font-title w-full">
            SELAMAT DATANG DI WEBSITE RESMI
            <TypewriterEffectSmooth words={words} />
          </h1>
          <h2 className="font-semibold text-2xl">Halo, mahasiswa UNISKA! 👋</h2>
          <div className="text-justify text-xl space-y-3 font-medium font-body">
            <p>
              Selamat datang di website resmi Badan Eksekutif Mahasiswa (BEM)
              UNISKA MAB, wadah utama bagi seluruh mahasiswa untuk mendapatkan
              informasi terbaru, menyampaikan aspirasi, serta berpartisipasi
              dalam berbagai kegiatan dan program yang kami selenggarakan.
            </p>
            <p>
              Sebagai organisasi yang mewakili suara mahasiswa, BEM UNISKA hadir
              untuk menggerakkan perubahan, membangun solidaritas, dan
              menciptakan lingkungan akademik yang dinamis serta progresif. Kami
              berkomitmen untuk menjadi jembatan antara mahasiswa dan pihak
              kampus, serta menginisiasi berbagai program yang mendukung
              pengembangan intelektual, kepemimpinan, dan kreativitas.
            </p>
            <p>
              Melalui website ini, Anda bisa mengakses informasi seputar
              kegiatan kampus, advokasi mahasiswa, program pengembangan diri,
              serta berbagai gerakan sosial yang bertujuan untuk membawa dampak
              positif bagi UNISKA MAB dan masyarakat luas. Kami percaya bahwa
              setiap mahasiswa memiliki peran penting dalam membangun perubahan
              dan memberikan kontribusi nyata bagi kemajuan bangsa.
            </p>
            <p>
              Mari bersama-sama bergerak, berkarya, dan berinovasi! Jadilah
              bagian dari perubahan dengan aktif berpartisipasi dalam kegiatan
              BEM UNISKA. Kampus yang hebat lahir dari mahasiswa yang peduli,
              kritis, dan berani mengambil peran.
            </p>
            <p>Hidup Mahasiswa! Hidup Rakyat Indonesia! 🚀🔥</p>
            <p className="text-base-200 text-start">
              #BEMUNISKA #HidupMahasiswa #AksiNyata #MahasiswaBerkarya #UNISKA
              #BergerakBersama #UntukKampusYangLebihBaik
            </p>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default SayHelloSection;
