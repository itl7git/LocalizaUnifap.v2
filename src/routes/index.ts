import { Router } from 'express';

import buildingRouter from './building.routes';
import usersRouter from './users.routes';
import sessionsRouter from './session.routes';


const routes = Router();


routes.use('/buildings', buildingRouter);
routes.use('/users',usersRouter);
routes.use('/sessions',sessionsRouter);


export default routes;
