import Link from "next/link";

export const Hero = () => {
  return (
    <section className="flex pt-30 min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-950 px-20 md:px-20">
      <div className="max-w-xl text-left">
        <h1 className="text-4xl md:text-6xl font-semibold text-white leading-tight">
          Hi, it&apos;s{" "}
          <span className="font-bold bg-gradient-to-r from-blue-300 to-blue-500 bg-clip-text text-transparent">
            Kaming
          </span>
        </h1>

        <h3 className="mt-3 text-2xl md:text-3xl text-gray-400 font-light">
          I am a <span className="text-blue-400">Web Developer</span>
        </h3>

        <p className="mt-5 max-w-md text-gray-300 text-lg leading-relaxed">
          Passionate about building modern, responsive web applications that
          deliver real value. Skilled in fullstack development and always ready
          to take on new challenges.
        </p>

        <div className="mt-8 flex gap-4">
          <Link
            href="#portfolio"
            className="px-6 py-3 bg-blue-500 hover:bg-indigo-600 text-white font-medium rounded-xl shadow-lg transition-all duration-300"
          >
            View Projects
          </Link>
        </div>
      </div>
    </section>
  );
};
