import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  public image: any;
  public changeImage: any;
  public previewImage: any;

  constructor(
    private dialogRef: MatDialogRef<AddComponent>
  ) { }

  ngOnInit(): void {
  }

  onChangeImage(e: any){
    const reader = new FileReader();
    reader.onload = (e: any) => {
      this.changeImage = true;
      this.previewImage = e.target.result;
    }
    reader.readAsDataURL(e.target.files[0]);
    this.image = e.target.files[0];
  }

  onBackImage(){
    this.changeImage = false;
    this.previewImage = "";
    this.image = "";
  }

  onCloseAdd(){
    this.dialogRef.close(null);
  }

}
