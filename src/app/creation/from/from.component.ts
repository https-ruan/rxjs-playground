import { Component, OnInit } from '@angular/core';
import { from, take } from 'rxjs';

@Component({
  selector: 'from',
  template: `
    <p>
      Cria um Observable a partir de um Array, um objeto semelhante a um array,
      uma Promise, um objeto iterável ou um objeto semelhante a Observable.
      <br />
      <br />
      Ref:
      <a href="https://rxjs.dev/api/index/function/from" target="_blank"
        >clique aqui</a
      >
    </p>

    <br />

    <pre>
      <code>obs$ = from([1, 2, 3]);</code>
    </pre>
  `,
})
export class FromComponent implements OnInit {
  obs$ = from([1, 2, 3]);

  ngOnInit(): void {
    this.obs$.pipe(take(1)).subscribe(console.log);
  }
}
