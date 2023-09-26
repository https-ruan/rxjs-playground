import { Component, OnInit } from '@angular/core';
import { Observable, defer, of } from 'rxjs';

@Component({
  selector: 'defer',
  template: `
    <p>
      Cria um Observable que, ao assinar, chama uma Observable factory function
      para criar um Observable para cada nova inscrição.
      <br />
      <br />
      Ref:
      <a href="https://rxjs.dev/api/index/function/defer" target="_blank"
        >clique aqui</a
      >
    </p>

    <br />

    <pre>
      <code>obs$ = defer(observableFactory: () => of('a', 'b', 'c'));</code>
    </pre>
  `,
})
export class DeferComponent implements OnInit {
  obs$ = defer(() => of('a', 'b', 'c'));

  ngOnInit(): void {
    this.obs$.subscribe(console.log);
  }
}
