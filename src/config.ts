export const SITE = {
  title: "Astro + Tailwindcss Starter",
  description: "This Astro.build starter is setup to use Tailwindcss for styling with postcss import and nesting out of the box.",
  startDate: 2021,
};

export const PRIMARY_NAVIGATION = [
  { label: "Home", link: "/" },
  { label: "About", link: "/about" },
  { label: "Blog", link: "/blog" },
  { label: "Contact", link: "/contact" },
];

export const BRAND = {
  name: "ATS",
  phone: "(XXX) XXX-XXXX",
  email: "xxxx.xxxxx@xxxx.com",
  social: {
    facebook: "https://facebook.com",
    twitter: "https://twitter.com",
    instagram: "https://instagram.com",
    linkedin: "https://linkedin.com",
    youtube: "https://youtube.com",
    pinterest: null,
  },
  images: {
    icon: {
      url: "/assets/icon.svg",
      alt: `Brand Icon`,
      width: "100",
      height: "100",
    },
    logo: {
      url: "/assets/logo.svg",
      alt: `Brand Logo`,
      width: "300",
      height: "100",
    },
    logoReversed: {
      url: "/assets/logo-reversed.svg",
      alt: `Brand Logo Reversed`,
      width: "300",
      height: "100",
    },
  },
};

export const AUTHORS = {
  aweston: {
    name: "Adam Weston",
    image: "/assets/authors/aweston.jpg",
  },
};
