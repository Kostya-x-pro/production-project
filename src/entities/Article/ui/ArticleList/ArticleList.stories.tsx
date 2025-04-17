// import React from 'react';
// import { ComponentStory, ComponentMeta } from '@storybook/react';

// import { Article, ArticleView } from '../../model/types/article';
// import { ArticleList } from './ArticleList';

// export default {
//     title: 'entities/Article/ArticleList',
//     component: ArticleList,
//     argTypes: {
//         backgroundColor: { control: 'color' },
//     },
// } as ComponentMeta<typeof ArticleList>;

// const Template: ComponentStory<typeof ArticleList> = (args) => <ArticleList {...args} />;

// const article = {
//     id: '1',
//     title: 'Javascript news asfasjf asfjkask f',
//     subtitle: 'Что нового в JS за 2022 год?',
//     img: 'https://teknotower.com/wp-content/uploads/2020/11/js.png',
//     views: 1022,
//     createdAt: '26.02.2022',
//     user: {
//         id: '1',
//         username: 'Ulbi tv',
//         avatar: 'https://xakep.ru/wp-content/uploads/2018/05/171485/KuroiSH-hacker.jpg',
//     },
//     type: [
//         'IT',
//         'SCIENCE',
//         'POLITICS',
//         'ECONOMICS',
//     ],
//     blocks: [
//         {
//             id: '2',
//             type: 'IMAGE',
//             src: 'https://hsto.org/r/w1560/getpro/habr/post_images/d56/a02/ffc/d56a02ffc62949b42904ca00c63d8cc1.png',
//             title: 'Рисунок 1 - скриншот сайта',
//         },
//         {
//             id: '3',
//             type: 'CODE',
//             // eslint-disable-next-line max-len
//             code: "const path = require('path');\n\nconst server = jsonServer.create();\n\nconst router = jsonServer.router(path.resolve(__dirname, 'db.json'));\n\nserver.use(jsonServer.defaults({}));\nserver.use(jsonServer.bodyParser);",
//         },
//         {
//             id: '7',
//             type: 'TEXT',
//             title: 'Заголовок этого блока',
//             paragraphs: [
//                 // eslint-disable-next-line max-len
//                 'JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы.',
//             ],
//         },
//         {
//             id: '8',
//             type: 'IMAGE',
//             src: 'https://hsto.org/r/w1560/getpro/habr/post_images/d56/a02/ffc/d56a02ffc62949b42904ca00c63d8cc1.png',
//             title: 'Рисунок 1 - скриншот сайта',
//         },
//         {
//             id: '9',
//             type: 'TEXT',
//             title: 'Заголовок этого блока',
//             paragraphs: [
//                 // eslint-disable-next-line max-len
//                 'JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы.',
//             ],
//         },
//     ],
// } as Article;

// export const LoadingBig = Template.bind({});
// LoadingBig.args = {
//     articles: [],
//     isLoading: true,
//     view: ArticleView.BIG,
// };

// export const LoadingSmall = Template.bind({});
// LoadingSmall.args = {
//     articles: [],
//     isLoading: true,
//     view: ArticleView.SMALL,
// };

// export const ListSmall = Template.bind({});
// ListSmall.args = {
//     articles: new Array(9)
//         .fill(0)
//         .map((item, index) => ({
//             ...article,
//             id: String(index),
//         })),
//     isLoading: false,
//     view: ArticleView.SMALL,
// };

// export const ListBig = Template.bind({});
// ListBig.args = {
//     articles: new Array(9)
//         .fill(0)
//         .map((item, index) => ({
//             ...article,
//             id: String(index),
//         })),
//     isLoading: false,
//     view: ArticleView.BIG,
// };
