import { Directive, ElementRef, EventEmitter, HostBinding, HostListener, Input, Output } from '@angular/core';

@Directive({
  selector: '[edit-text]',
  exportAs: 'edit',
})
export class ChangeTextDirective {
  @Output() onBlur = new EventEmitter()
  constructor(private el: ElementRef) { }

  @HostBinding('contentEditable') isEditable = false

  @HostListener('dblclick')
  onDabbleClick() {
    const element = this.el.nativeElement
    this.isEditable = true
  }
  
  @HostListener('blur')
  _onBlur() {
    const element = this.el.nativeElement
    this.onBlur.emit(element.innerText)
    this.isEditable = false
    }
}
