import {IAuthor} from "../../models";
import mainImage1 from "../../assets/images/authors/directorImage.png";
import image1 from "../../assets/images/authors/image.png";

export const authors: IAuthor[] = [
    {
        name: 'Лукашевич Олег Вацлавович',
        birthDate: '27 марта 1972 (50 лет)',
        deathDate: '__',
        biography: 'Олег Лукашевич стал первым белорусским журналистом аккредитованным на Международном Каннском кинофестивале в мае 1996 года. Постоянные аккредитации на престижных Международных кинофестивалях в Канне, Берлине и Венеции позволили Лукашевичу напрямую общаться со звездами первой величины. Он проинтервьюировал многих классиков мирового кино\n',
        mainImage: mainImage1,
        images: [
            image1,
            mainImage1,
            ],
        videoEmbedId: '64f6ZYG9_Cw',
        location: {
            lat: 53.04090127903623,
            lng: 26.260400498804135
        },
        timeline: [
            {
                year: 1999,
                title: 'Начало карьеры',
                description: 'Текст описания'
            },
            {
                year: 2000,
                title: 'Заголовок',
                description: 'Текст описания'
            }
        ]
    },
]
export const authorsMap = new Map<string, IAuthor>();