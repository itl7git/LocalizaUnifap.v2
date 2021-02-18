import { Router } from 'express';

import { getRepository } from 'typeorm';


import BuildingService from '../services/CreateBuildingService';

const buildingRouter = Router();

buildingRouter.get('/', async (request, response) => {
  const buidingRepository = getRepository(BuildingService);

  const buildings = await buidingRepository.find();

  return response.json({ buildings });

});

buildingRouter.post('/', async (request, response) => {
    const { name, latitude, longitude, descricao, category } = request.body;
  
    const createBuild = new BuildingService();
  
    const building = await createBuild.execute({
        name, latitude, longitude, descricao, category
    });
  
    return response.json(building);
  });

export default buildingRouter;