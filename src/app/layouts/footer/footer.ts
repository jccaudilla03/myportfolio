import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [RouterLink],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  footerTitle = 'JEWEL CAUDILLA';
  footerText = 'Passionate Software Engineer building modern web applications using Angular, AWS, and scalable architectures.';
}
