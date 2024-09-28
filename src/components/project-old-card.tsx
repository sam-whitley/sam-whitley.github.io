// import { GitHubIcon } from "@/components/icons";
// import { SocialLink } from "@/components/social-link";
// import { WEB_APPS } from "@/data/projectsOld";
// import Image from "next/image";

// type Props = {
//   projectOld: (typeof WEB_APPS)[number];
// };

// export const ProjectCardOld = ({ projectOld }: Props) => {
//   return (
//     <div
//       className="flex cursor-pointer flex-col rounded-xl transition hover:bg-zinc-50 hover:dark:bg-zinc-800/50 bg-white dark:bg-zinc-800/50 shadow border border-gray-200 dark:border-zinc-800/50"
//       key={projectOld.title}
//     >
//       <Image
//         src={projectOld.thumbnail}
//         alt={`Logo of ${projectOld.title}`}
//         className="h-50 w-full rounded-t-xl object-cover bg-no-repeat shadow"
//         width={0}
//         height={0}
//         unoptimized
//       />
//       <div className="p-4 flex flex-col justify-between h-full">
//         <div>
//           <a className="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
//             {projectOld.title}
//           </a>
//           <div
//             className="z-10 mt-2 text-sm text-gray-500 dark:text-gray-400 line-clamp-4"
//             style={{ display: '-webkit-box', WebkitLineClamp: 4, WebkitBoxOrient: 'vertical', overflow: 'hidden', textOverflow: 'ellipsis' }}
//           >
//             {projectOld.description}
//           </div>
//         </div>
//         <div className="z-10 mb-6 mt-6 flex flex-wrap gap-1">
//           {projectOld.tags.map((techStackItem) => (
//             <p
//               className="hover:text-primary dark:hover:text-primary inline-flex items-center rounded-full bg-zinc-100 px-2.5 py-0.5 text-xs leading-4 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-200"
//               key={techStackItem}
//             >
//               {techStackItem}
//             </p>
//           ))}
//         </div>
//         <div className="flex items-center">
//           <SocialLink
//             icon={GitHubIcon}
//             href={projectOld.repo}
//             className="h-6 w-6 flex-none"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };
