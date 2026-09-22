export default {
    name: "message",
    title: "Messages",
    type: "document",

    fields: [
        {
            name: "name",
            title: "Name",
            type: "string",
            validation: (Rule: any) => Rule.required(),
        },

        {
            name: "email",
            title: "Email",
            type: "string",
            validation: (Rule: any) => Rule.required(),
        },

        {
            name: "phone",
            title: "Phone",
            type: "string",
        },

        {
            name: "service",
            title: "Service",
            type: "string",
            options: {
                list: [
                    { title: "Wedding", value: "Wedding" },
                    {
                        title: "Corporate Event",
                        value: "Corporate Event",
                    },
                    {
                        title: "Photography / Video",
                        value: "Photography / Video",
                    },
                    {
                        title: "Digital / Website",
                        value: "Digital / Website",
                    },
                ],
            },
        },

        {
            name: "message",
            title: "Message",
            type: "text",
        },

        {
            name: "createdAt",
            title: "Created At",
            type: "datetime",
            initialValue: () => new Date().toISOString(),
        },
    ],
};