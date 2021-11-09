import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Prewedding } from 'src/app/content/interface/prewedding';
import { PreweddingService } from 'src/app/service/prewedding.service';
import { environment } from 'src/environments/environment';
import { AddComponent } from '../../dialog/prewedding/add/add.component';
import { DeletePrewedding } from '../../dialog/prewedding/delete/delete.component';
import { EditComponent } from '../../dialog/prewedding/edit/edit.component';
import { DeleteComponent } from '../../dialog/reservation/delete/delete.component';

@Component({
  selector: 'app-prewedding',
  templateUrl: './prewedding.component.html',
  styleUrls: ['./prewedding.component.scss']
})
export class PreweddingComponent implements OnInit {

  public displayedColumns: string[] = ['image', 'status', 'order', 'action'];
  public dataSource = new MatTableDataSource<Prewedding>();
  public pagePerPage: any;
  public pageCurrentPage: any;
  public pageTotalData: any;

  public API_URL: any;

  constructor(
    private preweddingService: PreweddingService,
    private dialog: MatDialog
  ) {
    this.API_URL = environment.url.image;
  }

  ngOnInit(): void {
    this.getListPrewedding();
  }

  async getListPrewedding() {
    let dataPrewedding: any = new Object();
    dataPrewedding.currentPage = 0;
    dataPrewedding.perPage = 3;
    await this.preweddingService.getListPrewedding(dataPrewedding).subscribe((res: any) => {
      this.dataSource = res.data;
      this.pagePerPage = res.per_page;
      this.pageCurrentPage = res.current_page;
      this.pageTotalData = res.total_data;
    });
  }

  async getPageListPrewedding(e: any) {
    let dataPrewedding: any = new Object();
    dataPrewedding.search = e.target.value.trim();
    dataPrewedding.currentPage = 0;
    dataPrewedding.perPage = 5;
    // await this.reservationService.getListWish(dataPrewedding).subscribe((res: any) => {
    //   this.dataSource = res.data;
    //   this.pagePerPage = res.per_page;
    //   this.pageCurrentPage = res.current_page;
    //   this.pageTotalData = res.total_data;
    // });
  }

  managePrewedding(type: string, dataPrewedding: any) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = dataPrewedding;
    dialogConfig.disableClose = true;
    switch (type) {
      case 'add':
        dialogConfig.width = "50vw";
        const dialogOpenAdd = this.dialog.open(
          AddComponent,
          dialogConfig
        )
        dialogOpenAdd.afterClosed().subscribe((results) => {
          if (results) {

          }
        })
        break;
      case 'edit':
        dialogConfig.width = "50vw";
        const dialogOpenEdit = this.dialog.open(
          EditComponent,
          dialogConfig
        )
        dialogOpenEdit.afterClosed().subscribe((results) => {
          if (results) {

          }
        })
        break;
      case 'delete':
        dialogConfig.width = "30vw";
        const dialogOpenDelete = this.dialog.open(
          DeletePrewedding,
          dialogConfig
        )
        dialogOpenDelete.afterClosed().subscribe((results) => {
          if (results) {

          }
        })
        break;
      default:
        break;
    }
  }

}
