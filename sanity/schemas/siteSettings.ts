import { defineField, defineType } from "sanity";

export default defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  fields: [
    // Personal
    defineField({
      name: "name",
      title: "Name",
      type: "string",
    }),
    defineField({
      name: "jobTitle",
      title: "Job Title",
      type: "string",
    }),
    defineField({
      name: "location",
      title: "Location",
      type: "string",
    }),
    defineField({
      name: "focus",
      title: "Focus",
      type: "string",
    }),

    // Hero text
    defineField({
      name: "heroHeadingDesktop",
      title: "Hero Heading (Desktop)",
      type: "string",
    }),
    defineField({
      name: "heroHeadingItalic",
      title: "Hero Heading Italic (Desktop)",
      type: "string",
    }),
    defineField({
      name: "heroHeadingMobile",
      title: "Hero Heading (Mobile)",
      type: "string",
    }),
    defineField({
      name: "heroHeadingMobileItalic",
      title: "Hero Heading Italic (Mobile)",
      type: "string",
    }),

    // Links
    defineField({
      name: "linkedin",
      title: "LinkedIn URL",
      type: "url",
    }),
    defineField({
      name: "github",
      title: "GitHub URL",
      type: "url",
    }),
    defineField({
      name: "resume",
      title: "Resume URL",
      type: "url",
      validation: (Rule) =>
        Rule.uri({ allowRelative: true, scheme: ["http", "https"] }),
    }),
    defineField({
      name: "email",
      title: "Email",
      type: "string",
    }),

    // Skills
    defineField({
      name: "skills",
      title: "Skills",
      type: "array",
      of: [{ type: "string" }],
    }),

    // About page
    defineField({
      name: "aboutHeading",
      title: "About Heading",
      type: "text",
    }),
    defineField({
      name: "aboutSections",
      title: "About Sections",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "heading",
              title: "Heading",
              type: "string",
            }),
            defineField({
              name: "paragraph",
              title: "Paragraph",
              type: "text",
            }),
            defineField({
              name: "image",
              title: "Image",
              type: "image",
              options: { hotspot: true },
            }),
          ],
          preview: {
            select: {
              title: "heading",
              media: "image",
            },
          },
        },
      ],
    }),

    // Experience
    defineField({
      name: "experiences",
      title: "Experiences",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "company",
              title: "Company",
              type: "string",
            }),
            defineField({
              name: "jobTitle",
              title: "Job Title",
              type: "string",
            }),
            defineField({
              name: "dateRange",
              title: "Date Range",
              type: "string",
            }),
            defineField({
              name: "description",
              title: "Description",
              type: "text",
            }),
          ],
          preview: {
            select: {
              title: "company",
              subtitle: "jobTitle",
            },
          },
        },
      ],
    }),
  ],
  preview: {
    prepare() {
      return { title: "Site Settings" };
    },
  },
});
