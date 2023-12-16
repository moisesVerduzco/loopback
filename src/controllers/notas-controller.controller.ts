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
import {Notas} from '../models';
import {NotasRepository} from '../repositories';

export class NotasControllerController {
  constructor(
    @repository(NotasRepository)
    public notasRepository : NotasRepository,
  ) {}

  @post('/notas')
  @response(200, {
    description: 'Notas model instance',
    content: {'application/json': {schema: getModelSchemaRef(Notas)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Notas, {
            title: 'NewNotas',
            exclude: ['idNotas'],
          }),
        },
      },
    })
    notas: Omit<Notas, 'idNotas'>,
  ): Promise<Notas> {
    return this.notasRepository.create(notas);
  }

  @get('/notas/count')
  @response(200, {
    description: 'Notas model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Notas) where?: Where<Notas>,
  ): Promise<Count> {
    return this.notasRepository.count(where);
  }

  @get('/notas')
  @response(200, {
    description: 'Array of Notas model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Notas, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Notas) filter?: Filter<Notas>,
  ): Promise<Notas[]> {
    return this.notasRepository.find(filter);
  }

  @patch('/notas')
  @response(200, {
    description: 'Notas PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Notas, {partial: true}),
        },
      },
    })
    notas: Notas,
    @param.where(Notas) where?: Where<Notas>,
  ): Promise<Count> {
    return this.notasRepository.updateAll(notas, where);
  }

  @get('/notas/{id}')
  @response(200, {
    description: 'Notas model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Notas, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Notas, {exclude: 'where'}) filter?: FilterExcludingWhere<Notas>
  ): Promise<Notas> {
    return this.notasRepository.findById(id, filter);
  }

  @patch('/notas/{id}')
  @response(204, {
    description: 'Notas PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Notas, {partial: true}),
        },
      },
    })
    notas: Notas,
  ): Promise<void> {
    await this.notasRepository.updateById(id, notas);
  }

  @put('/notas/{id}')
  @response(204, {
    description: 'Notas PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() notas: Notas,
  ): Promise<void> {
    await this.notasRepository.replaceById(id, notas);
  }

  @del('/notas/{id}')
  @response(204, {
    description: 'Notas DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.notasRepository.deleteById(id);
  }
}
