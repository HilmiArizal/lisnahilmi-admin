import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})
export class DeletePrewedding implements OnInit {

  constructor(
    private dialogRef: MatDialogRef<DeletePrewedding>, @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {
  }

  onCancelPrewedding() {
    this.dialogRef.close(null);
  }

  onConfirmPrewedding() {
    this.dialogRef.close(this.data);
  }

}
