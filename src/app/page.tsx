import Image from "next/image";
import { SOCIALS } from "../data/socials";
import { SocialLink } from "@/components/social-link";
import { allBlogs } from "contentlayer/generated";
import { BlogCard } from "@/components/blog-card";
import React from "react";
import { LINKS } from "@/lib/constants";
import SkillsList from "@/components/icons/skills";

export default function Home() {
  const blogs = allBlogs.slice(0, 2).sort((a, b) => {
    if (new Date(a.publishedAt) > new Date(b.publishedAt)) {
      return -1;
    }
    return 1;
  });

  return (
    <React.Fragment>
      {/* mb-8 */}
      <section className="">
        <div className="min-w-[300px] min-h-[400px] p-6 bg-white dark:bg-zinc-800/50 rounded-xl shadow border border-gray-200 dark:border-zinc-800/50">
          <Image
            src="/_static/profilePicture.jpg"
            width={130}
            height={130}
            alt="avatar"
            className="rounded-xl mb-5 shadow"
            priority
          />
          <h1 className="text-2xl font-bold">Sam Whitley</h1>
          <p className="opacity-70">Bachelor’s Degree in Information and Communication Technology</p>

          <div className="text-gray-700 dark:text-gray-300 mt-4 leading-relaxed">
            <p className="mb-4">
            Currently, I&apos;m actively seeking new opportunities to leverage my skills and expertise as an <a className="inline-flex items-center font-medium text-blue-600 dark:text-blue-500">Information Technology Specialist</a>.
            </p>
            
            <p className="mb-4">
              Feel free to reach out via email at&nbsp; 
              <a href="mailto:sam.whitley@pm.me" className="inline-flex items-center font-medium text-blue-600 dark:text-blue-500 hover:underline">
                sam.whitley@pm.me
              </a>
              &nbsp;or connect with me on&nbsp; 
              <a href="https://www.linkedin.com/in/sam-whitley/" target="_blank" className="inline-flex items-center font-medium text-blue-600 dark:text-blue-500 hover:underline">
                LinkedIn!
              </a>
            </p>
          </div>

          <div className="flex space-x-4 mt-6">
            {SOCIALS.map((social) => (
              <SocialLink
                key={social.label}
                aria-label={`Follow on ${social.label}`}
                href={social.href}
                icon={social.icon}
                className="hover:scale-110 transition-transform"
              />
            ))}
          </div>

          {/* <p className="mt-6 inline-flex items-center font-medium text-blue-600 dark:text-blue-500 hover:underline cursor-pointer">
            <a href={LINKS.RESUME} target="_blank" rel="noopener noreferrer">
              View Resume
            </a>
            <svg className="w-4 h-4 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
          </p> */}
        </div>
      {/* </section> */}

      {/* <div className="my-8 w-full border-t-2 border-gray-200 dark:border-zinc-800/50 rounded-xl shadow" /> */}
      <div className="my-8 " />

      {/* <section> */}
        {/* <h2 className="mb-6 text-2xl font-bold">Connect wallet</h2>

        <ul className="space-y-4">
          {blogs.map((blog) => (
            <li key={blog.slug} className="py-1">
              <Link href={`/blog/${blog.slug}`}>
                <BlogCard blog={blog} />
              </Link>
            </li>
          ))}
        </ul> */}


{/* group-hover:fill-primary group-hover:fill-primary h-6 w-6 flex-none fill-zinc-500 hover:fill-zinc-200 transition  flex-none fill-zinc-500 hover:fill-zinc-200 transition  */}

{/* mb-8 */}
      <section className="">
        <div className="min-w-[300px] p-6 bg-white dark:bg-zinc-800/50 rounded-xl shadow border border-gray-200 dark:border-zinc-800/50">
          <h1 className="text-2xl font-bold">Technical Skills</h1>
          {/* <p className="opacity-70 text-gray-500 dark:text-gray-400">
            Here are some of the programming skills I possess.
          </p> */}

        {/* Info section */}
        <div className="my-3 flex items-center p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400" role="alert">
          <svg className="flex-shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
          </svg>
          <span className="sr-only">Info</span>
          <div>
            <span className="font-medium">Info!</span> This section is still under construction! 🛠️
          </div>
        </div>

          <ul className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-3 sm:grid-cols-2">
            <SkillsList />
          </ul>
        </div>
      </section>

      </section>
    </React.Fragment>
  );
}
