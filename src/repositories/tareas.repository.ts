import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DataJsonDataSource} from '../datasources';
import {Tareas, TareasRelations} from '../models';

export class TareasRepository extends DefaultCrudRepository<
  Tareas,
  typeof Tareas.prototype.idTareas,
  TareasRelations
> {
  constructor(
    @inject('datasources.dataJSON') dataSource: DataJsonDataSource,
  ) {
    super(Tareas, dataSource);
  }
}
