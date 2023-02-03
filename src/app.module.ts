import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

// function a() { }

// a.prototype._module = {
//   {
//     imports: [],
//     controllers: [AppController],
//     providers: [AppService],
//   }
// }

// class A {
//   function x() {

//   }
//  }

// class B extends A {
//   b1, b2

// }
