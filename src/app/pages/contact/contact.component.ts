import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  name = ''; email = ''; message = '';

  send() {
    // Simple mailto fallback (no backend)
    const subject = encodeURIComponent(`Portfolio enquiry from ${this.name || 'Website'}`);
    const body = encodeURIComponent(`${this.message}\n\n— ${this.name}\n${this.email}`);
    window.location.href = `mailto:eschandu@gmail.com?subject=${subject}&body=${body}`;
  }
}
