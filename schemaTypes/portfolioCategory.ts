export default {
    name: "portfolioCategory",
    title: "Portfolio Category",
    type: "document",
    fields: [
        {
            name: "title",
            title: "Category Name",
            type: "string",
            validation: (Rule: any) => Rule.required(),
        },
        {
            name: "slug",
            title: "Slug",
            type: "slug",
            options: {
                source: "title",
                maxLength: 96,
            },
            validation: (Rule: any) => Rule.required(),
        },
        {
            name: "description",
            title: "Description",
            type: "text",
        },
        {
            name: "coverImage",
            title: "Cover Image",
            type: "image",
            options: {
                hotspot: true,
            },
        },
        {
            name: "featured",
            title: "Featured (Show on Home)",
            type: "boolean",
            initialValue: false,
        },
        {
            name: "media",
            title: "Media (Images + Videos)",
            type: "array",
            of: [
                { type: "image" },

                {
                    type: "object",
                    name: "video",
                    fields: [
                        {
                            name: "type",
                            title: "Type",
                            type: "string",
                            options: {
                                list: [
                                    { title: "Upload", value: "upload" },
                                    { title: "URL", value: "url" },
                                ],
                            },
                        },
                        {
                            name: "file",
                            title: "Upload Video",
                            type: "file",
                            options: {
                                accept: "video/*",
                            },
                            hidden: ({ parent }: any) => parent?.type !== "upload",
                        },
                        {
                            name: "url",
                            title: "Video URL",
                            type: "url",
                            hidden: ({ parent }: any) => parent?.type !== "url",
                        },
                    ],
                },
            ],
        },
    ],
};