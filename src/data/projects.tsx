import AceTernityLogo from "@/components/logos/aceternity";
import SlideShow from "@/components/slide-show";
import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { ArrowUpRight, ExternalLink, Link2, MoveUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import { RiNextjsFill, RiNodejsFill, RiReactjsFill } from "react-icons/ri";
import {

  SiFastapi,
  SiOpenai,
  SiChakraui,
  SiDocker,
  SiExpress,
  SiFirebase,
  SiHtml5,
  SiCss3,
  SiBootstrap,
  SiPhp,
  SiMysql,
  SiJavascript,
  SiMongodb,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiSqlite,
  SiDjango,
  SiReactquery,
  SiSanity,
  SiShadcnui,
  SiSocketdotio,
  SiSupabase,
  SiTailwindcss,
  SiThreedotjs,
  SiTypescript,
  SiVuedotjs,
} from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
const BASE_PATH = "/assets/projects-screenshots";

const ProjectsLinks = ({ live, repo }: { live: string; repo?: string }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-start gap-3 my-3 mb-8">
      <Link
        className="font-mono underline flex gap-2"
        rel="noopener"
        target="_new"
        href={live}
      >
        <Button variant={"default"} size={"sm"}>
          Visit Website
          <ArrowUpRight className="ml-3 w-5 h-5" />
        </Button>
      </Link>
      {repo && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={repo}
        >
          <Button variant={"default"} size={"sm"}>
            Github
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
    </div>
  );
};

export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode;
};
const PROJECT_SKILLS = {
  fastapi: {
    title: "FastAPI",
    bg: "black",
    fg: "white",
    icon: <SiFastapi />,
  },
  openai: {
    title: "OpenAI",
    bg: "black",
    fg: "white",
    icon: <SiOpenai />,
  },
  next: {
    title: "Next.js",
    bg: "black",
    fg: "white",
    icon: <RiNextjsFill />,
  },
  html: {
    title: "HTML",
    bg: "black",
    fg: "white",
    icon: <SiHtml5 />,
  },
  css: {
    title: "CSS",
    bg: "black",
    fg: "white",
    icon: <SiCss3 />,
  },
  bootstrap: {
    title: "Bootstrap",
    bg: "black",
    fg: "white",
    icon: <SiBootstrap />,
  },
  php: {
    title: "PHP",
    bg: "black",
    fg: "white",
    icon: <SiPhp />,
  },
  mysql: {
    title: "MySQL",
    bg: "black",
    fg: "white",
    icon: <SiMysql />,
  },
  chakra: {
    title: "Chakra UI",
    bg: "black",
    fg: "white",
    icon: <SiChakraui />,
  },
  node: {
    title: "Node.js",
    bg: "black",
    fg: "white",
    icon: <RiNodejsFill />,
  },
  python: {
    title: "Python",
    bg: "black",
    fg: "white",
    icon: <SiPython />,
  },
  sqlite: {
    title: "SQLite",
    bg: "black",
    fg: "white",
    icon: <SiSqlite />,
  },
  django: {
    title: "Django",
    bg: "black",
    fg: "white",
    icon: <SiDjango />,
  },
  prisma: {
    title: "prisma",
    bg: "black",
    fg: "white",
    icon: <SiPrisma />,
  },
  postgres: {
    title: "PostgreSQL",
    bg: "black",
    fg: "white",
    icon: <SiPostgresql />,
  },
  mongo: {
    title: "MongoDB",
    bg: "black",
    fg: "white",
    icon: <SiMongodb />,
  },
  express: {
    title: "Express",
    bg: "black",
    fg: "white",
    icon: <SiExpress />,
  },
  reactQuery: {
    title: "React Query",
    bg: "black",
    fg: "white",
    icon: <SiReactquery />,
  },
  shadcn: {
    title: "ShanCN UI",
    bg: "black",
    fg: "white",
    icon: <SiShadcnui />,
  },
  aceternity: {
    title: "Aceternity",
    bg: "black",
    fg: "white",
    icon: <AceTernityLogo />,
  },
  tailwind: {
    title: "Tailwind",
    bg: "black",
    fg: "white",
    icon: <SiTailwindcss />,
  },
  docker: {
    title: "Docker",
    bg: "black",
    fg: "white",
    icon: <SiDocker />,
  },
  yjs: {
    title: "Y.js",
    bg: "black",
    fg: "white",
    icon: (
      <span>
        <strong>Y</strong>js
      </span>
    ),
  },
  firebase: {
    title: "Firebase",
    bg: "black",
    fg: "white",
    icon: <SiFirebase />,
  },
  sockerio: {
    title: "Socket.io",
    bg: "black",
    fg: "white",
    icon: <SiSocketdotio />,
  },
  js: {
    title: "JavaScript",
    bg: "black",
    fg: "white",
    icon: <SiJavascript />,
  },
  ts: {
    title: "TypeScript",
    bg: "black",
    fg: "white",
    icon: <SiTypescript />,
  },
  vue: {
    title: "Vue.js",
    bg: "black",
    fg: "white",
    icon: <SiVuedotjs />,
  },
  react: {
    title: "React.js",
    bg: "black",
    fg: "white",
    icon: <RiReactjsFill />,
  },
  sanity: {
    title: "Sanity",
    bg: "black",
    fg: "white",
    icon: <SiSanity />,
  },
  spline: {
    title: "Spline",
    bg: "black",
    fg: "white",
    icon: <SiThreedotjs />,
  },
  gsap: {
    title: "GSAP",
    bg: "black",
    fg: "white",
    icon: "",
  },
  framerMotion: {
    title: "Framer Motion",
    bg: "black",
    fg: "white",
    icon: <TbBrandFramerMotion />,
  },
  supabase: {
    title: "Supabase",
    bg: "black",
    fg: "white",
    icon: <SiSupabase />,
  },
};
export type Project = {
  id: string;
  category: string;
  title: string;
  src: string;
  screenshots: string[];
  skills: { frontend: Skill[]; backend: Skill[] };
  content: React.ReactNode | any;
  github?: string;
  live: string;
};
const projects: Project[] = [
  
  {
    id: "workrobo",
    category: "AI SaaS",
    title: "WorkRobo",
    src: "/assets/projects-screenshots/workrobo/home.png",
    screenshots: ["1.png"],
    github: "https://github.com/CyberAli-eng/WorkRobo.ai",
    live: "",
    skills: {
  frontend: [
    PROJECT_SKILLS.ts,
    PROJECT_SKILLS.next,
    PROJECT_SKILLS.react,
    PROJECT_SKILLS.tailwind,
  ],
  backend: [
    PROJECT_SKILLS.python,
    PROJECT_SKILLS.fastapi,
    PROJECT_SKILLS.openai,
  ],
},
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            WorkRobo is your ultimate AI-powered productivity assistant, designed
            to turn your workflow dreams into reality. With a focus on smooth
            and visually captivating animations, navigating the site feels like
            a breeze—it&apos;s almost as if the destinations are calling you.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <p className="font-mono mb-2 mt-8">
            A sleek, modern interface greets you, featuring the latest productivity
            tips, deals, and must-visit spots around the globe.
          </p>
          <SlideShow images={[
            `${BASE_PATH}/workrobo/home.png`,
            `${BASE_PATH}/workrobo/Builder.png`,
              `${BASE_PATH}/workrobo/hive.png`,
          ]} />
        </div>

      );
    },
  },
  
  {
    id: "GOWIGRO",
    category: "AGENCY WEBSITE",
    title: "GOWIGRO",
    src: "/assets/projects-screenshots/gowigro/home.png",
    screenshots: ["1.png"],
    live: "https://www.gowigro.com",
    skills: {
      frontend: [
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.next,
        PROJECT_SKILLS.shadcn,
        PROJECT_SKILLS.aceternity,
        PROJECT_SKILLS.framerMotion,
        PROJECT_SKILLS.tailwind,
      ],
      backend: [],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            Craft. Elevate. Accelerate. We don't just design for users, we design for how people think, feel, and act..
          </TypographyP>
          <ProjectsLinks live={this.live}/>
          <TypographyH3 className="my-4 mt-8">
            Service Pages
          </TypographyH3>
          <p className="font-mono mb-2">
            Each service page is a visual journey, guiding visitors through our offerings with clarity and style. From the first glance to the final click, every element is designed to inform and inspire.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/gowigro/service.png`,
              `${BASE_PATH}/gowigro/service2.png`,
              `${BASE_PATH}/gowigro/service3.png`,
            ]}
          />
          <TypographyH3 className="my-4 "> About Us</TypographyH3>
          <p className="font-mono mb-2">
            Learn more about our company, our mission, and what drives us to create exceptional digital experiences.
          </p>
          <SlideShow images={[
             `${BASE_PATH}/gowigro/about1.png`,
              `${BASE_PATH}/gowigro/about2.png`,
          ]} />
          <TypographyH3 className="my-4 mt-8">Contact</TypographyH3>

          <p className="font-mono mb-2">
            Get in touch with us to discuss your next project or any questions you might have.
          </p>
          <SlideShow
            images={[
               `${BASE_PATH}/gowigro/contact.png`,

            ]}
          />
          <p className="font-mono mb-2 mt-8 text-center">
            This mpower startups, brands, and enterprises with bold, energetic, and trustworthy strategies. From smart SEO to captivating content, from targeted ads to brand visibility, we tailor growth blueprints that fit your goals. We don't just work for brands, we grow with them.
          </p>
        </div>
      );
    },
  },
  {
    id: "QInterview.ai",
    category: "Interview chat",
    title: "QInterview",
    src: "/assets/projects-screenshots/qinterview/landing.png",
    screenshots: ["1.png", "2.png", "3.png", "4.png"],
    live: "https://qinterview-ai.vercel.app/",
    github: "https://github.com/CyberAli-eng/Qinterview.ai",
    skills: {
      frontend: [PROJECT_SKILLS.js, PROJECT_SKILLS.next, PROJECT_SKILLS.chakra],
      backend: [PROJECT_SKILLS.supabase],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
🚀 Expert AI Generation: Leverage Google Gemini to generate role-specific, high-quality interview questions and expert answers in real-time.
💎 Premium Glassmorphism UI: A stunning, modern interface with floating orbs, blurred backgrounds, and high-contrast typography.
⚡ Skeleton Loading States: Professional loading experiences using a centralized SkeletonCard system for a seamless, Zero-layout-shift feel.
🛡️ Robust Error Handling: Built-in exponential backoff and model fallback strategies for the AI engine, alongside real-time database health diagnostics.
🎯 Personalized Experience: Automated user branding with personalized avatars and real-name integration.
📱 Responsive by Design: Fully optimized for mobile, tablet, and desktop with a unified, variant-based Navbar system.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <SlideShow
            images={[
              `${BASE_PATH}/ghostchat/login.png`,
              `${BASE_PATH}/ghostchat/dashboard.png`,
              `${BASE_PATH}/ghostchat/sessions.png`,
              `${BASE_PATH}/ghostchat/chatpage0.png`,
              `${BASE_PATH}/ghostchat/chatpage.png`,
              `${BASE_PATH}/ghostchat/chatpage2.png`,
            ]}
          />
        </div>
      );
    },
  },

  // {
  //   id: "GOWIGRO_GYM_TAMPLATE",
  //   category: "Gym Template",
  //   title: "Elite Performance Gym",
  //   src: "/assets/projects-screenshots/gym-template/hero.png",
  //   screenshots: ["1.png"],
  //   live: "https://gowigro-gym-template.onrender.com/",
  //   skills: {
  //     frontend: [PROJECT_SKILLS.js, PROJECT_SKILLS.vue],
  //     backend: [
  //       PROJECT_SKILLS.node,
  //       PROJECT_SKILLS.mongo,
  //       PROJECT_SKILLS.express,
  //       PROJECT_SKILLS.docker,
  //     ],
  //   },
  //   get content() {
  //     return (
  //       <div>
  //         <TypographyP className="font-mono ">
  //     Elite Performance Gym, Transform Your Body. Build Unbreakable, Discipline. The gym where results are built and limits are broken. Join the elite.
  //         </TypographyP>
  //         <ProjectsLinks live={this.live} />
  //         <SlideShow images={[`${BASE_PATH}/gym-template/hero.png`]} />
  //         <TypographyH3 className="my-4 mt-8">
  //           Elite Performance Gym
  //         </TypographyH3>
  //         <ul className="list-disc ml-6">
  //           <li className="font-mono">
           
  //           </li>
  //         </ul>
  //         <TypographyH3 className="my-4 mt-8">Class-Wise Results:</TypographyH3>
  //         <ul className="list-disc ml-6">
  //           <li className="font-mono">
  //             class-wise results effortlessly by entering a roll number range.
  //             No more manual searches or filtering.
  //           </li>
  //         </ul>
  //         <TypographyH3 className="my-4 mt-8">Faculty Features:</TypographyH3>
  //         <ul className="list-disc ml-6">
  //           <li className="font-mono">
  //             Faculty members could download batch results in Excel format,
  //             making administrative tasks a breeze.
  //           </li>
  //         </ul>
  //         <TypographyH3 className="my-4 mt-8">
  //           Enhanced Data Insights:
  //         </TypographyH3>
  //         <ul className="list-disc ml-6">
  //           <li className="font-mono">
  //             Each result came with additional features including:
  //             <ul className="list-disc font-mono ml-6">
  //               <li>
  //                 <strong>CGPA Calculations: </strong>Easily track your
  //                 cumulative grade point average.
  //               </li>
  //               <li>
  //                 <strong>Charts:</strong> Visualize your academic performance
  //                 with comprehensive charts.
  //               </li>
  //               <li>
  //                 <strong>Future Projections:</strong> Get insights into
  //                 potential future outcomes based on current performance.
  //               </li>
  //               <li>
  //                 <strong> Backlog Counts: </strong>Keep track of your backlog
  //                 subjects at a glance.
  //               </li>
  //             </ul>
  //           </li>
  //         </ul>
  //         <TypographyH3 className="my-4 mt-8">Performance:</TypographyH3>
  //         <ul className="list-disc ml-6">
  //           <li className="font-mono">
  //             The application was significantly faster and more efficient than
  //             the official site, providing a smoother user experience.
  //           </li>
  //         </ul>
  //         <TypographyH3 className="my-4 mt-8">Downfall:</TypographyH3>
  //         <ul className="list-disc ml-6">
  //           <li className="font-mono">
  //             Unfortunately, as of May 2022, the tool stopped working due to the
  //             introduction of CAPTCHA on the official JNTUA results site, which
  //             disrupted the seamless functionality of the app. JNTUA Results
  //             Analyzer transformed the way students and faculty interacted with
  //             academic results, making it a must-have tool until its unexpected
  //             shutdown.
  //           </li>
  //         </ul>
  //       </div>
  //     );
  //   },
  // },

    {
    id: "GOWIGRO-GYM-TEMPLATE",
    category: "GYM TEMPLATE",
    title: "Elite Performance Gym",
    src: "/assets/projects-screenshots/gym-template/hero.png",
    screenshots: ["1.png", "2.png", "3.png", "4.png"],
    live: "https://gowigro-gym-template.onrender.com",
    skills: {
      frontend: [PROJECT_SKILLS.js, PROJECT_SKILLS.next, PROJECT_SKILLS.chakra],
      backend: [PROJECT_SKILLS.supabase],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            Elite Performance Gym, Transform Your Body. Build Unbreakable Discipline. The gym where results are built and limits are broken. Join the elite.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <SlideShow
            images={[
              `${BASE_PATH}/ghostchat/about.png`,
              `${BASE_PATH}/ghostchat/1.png`,
              `${BASE_PATH}/ghostchat/2.png`,
              `${BASE_PATH}/ghostchat/3.png`,
              `${BASE_PATH}/ghostchat/4.png`,
              `${BASE_PATH}/ghostchat/5.png`,
              `${BASE_PATH}/ghostchat/6.png`,

            ]}
          />
        </div>
      );
    },
  },

  
 
  {
    id: "osms-php",
    category: "SaaS Enterprise Resource Planning (ERP)",
    title: "Online Service Management System (OSMS)",
    src: "/assets/projects-screenshots/osms-php/user-login.png",
    screenshots: [
      "user-login.png",
      "admin-dashboard.png",
      "request.png",
      "service-alloment.png",
    ],
    skills: {
      frontend: [
        PROJECT_SKILLS.html,
        PROJECT_SKILLS.css,
        PROJECT_SKILLS.js,
        PROJECT_SKILLS.bootstrap,
      ],
      backend: [
        PROJECT_SKILLS.php,
        PROJECT_SKILLS.mysql,
        PROJECT_SKILLS.sockerio,
      ],
    },
    live: "",
    github: "https://github.com/CyberAli-eng/osms-php.git",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Online Service Management System (OSMS)
          </TypographyP>
          <TypographyP className="font-mono ">
            Online Service Management System (OSMS) is a comprehensive platform
            designed to streamline service management processes for businesses of
            all sizes. With a user-friendly interface and powerful features,
            OSMS empowers you to manage your services efficiently and effectively.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Problems </TypographyH3>
          <p className="font-mono mb-2">
            OSMS addresses the challenges faced by businesses in managing their
            services by providing a centralized platform for service management.
            With OSMS, businesses can streamline their service management
            processes and improve their overall efficiency.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/osms-php/user-login.png`,
              `${BASE_PATH}/osms-php/admin-dashboard.png`,
            ]}
          />
          <TypographyH3 className="my-4 mt-8">Features</TypographyH3>
          <p className="font-mono mb-2">
            osms is a comprehensive platform designed to streamline service
            management processes for businesses of all sizes. With a user-friendly
            interface and powerful features, OSMS empowers you to manage your
            services efficiently and effectively.
            <ul>
              <li>User Authentication and Authorization</li>
              <li>Service Request Management</li>
              <li>Service Allocation and Tracking</li>
              <li>Service History and Analytics</li>
              <li>User Management</li>
              <li>Service Management</li>
              <li>Service Request Management</li>
              <li>Service Allocation and Tracking</li>
              <li>Service History and Analytics</li>
            </ul>
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/osms-php/request.png`,
              `${BASE_PATH}/osms-php/service-alloment.png`,
            ]}
          />
          <TypographyH3 className="my-4 mt-8">Admin Dashboard</TypographyH3>

          <p className="font-mono mb-2">
            The admin dashboard provides a comprehensive overview of the system. It
            allows administrators to manage users, services, and service requests.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/osms-php/admin-dashboard.png`,
            ]}
          />
          <TypographyH3 className="my-4 mt-8">Service Alloment </TypographyH3>
          <p className="font-mono mb-2">
            The service alloment page allows administrators to allocate services to users.
          </p>
          <SlideShow images={[`${BASE_PATH}/osms-php/service-alloment.png`]} />
          <TypographyH3 className="my-4 mt-8">Service Request </TypographyH3>
          <p className="font-mono mb-2">
            The service request page allows users to request services.
          </p>
          <SlideShow images={[`${BASE_PATH}/osms-php/request.png`]} />
          <TypographyH3 className="my-4 mt-8">User Dashboard</TypographyH3>

          <p className="font-mono mb-2">
            The user dashboard provides a comprehensive overview of the system. It
            allows users to manage their services.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/osms-php/user-dashboard.png`,
            ]}
          />
        </div>
      );
    },
  },



  {
    id: "CyberAli-Hotel-Management-System",
    category: "Management System",
    title: "Hotel Management System",
    src: "/assets/projects-screenshots/HSM/dashboard.png",
    screenshots: ["dashboard.png", "book_rooms.png", "customer_list.png", "bii_summary.png"],
    live: "",
    github: "https://github.com/CyberAli-eng/CyberAli-Hotel-Management-System.git",
    skills: {
      frontend: [
        PROJECT_SKILLS.html,
        PROJECT_SKILLS.css,
        PROJECT_SKILLS.js,
        PROJECT_SKILLS.bootstrap,
      ],
      backend: [
        PROJECT_SKILLS.python,
        PROJECT_SKILLS.sqlite,
        PROJECT_SKILLS.django,
      ],
    },
    get content(): JSX.Element {
      return (
        <div>
          <TypographyP className="font-mono ">
            Hotel Management System (HMS) is a comprehensive platform designed to streamline hotel management processes for hotels of all sizes. With a user-friendly interface and powerful features, HMS empowers you to manage your hotel efficiently and effectively.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <p className="font-mono mb-2 mt-4">
            As soon as you land, boom! You&apos;re greeted with the freshest
            coupons and top-tier deals that&apos;ll make your wallet happy.
          </p>
          <SlideShow images={[`${BASE_PATH}/HSM/dashboard.png`]} />
          <TypographyH3 className="my-4 ">Stores</TypographyH3>
          <p className="font-mono mb-2">
            Dive into a comprehensive list of stores, each packed with exclusive
            deals and discounts. It&apos;s like having a VIP pass to every sale
            in town.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/HSM/book_rooms.png`,
              `${BASE_PATH}/HSM/customer_list.png`,
            ]}
          />
          <TypographyH3 className="my-4 mt-8">Billing Summary</TypographyH3>

          <p className="font-mono mb-2">
            💵 Dynamic Billing with Room & Food Charges
            📄 PDF/CSV Export of Final Bill
          </p>
          <SlideShow images={[`${BASE_PATH}/HSM/bii_summary.png`]} />
          <TypographyH3 className="my-4 mt-8">Room Management</TypographyH3>
          <p className="font-mono mb-2">
            🗃️ Real-time Room Availability Tracking
            📋 Easy Check-in/Check-out
            🏷️ Flexible Pricing Rules
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/HSM/book_rooms.png`,
              `${BASE_PATH}/HSM/customer_list.png`,
            ]}
          />
          <p className="font-mono mb-2 mt-5">
            📊 Dashboard for Monitoring Bookings & Revenue
          </p>
        </div>
      );
    },
  },
];
export default projects;
