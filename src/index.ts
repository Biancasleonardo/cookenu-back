import app from "./app";
import { signup } from "./endpoints/users/signup";
import generateId from "./services/idGenerator";

app.post('/users/signup', signup)
app.post('/users/login')
app.get('/users/profile')
app.get('/users/:id/profile')

app.post('/recipe')
app.get('/recipe/:id')