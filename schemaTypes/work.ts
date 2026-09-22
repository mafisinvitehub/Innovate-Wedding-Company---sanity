export default {
    name: "work",
    title: "Our Work",
    type: "document",
    fields: [
        {
            name: "title",
            title: "Client Name / Title",
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
            name: "location",
            title: "Location",
            type: "string",
        },
        {
            name: "service",
            title: "Service",
            type: "string",
        },
        {
            name: "description",
            title: "Story / Description",
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
            name: "gallery",
            title: "Gallery Images",
            type: "array",
            of: [{ type: "image" }],
        },
        {
            name: "videos",
            title: "Videos",
            type: "array",
            of: [
                {
                    type: "object",
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
        }
    ],
};