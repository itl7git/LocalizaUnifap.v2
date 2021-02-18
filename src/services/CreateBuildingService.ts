import AppError from '../errors/AppError';

import { getRepository } from 'typeorm';


import Building from '../models/Building';
import Category from '../models/Category';


interface Request{
  name: string;
  latitude: string;
  longitude: string;
  descricao: string;
  category: string;
}

class CreateBuildingService {
  public async execute({name,latitude,longitude,descricao,category}:Request): Promise<Building> {
    const buildingRepository = getRepository(Building);
    const categoryRepository = getRepository(Category);

    let buildCategory = await categoryRepository.findOne({
      where: {
        title: category,
      },
    });

    if(!buildCategory){
      buildCategory = categoryRepository.create({
        title: category,
      });

      await categoryRepository.save(buildCategory);
    }

    const build = buildingRepository.create({
      name,
      latitude,
      longitude,
      descricao,
      category: buildCategory
    });

    await buildingRepository.save(build);

    return build;

  }
}

export default CreateBuildingService;