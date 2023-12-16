import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {IdAdministrador} from '../models';
import {IdAdministradorRepository} from '../repositories';

export class AdminControllerController {
  constructor(
    @repository(IdAdministradorRepository)
    public idAdministradorRepository : IdAdministradorRepository,
  ) {}

  @post('/idAdmin')
  @response(200, {
    description: 'IdAdministrador model instance',
    content: {'application/json': {schema: getModelSchemaRef(IdAdministrador)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(IdAdministrador, {
            title: 'NewIdAdministrador',
            exclude: ['idAdmin'],
          }),
        },
      },
    })
    idAdministrador: Omit<IdAdministrador, 'idAdmin'>,
  ): Promise<IdAdministrador> {
    return this.idAdministradorRepository.create(idAdministrador);
  }

  @get('/idAdmin/count')
  @response(200, {
    description: 'IdAdministrador model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(IdAdministrador) where?: Where<IdAdministrador>,
  ): Promise<Count> {
    return this.idAdministradorRepository.count(where);
  }

  @get('/idAdmin')
  @response(200, {
    description: 'Array of IdAdministrador model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(IdAdministrador, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(IdAdministrador) filter?: Filter<IdAdministrador>,
  ): Promise<IdAdministrador[]> {
    return this.idAdministradorRepository.find(filter);
  }

  @patch('/idAdmin')
  @response(200, {
    description: 'IdAdministrador PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(IdAdministrador, {partial: true}),
        },
      },
    })
    idAdministrador: IdAdministrador,
    @param.where(IdAdministrador) where?: Where<IdAdministrador>,
  ): Promise<Count> {
    return this.idAdministradorRepository.updateAll(idAdministrador, where);
  }

  @get('/idAdmin/{id}')
  @response(200, {
    description: 'IdAdministrador model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(IdAdministrador, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(IdAdministrador, {exclude: 'where'}) filter?: FilterExcludingWhere<IdAdministrador>
  ): Promise<IdAdministrador> {
    return this.idAdministradorRepository.findById(id, filter);
  }

  @patch('/idAdmin/{id}')
  @response(204, {
    description: 'IdAdministrador PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(IdAdministrador, {partial: true}),
        },
      },
    })
    idAdministrador: IdAdministrador,
  ): Promise<void> {
    await this.idAdministradorRepository.updateById(id, idAdministrador);
  }

  @put('/idAdmin/{id}')
  @response(204, {
    description: 'IdAdministrador PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() idAdministrador: IdAdministrador,
  ): Promise<void> {
    await this.idAdministradorRepository.replaceById(id, idAdministrador);
  }

  @del('/idAdmin/{id}')
  @response(204, {
    description: 'IdAdministrador DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.idAdministradorRepository.deleteById(id);
  }
}
