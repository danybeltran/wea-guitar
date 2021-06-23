import { GrLinkedinOption, GrTwitter } from "react-icons/gr";
import { AiFillInstagram } from "react-icons/ai";
export default function Footer() {
  return (
    <footer
      style={{
        zIndex: -2,
      }}
      role="footer"
      className="h-64 fixed bottom-0 px-8 py-10 bg-black w-full flex items-end justify-between"
    >
      <section className="text-white font-semibold text-2xl space-y-4">
        <div className="flex-centered space-x-2">
          <GrTwitter />
          <AiFillInstagram />
          <GrLinkedinOption />
        </div>
        <p className="text-3xl">WeaGuitar 2021</p>
      </section>
      <img src="/logo.png" alt="WeaGuitar Logo" className="w-32 h-32" />
    </footer>
  );
}
