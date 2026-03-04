export const allProjectsQuery = `*[_type == "project"] | order(orderRank asc) {
  _id,
  slug,
  orderRank,
  imgURL,
  bigTitle,
  title,
  description,
  colorStart,
  colorEnd
}`;

export const projectBySlugQuery = `*[_type == "project" && slug.current == $slug][0] {
  _id,
  slug,
  orderRank,
  imgURL,
  bigTitle,
  title,
  description,
  colorStart,
  colorEnd,
  imgMain,
  descriptionTitle,
  link,
  descriptionSmallTitle,
  role,
  descriptionRole,
  team,
  stacks,
  overview,
  detailCard,
  titleCard,
  imageCard,
  explanation
}`;

export const projectSlugsQuery = `*[_type == "project"] | order(orderRank asc) {
  slug
}`;

export const siteSettingsQuery = `*[_type == "siteSettings"][0] {
  _id,
  name,
  jobTitle,
  location,
  focus,
  heroHeadingDesktop,
  heroHeadingItalic,
  heroHeadingMobile,
  heroHeadingMobileItalic,
  linkedin,
  github,
  resume,
  email,
  skills,
  aboutHeading,
  aboutSections,
  experiences
}`;
