import Link from "next/link";

const skills = [
  { name: "Back-End Engineer", skill: "Express.js, Laravel, API Development", icon: "bx bx-server" },
  { name: "Front-End Developer", skill: "React, Next.js, TailwindCSS", icon: "bx bx-laptop" },
  { name: "Database Engineer", skill: "PostgreSQL, MySQL, Prisma ORM", icon: "bx bxl-postgresql" },
  { name: "UI/UX Designer", skill: "Figma, Framer, Design Systems", icon: "bx bxl-figma" },
];

export const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center gap-16 px-8 md:px-20 text-gray-200 bg-black"
    >
      <div className="max-w-xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          About <span className="text-indigo-400">Me</span>
        </h1>

        <p className="text-lg leading-relaxed mb-4 text-gray-300">
          Hi, I&apos;m <span className="text-indigo-400 font-medium">Kaming</span>, a passionate fullstack
          developer with experience in both web and mobile application
          development.
        </p>

        <p className="text-lg leading-relaxed text-gray-400">
          Currently pursuing a degree in Informatics Technology at Tarumanagara
          University, specializing in web and mobile development. I enjoy
          crafting products that blend functionality, design, and performance.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-lg">
        {skills.map((item, index) => (
          <div
            key={index}
            className="group bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 shadow-lg hover:shadow-indigo-500/20"
          >
            <i
              className={`${item.icon} text-4xl text-indigo-400 group-hover:text-indigo-300 mb-3 transition-colors`}
            ></i>
            <h3 className="text-xl font-semibold text-white mb-1">{item.name}</h3>
            <p className="text-sm text-gray-400">{item.skill}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
