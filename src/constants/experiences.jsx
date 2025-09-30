import CustomBadge from "../components/customBadge";
import { IconMoneybag } from "@tabler/icons-react";
export const experiences = [
  {
    title: "Software Developer",
    job: "Platinum AI",
    date: "2021-2023",
    icon: "/assets/logos/csharp.svg",
    body: (
      <div className="space-y-3">
        <p className="mb-3 font-normal">
          Worked as a fullstack developer at Platinum AI, a leading software
          agency, developing enterprise-level applications and custom solutions
          for various clients.
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
    title: "Senior Fullstack Developer",
    job: "AI-Daas",
    date: "2023-2025",
    icon: "/assets/logos/react.svg",
    body: (
      <div className="space-y-3">
        <p className="mb-3 font-normal">
          Senior developer at AI-Daas, an innovative startup specializing in
          AI-powered data solutions. Led development of cutting-edge
          applications and AI integrations.
        </p>
        <ul className="space-y-2 list-disc list-inside">
          <li>Architected and developed AI-powered web applications</li>
          <li>
            Implemented machine learning integrations and data processing
            pipelines
          </li>
          <li>Led technical decisions for scalable cloud-based solutions</li>
          <li>Mentored junior developers and established coding standards</li>
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
    icon: "/assets/logos/javascript.svg",
    body: (
      <div className="space-y-3">
        <p className="mb-3 font-normal">
          Founded TailoredTech, a specialized software agency creating custom
          digital experiences for maritime companies. Working with some of the
          largest companies in the world to deliver innovative solutions.
        </p>
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
