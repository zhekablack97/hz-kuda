export type TypeSortedPost = {
    id: string;
    date?: string;
    title?: string;
    contentHtml: string;
}

export type TypeGetSortedPostsData = () => TypeSortedPost[]

export type TypelistPost = () => {
    params: {
        id: string;
    };
}[]