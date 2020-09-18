import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  title = 'newMat';

  categories: string[] = ['Angular', 'React', 'Vue', 'PHP', 'Laravel'];

  constructor() { }

  ngOnInit(): void {
  }

}
