import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DataJsonDataSource} from '../datasources';
import {Usuario, UsuarioRelations} from '../models';

export class UsuarioRepository extends DefaultCrudRepository<
  Usuario,
  typeof Usuario.prototype.idUsuario,
  UsuarioRelations
> {
  constructor(
    @inject('datasources.dataJSON') dataSource: DataJsonDataSource,
  ) {
    super(Usuario, dataSource);
  }
}
