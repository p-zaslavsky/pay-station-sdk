import { Field } from './field.interface';

export interface Form {
  fields: Field[];
  pid: number | null;
}
