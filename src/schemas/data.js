// Content mirrors the LinkedIn profile export at
// https://www.linkedin.com/in/alp-dogramaci-0b2143265
// Entries render in the order listed. Empty sections are skipped automatically.
export const Data = {
  profile: {
    image: "./profile.jpg",
    name: "Alp Dogramaci",
    occupation: "Digital Solutions Developer at The Hills Grammar School",
    location: "Sydney, New South Wales, Australia",
    emails: ["alp.dgra@gmail.com"],

    aboutLabel: "Profile",
    about:
      "Digital Solutions Developer at Hills Grammar, leading DevOps and CI/CD initiatives while building custom solutions on the Microsoft Power Platform. Currently completing a Bachelor of Information Technology majoring in Cybersecurity at Macquarie University.",

    skillsLabel: "Skills",
    skills: [
      "DevOps",
      "CI/CD",
      "Microsoft Power Apps",
      "Microsoft Power Automate",
      "SharePoint",
      "Microsoft 365",
      "Azure AD",
      "Intune",
      "Entra",
      "Windows Server",
      "Active Directory",
      "Group Policy",
      "ClearPass",
      "HPE Networking",
    ],

    interestsLabel: "Interests",
    interests: ["Cybersecurity", "Cloud Infrastructure", "Automation"],

    // Contact renders one row per entry; empty means no links are shown.
    // Shape: { label, handle, url, icon } — icon names live in components/icon.js
    socials: [],
  },

  timeline: {
    // Ordered by start date, most recent first.
    experiences: [
      {
        title: "Digital Solutions Developer",
        company: "Hills Grammar",
        period: "May 2025 — Present",
        location: "Kenthurst, NSW",
        highlights: [
          "Leading DevOps initiatives across internal projects, including CI/CD pipeline design and implementation",
          "Planning and managing development sprints with cross-functional teams",
          "Building and maintaining custom digital solutions using Microsoft Power Platform (Power Apps, Power Automate, SharePoint integration)",
          "Supporting cloud infrastructure with Microsoft 365, Azure AD, and Intune",
          "Collaborating with IT and business units to deliver scalable, secure systems",
        ],
      },
      {
        title: "Service Desk and AV Technician",
        company: "Hills Grammar",
        period: "Jul 2023 — May 2025",
        location: "Kenthurst, NSW",
        highlights: [
          "Provided Level 1 and 2 IT support across campus for users and AV systems",
          "Developed small-scale Power Platform solutions to streamline internal processes and improve efficiency",
          "Administered Microsoft 365, Azure AD, Intune, and Entra for endpoint and identity management",
          "Managed on-premises infrastructure including Windows Server, Active Directory, and GPO",
          "Maintained ClearPass and HPE network systems",
          "Delivered efficient service through clear communication and strong troubleshooting skills",
        ],
      },
      {
        title: "IT Support Technician",
        company: "JTC Technology",
        period: "Apr 2023 — Jul 2023",
        location: "Castle Hill, NSW",
        highlights: [],
      },
      {
        title: "IT and Electronics Services Technician",
        company: "Interlink Asset Management Services",
        period: "Jan 2023 — May 2023",
        location: "Sydney, NSW",
        highlights: [
          "Perform asset management, hardware troubleshooting & various related duties",
        ],
      },
      {
        title: "Apprentice Mechanic",
        company: "Nissan Motor Corporation",
        period: "Jun 2022 — Nov 2022",
        location: "Castle Hill, NSW",
        highlights: [],
      },
      {
        title: "Sales Employee",
        company: "U.S. Lubricants",
        period: "Mar 2020 — Present",
        location: "Sydney, NSW",
        highlights: [
          "Manage and direct sales, client relations, logistics & financials",
        ],
      },
      {
        title: "Cashier",
        company: "Oporto",
        period: "Mar 2018 — Mar 2020",
        location: "Castle Hill, NSW",
        highlights: [],
      },
    ],

    educations: [
      {
        title: "Bachelor of Information Technology, Cybersecurity",
        institution: "Macquarie University",
        period: "Feb 2023 — 2027",
        description: "",
        details: [],
      },
      {
        title: "Higher School Certificate",
        institution: "Hills Grammar",
        period: "Feb 2013 — Dec 2021",
        description: "",
        details: ["Distinguished Achievers"],
      },
    ],

    // No projects listed on LinkedIn yet — this section stays hidden until
    // an entry is added here.
    projects: [],
  },
};
