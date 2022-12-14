import { Subject } from 'rxjs';

export class DataTransferService {
  private componentInteraction = new Subject<string>();

  componentData$ = this.componentInteraction.asObservable();
  
  setComponentInteraction(componentInteraction: string) {
      this.componentInteraction.next(componentInteraction);
  }


}
