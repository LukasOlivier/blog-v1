import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Link from 'next/link';
import { MDXRemote } from 'next-mdx-remote/rsc'

export async function generateStaticParams(){

    const files =fs.readdirSync(path.join('blogs'))

    const paths = files.map(filename => ({
        slug: filename.replace('.mdx', '')
    }))

    return paths
}

function getPost({slug}: {slug: string}){

    const markdownFile = fs.readFileSync(path.join('blogs', slug + '.mdx'), 'utf-8')

    const{data: fontMatter, content} = matter(markdownFile)

    return {
        fontMatter,
        slug,
        content
    }

}

export default function Page({ params }: any) {
    const props = getPost(params);

    return (
        <div className="container mx-auto px-4">
            <div className="flex items-center justify-between my-8">
                <Link href="/">
                    <button className="text-blue-500 hover:underline">← Back to Overview</button>
                </Link>
            </div>
            <article className="max-w-screen-lg mx-auto prose prose-sm md:prose-base lg:prose-lg prose-slate dark:prose-invert mt-8 mb-20">
                <h1>{props.fontMatter.title}</h1>
                <MDXRemote source={props.content}></MDXRemote>
            </article>
        </div>
    );
}