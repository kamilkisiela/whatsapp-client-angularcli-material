import {Component, EventEmitter, Input, Output} from '@angular/core';
import {GetChats} from '../../../../graphql';

@Component({
  selector: 'app-chat-item',
  template: `
    <div class="chat-row">
        <div class="chat-recipient">
          <img *ngIf="chat.picture" [src]="chat.picture" width="48" height="48">
          <div>{{ chat.name }} [id: {{ chat.id }}]</div>
        </div>
        <div class="chat-content">
          {{ chat.messageFeed.messages[chat.messageFeed.messages.length - 1]?.content | truncate : 20 : '...' }}
        </div>
    </div>
  `,
  styleUrls: ['chat-item.component.scss'],
})
export class ChatItemComponent {
  // tslint:disable-next-line:no-input-rename
  @Input('item')
  chat: GetChats.Chats;
}
