import contentfulClient from "@/contentful/contentfulClient";
import { TypeBlogSkeleton, IAsset } from "@/contentful/types/blog.types";
import RichText from "@/view/components/richText";

const getBlogContentful = async () => {
  try {
    const data = await contentfulClient.getEntries<TypeBlogSkeleton>({
      content_type: "blog",
    });
    console.log(data);
    return data;
  } catch (err) {
    console.log(err);
  }
};

export default async function Home() {
  const blogs = await getBlogContentful();
  return (
    <div>
      {blogs &&
        blogs.items?.map((blog, idx) => (
          <div key={idx}>
            <img
              src={`https:${(blog.fields.image as IAsset)?.fields.file.url}`}
            />
            <p className="text-lg">{blog.fields.title}</p>
            <RichText document={blog.fields.body} />
          </div>
        ))}
    </div>
  );
}
