export default {
    name: "employee",
    title: "Employee",
    type: "document",
    fields: [

        {
            name: "name",
            title: "Full Name",
            type: "string",
            validation: (Rule: any) => Rule.required(),
        },

        {
            name: "slug",
            title: "Slug (DO NOT CHANGE)",
            type: "slug",
            options: {
                source: "name",
                maxLength: 96,
            },
            validation: (Rule: any) => Rule.required(),
        },

        {
            name: "photo",
            title: "Profile Photo",
            type: "image",
            options: { hotspot: true },
        },

        {
            name: "role",
            title: "Role",
            type: "string",
        },

        {
            name: "phone",
            title: "Phone Number",
            type: "string",
        },

        {
            name: "email",
            title: "Email (Gmail)",
            type: "string",
            validation: (Rule: any) =>
                Rule.regex(
                    /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    { name: "email", invert: false }
                ).error("Enter valid email"),
        },

        {
            name: "phoneVisibility",
            title: "Phone Visibility",
            type: "string",
            options: {
                list: [
                    { title: "Show Full", value: "show" },
                    { title: "Mask Number", value: "mask" },
                    { title: "Hide Completely", value: "hide" },
                ],
            },
            initialValue: "hide",
        },

        {
            name: "phoneAction",
            title: "On Click Action",
            type: "string",
            options: {
                list: [
                    { title: "Call", value: "call" },
                    { title: "WhatsApp", value: "whatsapp" },
                ],
            },
            initialValue: "call",
        },

        {
            name: "address",
            title: "Address",
            type: "string",
        },

        {
            name: "blood",
            title: "Blood Group",
            type: "string",
        },

        {
            name: "dob",
            title: "Date of Birth",
            type: "date",
        },

        {
            name: "bio",
            title: "About",
            type: "text",
        },

        {
            name: "skills",
            title: "Skills",
            type: "array",
            of: [{ type: "string" }],
        },

        {
            name: "isActive",
            title: "Active",
            type: "boolean",
            initialValue: true,
        },

        {
            name: "socialLinks",
            title: "Social Media",
            type: "array",
            of: [
                {
                    type: "object",
                    fields: [
                        { name: "title", type: "string" },
                        { name: "url", type: "url" },
                    ],
                },
            ],
        },

        {
            name: "gallery",
            title: "Gallery",
            type: "array",
            of: [
                { type: "image" },
                {
                    type: "object",
                    name: "video",
                    fields: [
                        {
                            name: "url",
                            title: "Video URL",
                            type: "url",
                        },
                    ],
                },
            ],
        },
    ],
};