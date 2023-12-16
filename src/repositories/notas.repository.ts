import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DataJsonDataSource} from '../datasources';
import {Notas, NotasRelations} from '../models';

export class NotasRepository extends DefaultCrudRepository<
  Notas,
  typeof Notas.prototype.idNotas,
  NotasRelations
> {
  constructor(
    @inject('datasources.dataJSON') dataSource: DataJsonDataSource,
  ) {
    super(Notas, dataSource);
  }
}
