// import { BlogCard } from "@/components/blog-card";
// import { allBlogs } from "contentlayer/generated";
// import { Metadata } from "next";
// import { generatePageMetadata } from "../seo";
// import Link from "next/link";
// import { ENV } from "@/lib/env";
// import React from "react";

// export const metadata = generatePageMetadata({
//   title: "Blog",
//   description: "Read my blogs on web development, design and more.",
// });

// const isProd = ENV.NODE_ENV === "production";

// export default function Blog() {
//   const blogs = allBlogs.sort((a, b) => {
//     if (new Date(a.publishedAt) > new Date(b.publishedAt)) {
//       return -1;
//     }
//     return 1;
//   });

//   const undraftedBlogs = isProd ? blogs.filter((blog) => !blog.draft) : blogs;

//   return (
//   <React.Fragment>
//     <section>
//     <h1 className="mb-4 text-2xl font-bold tracking-tighter">Blogs</h1>
//       <ul>
//         {undraftedBlogs.map((blog) => (
//           <li
//             key={blog.slug}
//             className="py-1 divide-y divide-gray-200 dark:divide-gray-700"
//           >
//             <Link href={`/blogs/${blog.slug}`}>
//               <BlogCard blog={blog} />
//             </Link>
//           </li>
//         ))}
//       </ul>
//     </section>
//     </React.Fragment>
//   );
// }


import { BlogCard } from "@/components/blog-card";
import { allBlogs } from "contentlayer/generated";
import { Metadata } from "next";
import { generatePageMetadata } from "../seo";
import Link from "next/link";
import { ENV } from "@/lib/env";
import React from "react";

// export const metadata = generatePageMetadata({
//   title: "Blog",
//   description: "Read my blogs on web development, design, and more.",
// });

const isProd = ENV.NODE_ENV === "production";

export default function Blog() {
  const blogs = allBlogs.sort((a, b) => {
    if (new Date(a.publishedAt) > new Date(b.publishedAt)) {
      return -1;
    }
    return 1;
  });

  const undraftedBlogs = isProd ? blogs.filter((blog) => !blog.draft) : blogs;

  return (
    <React.Fragment>
      <section>
        <h1 className="mb-4 text-2xl font-bold tracking-tighter">Projects</h1>

        {/* Consistent Grid Layout similar to Projects Page */}
        <div role="list" className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2">
          {undraftedBlogs.map((blog) => (
            <Link href={`/projects/${blog.slug}`} key={blog.slug}>
              <BlogCard blog={blog} />
            </Link>
          ))}
        </div>
      </section>
    </React.Fragment>
  );
}
