import { defineField, defineType } from "sanity";

export default defineType({
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    // Card fields
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "bigTitle", maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "orderRank",
      title: "Order Rank",
      type: "number",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "imgURL",
      title: "Card Image",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "bigTitle",
      title: "Big Title",
      type: "string",
    }),
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "string",
    }),
    defineField({
      name: "colorStart",
      title: "Gradient Start Color",
      type: "string",
    }),
    defineField({
      name: "colorEnd",
      title: "Gradient End Color",
      type: "string",
    }),

    // Detail fields
    defineField({
      name: "imgMain",
      title: "Main Image",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "descriptionTitle",
      title: "Description Title",
      type: "string",
    }),
    defineField({
      name: "link",
      title: "Link",
      type: "url",
    }),
    defineField({
      name: "descriptionSmallTitle",
      title: "Description Small Title",
      type: "string",
    }),
    defineField({
      name: "role",
      title: "Role",
      type: "string",
    }),
    defineField({
      name: "descriptionRole",
      title: "Role Description",
      type: "string",
    }),
    defineField({
      name: "team",
      title: "Team",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "stacks",
      title: "Tech Stacks",
      type: "string",
    }),
    defineField({
      name: "overview",
      title: "Overview",
      type: "text",
    }),
    defineField({
      name: "detailCard",
      title: "Detail Card Label",
      type: "string",
    }),
    defineField({
      name: "titleCard",
      title: "Title Card",
      type: "string",
    }),
    defineField({
      name: "imageCard",
      title: "Card Images",
      type: "array",
      of: [{ type: "image", options: { hotspot: true } }],
    }),

    // Explanations
    defineField({
      name: "explanation",
      title: "Explanations",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "context",
              title: "Context",
              type: "string",
            }),
            defineField({
              name: "explanationTitle",
              title: "Title",
              type: "string",
            }),
            defineField({
              name: "explanationSubTitle",
              title: "Subtitle",
              type: "string",
            }),
            defineField({
              name: "explanationDetail",
              title: "Detail",
              type: "text",
            }),
            defineField({
              name: "explanationImg",
              title: "Image",
              type: "image",
              options: { hotspot: true },
            }),
            defineField({
              name: "explanationImgDetail",
              title: "Image Caption",
              type: "string",
            }),
          ],
          preview: {
            select: {
              title: "explanationTitle",
              subtitle: "context",
              media: "explanationImg",
            },
          },
        },
      ],
    }),
  ],
  orderings: [
    {
      title: "Order Rank",
      name: "orderRank",
      by: [{ field: "orderRank", direction: "asc" }],
    },
  ],
  preview: {
    select: {
      title: "bigTitle",
      subtitle: "title",
      media: "imgURL",
    },
  },
});
