import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Prewedding } from 'src/app/content/interface/prewedding';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  public formPrewedding: FormGroup;

  public image: any;
  public changeImage: any;
  public previewImage: any;

  constructor(
    private dialogRef: MatDialogRef<AddComponent>
  ) {
    this.formPrewedding = new FormGroup({
      order: new FormControl(0, Validators.required),
      status: new FormControl('', Validators.required)
    })
  }

  ngOnInit(): void {
  }

  onChangeImage(e: any) {
    const reader = new FileReader();
    reader.onload = (e: any) => {
      this.changeImage = true;
      this.previewImage = e.target.result;
    }
    reader.readAsDataURL(e.target.files[0]);
    this.image = e.target.files[0];
  }

  onBackImage() {
    this.changeImage = false;
    this.previewImage = "";
    this.image = "";
  }

  onCloseAdd() {
    this.dialogRef.close(null);
  }

  onConfirmAdd() {
    let image = this.image;
    let dataPrewedding: any = new Object();
    dataPrewedding.image = image;
    dataPrewedding.data = this.formPrewedding.value;
    if(this.changeImage){
      if(this.formPrewedding.valid){  
        this.dialogRef.close(dataPrewedding);
      }else{
        alert('Data Invalid!')
      }
    }else{
      alert('Data Invalid!');
    }
  }

}
