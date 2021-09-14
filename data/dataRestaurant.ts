import { IRestaurantAndBar } from "@type/type";

export const restaurant: IRestaurantAndBar[] = [
    {
        name: 'Любовь Пирогова',
        price: {
            snacks: "150р - 300р"
        },
        styleRestaurant: "Пекарня",
        phoneNumber: "74951200097",
        location: {
            address: "ул. Мытная, 74 Даниловский рынок, Москва 115191 Россия"
        },
        rating: "тут достаточно вкусно"
    },
    {
        name: 'Русский паб',
        price: {
            snacks: "450р - 500р"
        },
        styleRestaurant: "Бар",
        phoneNumber: "74957446361",
        location: {
            address: "Тверской бульвар, 10с1, Москва 103009 Россия"
        },
        rating: "Можно сходить с друзьями вечером"
    }
]