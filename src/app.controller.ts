import { Controller, Get, Post, Put } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // @Get()
  // getHello(): string {
  //   return this.appService.getHello();
  // }

  @Get('list')
  getHello(): string {
    return 'list';
  }

  @Post('list')
  create(): string {
    return 'list2';
  }

  @Get('user_*')
  getUser() {
    return 'getUser';
  }

  @Put('list/user')
  updateUser() {
    return 'updateUser';
  }

  @Put('list/:id')
  update() {
    return 'update';
  }
}
