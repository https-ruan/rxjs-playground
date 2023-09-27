import { Component, OnInit } from '@angular/core';
import { of, take } from 'rxjs';

@Component({
  selector: 'of',
  template: `
    <p>
      Converte os argumentos em uma sequência observável.
      <br />
      <br />
      Ref:
      <a href="https://rxjs.dev/api/index/function/of" target="_blank"
        >clique aqui</a
      >
    </p>

    <br />

    <pre>
      <code>obs$ = of(1, 2, 3);</code>
    </pre>
  `,
})
export class OfComponent implements OnInit {
  obs$ = of(1, 2, 3);

  ngOnInit(): void {
    this.obs$.pipe(take(1)).subscribe(console.log);
  }
}
