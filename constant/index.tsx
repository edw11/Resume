import {
  next,
  nike,
  nikeBanner,
  products,
  shoes,
  tailwind,
} from "../public/images";

export const project = [
  {
    id: "0",
    imgURL: nikeBanner,
    bigTitle: "Nike Clone Website",
    title: "Side Project",
    description: "Giving a new look to Nike official website.",
    colorStart: "#3C265D",
    colorEnd: "black",
    detail: {
      imgMain: nike,
      descriptionTitle: "Nike Clone",
      link: "https://nike-website-two-opal.vercel.app/",
      descriptionSmallTitle: "Give it a visit",
      role: "Team lead",
      descriptionRole:
        "-- Design, prototyping and wireframing, interaction design, front-end code",
      team: ["-"],
      stacks: "React Js | Next Js 15 | Shadcn UI | Tailwind CSS",
      Overview:
        "A pixel-perfect clone of Nike's landing page built with Next.js for server-side rendering (SSR), React for seamless interactivity, and Shadcn UI for a modern and responsive design. This project focuses on replicating the aesthetics and responsiveness of the original landing page, showcasing advanced front-end development skills and attention to detail.",
      detailCard: "HIGHLIGHTS AT A GLANCE",
      titleCard:
        "A streaming platform designed to foster authentically collaborative and mutual enjoyable moments",
      imageCard: [nikeBanner, products, shoes],
      explanation: [
        {
          context: "DESIGN",
          explanationTitle: "Extending the power of Tailwind CSS",
          explanationSubTitle: "Rapid Development and highly customizable",
          explanationDetail:
            "Accelerates development by letting you write styling and structure simultaneously in HTML/JSX without switching files, while allowing you to define custom colors, fonts, spacing, and even create new utility classes. ",
          explanationImg: tailwind,
          explanationImgDetail: "smartastudio.com",
        },
        {
          context: "PERFORMANCE",
          explanationTitle: "Server Side Rendering with Next js",
          explanationSubTitle: "Boosting Load Times and SEO ",
          explanationDetail:
            "Server Side Rendering (SSR) with Next.js ensures that web pages are pre-rendered on the server, delivering fully rendered HTML to the client. This approach significantly improves page load times, especially for low connection users. ",
          explanationImg: next,
          explanationImgDetail: "startupcode.kr",
        },
      ],
    },
  },
];
