import Image from "next/image";
import Link from "next/link";

const dataPortfolio = [
  {
    src: "/Mahkota-regency.webp",
    title: "Mahkota Regency",
    desc: "Mahkota Hospital & Regency Hospital, built on Laravel and PostgreSQL",
  },
  {
    src: "/Nerovel.webp",
    title: "Music Downloader",
    desc: "Modern music downloader with interactive UX, built using Next.js",
  },
  {
    src: "/Wepelita.webp",
    title: "SMK PELITA IV Profile Website",
    desc: "Responsive school profile using modular Laravel Blade and Tailwind CSS.",
  },
  {
    src: "/iClick.webp",
    title: "Clicker Counter website & Real-time database",
    desc: "Clicker Counter that stores points in MongoDB, built using Express.js.",
  },
];

export const Portfolio = () => {
  return (
    <section className="px-6 md:px-16 bg-black text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-10 text-center">
          My <span className="text-blue-400">Portfolio</span>
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {dataPortfolio.map((item, index) => (
            <div
              key={index}
              className="group bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-blue-500/20 transition duration-300"
            >
              <div className="relative w-full h-56 overflow-hidden">
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-110 transition duration-500"
                />
              </div>
              <div className="p-5 space-y-2">
                <h3 className="text-xl font-semibold group-hover:text-blue-400 transition">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {item.desc}
                </p>
                <Link
                  href="#"
                  className="inline-block mt-3 text-sm font-medium text-blue-400 hover:text-blue-300 transition"
                >
                  View Project →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
