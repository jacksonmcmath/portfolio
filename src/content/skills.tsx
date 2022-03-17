import type { SkillGroupProps } from "../components/SkillGroup";
import * as Icon from "../icons";

// const SKILLS: SkillGroupProps[] = [
//   {
//     heading: "Languages",
//     skills: [
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
//     skills: [
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
//     skills: [
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
//     skills: [
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

export const TEST_SKILLS: SkillGroupProps[] = [
  {
    heading: "Languages",
    skills: [
      [
        { label: "Python", icon: <Icon.Python /> },
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
    ],
  },
  {
    heading: "Frameworks & Libraries",
    skills: [
      [
        { label: "React", icon: <div>.tsx</div> },
        { label: "GraphQL", icon: <div>.graphql</div> },
        { label: ".NET", icon: <div>.aspx</div> },
        { label: "Phoenix", icon: <div>.ex</div> },
        { label: "Django", icon: <div>.py</div> },
      ],
      [
        { label: "Tailwind CSS", icon: <div>.css</div> },
        { label: "OpenCV", icon: <div>.cpp</div> },
        { label: "OpenGL", icon: <div>.cpp</div> },
      ],
    ],
  },
  {
    heading: "Project Management",
    skills: [
      [
        { label: "Git", icon: <div>.git</div> },
        { label: "Visual Studio", icon: <div>.vs</div> },
        { label: "Atlassian", icon: <div>.code</div> },
      ],
      [
        { label: "Waterfall", icon: <div>:D</div> },
        { label: "Agile", icon: <div>:D</div> },
      ],
    ],
  },
  {
    heading: "Systems",
    skills: [
      [
        { label: "Python", icon: <div>.py</div> },
        { label: "C++", icon: <div>.cpp</div> },
        { label: "TypeScript", icon: <div>.ts</div> },
      ],
      [
        { label: "TypeScript", icon: <div>.ts</div> },
        { label: "JavaScript", icon: <div>.js</div> },
      ],
      [
        { label: "Python", icon: <div>.py</div> },
        { label: "C++", icon: <div>.cpp</div> },
        { label: "JavaScript", icon: <div>.js</div> },
      ],
    ],
  },
];
