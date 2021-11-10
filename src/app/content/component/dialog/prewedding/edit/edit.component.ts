import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  public formPrewedding: FormGroup;
  public formPreweddingOld: any;

  public image: any;
  public changeImage: any;
  public previewImage: any;

  public API_URL: any;

  constructor(
    private dialogRef: MatDialogRef<EditComponent>, @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.API_URL = environment.url.image;
    this.formPreweddingOld = data;
    this.formPrewedding = this.oldDataPrewedding(this.formPreweddingOld);
  }

  ngOnInit(): void {
  }

  oldDataPrewedding(dataPrewedding: any) {
    const orderFormGroup: FormGroup = new FormGroup({});
    for (const item in dataPrewedding) {
      if (dataPrewedding.hasOwnProperty(item)) {
        const el = dataPrewedding[item];
        const control: FormControl = new FormControl(el, Validators.required);
        orderFormGroup.addControl(item, control);
      }
    }
    return orderFormGroup;
  };

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

  onCloseEdit() {
    this.dialogRef.close(null);
  }

  onConfirmEdit() {
    if (this.formPrewedding.valid) {
      let dataPrewedding: any = new Object();
      dataPrewedding.id = this.formPrewedding.get("_id")?.value;
      dataPrewedding.image = this.image;
      dataPrewedding.data = {
        order: this.formPrewedding.get("order")?.value,
        status: this.formPrewedding.get("status")?.value
      }
      this.dialogRef.close(dataPrewedding);
    } else {
      alert('Data Invalid!')
    }
  }

}
