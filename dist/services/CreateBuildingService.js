"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _typeorm = require("typeorm");

var _Building = _interopRequireDefault(require("../models/Building"));

var _Category = _interopRequireDefault(require("../models/Category"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class CreateBuildingService {
  async execute({
    name,
    latitude,
    longitude,
    descricao,
    category
  }) {
    const buildingRepository = (0, _typeorm.getRepository)(_Building.default);
    const categoryRepository = (0, _typeorm.getRepository)(_Category.default);
    let buildCategory = await categoryRepository.findOne({
      where: {
        title: category
      }
    });

    if (!buildCategory) {
      buildCategory = categoryRepository.create({
        title: category
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

var _default = CreateBuildingService;
exports.default = _default;