import { Body, Controller, Post } from '@nestjs/common';
import { MathService } from './math.service';

@Controller('math')
export class MathController {
  constructor(private mathService: MathService) {}

  @Post('add')
  async accumulate(@Body('data') data: number[]) {
    return this.mathService.accumulate(data);
  }
}
