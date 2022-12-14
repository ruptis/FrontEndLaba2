import {IDirector} from "../../models";
import mainTarich from "../../assets/images/authors/mainTarich.jpg";
import mainMelehovec from "../../assets/images/authors/mainMelehovec.jpg";
import mainPtashuk from "../../assets/images/authors/mainPtashuk.jpg";
import mainKorsh from "../../assets/images/authors/mainKorsh.jpg";
import mainLukashevich from "../../assets/images/authors/mainLukashevich.jpg";
import galleryLukashevich1 from "../../assets/images/authors/galleryLukashevich1.jpg";
import galleryLukashevich2 from "../../assets/images/authors/galleryLukashevich2.jpg";
import galleryLukashevich3 from "../../assets/images/authors/galleryLukashevich3.jpg";
import galleryKorsh1 from "../../assets/images/authors/galleryKorsh1.jpg";
import galleryKorsh2 from "../../assets/images/authors/galleryKorsh2.jpg";
import galleryPtashuk1 from "../../assets/images/authors/galleryPtashuk1.jpg";
import galleryPtashuk2 from "../../assets/images/authors/galleryPtashuk2.jpg";
import galleryPtashuk3 from "../../assets/images/authors/galleryPtashuk3.jpg";
import galleryMelehovec1 from "../../assets/images/authors/galleryMelehovec1.jpg";
import galleryTarich1 from "../../assets/images/authors/galleryTarich1.jpg";
import galleryTarich2 from "../../assets/images/authors/galleryTarich2.jpg";
import galleryTarich3 from "../../assets/images/authors/galleryTarich3.jpg";

export const directors: IDirector[] = [
    {
        name: 'Лукашевич Олег Вацлавович',
        birthDate: '27 марта 1972 (50 лет)',
        deathDate: '__',
        biography: 'Олег Лукашевич стал первым белорусским журналистом аккредитованным на Международном Каннском кинофестивале в мае 1996 года. Постоянные аккредитации на престижных Международных кинофестивалях в Канне, Берлине и Венеции позволили Лукашевичу напрямую общаться со звездами первой величины. Он проинтервьюировал многих классиков мирового кино\n',
        mainImage: mainLukashevich,
        images: [
            galleryLukashevich1,
            galleryLukashevich2,
            galleryLukashevich3,
            mainLukashevich,
            ],
        videoEmbedId: '64f6ZYG9_Cw',
        location: {
            lat: 53.04090127903623,
            lng: 26.260400498804135
        },
        timeline: [
            {
                year: 1996,
                title: 'Каннский кинофестиваль',
                description: 'Олег Лукашевич стал первым белорусским журналистом аккредитованным на Международном Каннском кинофестивале в мае 1996 года'
            },
            {
                year: 2003,
                title: 'Наследие Беларуси',
                description: 'Совместно с Александром Алексеевым реализует художественный проект «Наследие Беларуси», который включает проведение фотовыставок, издание альбомов, производство документальных фильмов и телевизионных программ'
            },
            {
                year: 2014,
                title: 'Уроженцы Беларуси',
                description: 'Состоялась премьера цикла из 9 фильмов документально-просветительского проекта «Художники Парижской школы. Уроженцы Беларуси»'
            },
            {
                year: 2017,
                title: 'Искусство Беларуси',
                description: 'Олег Лукашевич выступил автором и режиссёром-постановщиком 10 фильмов цикла «Современное искусство Беларуси». Хронометраж каждого фильма 26 минут.'
            }
        ],
        pathUrl: 'lukashevich'
    },
    {
        name: 'Корш-Саблин Владимир Владимирович',
        birthDate: '16 (29) марта 1900 (74 лет)',
        deathDate: '6 июля 1974',
        biography: 'Один из основоположников белорусского кинематографа. Работал, используя в качестве псевдонима фамилию деда. Лишь в 1930-е решил использовать двойную фамилию Корш-Саблин. В 1923 году в Одессе был приглашен в качестве военного консультанта на съемки фильма, посвященного событиям гражданской войны. Тогда и началось его увлечение кинематографом.',
        mainImage: mainKorsh,
        images: [
            galleryKorsh1,
            galleryKorsh2,
            mainKorsh,
            ],
        videoEmbedId: '01QoQIrO6PE',
        location: {
            lat: 55.65148559126788, 
            lng: 37.54023189381239
        },
        timeline: [
            {
                year: 1923,
                title: 'Увлечение кинематогрофом',
                description: 'в Одессе был приглашен в качестве военного консультанта на съемки фильма, посвященного событиям гражданской войны. Тогда и началось его увлечение кинематографом.'
            },
            {
                year: 1940,
                title: 'Известность',
                description: 'Известность режиссеру принесла лирическая комедия «Моя любовь» вышедшая в этом году'
            },
            {
                year: 1944,
                title: 'Освобождение Беларуси',
                description: 'Срежиссировал совместно с Н. Ф. Садковичем полнометражный документальный фильм «Освобождение советской Белоруссии» (1944).'
            },
            {
                year: 1945,
                title: 'Беларусьфильм',
                description: 'Начиная с этого года, вплоть до 1974 является художественным руководителем киностудии «Беларусьфильм»'
            }
        ],
        pathUrl: 'korsh'
    },
    {
        name: 'Тарич Юрий Викторович',
        birthDate: '12 января 1885',
        deathDate: '21 февраля 1967 (82 года)',
        biography: 'Cоветский кинорежиссёр и сценарист. Заслуженный деятель искусств РСФСР (1935) и БССР. В начале 1950-х годов снял ряд научно-по­пулярных и художественно-документальных очерков на киностудии «Беларусьфильм»[3]. C 1954 года — режиссёр на Московской студии научно-популярных фильмов. Похоронен на Ваганьковском кладбище.',
        mainImage: mainTarich,
        images: [
            galleryTarich1,
            galleryTarich2,
            galleryTarich3,
            mainTarich,
            ],
        videoEmbedId: 'f6RyXEaIjJ4',
        location: {
            lat: 55.489430623496645, 
            lng: 28.789095692053426
        },
        timeline: [
            {
                year: 1917,
                title: 'Начало карьеры',
                description: 'Перебрался в Москву, играл на сценах театра Революции, Народного дома Алексеевский[6], начал сниматься в кино, подрабатывал и как сценарист'
            },
            {
                year: 1920,
                title: 'Первая работа как режиссёра',
                description: 'Был приглашён режиссёром на самодеятельную площадку Курсантского театра в Кремле спектакли которого разыгрывались в зале имени Я. М. Свердлова'
            },
            {
                year: 1925,
                title: 'Первая дебют',
                description: 'Как режиссёр дебютировал постановками фильмов «Морока» (совместно с Е. Ивановым-Барковым) и «Первые огни»'
            },
            {
                year: 1926,
                title: 'Первая белорусский фильм',
                description: 'Снял (совместно с Евгением Ивановым-Барковым) первый белорусский художественный фильм «Лесная быль» по рассказу Михася Чарота «Свинопас». Большая часть съемок проходила на территории БССР, в том числе в Минске.'
            },
            {
                year: 1948,
                title: 'Работа на Беларусфильм',
                description: 'С этого года был режиссёром Театра-студии киноактёра. В начале 1950-х годов снял ряд научно-по­пулярных и художественно-документальных очерков на киностудии «Беларусьфильм»'
            }
        ],
        pathUrl: 'tarich'
    },
    {
        name: 'Мелеховец Александр Анатольевич',
        birthDate: '9 ноября 1986г (36 года)',
        deathDate: '__',
        biography: 'В 2009-2017 гг. снимал в качестве режиссёра, оператора музыкальные клипы, социальные ролики, рекламу. Работы получали награды в премиях "Клип-марафон", "Street Awards", на фестивале во Фрайтбурге (Германия).',        
        mainImage: mainMelehovec,
        images: [
            galleryMelehovec1,
            mainMelehovec,
            ],
        videoEmbedId: '37fhUyGd7eY',
        location: {
            lat: 53.87773884573445, 
            lng: 27.647268782551876
        },
        timeline: [
            {
                year: 2009,
                title: 'Ролики и клипы',
                description: 'С этого года снял ряд музыкальных клипов и социальных роликов'
            },
            {
                year: 2011,
                title: 'Короткометражные фильмы',
                description: 'Начиная с этого года снял несколько короткометражных художественных фильмов.'
            },
            {
                year: 2019,
                title: 'Дебют в художественном кино',
                description: 'Дебютировал в художественном кино белорусскоязычным фильмом «Народные мстители» (экранизация повести Василя Быкова).'
            }
        ],
        pathUrl: 'melehovec'
    },
    {
        name: 'Пташук Михаил Николаевич',
        birthDate: '28 января 1943',
        deathDate: '26 апреля 2002 (59 лет)',
        biography: 'Советский и белорусский кинорежиссёр. Народный артист БССР. Работы М. Пташук неоднократно удостаивались высоких наград на престижных кинофестивалях. Для его творческой манеры характерны острое внимание к сложным историко-философским проблемам, психологическая глубина, уверенный почерк режиссера и т. д.',
        mainImage: mainPtashuk,
        images: [
            galleryPtashuk1,
            galleryPtashuk2,
            galleryPtashuk3,
            mainPtashuk,
            ],
        videoEmbedId: '3UoPcaUNwb0',
        location: {
            lat: 53.12953318134898,  
            lng: 26.052446515013813
        },
        timeline: [
            {
                year: 1973,
                title: 'Дебют в кино',
                description: 'Дебютировал в качестве кинорежиссёра сняв фильм «Про Витю, про Машу и морскую пехоту»'
            },
            {
                year: 1974,
                title: 'Беларусьфильм',
                description: 'В этом году началось многолетнее творческое сотрудничество режиссера с Национальной киностудией «Беларусьфильм»'
            },
            {
                year: 1986,
                title: 'Независимая студия',
                description: 'Михаил Пташук организует Белорусскую независимую студию при Союзе кинематографистов республики и становится ее художественным руководителем'
            },
            {
                year: 2000,
                title: 'Последний фильм',
                description: 'В этом году вышел в свет последний фильм Михаила Пташука «В августе 44-го…»'
            }
        ],
        pathUrl: 'ptashuk'
    }
]
export default directors;