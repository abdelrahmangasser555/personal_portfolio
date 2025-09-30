import { useRef } from "react";
import Card from "../components/Card";
import { Globe } from "../components/globe";
import CopyEmailButton from "../components/CopyEmailButton";
import { Frameworks } from "../components/FrameWorks";
import { BackgroundRippleEffect } from "../components/background-ripple-effect";
import { cn } from "../lib/utils/cn";
import { SmoothCursor } from "../components/smooth_cursur";
import { Code2, Layers, Settings, Lightbulb, Target, Zap } from "lucide-react";
import { PointerHighlight } from "../components/highlight_word";
const About = () => {
  const grid2Container = useRef();
  return (
    <div className="relative flex min-h-screen w-full flex-col items-start justify-start  mt-10 pb-10">
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:40px_40px]",

          "[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
        )}
      />
      <section className="c-space section-spacing z-10 " id="about">
        <h2 className="text-heading">About Me</h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12">
          {/* Grid 1 */}
          <div className="flex items-end grid-default-color grid-1">
            <img
              src="assets/coding-pov.png"
              className="absolute scale-[1.75] -right-[5rem] -top-[1rem] md:scale-[3] md:left-50 md:inset-y-10 lg:scale-[2.5]"
            />
            <div className="z-10">
              <PointerHighlight>
                <p className="headtext">Hi, I'm Abdelrahman Gasser</p>
              </PointerHighlight>
              <p className="subtext">
                Over the last 4 years, I developed my frontend and backend dev
                skills to deliver dynamic and software and web applications.
              </p>
            </div>
            <div className="absolute inset-x-0 pointer-evets-none -bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-indigo" />
          </div>
          {/* Grid 2 */}
          <div className=" overflow-visible grid-2">
            <div
              ref={grid2Container}
              className="flex items-center justify-center w-full h-full"
            >
              <p className="flex items-end text-5xl text-gray-500">
                CODE IS CRAFT
              </p>
              <Card
                style={{ rotate: "75deg", top: "30%", left: "20%" }}
                text="GRASP"
                variant="success"
                icon={<Lightbulb size={14} />}
                size="small"
                containerRef={grid2Container}
              />
              <Card
                style={{ rotate: "-30deg", top: "60%", left: "45%" }}
                text="SOLID"
                variant="primary"
                icon={<Layers size={14} />}
                size="small"
                containerRef={grid2Container}
              />
              <Card
                style={{ rotate: "90deg", bottom: "30%", left: "70%" }}
                text="Design Patterns"
                variant="purple"
                icon={<Settings size={14} />}
                size="medium"
                containerRef={grid2Container}
              />
              <Card
                style={{ rotate: "-45deg", top: "55%", left: "0%" }}
                text="Design Principles"
                variant="warning"
                icon={<Target size={14} />}
                size="medium"
                containerRef={grid2Container}
              />
              <Card
                style={{ rotate: "20deg", top: "10%", left: "38%" }}
                text="SRP"
                variant="error"
                icon={<Zap size={14} />}
                size="small"
                containerRef={grid2Container}
              />
              <Card
                style={{ rotate: "30deg", top: "70%", left: "70%" }}
                image="assets/logos/js.svg"
                variant="yellow"
                containerRef={grid2Container}
              />
              <Card
                style={{ rotate: "-45deg", top: "70%", left: "25%" }}
                image="assets/logos/nextjs.svg"
                variant="black"
                containerRef={grid2Container}
              />
              <Card
                style={{ rotate: "-45deg", top: "5%", left: "10%" }}
                image="assets/logos/tailwind.svg"
                variant="primary"
                containerRef={grid2Container}
              />
            </div>
          </div>
          {/* Grid 3 */}
          <div className="grid-black-color grid-3">
            <div className="z-10 w-[50%]">
              <p className="headtext">Time Zone</p>
              <p className="subtext">
                I'm based in Mars, and open to remote work worldwide
              </p>
            </div>
            <figure className="absolute left-[30%] top-[10%]">
              <Globe />
            </figure>
          </div>
          {/* Grid 4 */}
          <div className="grid-special-color grid-4">
            <div className="flex flex-col items-center justify-center gap-4 size-full">
              <p className="text-center headtext">
                Do you want to start a project together?
              </p>
              <CopyEmailButton />
            </div>
          </div>
          {/* Grid 5 */}
          <div className="grid-default-color grid-5">
            <div className="z-10 w-[50%]">
              <p className="headText">Teck Stack</p>
              <p className="subtext">
                I specialize in a variety of languages, frameworks, and tools
                taht allow me to build robust and scalable applications
              </p>
            </div>
            <div className="absolute inset-y-0 md:inset-y-9 w-full h-full start-[50%] md:scale-125">
              <Frameworks />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
