const tags = [
    {
        tagName: "Air",
        subTags: ["heart", "brain", "body"],
        color: "#FF0000", // Red
    },
    {
        tagName: "Water",
        subTags: ["pollution", "microbes", "toxins"],
        color: "#FFA500", // Orange
    },
    {
        tagName: "Built-Environment",
        subTags: ["walls", "windows", "doors"],
        color: "#FFFF00", // Yellow
    },
    {
        tagName: "Roads",
        subTags: ["cars", "bikes", "trucks"],
        color: "#008000", // Green
    },
    {
        tagName: "Innovation",
        subTags: ["Invention", "Creativity", "Technology"],
        color: "#0000FF", // Blue
    },
];

const items = [
    {
        name: "Alison Depew",
        projectTitle: "Neuronto Muscle",
        projectDescription: "Testing a really long description, like holy cow it's really long and I'm not sure how it will look on the page. I guess we'll find out. It just keeps going. What's happening, this is hell. Please stop. How many characters is this?",
        color: "#ff5733",
        biennaleTags: ["Air", "Water"],
        contributers: ["Alison Depew", "John Doe", "Jane Smith"],
        image: "images/2_reflection.jpg",
        imageSecondary: ["images/4_connection_details.jpg", "images/3_steps.jpg", "images/2_reflection.jpg"]
    },
    {
        name: "Red",
        projectTitle: "Description of Item 2",
        projectDescription: "Description of Item 2",
        color: "#ff0000",
        biennaleTags: ["Built-Environment", "Roads"],
        contributers: [],
        image: "images/tile-2.png",
        imageSecondary: []
    },
    {
        name: "Green",
        projectTitle: "Description of Item 3",
        projectDescription: "Description of Item 3",
        color: "#00ff00",
        biennaleTags: ["Innovation", "Air"],
        contributers: [],
        image: "images/tile-3.jpg",
        imageSecondary: []
    },
    {
        name: "Blue",
        projectTitle: "Description of Item 4",
        projectDescription: "Description of Item 4",
        color: "#0000ff",
        biennaleTags: ["Water", "Built-Environment"],
        contributers: [],
        image: "images/tile-4.png",
        imageSecondary: []
    },
    {
        name: "Yellow",
        projectTitle: "Description of Item 5",
        projectDescription: "Description of Item 5",
        color: "#ffff00",
        biennaleTags: ["Roads", "Innovation"],
        contributers: [],
        image: "images/tile-5.jpg",
        imageSecondary: []
    },
    {
        name: "Purple",
        projectTitle: "Description of Item 6",
        projectDescription: "Description of Item 6",
        color: "#800080",
        biennaleTags: ["Air", "Built-Environment"],
        contributers: [],
        image: "images/tile-6.png",
        imageSecondary: []
    },
    {
        name: "Violet",
        projectTitle: "Description of Item 5",
        projectDescription: "Description of Item 5",
        color: "#8A2BE2",
        biennaleTags: ["Water", "Roads"],
        contributers: [],
        image: "images/tile-7.jpg",
        imageSecondary: []
    },
    {
        name: "Magenta",
        projectTitle: "Description of Item 5",
        projectDescription: "Description of Item 5",
        color: "#FF00FF",
        biennaleTags: ["Innovation", "Air"],
        contributers: [],
        image: "images/tile-8.png",
        imageSecondary: []
    },
    {
        name: "Orange",
        projectTitle: "Description of Item 5",
        projectDescription: "Description of Item 5",
        color: "#FFA500",
        biennaleTags: ["Built-Environment", "Water"],
        contributers: [],
        image: "images/tile-9.png",
        imageSecondary: []
    },
    {
        name: "Violet",
        projectTitle: "Description of Item 5",
        projectDescription: "Description of Item 5",
        color: "#8A2BE2",
        biennaleTags: ["Roads", "Innovation"],
        contributers: [],
        image: "images/tile-10.png",
        imageSecondary: []
    },
    {
        name: "Magenta",
        projectTitle: "Description of Item 5",
        projectDescription: "Description of Item 5",
        color: "#FF00FF",
        biennaleTags: ["Air", "Water"],
        contributers: [],
        image: "images/tile-11.png",
        imageSecondary: []
    },
    {
        name: "Orange",
        projectTitle: "Description of Item 5",
        projectDescription: "Description of Item 5",
        color: "#FFA500",
        biennaleTags: ["Built-Environment", "Roads"],
        contributers: [],
        image: "images/tile-12.jpg",
        imageSecondary: []
    },
    {
        name: "Blue",
        projectTitle: "Description of Item 4",
        projectDescription: "Description of Item 4",
        color: "#0000ff",
        biennaleTags: ["Innovation", "Air"],
        contributers: [],
        image: "images/tile-13.jpg",
        imageSecondary: []
    },
    {
        name: "Yellow",
        projectTitle: "Description of Item 5",
        projectDescription: "Description of Item 5",
        color: "#ffff00",
        biennaleTags: ["Water", "Built-Environment"],
        contributers: [],
        image: "images/tile-14.jpg",
        imageSecondary: []
    },
    {
        name: "Purple",
        projectTitle: "Description of Item 6",
        projectDescription: "Description of Item 6",
        color: "#800080",
        biennaleTags: ["Roads", "Innovation"],
        contributers: [],
        image: "images/tile-15.jpg",
        imageSecondary: []
    },
    {
        name: "Red",
        projectTitle: "Description of Item 2",
        projectDescription: "Description of Item 2",
        color: "#ff0000",
        biennaleTags: ["Built-Environment", "Roads"],
        contributers: [],
        image: "images/tile-2.png",
        imageSecondary: []
    },
    {
        name: "Green",
        projectTitle: "Description of Item 3",
        projectDescription: "Description of Item 3",
        color: "#00ff00",
        biennaleTags: ["Innovation", "Air"],
        contributers: [],
        image: "images/tile-3.jpg",
        imageSecondary: []
    },
    {
        name: "Blue",
        projectTitle: "Description of Item 4",
        projectDescription: "Description of Item 4",
        color: "#0000ff",
        biennaleTags: ["Water", "Built-Environment"],
        contributers: [],
        image: "images/tile-4.png",
        imageSecondary: []
    },
    {
        name: "Yellow",
        projectTitle: "Description of Item 5",
        projectDescription: "Description of Item 5",
        color: "#ffff00",
        biennaleTags: ["Roads", "Innovation"],
        contributers: [],
        image: "images/tile-5.jpg",
        imageSecondary: []
    },
    {
        name: "Purple",
        projectTitle: "Description of Item 6",
        projectDescription: "Description of Item 6",
        color: "#800080",
        biennaleTags: ["Air", "Built-Environment"],
        contributers: [],
        image: "images/tile-6.png",
        imageSecondary: []
    },
    {
        name: "Violet",
        projectTitle: "Description of Item 5",
        projectDescription: "Description of Item 5",
        color: "#8A2BE2",
        biennaleTags: ["Water", "Roads"],
        contributers: [],
        image: "images/tile-7.jpg",
        imageSecondary: []
    },
    {
        name: "Magenta",
        projectTitle: "Description of Item 5",
        projectDescription: "Description of Item 5",
        color: "#FF00FF",
        biennaleTags: ["Innovation", "Air"],
        contributers: [],
        image: "images/tile-8.png",
        imageSecondary: []
    },
    {
        name: "Orange",
        projectTitle: "Description of Item 5",
        projectDescription: "Description of Item 5",
        color: "#FFA500",
        biennaleTags: ["Built-Environment", "Water"],
        contributers: [],
        image: "images/tile-9.png",
        imageSecondary: []
    },
    {
        name: "Violet",
        projectTitle: "Description of Item 5",
        projectDescription: "Description of Item 5",
        color: "#8A2BE2",
        biennaleTags: ["Roads", "Innovation"],
        contributers: [],
        image: "images/tile-10.png",
        imageSecondary: []
    },
    {
        name: "Magenta",
        projectTitle: "Description of Item 5",
        projectDescription: "Description of Item 5",
        color: "#FF00FF",
        biennaleTags: ["Air", "Water"],
        contributers: [],
        image: "images/tile-11.png",
        imageSecondary: []
    },
    {
        name: "Orange",
        projectTitle: "Description of Item 5",
        projectDescription: "Description of Item 5",
        color: "#FFA500",
        biennaleTags: ["Built-Environment", "Roads"],
        contributers: [],
        image: "images/tile-12.jpg",
        imageSecondary: []
    },
    {
        name: "Blue",
        projectTitle: "Description of Item 4",
        projectDescription: "Description of Item 4",
        color: "#0000ff",
        biennaleTags: ["Innovation", "Air"],
        contributers: [],
        image: "images/tile-13.jpg",
        imageSecondary: []
    },
    {
        name: "Yellow",
        projectTitle: "Description of Item 5",
        projectDescription: "Description of Item 5",
        color: "#ffff00",
        biennaleTags: ["Water", "Built-Environment"],
        contributers: [],
        image: "images/tile-14.jpg",
        imageSecondary: []
    },
    {
        name: "Purple",
        projectTitle: "Description of Item 6",
        projectDescription: "Description of Item 6",
        color: "#800080",
        biennaleTags: ["Roads", "Innovation"],
        contributers: [],
        image: "images/tile-15.jpg",
        imageSecondary: []
    },
    {
        name: "Magenta",
        projectTitle: "Description of Item 5",
        projectDescription: "Description of Item 5",
        color: "#FF00FF",
        biennaleTags: ["Air", "Water"],
        contributers: [],
        image: "images/tile-11.png",
        imageSecondary: []
    },
    {
        name: "Orange",
        projectTitle: "Description of Item 5",
        projectDescription: "Description of Item 5",
        color: "#FFA500",
        biennaleTags: ["Built-Environment", "Roads"],
        contributers: [],
        image: "images/tile-12.jpg",
        imageSecondary: []
    },
    {
        name: "Blue",
        projectTitle: "Description of Item 4",
        projectDescription: "Description of Item 4",
        color: "#0000ff",
        biennaleTags: ["Innovation", "Air"],
        contributers: [],
        image: "images/tile-13.jpg",
        imageSecondary: []
    },
    {
        name: "Yellow",
        projectTitle: "Description of Item 5",
        projectDescription: "Description of Item 5",
        color: "#ffff00",
        biennaleTags: ["Water", "Built-Environment"],
        contributers: [],
        image: "images/tile-14.jpg",
        imageSecondary: []
    }
];