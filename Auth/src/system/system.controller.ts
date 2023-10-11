import { Controller, Get } from '@nestjs/common';

@Controller('')
export class SystemController {
  constructor() {}

  @Get()
  status() {
    return {
      message: 'alive, ok',
    };
  }
}
