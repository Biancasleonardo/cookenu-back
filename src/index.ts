import app from "./app";
import { getProfile } from "./endpoints/users/getProfile";
import { login } from "./endpoints/users/login";
import { signup } from "./endpoints/users/signup";
import generateId from "./services/idGenerator";

app.post('/users/signup', signup)
app.post('/users/login', login)
app.get('/users/profile', getProfile)
app.get('/users/:id/profile')

app.post('/recipe')
app.get('/recipe/:id')