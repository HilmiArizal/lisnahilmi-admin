import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})
export class DeleteComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<DeleteComponent>, @Inject(MAT_DIALOG_DATA) public dataWish: any) { 

  }

  ngOnInit(): void {
  }

  onCancelWish(){
    this.dialogRef.close(null);
  }

  onConfirmWish(){
    this.dialogRef.close(this.dataWish);
  }

}
