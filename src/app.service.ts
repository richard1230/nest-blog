import { Injectable } from '@nestjs/common'
import { BlogService } from './blog.service'

@Injectable()
export class AppService {
  
  constructor(private readonly blog: BlogService) {}
  getHello(): string {
    return this.blog.finfOne()
    // return 'Hello World!'
  }
}
