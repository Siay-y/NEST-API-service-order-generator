import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
  ParseIntPipe,
} from '@nestjs/common';
import { OrdemServicoService } from './ordem-servico.service';
import { CreateOrdemServicoDto } from './dto/create-ordem-servico.dto';
import { UpdateOrdemServicoDto } from './dto/update-ordem-servico.dto';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiParam,
  ApiBody,
} from '@nestjs/swagger';

@ApiTags('service-orders')
@Controller('service-orders')
export class OrdemServicoController {
  constructor(private readonly service: OrdemServicoService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new service order' })
  @ApiBody({ type: CreateOrdemServicoDto })
  @ApiResponse({
    status: 201,
    description: 'Service order created successfully.',
  })
  create(@Body() dto: CreateOrdemServicoDto) {
    return this.service.create(dto);
  }

  @Get()
  @ApiOperation({ summary: 'List all service orders' })
  @ApiResponse({ status: 200, description: 'List retrieved successfully.' })
  findAll() {
    return this.service.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a service order by ID' })
  @ApiParam({ name: 'id', type: Number, description: 'Service order ID' })
  @ApiResponse({ status: 200, description: 'Service order found.' })
  @ApiResponse({ status: 404, description: 'Service order not found.' })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.service.findOne(id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update a service order by ID' })
  @ApiParam({ name: 'id', type: Number, description: 'Service order ID' })
  @ApiBody({ type: UpdateOrdemServicoDto })
  @ApiResponse({
    status: 200,
    description: 'Service order updated successfully.',
  })
  @ApiResponse({ status: 404, description: 'Service order not found.' })
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdateOrdemServicoDto,
  ) {
    return this.service.update(id, dto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a service order by ID' })
  @ApiParam({ name: 'id', type: Number, description: 'Service order ID' })
  @ApiResponse({
    status: 200,
    description: 'Service order deleted successfully.',
  })
  @ApiResponse({ status: 404, description: 'Service order not found.' })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.service.remove(id);
  }
}
