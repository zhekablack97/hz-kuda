import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import html from 'remark-html'
import { TypelistPost, TypeSortedPost } from '../type'
import remark from 'remark'
// import { TypeGetSortedPostsData } from '../type'

const postsDirectory = path.join(process.cwd(), 'data')

export  const getPostData = async (id: string) => {
  

  const fullPath = path.join(postsDirectory, `${id}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents)

  // Use remark to convert markdown into HTML string
  const processedContent = await remark().use(html).process(matterResult.content)
  const contentHtml = processedContent.toString()

  // Combine the data with the id and contentHtml
  return {
    id,
    contentHtml,
    ...matterResult.data
  }
}

export const getSortedPostsData = () => {
  // Get file names under /posts

  console.log(path.join(postsDirectory, `pre-rendering.md`))

  const fileNames = fs.readdirSync(postsDirectory)
  const allPostsData = fileNames.map(fileName => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, '')

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents)

    // Combine the data with the id
    return {
      id,
      ...matterResult.data
    }
  })
  // Sort posts by date
  return allPostsData.sort((a: TypeSortedPost, b: TypeSortedPost) => {
    if (a.date < b.date) {
      return 1
    } else {
      return -1
    }
  })
}

export const getAllPostIds: TypelistPost = () => {
   const fileNames = fs.readdirSync(postsDirectory)


  return fileNames.map(fileName => {
    return {
      params: {
        id: fileName.replace(/\.md$/, '')
      }
    }
  })
}