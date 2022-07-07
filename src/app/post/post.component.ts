import { Component, Input, EventEmitter, Output, OnInit, OnChanges, DoCheck, SimpleChanges, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
// Most common
  constructor() {
    console.log('constructor() called');
  }

  @Input('img') postImg='';
  @Output() imgSelected = new EventEmitter<string>();
// Most common
  ngOnInit() {
    console.log('ngOnInint() called');
  }
// Most common
  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges() called');
  }

  ngDoCheck(): void {
    console.log('ngDoCheck() called');
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit() called');
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked() called');
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit() called');
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked() called');
  }
// Most common
  ngOnDestroy(): void {
    console.log('ngOnDestroy() called');
  }

}
