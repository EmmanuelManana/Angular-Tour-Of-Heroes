import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  messages: string[] = [];
  constructor() {}

  add(messages: string) {
    this.messages.push(messages);
  }

  clear = (): any[] => this.messages = [];
}
