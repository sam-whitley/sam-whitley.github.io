import React from 'react';
import { useTheme } from 'next-themes';

const skills = [
  {
    name: "JavaScript",
    icon: (
      <svg
        fill="#F7DF1E"
        role="img"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        className="group-hover:fill-primary group-hover:fill-primary h-6 w-6 flex-none fill-zinc-500 hover:fill-zinc-200 transition fill-zinc-500 hover:fill-zinc-200 transition"
      >
        <title>JavaScript</title>
        <path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" />
      </svg>
    ),
  },
  {
    name: "Python",
    icon: (
      <svg
        target="_blank"
        href='https://www.python.org/' 
        fill="#F7DF1E"
        role="img"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        className="group-hover:fill-primary group-hover:fill-primary h-6 w-6 flex-none fill-zinc-500 hover:fill-zinc-200 transition fill-zinc-500 hover:fill-zinc-200 transition"
      >
        <title>Python</title>
        <path d="M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.18l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05zm-6.3 1.98l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.33-.22-.41-.09-.41.09zm13.09 3.95l.28.06.32.12.35.18.36.27.36.35.35.47.32.59.28.73.21.88.14 1.04.05 1.23-.06 1.23-.16 1.04-.24.86-.32.71-.36.57-.4.45-.42.33-.42.24-.4.16-.36.09-.32.05-.24.02-.16-.01h-8.22v.82h5.84l.01 2.76.02.36-.05.34-.11.31-.17.29-.25.25-.31.24-.38.2-.44.17-.51.15-.58.13-.64.09-.71.07-.77.04-.84.01-1.27-.04-1.07-.14-.9-.2-.73-.25-.59-.3-.45-.33-.34-.34-.25-.34-.16-.33-.1-.3-.04-.25-.02-.2.01-.13v-5.34l.05-.64.13-.54.21-.46.26-.38.3-.32.33-.24.35-.2.35-.14.33-.1.3-.06.26-.04.21-.02.13-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01zm-6.47 14.25l-.23.33-.08.41.08.41.23.33.33.23.41.08.41-.08.33-.23.23-.33.08-.41-.08-.41-.23-.33-.33-.23-.41-.08-.41.08z"/>
        </svg>
    ),
  },
  {
    name: "Docker",
    icon: (
      <svg
        fill="#F7DF1E"
        role="img"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        className="group-hover:fill-primary group-hover:fill-primary h-6 w-6 flex-none fill-zinc-500 hover:fill-zinc-200 transition fill-zinc-500 hover:fill-zinc-200 transition"
      >
        <title>Docker</title>
        <path d="M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 00.186-.186V3.574a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m0 2.716h2.118a.187.187 0 00.186-.186V6.29a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.887c0 .102.082.185.185.186m-2.93 0h2.12a.186.186 0 00.184-.186V6.29a.185.185 0 00-.185-.185H8.1a.185.185 0 00-.185.185v1.887c0 .102.083.185.185.186m-2.964 0h2.119a.186.186 0 00.185-.186V6.29a.185.185 0 00-.185-.185H5.136a.186.186 0 00-.186.185v1.887c0 .102.084.185.186.186m5.893 2.715h2.118a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m-2.93 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.083.185.185.185m-2.964 0h2.119a.185.185 0 00.185-.185V9.006a.185.185 0 00-.184-.186h-2.12a.186.186 0 00-.186.186v1.887c0 .102.084.185.186.185m-2.92 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.082.185.185.185M23.763 9.89c-.065-.051-.672-.51-1.954-.51-.338.001-.676.03-1.01.087-.248-1.7-1.653-2.53-1.716-2.566l-.344-.199-.226.327c-.284.438-.49.922-.612 1.43-.23.97-.09 1.882.403 2.661-.595.332-1.55.413-1.744.42H.751a.751.751 0 00-.75.748 11.376 11.376 0 00.692 4.062c.545 1.428 1.355 2.48 2.41 3.124 1.18.723 3.1 1.137 5.275 1.137.983.003 1.963-.086 2.93-.266a12.248 12.248 0 003.823-1.389c.98-.567 1.86-1.288 2.61-2.136 1.252-1.418 1.998-2.997 2.553-4.4h.221c1.372 0 2.215-.549 2.68-1.009.309-.293.55-.65.707-1.046l.098-.288Z"/>
      </svg>
    ),
  },

//   {
//     name: "React",
//     icon: (
//       <img
//         src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/react.svg"
//         alt="React"
//         className="group-hover:fill-primary h-6 w-6 flex-none fill-zinc-500 hover:fill-zinc-200 transition"
//       />
//     ),
//   },
//   {
//     name: "Node.js",
//     icon: (
//       <img
//         src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/node-dot-js.svg"
//         alt="Node.js"
//         className="group-hover:fill-primary h-6 w-6 flex-none fill-zinc-500 hover:fill-zinc-200 transition"
//       />
//     ),
//   },
//   {
//     name: "Python",
//     icon: (
//       <img
//         src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/python.svg"
//         alt="Python"
//         className="group-hover:fill-primary h-6 w-6 flex-none fill-zinc-500 hover:fill-zinc-200 transition"
//       />
//     ),
//   },
//   {
//     name: "Java",
//     icon: (
//       <img
//         src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/java.svg"
//         alt="Java"
//         className="group-hover:fill-primary h-6 w-6 flex-none fill-zinc-500 hover:fill-zinc-200 transition"
//       />
//     ),
//   },
//   {
//     name: "Test",
//     icon: (
//       <img
//         src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/csharp.svg"
//         alt="C#"
//         className="group-hover:fill-primary h-6 w-6 flex-none fill-zinc-500 hover:fill-zinc-200 transition"
//       />
//     ),
//   },
];

const SkillsList = () => {
  return (
    <>
      {skills.map((skill) => (
        <li key={skill.name}>
          <a
            target="_blank" 
            // href={skill.href}
            className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-white shadow"
          >
            {skill.icon}
            <span className="flex-1 ms-3 whitespace-nowrap">{skill.name}</span>
          </a>
        </li>
      ))}
    </>
  );
};

export default SkillsList;
