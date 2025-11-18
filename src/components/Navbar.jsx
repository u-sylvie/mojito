import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import Logo from "../../public/images/logo.png";
import { navLinks } from "../../constants/index.js";

function Navbar() {
  useGSAP(() => {
    const navTween = gsap.timeline({
      scrollTrigger: {
        trigger: "nav",
        start: "bottom top",
      },
    });

    navTween.fromTo(
      "nav",
      { backgroundColor: "transparent" },
      {
        backgroundColor: "#00000050",
        backgroundFilter: "blur(10px)",
        duration: 1,
        else: "power1.inOut",
      }
    );
  });
  return (
    <nav>
      <div>
        <a href="#home" className="flex items-center gap-2">
          <img src={Logo} alt="" />
          <p>Velvet Pour</p>
        </a>

        <ul>
          {navLinks.map((link) => (
            <li key={link.id}>
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
