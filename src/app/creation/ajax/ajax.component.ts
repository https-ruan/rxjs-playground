import { Component, OnInit } from '@angular/core';
import { ajax } from 'rxjs/ajax';

@Component({
  selector: 'ajax',
  template: `
    <p>
      Ele cria um observável para uma solicitação Ajax com um objeto de
      solicitação com url, cabeçalhos, etc ou uma cadeira de caracteres para uma
      URL.
    </p>

    <br />

    <pre>
      <code>obs$ = ajax(<a href="https://rxjs.dev/api/ajax/AjaxConfig" target="_blank">AjaxConfig</a>);</code>
    </pre>
  `,
})
export class AjaxComponent implements OnInit {
  obs$ = ajax({ url: 'https://api.github.com/users?per_page=5' });

  ngOnInit(): void {
    this.obs$.subscribe(console.log);
  }
}
