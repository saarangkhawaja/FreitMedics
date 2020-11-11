import { Component, OnInit } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-text-editor',
  templateUrl: './text-editor.component.html',
  styleUrls: ['./text-editor.component.css']
})
export class TextEditorComponent implements OnInit {
  public Editor = ClassicEditor;

  constructor() { }


  ngOnInit(): void {
    this.Editor.config = {
      placeholder: 'Type the content here!'
    }
  
  }


}
