import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LancamentoService } from './lancamento.service';
import { CreateLancamentoDto } from './dto/create-lancamento.dto';
import { UpdateLancamentoDto } from './dto/update-lancamento.dto';

@Controller('lancamento')
export class LancamentoController {
  constructor(private readonly lancamentoService: LancamentoService) {}

  @Post()
  create(@Body() createLancamentoDto: CreateLancamentoDto) {
    return this.lancamentoService.create(createLancamentoDto);
  }

  @Get()
  findAll() {
    return this.lancamentoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.lancamentoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLancamentoDto: UpdateLancamentoDto) {
    return this.lancamentoService.update(+id, updateLancamentoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.lancamentoService.remove(+id);
  }
}
