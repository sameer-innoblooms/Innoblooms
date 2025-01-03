// /(Landingpage)/blogs/[name]/page.js
import { useEffect, useState } from "react";
import { BlogsArray } from "../BlogsDataArray";
import BlogData from "./BlogData";

export async function generateStaticParams() {
  // Return an array of objects with the dynamic segment (name in this case)
  return BlogsArray.map((blog: any) => ({
    id: String(blog.id), // Ensure the name matches the dynamic segment
  }));
}

export default function BlogPage({ params }: any) {
 

  return (
    <BlogData/>
  );
}
