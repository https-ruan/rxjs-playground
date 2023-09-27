import { Component, OnInit } from '@angular/core';
import { fromEvent, take } from 'rxjs';

@Component({
  selector: 'from-event',
  template: `
    <p>
      Cria um Observable que emite eventos de um tipo específico provenientes de
      um determinado destino de evento.
      <br />
      <br />
      Ref:
      <a href="https://rxjs.dev/api/index/function/fromEvent" target="_blank"
        >clique aqui</a
      >
    </p>

    <br />

    <pre>
      <code>obs$ = fromEvent(elemento, evento);</code>
    </pre>
  `,
})
export class FromEventComponent implements OnInit {
  obs$ = fromEvent(document, 'click');

  ngOnInit(): void {
    this.obs$.pipe(take(1)).subscribe(console.log);
  }
}
