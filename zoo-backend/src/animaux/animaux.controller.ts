// animaux.controller.ts
import {
  Controller,
  Get,
  Post,
  Param,
  Body,
  Query,
  UseGuards,
} from '@nestjs/common';
import { AnimauxService } from './animaux.service';
import { CreateAnimalDto } from './dto/create-animal.dto';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth } from '@nestjs/swagger';

@Controller('animaux')
export class AnimauxController {
  constructor(private readonly service: AnimauxService) {}

  @Post()
  create(@Body() dto: CreateAnimalDto) {
    return this.service.create(dto);
  }

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @ApiBearerAuth()
  @UseGuards(AuthGuard('jwt'))
  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.service.findOne(id);
  }

  @Get('search/name')
  findByName(@Query('name') name: string) {
    return this.service.findByName(name);
  }
}
