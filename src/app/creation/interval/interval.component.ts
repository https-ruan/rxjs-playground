import { Component, OnInit } from '@angular/core';
import { interval, take } from 'rxjs';

@Component({
  selector: 'interval',
  template: `
    <p>
      Cria um Observable que emite números sequenciais a cada intervalo de tempo
      especificado, em um arquivo SchedulerLike.
      <br />
      <br />
      Ref:
      <a href="https://rxjs.dev/api/index/function/interval" target="_blank"
        >clique aqui</a
      >
    </p>

    <br />

    <pre>
      <code>obs$ = interval(intervalo);</code>
    </pre>
  `,
})
export class IntervalComponent implements OnInit {
  obs$ = interval(1000);

  ngOnInit(): void {
    this.obs$.pipe(take(1)).subscribe(console.log);
  }
}
