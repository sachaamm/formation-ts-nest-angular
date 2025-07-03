// animaux.controller.ts
import {
  Controller,
  Get,
  Post,
  Param,
  Body,
  Query,
  UseGuards,
  Delete,
} from '@nestjs/common';
import { AnimauxService } from './animaux.service';
import { CreateAnimalDto } from './dto/create-animal.dto';
import { AuthGuard } from '@nestjs/passport';
import {
  ApiBearerAuth,
  ApiBody,
  ApiOperation,
  ApiResponse,
} from '@nestjs/swagger';
import { Roles, RolesGuard } from 'src/auth/roles.guard';
import { AnimalDto } from './dto/animal.dto';

@Controller('animaux')
export class AnimauxController {
  constructor(private readonly service: AnimauxService) {}

  @ApiOperation({ summary: 'Create a new animal' })
  @ApiResponse({
    status: 201,
    description: 'Returns the created animal',
    type: AnimalDto,
  })
  @ApiBody({ type: CreateAnimalDto })
  @Post()
  create(@Body() dto: CreateAnimalDto) {
    return this.service.create(dto);
  }

  @ApiOperation({ summary: 'List all animals' })
  @ApiResponse({
    status: 200,
    description: 'Returns list of all animals',
    type: [AnimalDto],
  })
  @Get()
  findAll() {
    return this.service.findAll();
  }

  @ApiBearerAuth()
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Roles('veterinaire', 'gardien')
  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.service.findOne(id);
  }

  @Get('search/name')
  findByName(@Query('name') name: string) {
    return this.service.findByName(name);
  }

  // Delete animal
  @Delete(':id')
  deleteWithId(@Param('id') id: number) {
    return this.service.deleteWithId(id);
  }
}
