import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';
import './styles/style.css'; 

export default function Home() {
  const blogDir = "blogs";

  const files = fs.readdirSync(path.join(blogDir));

  const blogs = files.map((filename) => {
    const fileContent = fs.readFileSync(path.join(blogDir, filename), 'utf-8');

    const { data: frontMatter } = matter(fileContent);
    return {
      meta: frontMatter,
      slug: filename.replace('.mdx', ''),
    };
  });

  return (
    <div className="max-w-4xl mx-auto mt-8 p-8 lg:p-0">
      <header className="mb-8">
        <nav className='flex flex-row items-center justify-between'>
          <img className='w-10' src="/img/logo.png" alt="logo" />
          <ul className='flex flex-row items-center gap-4'>
            <li className='font-bold transition-transform transform hover:scale-110'><a href="https://lukasolivier.be/#top">Home</a></li>
            <li className='font-bold transition-transform transform hover:scale-110'><a href="https://lukasolivier.be/#project-container">Projects</a></li>
            <li className='font-bold transition-transform transform hover:scale-110'><a href="https://lukasolivier.be/#about-me">About me</a></li>
            <li className='font-bold transition-transform transform hover:scale-110'><a href="https://lukasolivier.be/#contact">Contact</a></li>
          </ul>
        </nav>
      </header>
      <main>
        <section className="py-10">
          <h1 className='text-5xl font-bold mb-2'>
            Welcome to the blog of Lukas Olivier
          </h1>
          <p className="text-xxl mb-10">Read my personal experiences as a student programmer at <a className='underline ' href="https://www.howest.be/en">Howest</a>!</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 auto-rows-auto gap-8">
            {blogs.map(blog => (
              <Link href={'/blogs/' + blog.slug} passHref key={blog.slug}>
                <div className="border rounded cursor-pointer transform transition-transform hover:scale-105">
                  <img src={blog.meta.image} alt={blog.meta.title} className="w-full h-40 rounded object-cover object-center" />
                  <div className='bg-white p-4'>
                    <h3 className="text-lg font-bold text-black">{blog.meta.title}</h3>
                    <p className="text-gray-400 mb-2">{blog.meta.description}</p>
                    <p className="text-gray-400">{blog.meta.date}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}