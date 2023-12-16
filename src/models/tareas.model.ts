import {Entity, model, property} from '@loopback/repository';

@model()
export class Tareas extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  idTareas?: number;

  @property({
    type: 'string',
    required: true,
  })
  nombreTarea: string;

  @property({
    type: 'string',
    required: true,
  })
  Desc_tarea: string;


  constructor(data?: Partial<Tareas>) {
    super(data);
  }
}

export interface TareasRelations {
  // describe navigational properties here
}

export type TareasWithRelations = Tareas & TareasRelations;
