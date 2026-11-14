import { Link } from "@/types";
import { publicPath } from "@/lib/public-path";

const links: Link[] = [
  {
    title: 'Home',
    href: '/',
    thumbnail: publicPath("/assets/nav-link-previews/landing.png")
  },
  {
    title: 'Skills',
    href: '/#skills',
    thumbnail: publicPath("/assets/nav-link-previews/skills.png")
  },
  {
    title: 'Projects',
    href: '/#projects',
    thumbnail: publicPath("/assets/nav-link-previews/projects.png")
  },
  // {
  //   title: 'Skills',
  //   href: '/skills',
  //   thumbnail: publicPath("/assets/nav-link-previews/skills.png")
  // },
  // {
  //   title: 'Testimonials',
  //   href: '/testimonials',
  //   thumbnail: publicPath("/assets/nav-link-previews/testimonials.png")
  // },
  // {
  //   title: 'Blogs',
  //   href: '/blogs',
  //   thumbnail: publicPath("/assets/nav-link-previews/blog.png"),
  // },
  {
    title: 'Contact',
    href: '/#contact',
    thumbnail: publicPath("/assets/nav-link-previews/contact.png")
  }
];

export { links };
