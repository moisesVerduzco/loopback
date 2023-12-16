import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class IdAdministrador extends Entity {
  @property({
    type: 'string',
    required: true,
  })
  nomAdmin: string;

  @property({
    type: 'string',
    required: true,
  })
  apellido_p: string;

  @property({
    type: 'string',
  })
  apellido_M?: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<IdAdministrador>) {
    super(data);
  }
}

export interface IdAdministradorRelations {
  // describe navigational properties here
}

export type IdAdministradorWithRelations = IdAdministrador & IdAdministradorRelations;
