import CustomBadge from "../components/customBadge";
import { IconMoneybag } from "@tabler/icons-react";
import { PointerHighlight } from "../components/highlight_word";
import { Team } from "../components/team";
import { AnimatedTeamArrow } from "../components/AnimatedTeamArrow";
import { Brain } from "lucide-react";
export const experiences = [
  {
    title: "Software Developer",
    job: "Platinum AI",
    date: "2021-2023",
    icon: <Brain className=" object-contain" />,
    color: "black", // C# green color
    // Optional className overrides for this specific item
    className: "", // Custom classes for the entire timeline item
    iconClassName: "bg-transparent", // Custom classes for the icon container
    contentClassName: "", // Custom classes for the content area
    dateClassName: "", // Custom classes for the date
    titleClassName: "", // Custom classes for the title
    jobClassName: "", // Custom classes for the job
    body: (
      <div className="space-y-3">
        <p className="mb-3 font-normal">
          <PointerHighlight
            rectangleClassName="bg-neutral-700  border-neutral-600"
            pointerClassName="text-gray-400"
          >
            <span className="font-semibold z-10 relative text-white ">
              fullstack developer at Platinum AI
            </span>{" "}
          </PointerHighlight>
          , a leading software agency, developing enterprise-level applications
          and custom solutions for various clients.
        </p>
        <ul className="space-y-2 list-disc list-inside">
          <li>Built scalable web applications using .NET Core and React</li>
          <li>
            Implemented secure authentication systems and database management
          </li>
          <li>
            Collaborated with cross-functional teams on complex software
            projects
          </li>
          <li>
            Delivered high-quality solutions following industry best practices
          </li>
        </ul>
      </div>
    ),
  },
  {
    title: "Technical Head",
    job: "AI-Daas",
    date: "2023-2025",
    icon: "/assets/daasLogo.svg",
    color: "black", // React blue color
    // Optional className overrides for this specific item
    className: "", // Custom classes for the entire timeline item
    iconClassName: " border-none bg-background", // Custom classes for the icon container
    contentClassName: "", // Custom classes for the content area
    dateClassName: "", // Custom classes for the date
    titleClassName: "", // Custom classes for the title
    jobClassName: "", // Custom classes for the job
    body: (
      <div className="space-y-3">
        <p className="mb-3 font-normal">
          <PointerHighlight
            rectangleClassName="bg-emerald-700  border-emerald-600"
            pointerClassName="text-emerald-400"
          >
            <span className="font-semibold z-10 relative text-white ">
              Technical Head at AI-Daas
            </span>{" "}
          </PointerHighlight>
          , one of the founders responsible for creating and crafting new gen AI
          experiences. I crafted the most valuable experience practically in the
          DaaS.
        </p>
        <ul className="space-y-2 list-disc list-inside">
          <li>Co-founded and led technical vision for AI-powered solutions</li>
          <li>
            Created and crafted next-generation AI experiences and integrations
          </li>
          <li>Architected scalable cloud-based AI/ML solutions</li>
          <li>
            Established technical standards and mentored development teams
          </li>
        </ul>
        <div className="mt-4">
          <a
            href="https://ai-daas.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-3 py-1 text-sm font-medium text-purple-300 bg-purple-900/20 border border-purple-500/30 rounded-full hover:bg-purple-900/30 transition-colors"
          >
            Visit AI-Daas →
          </a>
        </div>
      </div>
    ),
  },
  {
    title: "Founder & CEO",
    job: "TailoredTech",
    date: "2025-Present",
    icon: "/assets/T.png",
    color: "black", // JavaScript yellow color
    // Optional className overrides for this specific item
    className: "", // Custom classes for the entire timeline item
    iconClassName: " border-none rounded-xl overflow-hidden ", // Custom classes for the icon container
    contentClassName: "", // Custom classes for the content area
    dateClassName: "", // Custom classes for the date
    titleClassName: "", // Custom classes for the title
    jobClassName: "", // Custom classes for the job
    body: (
      <div className="space-y-3 relative">
        {/* Team component positioned absolute on top right for laptops */}
        <div className="absolute -top-24 right-0 hidden lg:block">
          <AnimatedTeamArrow />
          <Team />
        </div>

        <p className="mb-3 font-normal">
          <PointerHighlight
            rectangleClassName="bg-yellow-700  border-yellow-600"
            pointerClassName="text-yellow-400"
          >
            <span className="font-semibold z-10 relative text-white ">
              Founder & CEO of TailoredTech
            </span>{" "}
          </PointerHighlight>
          , a specialized software agency creating custom digital experiences
          for maritime companies. Working with some of the largest companies in
          the world to deliver innovative solutions.
        </p>

        {/* Team component underneath title on mobile */}
        <div className="lg:hidden mb-4 relative">
          <AnimatedTeamArrow className="scale-75 -mb-8" />
          <Team />
        </div>
        <ul className="space-y-2 list-disc list-inside">
          <li>
            Building custom software solutions for maritime industry leaders
          </li>
          <li>Leading a team of talented developers and designers</li>
          <li>
            Establishing strategic partnerships with global maritime companies
          </li>
          <li>
            Driving innovation in maritime technology and digital transformation
          </li>
        </ul>
        <div className="mt-4 flex flex-wrap gap-2">
          <span className="px-3 py-1 text-xs font-medium text-emerald-300 bg-emerald-900/20 border border-emerald-500/30 rounded-full">
            Entrepreneur
          </span>
          <span className="px-3 py-1 text-xs font-medium text-blue-300 bg-blue-900/20 border border-blue-500/30 rounded-full">
            Fullstack Developer
          </span>
          <span className="px-3 py-1 text-xs font-medium text-orange-300 bg-orange-900/20 border border-orange-500/30 rounded-full">
            Tech Leader
          </span>
          <CustomBadge variant="primary" icon={<IconMoneybag size={16} />}>
            Innovator
          </CustomBadge>
        </div>
      </div>
    ),
  },
];
