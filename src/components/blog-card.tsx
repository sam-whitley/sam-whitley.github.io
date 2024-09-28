// import { formatDate } from "@/lib/utils";
// import { Blog } from "contentlayer/generated";

// type BlogCardProps = Pick<
//   Blog,
//   "readingTime" | "slug" | "title" | "summary" | "publishedAt"
// >;

// export function BlogCard({ blog }: { blog: BlogCardProps }) {
//   return (
//     <article className="space-y-2 cursor-pointer transition hover:bg-zinc-50 hover:dark:bg-zinc-800/50 p-4 rounded-lg flex cursor-pointer flex-col rounded-xl transition hover:bg-zinc-50 hover:dark:bg-zinc-800/50 bg-white dark:bg-zinc-800/50 shadow border border-gray-200 dark:border-zinc-800/50">
//       <dl>
//         <dt className="sr-only">Published on</dt>
//         <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
//           <time dateTime={blog.publishedAt}>
//             {formatDate(blog.publishedAt)}
//           </time>
//           &nbsp;— {blog.readingTime.text}
//         </dd>
//       </dl>
//       <h3 className="text-xl font-bold leading-8 tracking-tight text-gray-900 dark:text-gray-100">
//         {blog.title}
//       </h3>
//       <p className="prose max-w-none text-gray-500 dark:text-gray-400">
//         {blog.summary}
//       </p>
//     </article>
//   );
// }

import { formatDate } from "@/lib/utils";
import { Blog } from "contentlayer/generated";
import { SocialLink } from "@/components/social-link";
import { GitHubIcon } from "@/components/icons";
import Image from "next/image";

type BlogCardProps = Pick<
  Blog,
  "readingTime" | "slug" | "title" | "summary" | "publishedAt" | "tags" | "thumbnail" | "repo"
>;

export function BlogCard({ blog }: { blog: BlogCardProps }) {
  return (
    <div className="flex cursor-pointer flex-col rounded-xl transition hover:bg-zinc-50 hover:dark:bg-zinc-800/50 bg-white dark:bg-zinc-800/50 shadow border border-gray-200 dark:border-zinc-800/50 h-full">
      
      {/* Image at the top similar to the Project Card */}
      <img
        src={blog.thumbnail}
        alt={`Thumbnail for ${blog.title}`}
        className="h-50 w-full rounded-t-xl object-cover bg-no-repeat shadow"
        width={0}
        height={0}
        // unoptimized
      />

      <div className="p-4 flex flex-col justify-between h-full">
        {/* Blog Title */}
        <h2 className="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
            {blog.title}
        </h2>

        {/* Blog Summary with fixed height to align */}
        <div
          className="mt-2 text-sm text-gray-500 dark:text-gray-400 line-clamp-4 flex-grow"
          style={{ display: '-webkit-box', WebkitLineClamp: 4, WebkitBoxOrient: 'vertical', overflow: 'hidden', textOverflow: 'ellipsis', minHeight: '4em' }}  // Adjust the minHeight if needed
        >
          {blog.summary}
        </div>

        {/* Tags */}
        <div className="mt-4 flex flex-wrap gap-1">
          {blog.tags && blog.tags.map((tag) => (
            <p key={tag} className="hover:text-primary dark:hover:text-primary inline-flex items-center rounded-full bg-zinc-100 px-2.5 py-0.5 text-xs leading-4 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-200">
              {tag}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};


