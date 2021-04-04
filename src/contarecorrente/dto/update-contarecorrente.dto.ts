import { PartialType } from '@nestjs/mapped-types';
import { CreateContarecorrenteDto } from './create-contarecorrente.dto';

export class UpdateContarecorrenteDto extends PartialType(CreateContarecorrenteDto) {}
