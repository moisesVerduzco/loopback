import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DataJsonDataSource} from '../datasources';
import {IdAdministrador, IdAdministradorRelations} from '../models';

export class IdAdministradorRepository extends DefaultCrudRepository<
  IdAdministrador,
  typeof IdAdministrador.prototype.id, // Corregido aquí
  IdAdministradorRelations
> {
  constructor(
    @inject('datasources.dataJSON') dataSource: DataJsonDataSource,
  ) {
    super(IdAdministrador, dataSource);
  }
}
