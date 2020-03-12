import { Injectable, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { Observable } from 'rxjs';

@Injectable()
export class AppService {
  constructor(@Inject('MATH_SERVICE') private readonly client: ClientProxy) {

  }

  getHello(): Observable<any> {
    let result = this.client.send({cmd: "sum"}, [1,2,3])
    return result
  }
}
