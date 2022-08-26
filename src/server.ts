import express from 'express';

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/products', productsRouters);
app.use('/api/users', usersRouters);

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
