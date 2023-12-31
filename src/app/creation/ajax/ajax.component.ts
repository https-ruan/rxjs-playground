import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs';
import { ajax } from 'rxjs/ajax';

@Component({
  selector: 'ajax',
  template: `
    <p>
      Ele cria um observável para uma solicitação Ajax com um objeto de
      solicitação com url, cabeçalhos, etc ou uma cadeira de caracteres para uma
      URL.
      <br />
      <br />
      Ref:
      <a href="hhttps://rxjs.dev/api/ajax/ajax" target="_blank">clique aqui</a>
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
    this.obs$.pipe(take(1)).subscribe(console.log);
  }
}
