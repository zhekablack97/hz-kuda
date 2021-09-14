export type TypeActivCategory = "food" | "entertainment" | "nature";

export interface IFooterLink {
  href: string;
  label: string;
}

export type TypeSortedPost = {
  id: string;
  date?: string;
  title?: string;
  contentHtml: string;
};

export type getMobileDetectType = {
  isMobile: () => boolean;
  isDesktop: () => boolean;
  isAndroid: () => boolean;
  isIos: () => boolean;
  isSSR: () => boolean;
};

export interface IActivCategory {
  category: TypeActivCategory;
}

export type TypeGetSortedPostsData = () => TypeSortedPost[];

export type TypelistPost = () => {
  params: {
    id: string;
  };
}[];


export interface IRestaurantAndBar{
    name: string;
    stringphoto?: string[]; //пути до картинок
    price: {
      alcoholicDrinks?: string;
      softDrinks?: string;
      snacks?: string;
      salads?: string;
      firstСourse?: string;
      secondСourse?: string;
    }
    menu?: string;
    styleRestaurant: string;
    phoneNumber: string;
    location: {
      coordinates?: {
        latitude: string;
        longitude: string;
      }
      address: string;
    }
    rating: string;
    site?: string;
}
