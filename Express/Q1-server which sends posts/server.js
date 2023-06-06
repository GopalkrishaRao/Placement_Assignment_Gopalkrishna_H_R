const express = require('express');
const app = express();

app.get('/', (req, res) => {
  const posts = [
    { id: 1, title: 'Post 1', content: 'This is post 1.' },
    { id: 2, title: 'Post 2', content: 'This is post 2.' },
    { id: 3, title: 'Post 3', content: 'This is post 3.' },
    { id: 4, title: 'Post 4', content: 'This is post 4.' },
    { id: 5, title: 'Post 5', content: 'This is post 5.' },
    { id: 6, title: 'Post 6', content: 'This is post 6.' },
    { id: 7, title: 'Post 7', content: 'This is post 7.' },
    { id: 8, title: 'Post 8', content: 'This is post 8.' },
    { id: 9, title: 'Post 9', content: 'This is post 9.' },
    { id: 10, title: 'Post 10', content: 'This is post 10.' },
    { id: 11, title: 'Post 11', content: 'This is post 11.' },
    { id: 12, title: 'Post 12', content: 'This is post 12.' },
    { id: 13, title: 'Post 13', content: 'This is post 13.' },
    { id: 14, title: 'Post 14', content: 'This is post 14.' },
    { id: 15, title: 'Post 15', content: 'This is post 15.' },
    { id: 16, title: 'Post 16', content: 'This is post 16.' },
    { id: 17, title: 'Post 17', content: 'This is post 17.' },
    { id: 18, title: 'Post 18', content: 'This is post 18.' },
    { id: 19, title: 'Post 19', content: 'This is post 19.' },
    { id: 20, title: 'Post 20', content: 'This is post 20.' }
  ];

  res.json(posts);
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});


