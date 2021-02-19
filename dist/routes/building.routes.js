"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _typeorm = require("typeorm");

var _CreateBuildingService = _interopRequireDefault(require("../services/CreateBuildingService"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const buildingRouter = (0, _express.Router)();
buildingRouter.get('/', async (request, response) => {
  const buidingRepository = (0, _typeorm.getRepository)(_CreateBuildingService.default);
  const buildings = await buidingRepository.find();
  return response.json({
    buildings
  });
});
buildingRouter.post('/', async (request, response) => {
  const {
    name,
    latitude,
    longitude,
    descricao,
    category
  } = request.body;
  const createBuild = new _CreateBuildingService.default();
  const building = await createBuild.execute({
    name,
    latitude,
    longitude,
    descricao,
    category
  });
  return response.json(building);
});
var _default = buildingRouter;
exports.default = _default;