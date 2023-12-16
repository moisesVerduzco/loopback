import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Notas extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  idNotas?: number;

  @property({
    type: 'string',
    required: true,
  })
  descNotas: string;

  @property({
    type: 'string',
    required: true,
  })
  nombreNotas: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Notas>) {
    super(data);
  }
}

export interface NotasRelations {
  // describe navigational properties here
}

export type NotasWithRelations = Notas & NotasRelations;
