import { ActionCreatorWithoutPayload } from "@reduxjs/toolkit"

export type TypeFooterLink = "/food" | "/entertainment" | "/nature"

type TypeActivCategory = "food" | "entertainment" | "nature"

export interface IFooterLink  {
    href: TypeFooterLink
    actions: ActionCreatorWithoutPayload<string>
    label: string,
    category: TypeActivCategory
}

export type TypeSortedPost = {
    id: string;
    date?: string;
    title?: string;
    contentHtml: string;
}





export interface IActivCategory {
    category: TypeActivCategory
}

export type TypeGetSortedPostsData = () => TypeSortedPost[]

export type TypelistPost = () => {
    params: {
        id: string;
    };
}[]