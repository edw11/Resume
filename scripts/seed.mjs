import { createClient } from "@sanity/client";
import { readFileSync } from "fs";
import path from "path";

const client = createClient({
  projectId: "88evfike",
  dataset: "resume",
  apiVersion: "2024-01-01",
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
});

const IMG_DIR = path.resolve("public/images");

async function uploadImage(filePath, filename) {
  console.log(`  Uploading ${filename}...`);
  const buffer = readFileSync(filePath);
  const ext = path.extname(filename).slice(1);
  const contentType =
    ext === "gif" ? "image/gif" : ext === "jpg" || ext === "jpeg" ? "image/jpeg" : "image/png";
  const asset = await client.assets.upload("image", buffer, {
    filename,
    contentType,
  });
  return {
    _type: "image",
    asset: { _type: "reference", _ref: asset._id },
  };
}

async function main() {
  console.log("=== Sanity Content Seed Script ===\n");

  // Upload about page images
  console.log("Uploading about page images...");
  const viewImg = await uploadImage(path.join(IMG_DIR, "view.png"), "view.png");
  const viewEuropeImg = await uploadImage(
    path.join(IMG_DIR, "viewEurope.png"),
    "viewEurope.png"
  );

  // --- Site Settings ---
  console.log("\nCreating siteSettings document...");
  await client.createOrReplace({
    _id: "siteSettings",
    _type: "siteSettings",
    name: "Edward Cahyadi",
    jobTitle: "Software Engineer",
    location: "Seoul",
    focus: "Web Development",
    heroHeadingDesktop: "I develop responsive apps &",
    heroHeadingItalic: "Interactive UI.",
    heroHeadingMobile: "I develop apps, interactions &",
    heroHeadingMobileItalic: "stories.",
    linkedin: "https://www.linkedin.com/in/edward-cahyadi11/",
    github: "https://github.com/edw11",
    resume:
      "https://drive.google.com/file/d/1nMY-231EWsDOCURxFRXZ7790kWww5dmB/view?usp=sharing",
    email: "edwardcahyadi11@gmail.com",
    skills: [
      "TypeScript",
      "JavaScript",
      "React",
      "Next.js",
      "Tailwind CSS",
      "HTML/CSS",
      "Python",
      "TensorFlow",
      "Node.js",
      "Git",
      "Figma",
    ],
    aboutHeading:
      "I'm passionate about creating beautiful applications that empower people.",
    aboutSections: [
      {
        _key: "section1",
        heading: "My Interest in Software Development",
        paragraph:
          "My passion for building applications emerged from my fascination with how technology can shape user experiences. I am particularly drawn to the creative and technical challenges of creating visually appealing, interactive, and responsive applications. Through working with JavaScript frameworks like React and Next.js, I've come to appreciate the balance between design and functionality.",
        image: viewImg,
      },
      {
        _key: "section2",
        heading: "My Background in Information Technology",
        paragraph:
          "In February of 2025, I graduated from IT school at one of the universities in South Korea. During my studies, I developed a strong passion for web development, particularly front-end technologies. I became proficient in HTML, CSS, JavaScript, and frameworks like React and Next.js, where I focused on creating dynamic, user-friendly websites and applications.",
        image: viewEuropeImg,
      },
    ],
    experiences: [
      {
        _key: "exp1",
        company: "Hyundai Elevator",
        jobTitle: "Power Engineer Assistant",
        dateRange: "07/'24 - 08/'24",
        description:
          "I assisted engineers in doing in-depth research on specific microcontroller boards to support the development and optimization of elevator inverter systems.",
      },
      {
        _key: "exp2",
        company: "Daewoong Pharmaceutical",
        jobTitle: "Mobile App Planning and Service Strategy",
        dateRange: "10/'23 - 02/'24",
        description:
          "I developed strategy and roadmap for the global version of the company's healthcare app, designed wireframes, and conducted comprehensive UX research to align the app with the needs of international markets.",
      },
    ],
  });
  console.log("  siteSettings created.");

  // --- Project 1: Nasagram ---
  console.log("\nUploading Nasagram images...");
  const nasaCover = await uploadImage(
    path.join(IMG_DIR, "nasagram/Cover.png"),
    "nasagram-cover.png"
  );
  const nasaBanner = await uploadImage(
    path.join(IMG_DIR, "nasagram/banner.png"),
    "nasagram-banner.png"
  );
  const nasaNasa = await uploadImage(
    path.join(IMG_DIR, "nasagram/nasa.png"),
    "nasagram-nasa.png"
  );
  const nasaInsta = await uploadImage(
    path.join(IMG_DIR, "nasagram/insta.png"),
    "nasagram-insta.png"
  );
  const nasaInfinite = await uploadImage(
    path.join(IMG_DIR, "nasagram/infinite.gif"),
    "nasagram-infinite.gif"
  );
  const nasaMode = await uploadImage(
    path.join(IMG_DIR, "nasagram/mode.gif"),
    "nasagram-mode.gif"
  );

  console.log("Creating Nasagram project...");
  await client.createOrReplace({
    _id: "project-nasagram",
    _type: "project",
    slug: { _type: "slug", current: "nasagram" },
    orderRank: 0,
    imgURL: nasaCover,
    bigTitle: "Nasagram",
    title: "Side Project",
    description: "A gallery for NASA's space picture API.",
    colorStart: "gray",
    colorEnd: "black",
    imgMain: nasaBanner,
    descriptionTitle: "Nasagram",
    link: "https://nasagram-dun.vercel.app/",
    descriptionSmallTitle: "Give it a visit",
    role: "Team lead",
    descriptionRole:
      "-- Design, prototyping and wireframing, interaction design, front-end code",
    team: ["-"],
    stacks: "React JS | Next JS 15 | Shadcn UI | Tailwind CSS",
    overview:
      "A website showcasing NASA's APOD (Astronomy Picture of the Day) API, built with Next.js for server-side rendering, React for interactivity, and Shadcn UI for skeleton loading. This project emphasizes creating an exceptional user interface for the APOD API while maintaining optimal performance and speed. Personally, I believe the Instagram-inspired design and infinite scrolling feature make this project stand out in terms of user experience, which is why I chose this approach for the design.",
    detailCard: "",
    titleCard: "",
    imageCard: [],
    explanation: [
      {
        _key: "exp1",
        context: "API Explanation",
        explanationTitle: "APOD",
        explanationSubTitle: "Astronomy Picture of the Day",
        explanationDetail:
          "The APOD (Astronomy Picture of the Day) API, provided by NASA, offers a daily image or photograph of our fascinating universe, accompanied by a detailed explanation written by professional astronomers. It is an excellent resource for exploring and learning about the wonders of space, featuring everything from stunning galaxy visuals to breathtaking planetary landscapes.",
        explanationImg: nasaNasa,
        explanationImgDetail: "NASA",
      },
      {
        _key: "exp2",
        context: "DESIGN",
        explanationTitle: "The Instagram inspired-design",
        explanationSubTitle: "Blending Aesthetics with Usability",
        explanationDetail:
          "The design of this project is inspired by Instagram, blending familiarity with functionality to create an engaging user experience. This approach ensures seamless navigation and continuous exploration, mimicking the interactive and intuitive style of popular social media platforms. The combination of sleek aesthetics and practicality makes 'NASAGRAM' both user-friendly and visually captivating.",
        explanationImg: nasaInsta,
        explanationImgDetail: "Nasagram",
      },
      {
        _key: "exp3",
        context: "The Features",
        explanationTitle: "The infinite scrolling feature",
        explanationSubTitle: "Effortless Exploration of Space",
        explanationDetail:
          "The infinite scrolling feature allows users to seamlessly browse through NASA's stunning APOD collection without interruptions. By loading content dynamically as users scroll, it creates a smooth and engaging experience, perfect for exploring the vast wonders of the universe.",
        explanationImg: nasaInfinite,
        explanationImgDetail: "Nasagram",
      },
      {
        _key: "exp4",
        context: "The Mode",
        explanationTitle: "Light and dark mode",
        explanationSubTitle: "Customizing the Viewing Experience",
        explanationDetail:
          "Nasagram' offers both light and dark modes, allowing users to tailor their viewing experience to their preferences or lighting conditions. The light mode provides a clean and vibrant interface, ideal for daytime use, while the dark mode ensures a comfortable and immersive experience during nighttime browsing.",
        explanationImg: nasaMode,
        explanationImgDetail: "Nasagram",
      },
    ],
  });
  console.log("  Nasagram created.");

  // --- Project 2: Nike Clone ---
  console.log("\nUploading Nike Clone images...");
  const nikeBanner = await uploadImage(
    path.join(IMG_DIR, "nike/nikeBanner.png"),
    "nike-banner.png"
  );
  const nikeMain = await uploadImage(
    path.join(IMG_DIR, "nike/nike.png"),
    "nike-main.png"
  );
  const nikeProducts = await uploadImage(
    path.join(IMG_DIR, "nike/products.png"),
    "nike-products.png"
  );
  const nikeShoes = await uploadImage(
    path.join(IMG_DIR, "nike/shoes.png"),
    "nike-shoes.png"
  );
  const nikeTailwind = await uploadImage(
    path.join(IMG_DIR, "nike/tailwind.png"),
    "nike-tailwind.png"
  );
  const nikeNext = await uploadImage(
    path.join(IMG_DIR, "nike/next.png"),
    "nike-next.png"
  );

  console.log("Creating Nike Clone project...");
  await client.createOrReplace({
    _id: "project-nike-clone",
    _type: "project",
    slug: { _type: "slug", current: "nike-clone" },
    orderRank: 1,
    imgURL: nikeBanner,
    bigTitle: "Nike Clone Website",
    title: "Side Project",
    description: "Giving a new look to Nike official website.",
    colorStart: "#3C265D",
    colorEnd: "black",
    imgMain: nikeMain,
    descriptionTitle: "Nike Clone",
    link: "https://nike-website-two-opal.vercel.app/",
    descriptionSmallTitle: "Give it a visit",
    role: "Team lead",
    descriptionRole:
      "-- Design, prototyping and wireframing, interaction design, front-end code",
    team: ["-"],
    stacks: "React Js | Next Js 15 | Shadcn UI | Tailwind CSS",
    overview:
      "A pixel-perfect clone of Nike's landing page built with Next.js for server-side rendering (SSR), React for seamless interactivity, and Shadcn UI for a modern and responsive design. This project focuses on replicating the aesthetics and responsiveness of the original landing page, showcasing advanced front-end development skills and attention to detail.",
    detailCard: "HIGHLIGHTS AT A GLANCE",
    titleCard:
      "A pixel-perfect Nike landing page clone showcasing advanced front-end development and responsive design",
    imageCard: [nikeBanner, nikeProducts, nikeShoes],
    explanation: [
      {
        _key: "exp1",
        context: "DESIGN",
        explanationTitle: "Extending the Power of Tailwind CSS",
        explanationSubTitle: "Rapid Development and Highly Customizable",
        explanationDetail:
          "Accelerates development by letting you write styling and structure simultaneously in HTML/JSX without switching files, while allowing you to define custom colors, fonts, spacing, and even create new utility classes.",
        explanationImg: nikeTailwind,
        explanationImgDetail: "smartastudio.com",
      },
      {
        _key: "exp2",
        context: "PERFORMANCE",
        explanationTitle: "Server Side Rendering with Next js",
        explanationSubTitle: "Boosting Load Times and SEO",
        explanationDetail:
          "Server Side Rendering (SSR) with Next.js ensures that web pages are pre-rendered on the server, delivering fully rendered HTML to the client. This approach significantly improves page load times, especially for low connection users.",
        explanationImg: nikeNext,
        explanationImgDetail: "startupcode.kr",
      },
    ],
  });
  console.log("  Nike Clone created.");

  // --- Project 3: Speech Emotion Recognition ---
  console.log("\nUploading SER images...");
  const serBanner = await uploadImage(
    path.join(IMG_DIR, "ser/ser_banner.png"),
    "ser-banner.png"
  );
  const serMain = await uploadImage(
    path.join(IMG_DIR, "ser/ser.png"),
    "ser-main.png"
  );
  const serArch = await uploadImage(
    path.join(IMG_DIR, "ser/architecture.png"),
    "ser-architecture.png"
  );
  const serResult1 = await uploadImage(
    path.join(IMG_DIR, "ser/result1.png"),
    "ser-result1.png"
  );
  const serResult2 = await uploadImage(
    path.join(IMG_DIR, "ser/result2.png"),
    "ser-result2.png"
  );

  console.log("Creating SER project...");
  await client.createOrReplace({
    _id: "project-ser",
    _type: "project",
    slug: { _type: "slug", current: "speech-emotion-recognition" },
    orderRank: 2,
    imgURL: serBanner,
    bigTitle: "Speech Emotion Recognition",
    title: "AI Project",
    description: "A model that can understand human emotion.",
    colorStart: "#136D4F",
    colorEnd: "black",
    imgMain: serMain,
    descriptionTitle: "Speech Emotion Recognition",
    link: "https://drive.google.com/file/d/1_M6QUvCOf8gQrDYXf036WDzr3sOssDqE/view?usp=sharing",
    descriptionSmallTitle: "Give it a visit",
    role: "Team lead",
    descriptionRole: "-- Architecture Design, Data Preparation, Model Training",
    team: ["-"],
    stacks: "Python | TensorFlow | Pandas | CNN | LSTM",
    overview:
      "Develop a speech emotion recognition model using two different approaches which are convolutional neural network and Long Short Term Memory (LSTM) algorithm and compare the result between these two deep learning methods.",
    detailCard: "HIGHLIGHTS AT A GLANCE",
    titleCard:
      "A deep learning model comparing CNN and LSTM approaches for recognizing emotions in speech",
    imageCard: [],
    explanation: [
      {
        _key: "exp1",
        context: "Architecture",
        explanationTitle: "Empowering Speech Emotion Recognition",
        explanationSubTitle: "Accurate Classification with Robust Design",
        explanationDetail:
          "This architecture enables accurate emotion classification by combining advanced data augmentation techniques, efficient preprocessing with MFCC feature extraction, and the powerful capabilities of LSTM and CNN models. The system seamlessly integrates data collection, processing, and training, allowing for rapid and scalable development while maintaining high accuracy in real-world scenarios.",
        explanationImg: serArch,
        explanationImgDetail:
          "Diagram of the Speech Emotion Recognition system model showcasing data flow and model components.",
      },
      {
        _key: "exp2",
        context: "Model Performance",
        explanationTitle: "LSTM Model Test Results",
        explanationSubTitle: "Evaluating Accuracy and Performance Metrics",
        explanationDetail:
          "The LSTM model achieves an accuracy of 61.018%, demonstrating its ability to classify emotions in speech data. The model's precision, recall, and F1 score are 0.6806, 0.5533, and 0.6806 respectively, showcasing a balanced performance. Training and testing loss and accuracy graphs indicate consistent learning, although improvements can be made for higher generalization.",
        explanationImg: serResult1,
        explanationImgDetail:
          "Graphs displaying training/testing loss and accuracy over epochs, along with performance metrics table.",
      },
      {
        _key: "exp3",
        context: "Model Performance",
        explanationTitle: "CNN Model Test Results",
        explanationSubTitle: "High Accuracy and Precision Achieved",
        explanationDetail:
          "The CNN model achieves an outstanding accuracy of 96.52%, demonstrating its strong capability in emotion recognition tasks. With precision, recall, and F1 scores of 0.9664, 0.9643, and 0.9653 respectively, it showcases exceptional performance across key metrics. The training and testing loss graphs indicate smooth convergence, while the accuracy graphs highlight robust generalization.",
        explanationImg: serResult2,
        explanationImgDetail:
          "Graphs displaying training/testing loss and accuracy over epochs, along with performance metrics table.",
      },
    ],
  });
  console.log("  SER created.");

  console.log("\n=== Seed complete! ===");
  console.log("Visit http://localhost:3000/admin to verify content.");
}

main().catch((err) => {
  console.error("Seed failed:", err);
  process.exit(1);
});
