import { Controller, Logger, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  // Create a logger instance
  private logger = new Logger('AppController');

  // Inject the math service
  constructor(private mathService: AppService) {}

  // Map the 'POST /add' route to this method
  @Post('add')
  // Define the logic to be executed
  async accumulate() {
    //this.logger.log('Adding ' + data.toString()); // Log something on every call
    return this.mathService.accumulate(); // use math service to calc result & return
  }
}
