import {
  Directive,
  Input,
  OnInit,
  TemplateRef,
  ViewContainerRef,
} from "@angular/core";
//manipulação de elementos na dom atravez de diretivas estruturais
//ng g d directives/for
@Directive({
  //myFor diretiva
  selector: "[myFor]",
})
export class ForDirective implements OnInit {
  //@Input("myForEm")
  
  // numbers: number[];

  constructor(
    private container: ViewContainerRef,
    //templateReferencia o dados do selector
    private template: TemplateRef<any>
  ) {}

  ngOnInit(): void {
    // for (let number of this.numbers) {
    //   this.container.createEmbeddedView(this.template, { $implicit: number });
    // }
   
  }
}
