import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ContarecorrenteService } from './contarecorrente.service';
import { CreateContarecorrenteDto } from './dto/create-contarecorrente.dto';
import { UpdateContarecorrenteDto } from './dto/update-contarecorrente.dto';

@Controller('contarecorrente')
export class ContarecorrenteController {
  constructor(private readonly contarecorrenteService: ContarecorrenteService) {}

  @Post()
  create(@Body() createContarecorrenteDto: CreateContarecorrenteDto) {
    return this.contarecorrenteService.create(createContarecorrenteDto);
  }

  @Get()
  findAll() {
    return this.contarecorrenteService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.contarecorrenteService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateContarecorrenteDto: UpdateContarecorrenteDto) {
    return this.contarecorrenteService.update(id, updateContarecorrenteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.contarecorrenteService.remove(id);
  }
}
