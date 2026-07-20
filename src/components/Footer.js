import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

const FOOTER_LINKS = [
  { label: "Back to top", href: "#top", type: "anchor" },
  {
    label: "GitHub",
    href: "https://github.com/dionleung14",
    type: "external",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/leungdion/",
    type: "external",
  },
  {
    label: "Email",
    href: "mailto:dioncleung@gmail.com",
    type: "external",
  },
  {
    label: "Twitter",
    href: "https://www.twitter.com/DionTheDev",
    type: "external",
  },
];

const POWERED_BY_LINKS = [
  { label: "React,", href: "https://reactjs.org/" },
  { label: "Axios,", href: "https://www.npmjs.com/package/axios" },
  { label: "NodeMailer,", href: "https://www.npmjs.com/package/nodemailer" },
  {
    label: "React Anchor Link Smooth Scroll,",
    href: "https://www.npmjs.com/package/react-anchor-link-smooth-scroll",
  },
  {
    label: "Typed.js.",
    href: "https://www.npmjs.com/package/typed.js",
    prefix: "and ",
  },
  {
    label: "Tailwind CSS.",
    href: "https://tailwindcss.com/",
    prefix: "Styled with ",
  },
];

export default function Footer(props) {
  const dark = props.darkModeApp.darkMode;

  const linkClass = `border border-transparent px-2 rounded ${
    dark
      ? "hover:border-white bg-dclpal1-100 text-white hover:bg-dclpal1-500"
      : "text-black hover:bg-dclpal1-400 hover:border-dclpal1-100 hover:bg-dclpal1-100"
  }`;

  const creditClass = "text-link";

  return (
    <div
      className={`w-full h-auto lg:h-48 border-t ${
        dark ? "border-white bg-dclpal1-100 text-white" : "border-black"
      }`}>
      <div className="flex flex-row flex-wrap justify-around items-center my-4">
        {FOOTER_LINKS.map(link =>
          link.type === "anchor" ? (
            <AnchorLink key={link.label} href={link.href} className={linkClass}>
              {link.label}
            </AnchorLink>
          ) : (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={linkClass}>
              {link.label}
            </a>
          ),
        )}
        <div>Copyright &copy; 2020</div>
      </div>
      <div className="text-center my-8 px-4">
        Powered by{" "}
        {POWERED_BY_LINKS.map(link => (
          <React.Fragment key={link.href}>
            {link.prefix || ""}
            <a
              href={link.href}
              target="_blank"
              rel="noreferrer noopener"
              className={creditClass}>
              {link.label}
            </a>{" "}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
