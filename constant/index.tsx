import {
  architecture,
  banner,
  cover,
  infinite,
  insta,
  mode,
  nasa,
  next,
  nike,
  nikeBanner,
  products,
  resul1,
  result2,
  ser,
  ser_banner,
  shoes,
  tailwind,
} from "../public/images";

export const project = [
  {
    id: "0",
    imgURL: cover,
    bigTitle: "Nasagram",
    title: "Side Project",
    description: "A gallery for NASA's space picture API.",
    colorStart: "gray",
    colorEnd: "black",
    detail: {
      imgMain: banner,
      descriptionTitle: "Nasagram",
      link: "https://nasagram-dun.vercel.app/",
      descriptionSmallTitle: "Give it a visit",
      role: "Team lead",
      descriptionRole:
        "-- Design, prototyping and wireframing, interaction design, front-end code",
      team: ["-"],
      stacks: "React JS | Next JS 15 | Shadcn UI | Tailwind CSS",
      Overview:
        "A website showcasing NASA's APOD (Astronomy Picture of the Day) API, built with Next.js for server-side rendering, React for interactivity, and Shadcn UI for skeleton loading. This project emphasizes creating an exceptional user interface for the APOD API while maintaining optimal performance and speed. Personally, I believe the Instagram-inspired design and infinite scrolling feature make this project stand out in terms of user experience, which is why I chose this approach for the design. ",
      detailCard: "",
      titleCard: "",
      imageCard: [],
      explanation: [
        {
          context: "API Explanation",
          explanationTitle: "APOD",
          explanationSubTitle: "Astronomy Picture of the Day",
          explanationDetail:
            "The APOD (Astronomy Picture of the Day) API, provided by NASA, offers a daily image or photograph of our fascinating universe, accompanied by a detailed explanation written by professional astronomers. It is an excellent resource for exploring and learning about the wonders of space, featuring everything from stunning galaxy visuals to breathtaking planetary landscapes. ",
          explanationImg: nasa,
          explanationImgDetail: "NASA",
        },
        {
          context: "DESIGN",
          explanationTitle: "The Instagram inspired-design",
          explanationSubTitle: "Blending Aesthetics with Usability",
          explanationDetail:
            "The design of this project is inspired by Instagram, blending familiarity with functionality to create an engaging user experience. This approach ensures seamless navigation and continuous exploration, mimicking the interactive and intuitive style of popular social media platforms. The combination of sleek aesthetics and practicality makes 'NASAGRAM' both user-friendly and visually captivating.",
          explanationImg: insta,
          explanationImgDetail: "Nasagram",
        },
        {
          context: "The Features",
          explanationTitle: "The infinite scrolling feature",
          explanationSubTitle: "Effortless Exploration of Space",
          explanationDetail:
            "The infinite scrolling feature allows users to seamlessly browse through NASA's stunning APOD collection without interruptions. By loading content dynamically as users scroll, it creates a smooth and engaging experience, perfect for exploring the vast wonders of the universe.",
          explanationImg: infinite,
          explanationImgDetail: "Nasagram",
        },
        {
          context: "The Mode",
          explanationTitle: "Light and dark mode",
          explanationSubTitle: "Customizing the Viewing Experience",
          explanationDetail:
            "Nasagram' offers both light and dark modes, allowing users to tailor their viewing experience to their preferences or lighting conditions. The light mode provides a clean and vibrant interface, ideal for daytime use, while the dark mode ensures a comfortable and immersive experience during nighttime browsing.",
          explanationImg: mode,
          explanationImgDetail: "Nasagram",
        },
      ],
    },
  },
  {
    id: "1",
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
          explanationTitle: "Extending the Power of Tailwind CSS",
          explanationSubTitle: "Rapid Development and Highly Customizable",
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

  {
    id: "2",
    imgURL: ser_banner,
    bigTitle: "Speech Emotion Recognition",
    title: "AI Project",
    description: "A model that can understand human emotion.",
    colorStart: "#136D4F",
    colorEnd: "black",
    detail: {
      imgMain: ser,
      descriptionTitle: "Speech Emotion Recognition",
      link: "https://drive.google.com/file/d/1_M6QUvCOf8gQrDYXf036WDzr3sOssDqE/view?usp=sharing",
      descriptionSmallTitle: "Give it a visit",
      role: "Team lead",
      descriptionRole:
        "-- Architecture Design, Data Preparation, Model Training",
      team: ["-"],
      stacks: "Python | TensorFlow | Pandas | CNN | LSTM",
      Overview:
        "Develop a speech emotion recognition model using two different approaches which are convolutional neural network and Long Short Term Memory (LSTM ) algorithm and compare the result between these two deep learning methods.",
      detailCard: "HIGHLIGHTS AT A GLANCE",
      titleCard:
        "A streaming platform designed to foster authentically collaborative and mutual enjoyable moments",
      imageCard: [],
      explanation: [
        {
          context: "Architecture",
          explanationTitle: "Empowering Speech Emotion Recognition",
          explanationSubTitle: "Accurate Classification with Robust Design",
          explanationDetail:
            "This architecture enables accurate emotion classification by combining advanced data augmentation techniques, efficient preprocessing with MFCC feature extraction, and the powerful capabilities of LSTM and CNN models. The system seamlessly integrates data collection, processing, and training, allowing for rapid and scalable development while maintaining high accuracy in real-world scenarios.",
          explanationImg: architecture,
          explanationImgDetail:
            "Diagram of the Speech Emotion Recognition system model showcasing data flow and model components.",
        },
        {
          context: "Model Performance",
          explanationTitle: "LSTM Model Test Results",
          explanationSubTitle: "Evaluating Accuracy and Performance Metrics",
          explanationDetail:
            "The LSTM model achieves an accuracy of 61.018%, demonstrating its ability to classify emotions in speech data. The model's precision, recall, and F1 score are 0.6806, 0.5533, and 0.6806 respectively, showcasing a balanced performance. Training and testing loss and accuracy graphs indicate consistent learning, although improvements can be made for higher generalization.",
          explanationImg: resul1, // Use the appropriate image variable for your setup
          explanationImgDetail:
            "Graphs displaying training/testing loss and accuracy over epochs, along with performance metrics table.",
        },

        {
          context: "Model Performance",
          explanationTitle: "CNN Model Test Results",
          explanationSubTitle: "High Accuracy and Precision Achieved",
          explanationDetail:
            "The CNN model achieves an outstanding accuracy of 96.52%, demonstrating its strong capability in emotion recognition tasks. With precision, recall, and F1 scores of 0.9664, 0.9643, and 0.9653 respectively, it showcases exceptional performance across key metrics. The training and testing loss graphs indicate smooth convergence, while the accuracy graphs highlight robust generalization.",
          explanationImg: result2, // Use the appropriate image variable for your setup
          explanationImgDetail:
            "Graphs displaying training/testing loss and accuracy over epochs, along with performance metrics table.",
        },
      ],
    },
  },
];
