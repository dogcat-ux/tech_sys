import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { LoginDto } from './dto/userDto';
import { UserService } from './user.service';

@Controller('user')
// @UseGuards(OpAuthGuard, RolesGuard)
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('login')
  public login(@Body() body: LoginDto) {
    // this.userService.findOne({
    //   username: body.username,
    //   password: body.password,
    // })
    // return "212"
  }
}
