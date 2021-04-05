import { PartialType } from '@nestjs/mapped-types';
import { CreateRateioDto } from './create-rateio.dto';

export class UpdateRateioDto extends PartialType(CreateRateioDto) {}
