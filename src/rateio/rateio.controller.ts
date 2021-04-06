import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, ValidationPipe } from '@nestjs/common';
import { RateioService } from './rateio.service';
import { CreateRateioDto } from './dto/create-rateio.dto';
import { UpdateRateioDto } from './dto/update-rateio.dto';

@Controller('rateio')
export class RateioController {
  constructor(private readonly rateioService: RateioService) {}

  @Post()
  create(@Body( new ValidationPipe({ errorHttpStatusCode: 422 }) ) createRateioDto: CreateRateioDto) {
    return this.rateioService.create(createRateioDto);
  }

  @Get()
  findAll() {
    return this.rateioService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.rateioService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body( new ValidationPipe({ errorHttpStatusCode: 422 }) ) updateRateioDto: UpdateRateioDto) {
    return this.rateioService.update(id, updateRateioDto);
  }

  @HttpCode(204)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.rateioService.remove(id);
  }
}
