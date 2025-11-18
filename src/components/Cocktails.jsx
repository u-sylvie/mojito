import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import LeftLeaf from "../../public/images/hero-left-leaf.png";
import RightLeaf from "../../public/images/hero-right-leaf.png";
import { cocktailLists, mockTailLists } from "../../constants";

function Cocktails() {
  useGSAP(() => {
    const parallaxTimeLine = gsap.timeline({
      scrollTrigger: {
        trigger: "#cocktails",
        start: "top 30%",
        end: "bottom 80%",
        scrub: true,
      },
    });

    parallaxTimeLine
      .from("#c-left-leaf", {
        x: -100,
        y: 100,
      })
      .from("#c-right-leaf", {
        x: 100,
        y: 100,
      });
  });
  return (
    <section id="cocktails" className="noisy">
      <img src={LeftLeaf} alt="" id="c-left-leaf" />
      <img src={RightLeaf} alt="" id="c-right-leaf" />

      <div className="list">
        <div className="popular">
          <h2>Most popular cocktails:</h2>

          <ul>
            {cocktailLists.map(({ name, country, detail, price }) => (
              <li key={name}>
                <div className="md:me-28">
                  <h3>{name}</h3>
                  <p>
                    {country} | {detail}
                  </p>
                </div>
                <span>- {price}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="loved">
          <h2>Most loved mocktails:</h2>

          <ul>
            {mockTailLists.map(({ name, country, detail, price }) => (
              <li key={name}>
                <div className="me-28">
                  <h3>{name}</h3>
                  <p>
                    {country} | {detail}
                  </p>
                </div>
                <span>- {price}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Cocktails;
