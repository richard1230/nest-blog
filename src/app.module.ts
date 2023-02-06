import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { BlogService } from './blog.service'

@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    // AppService,
    // BlogService,
    {
      provide: 'blog',
      useClass: AppService,
    },
  ],
})
export class AppModule {}
