export interface SanityImage {
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
  };
  hotspot?: {
    x: number;
    y: number;
    height: number;
    width: number;
  };
}

export interface SanityExplanation {
  _key: string;
  context: string;
  explanationTitle: string;
  explanationSubTitle: string;
  explanationDetail: string;
  explanationImg: SanityImage;
  explanationImgDetail: string;
}

export interface SanityProject {
  _id: string;
  slug: { current: string };
  orderRank: number;
  imgURL: SanityImage;
  bigTitle: string;
  title: string;
  description: string;
  colorStart: string;
  colorEnd: string;
}

export interface SanityProjectDetail extends SanityProject {
  imgMain: SanityImage;
  descriptionTitle: string;
  link: string;
  descriptionSmallTitle: string;
  role: string;
  descriptionRole: string;
  team: string[];
  stacks: string;
  overview: string;
  detailCard: string;
  titleCard: string;
  imageCard: SanityImage[];
  explanation: SanityExplanation[];
}

export interface SanityProjectSlug {
  slug: { current: string };
}

export interface SanityAboutSection {
  _key: string;
  heading: string;
  paragraph: string;
  image: SanityImage;
}

export interface SanityExperience {
  _key: string;
  company: string;
  jobTitle: string;
  dateRange: string;
  description: string;
}

export interface SanityLinks {
  linkedin: string;
  github: string;
  resume: string;
  email: string;
}

export interface SanitySiteSettings {
  _id: string;
  name: string;
  jobTitle: string;
  location: string;
  focus: string;
  heroHeadingDesktop: string;
  heroHeadingItalic: string;
  heroHeadingMobile: string;
  heroHeadingMobileItalic: string;
  linkedin: string;
  github: string;
  resume: string;
  email: string;
  skills: string[];
  aboutHeading: string;
  aboutSections: SanityAboutSection[];
  experiences: SanityExperience[];
}
