import type { SkillGroupProps } from "../components/SkillGroup";
import { Logo } from "../icons";

// const SKILLS: SkillGroupProps[] = [
//   {
//     heading: "Languages",
//     skills: [
//       [
//         { label: "Python", icon: <Logo.Python /> },
//         { label: "C++", icon: <Logo.CPlusPlus /> },
//         { label: "MatLab", icon: <Logo.MatLab /> },
//         { label: "Java", icon: <Logo.Java /> },
//         { label: "Elixir", icon: <Logo.Elixir /> },
//       ],
//       [
//         { label: "TypeScript", icon: <Logo.TypeScript /> },
//         { label: "JavaScript", icon: <Logo.JavaScript /> },
//         { label: "HTML", icon: <Logo.HTML /> },
//         { label: "CSS", icon: <Logo.CSS /> },
//         { label: "SQL", icon: <Logo.PostgreSQL /> },
//       ],
//     ],
//   },
//   {
//     heading: "Frameworks & Libraries",
//     skills: [
//       [
//         { label: "React", icon: <Logo.React /> },
//         { label: "GraphQL", icon: <Logo.GraphQL /> },
//         { label: ".NET", icon: <Logo.Microsoft /> },
//         { label: "Phoenix", icon: <Logo.Phoenix /> },
//         { label: "Django", icon: <Logo.Django /> },
//       ],
//       [
//         { label: "Tailwind CSS", icon: <Logo.TailwindCSS /> },
//         { label: "OpenCV", icon: <Logo.OpenCV /> },
//         { label: "OpenGL", icon: <Logo.OpenGL /> },
//       ],
//     ],
//   },
//   {
//     heading: "Project Management",
//     skills: [
//       [
//         { label: "Git", icon: <Logo.Git /> },
//         { label: "Visual Studio", icon: <Logo.VisualStudio /> },
//         { label: "Atlassian", icon: <Logo.Atlassian /> },
//       ],
//       [
//         { label: "Waterfall", icon: <Logo.Waterfall /> },
//         { label: "Agile", icon: <Logo.Agile /> },
//       ],
//     ],
//   },
//   {
//     heading: "Systems",
//     skills: [
//       [
//         { label: "macOS", icon: <Logo.Apple /> },
//         { label: "Windows", icon: <Logo.Windows /> },
//         { label: "Linux", icon: <Logo.Linux /> },
//       ],
//       [
//         { label: "AWS", icon: <Logo.AWS /> },
//         { label: "Vercel", icon: <Logo.Vercel /> },
//       ],
//       [
//         { label: "Raspberry Pi", icon: <Logo.RaspberryPi /> },
//         { label: "Arduino", icon: <Logo.Arduino /> },
//         { label: "Mbed", icon: <Logo.Arm /> },
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
        { label: "Python", icon: <Logo.Python /> },
        { label: "C++", icon: <Logo.CPlusPlus /> },
        { label: "MatLab", icon: <Logo.MathWorks /> },
        { label: "Java", icon: <Logo.Java /> },
        { label: "Elixir", icon: <Logo.Elixir /> },
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
