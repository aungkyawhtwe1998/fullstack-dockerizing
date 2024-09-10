"use client"
import { useEffect, useState } from "react";

export default function Home() {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4000/")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
          <h1>All Blogs</h1>
          {
            blogs && blogs.map(blog=>(
              // @ts-ignore
              <div key={blog.id}>{blog.title}</div>
            ))
          }
      </div>
    </main>
  );
}
