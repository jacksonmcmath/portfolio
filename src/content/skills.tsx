import type { SectionProps } from "../components/Skill/Section";
import * as Icon from "../icons";

// const SKILLS: SectionProps[] = [
//   {
//     heading: "Languages",
//     data: [
//       [
//         { label: "Python", icon: <Icon.Python /> },
//         { label: "C++", icon: <Icon.CPlusPlus /> },
//         { label: "MatLab", icon: <Icon.MatLab /> },
//         { label: "Java", icon: <Icon.Java /> },
//         { label: "Elixir", icon: <Icon.Elixir /> },
//       ],
//       [
//         { label: "TypeScript", icon: <Icon.TypeScript /> },
//         { label: "JavaScript", icon: <Icon.JavaScript /> },
//         { label: "HTML", icon: <Icon.HTML /> },
//         { label: "CSS", icon: <Icon.CSS /> },
//         { label: "SQL", icon: <Icon.PostgreSQL /> },
//       ],
//     ],
//   },
//   {
//     heading: "Frameworks & Libraries",
//     data: [
//       [
//         { label: "React", icon: <Icon.React /> },
//         { label: "GraphQL", icon: <Icon.GraphQL /> },
//         { label: ".NET", icon: <Icon.Microsoft /> },
//         { label: "Phoenix", icon: <Icon.Phoenix /> },
//         { label: "Django", icon: <Icon.Django /> },
//       ],
//       [
//         { label: "Tailwind CSS", icon: <Icon.TailwindCSS /> },
//         { label: "OpenCV", icon: <Icon.OpenCV /> },
//         { label: "OpenGL", icon: <Icon.OpenGL /> },
//       ],
//     ],
//   },
//   {
//     heading: "Project Management",
//     data: [
//       [
//         { label: "Git", icon: <Icon.Git /> },
//         { label: "Visual Studio", icon: <Icon.VisualStudio /> },
//         { label: "Atlassian", icon: <Icon.Atlassian /> },
//       ],
//       [
//         { label: "Waterfall", icon: <Icon.Waterfall /> },
//         { label: "Agile", icon: <Icon.Agile /> },
//       ],
//     ],
//   },
//   {
//     heading: "Systems",
//     data: [
//       [
//         { label: "macOS", icon: <Icon.Apple /> },
//         { label: "Windows", icon: <Icon.Windows /> },
//         { label: "Linux", icon: <Icon.Linux /> },
//       ],
//       [
//         { label: "AWS", icon: <Icon.AWS /> },
//         { label: "Vercel", icon: <Icon.Vercel /> },
//       ],
//       [
//         { label: "Raspberry Pi", icon: <Icon.RaspberryPi /> },
//         { label: "Arduino", icon: <Icon.Arduino /> },
//         { label: "Mbed", icon: <Icon.Arm /> },
//       ],
//     ],
//   },
// ];

// export default SKILLS;

export const TEST_SKILLS: SectionProps[] = [
  {
    heading: "Languages",
    data: [
      [
        { label: "Python", icon: <Icon.Python />, href: "https://python.org/" },
        { label: "C++", icon: <div>.cpp</div> },
        { label: "MatLab", icon: <div>.m</div> },
        { label: "Java", icon: <div>.java</div> },
        { label: "Elixir", icon: <div>.ex</div> },
      ],
      [
        { label: "TypeScript", icon: <div>.ts</div> },
        { label: "JavaScript", icon: <div>.js</div> },
        { label: "HTML", icon: <div>.html</div> },
        { label: "CSS", icon: <div>.css</div> },
        { label: "SQL", icon: <div>.sql</div> },
      ],
      [
        { label: "Python", icon: <div>.py</div> },
        { label: "C++", icon: <div>.cpp</div> },
        { label: "TypeScript", icon: <div>.ts</div> },
        { label: "JavaScript", icon: <div>.js</div> },
      ],
      [
        { label: "TypeScript", icon: <div>.ts</div> },
        { label: "JavaScript", icon: <div>.js</div> },
        { label: "TypeScript", icon: <div>.ts</div> },
        { label: "JavaScript", icon: <div>.js</div> },
      ],
    ],
  },
  {
    heading: "Frameworks & Libraries",
    data: [
      [
        { label: "Python", icon: <div>.py</div> },
        { label: "C++", icon: <div>.cpp</div> },
      ],
      [
        { label: "TypeScript", icon: <div>.ts</div> },
        { label: "JavaScript", icon: <div>.js</div> },
      ],
    ],
  },
  {
    heading: "Project Management",
    data: [
      [
        { label: "Python", icon: <div>.py</div> },
        { label: "C++", icon: <div>.cpp</div> },
      ],
      [
        { label: "TypeScript", icon: <div>.ts</div> },
        { label: "JavaScript", icon: <div>.js</div> },
      ],
    ],
  },
  {
    heading: "Systems",
    data: [
      [
        { label: "Python", icon: <div>.py</div> },
        { label: "C++", icon: <div>.cpp</div> },
      ],
      [
        { label: "TypeScript", icon: <div>.ts</div> },
        { label: "JavaScript", icon: <div>.js</div> },
      ],
      [
        { label: "Python", icon: <div>.py</div> },
        { label: "C++", icon: <div>.cpp</div> },
      ],
      [
        { label: "TypeScript", icon: <div>.ts</div> },
        { label: "JavaScript", icon: <div>.js</div> },
      ],
    ],
  },
];
