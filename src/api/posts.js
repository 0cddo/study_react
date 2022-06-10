const sleep = (n) => new Promise((resolve) => setTimeout(resolve, n));

// {id, title, body}
const posts = [
  {
    id: 1,
    title: '심영은 화이팅',
    body: '영은이는 할 수 있다. 반드시 개발자가 된다.',
  },
  {
    id: 2,
    title: '심영은은 반드시 개발자가 된다 ',
    body: '프론트엔드 개발자가 되기 위해 필요한 덕목을 갖추자',
  },
  {
    id: 3,
    title: '프론트엔드 개발자가 알아야할 것들',
    body: 'react, redux, typescript 등... 아직 공부할 것들이 많지만 할 수 있다!!!',
  },
];

// 비동기 함수 생성
export const getPosts = async () => {
  await sleep(500);
  return posts;
};

export const getPostById = async (id) => {
  await sleep(500);
  return posts.find((post) => post.id === id);
};
