import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Reservation } from 'src/app/content/interface/reservation';
import { ReservationService } from 'src/app/service/reservation.service';
import { DeleteComponent } from '../../dialog/reservation/delete/delete.component';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.scss']
})
export class ReservationComponent implements OnInit {

  public displayedColumns: string[] = ['name', 'friend', 'wish', 'reservation', 'session', 'action'];
  public dataSource = new MatTableDataSource<Reservation>();
  public pagePerPage: any;
  public pageCurrentPage: any;
  public pageTotalData: any;

  public totalPresent: any;
  public totalNotPresent: any;
  public session1: any;
  public session2: any;
  public session3: any;

  selectedFriend: string = '';

  constructor(
    private reservationService: ReservationService,
    private dialog: MatDialog
  ) { }

  ngOnInit() {
    this.getListWish();
    this.getPresent();
    this.getNotPresent();
    this.getSession1();
    this.getSession2();
    this.getSession3();
  }

  async getListWish() {
    let dataWish: any = new Object();
    dataWish.search = "";
    dataWish.currentPage = 0;
    dataWish.perPage = 5;
    await this.reservationService.getListWish(dataWish).subscribe((res: any) => {
      this.dataSource = res.data;
      this.pagePerPage = res.per_page;
      this.pageCurrentPage = res.current_page;
      this.pageTotalData = res.total_data;
    });
  }

  async getSearchListWish(e: any) {
    let dataWish: any = new Object();
    dataWish.search = e.target.value.trim();
    dataWish.currentPage = 0;
    dataWish.perPage = 5;
    await this.reservationService.getListWish(dataWish).subscribe((res: any) => {
      this.dataSource = res.data;
      this.pagePerPage = res.per_page;
      this.pageCurrentPage = res.current_page;
      this.pageTotalData = res.total_data;
    });
  }

  async getPageListWish(e: any) {
    let dataWish: any = new Object();
    dataWish.search = "";
    dataWish.currentPage = e.pageIndex;
    dataWish.perPage = e.pageSize;
    await this.reservationService.getListWish(dataWish).subscribe((res: any) => {
      this.dataSource = res.data;
      this.pagePerPage = res.per_page;
      this.pageCurrentPage = res.current_page;
      this.pageTotalData = res.total_data;
    });
  }

  async getFriendListWish() {
    console.log(this.selectedFriend);
    switch (this.selectedFriend) {
      case 'hilmi':
        console.log(this.selectedFriend);
        break;
      case 'lisna':
        console.log(this.selectedFriend);
        break;
      default:
        break;
    }
  }

  onDeleteWish(dataWish: any) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = dataWish;
    dialogConfig.disableClose = true;
    dialogConfig.minWidth = "30vw";
    const dialogOpen = this.dialog.open(
      DeleteComponent,
      dialogConfig
    )
    dialogOpen.afterClosed().subscribe((results) => {
      if (results) {
        this.reservationService.deleteReservation(results).subscribe((res: any) => {
          this.getListWish();
          alert(`Wish dari ${results.name} berhasil di hapus`)
        })
      }
    })
  }

  async getPresent() {
    let dataReservation = { reservation: "hadir" };
    await this.reservationService.getReservation(dataReservation).subscribe((res: any) => {
      this.totalPresent = res.dataWish.length;
    })
  }

  async getNotPresent() {
    let dataReservation = { reservation: "batal" };
    await this.reservationService.getReservation(dataReservation).subscribe((res: any) => {
      this.totalNotPresent = res.dataWish.length;
    })
  }

  async getSession1() {
    let dataSession = { session: 1 };
    await this.reservationService.getSession(dataSession).subscribe((res: any) => {
      this.session1 = res.dataWish.length;
      console.log(this.session1);
    })
  }

  async getSession2() {
    let dataSession = { session: 2 };
    await this.reservationService.getSession(dataSession).subscribe((res: any) => {
      this.session2 = res.dataWish.length;
      console.log(this.session2);

    })
  }

  async getSession3() {
    let dataSession = { session: 3 };
    await this.reservationService.getSession(dataSession).subscribe((res: any) => {
      this.session3 = res.dataWish.length;
      console.log(this.session3);

    })
  }

}

