export const projects = [
  {
    title: "RegiSpot",
    date: "Feb 2026",
    tech: [
      "React",
      "Node.js",
      "AWS Lambda",
      "API Gateway",
      "DynamoDB",
      "AWS Cognito",
      "AWS SAM",
    ],
    highlights: [
      "Built a full-stack sports session signup platform for badminton groups, featuring group creation, invite-code joining, and role-based access for owners and members.",
      "Designed a serverless REST API with 12+ Lambda functions deployed via AWS SAM, backed by a single-table DynamoDB schema.",
      "Implemented session scheduling with sport-specific fields (match format, skill level, court count) and real-time signup tracking with capacity enforcement.",
      "Secured all endpoints with AWS Cognito JWT authentication and CORS-compliant API Gateway responses.",
    ],
    links: {
      github: "https://github.com/junhp94/RegiSpot",
      demo: "https://d3drhebc0ddq5m.cloudfront.net/",
    },
  },
  {
    title: "RouteNode",
    date: "Nov 2025",
    tech: [
      "Kotlin",
      "Firebase Firestore",
      "Android Studio",
      "Google Maps API",
      "Places API",
    ],
    highlights: [
      "Built a full-stack Android app that generates personalized route recommendations and saves user favorites.",
      "Designed Firestore data models for routes, favorites, and geo-tagged map pins using GeoPoint.",
      "Implemented core Android architecture with Repository and ViewModel layers.",
      "Integrated Google Maps and Places APIs with reusable RecyclerView adapters.",
    ],
    links: {
      github: "https://github.com/mark2515/RouteNode",
      demo: "",
    },
  },
  {
    title: "Donation Payment System",
    date: "Oct 2025",
    tech: ["React", "Node.js", "Express", "Moneris Checkout"],
    highlights: [
      "Developed a secure full-stack donation platform with React frontend and Node/Express backend.",
      "Built backend APIs to generate Moneris Checkout preload tickets and validate requests.",
      "Integrated Moneris Hosted Paypage v2.00 (iOA mode) with secure iframe rendering.",
      "Implemented dynamic UI updates and smooth payment flow.",
    ],
    links: {
      github: "https://github.com/junhp94/Payment",
      demo: "",
    },
  },
]
