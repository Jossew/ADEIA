import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NestedTreeControl } from '@angular/cdk/tree';
import { ActivatedRoute, Router } from '@angular/router';
import { delay, flatMap } from 'rxjs/operators';
import { of, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/internal/operators';
import { FormControl } from '@angular/forms';
import {RenamePropertiesPipe} from "../../shared/pipes/rename-properties.pipe";

@Component({
  selector: 'app-partner-clients',
  templateUrl: './partner-clients.component.html',
  styleUrls: ['./partner-clients.component.scss'],
})
export class PartnerClientsComponent implements OnInit {
  searchString = '';
  clientList: any ;
  treeControl = new NestedTreeControl<any>((node) => node.children);

  public keyUp = new Subject<string>();
  myControl = new FormControl();
  allUserList = [];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private dialog: MatDialog,
    private renamePropertiesPipe: RenamePropertiesPipe,
    ) {
    // const observable = this.keyUp
    //   .pipe(
    //     map((value) => (event.target as HTMLInputElement).value),
    //     debounceTime(500),
    //     distinctUntilChanged(),
    //     flatMap((search) => {
    //       return of(search).pipe(delay(300));
    //     })
    //   )
    //   .subscribe((textData) => {
    //     this.onSearchChange(textData.trim());
    //   });
  }

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData(): void {
    let clientList = [
      {
        "_id": "602d442479d9dab2fc4cfb8d",
        "user": "602459bb3f5bb136111f092e",
        "client": {
          "logo": {
            "name": "1613124568001-fantalogo-svg.png",
            "path": "https://publicis-belief.s3.eu-west-1.amazonaws.com/logos/clients/1613124568001-fantalogo-svg.png?AWSAccessKeyId=AKIAQQ3QG6SJQT3VGA5W&Expires=1638063443&Signature=kv0q0ec8cMuizhEwl806iIrgx8s%3D"
          },
          "cat": "client",
          "_id": "602653de17f1cb001e973043",
          "name": "Unilever",
          "id": "602653de17f1cb001e973043"
        },
        "__v": 0,
        "brandList": [
          {
            "_id": "602d442479d9dab2fc4cfb8e",
            "brand": {
              "logo": {
                "name": "1613124599372-fanta2.jpg",
                "path": "https://publicis-belief.s3.eu-west-1.amazonaws.com/logos/brands/1613124599372-fanta2.jpg?AWSAccessKeyId=AKIAQQ3QG6SJQT3VGA5W&Expires=1638063443&Signature=bsvNStGK4JTZiQSolvlhlOmqYKc%3D"
              },
              "cat": "brand",
              "_id": "602653fc17f1cb001e973045",
              "name": "Dove",
              "client": "602653de17f1cb001e973043",
              "createdBy": "60251f3617f1cb001e97302b",
              "__v": 0,
              "id": "602653fc17f1cb001e973045"
            },
            "client": "602653de17f1cb001e973043",
            "user": "602459bb3f5bb136111f092e",
            "__v": 0
          },
          {
            "_id": "602d442479d9dab2fc4cfb8e",
            "brand": {
              "logo": {
                "name": "1613124599372-fanta2.jpg",
                "path": "https://publicis-belief.s3.eu-west-1.amazonaws.com/logos/brands/1613124599372-fanta2.jpg?AWSAccessKeyId=AKIAQQ3QG6SJQT3VGA5W&Expires=1638063443&Signature=bsvNStGK4JTZiQSolvlhlOmqYKc%3D"
              },
              "cat": "brand",
              "_id": "602653fc17f1cb001e973045",
              "name": "Walls",
              "client": "602653de17f1cb001e973043",
              "createdBy": "60251f3617f1cb001e97302b",
              "__v": 0,
              "id": "602653fc17f1cb001e973045"
            },
            "client": "602653de17f1cb001e973043",
            "user": "602459bb3f5bb136111f092e",
            "__v": 0
          },
          {
            "_id": "602d442479d9dab2fc4cfb8e",
            "brand": {
              "logo": {
                "name": "1613124599372-fanta2.jpg",
                "path": "https://publicis-belief.s3.eu-west-1.amazonaws.com/logos/brands/1613124599372-fanta2.jpg?AWSAccessKeyId=AKIAQQ3QG6SJQT3VGA5W&Expires=1638063443&Signature=bsvNStGK4JTZiQSolvlhlOmqYKc%3D"
              },
              "cat": "brand",
              "_id": "602653fc17f1cb001e973045",
              "name": "Surf",
              "client": "602653de17f1cb001e973043",
              "createdBy": "60251f3617f1cb001e97302b",
              "__v": 0,
              "id": "602653fc17f1cb001e973045"
            },
            "client": "602653de17f1cb001e973043",
            "user": "602459bb3f5bb136111f092e",
            "__v": 0
          },
          {
            "_id": "602d442479d9dab2fc4cfb8e",
            "brand": {
              "logo": {
                "name": "1613124599372-fanta2.jpg",
                "path": "https://publicis-belief.s3.eu-west-1.amazonaws.com/logos/brands/1613124599372-fanta2.jpg?AWSAccessKeyId=AKIAQQ3QG6SJQT3VGA5W&Expires=1638063443&Signature=bsvNStGK4JTZiQSolvlhlOmqYKc%3D"
              },
              "cat": "brand",
              "_id": "602653fc17f1cb001e973045",
              "name": "Axe",
              "client": "602653de17f1cb001e973043",
              "createdBy": "60251f3617f1cb001e97302b",
              "__v": 0,
              "id": "602653fc17f1cb001e973045"
            },
            "client": "602653de17f1cb001e973043",
            "user": "602459bb3f5bb136111f092e",
            "__v": 0
          },
          {
            "_id": "602d442479d9dab2fc4cfb8e",
            "brand": {
              "logo": {
                "name": "1613124599372-fanta2.jpg",
                "path": "https://publicis-belief.s3.eu-west-1.amazonaws.com/logos/brands/1613124599372-fanta2.jpg?AWSAccessKeyId=AKIAQQ3QG6SJQT3VGA5W&Expires=1638063443&Signature=bsvNStGK4JTZiQSolvlhlOmqYKc%3D"
              },
              "cat": "brand",
              "_id": "602653fc17f1cb001e973045",
              "name": "Ponds",
              "client": "602653de17f1cb001e973043",
              "createdBy": "60251f3617f1cb001e97302b",
              "__v": 0,
              "id": "602653fc17f1cb001e973045"
            },
            "client": "602653de17f1cb001e973043",
            "user": "602459bb3f5bb136111f092e",
            "__v": 0
          }



        ],
        "id": "602d442479d9dab2fc4cfb8d"
      },
      {
        "_id": "607018c0ba73051b08ca2ee5",
        "user": "602459bb3f5bb136111f092e",
        "client": {
          "logo": {
            "name": "1621873200705-ferrero-1-logo-black-and-white.png",
            "path": "https://publicis-belief.s3.eu-west-1.amazonaws.com/logos/clients/1621873200705-ferrero-1-logo-black-and-white.png?AWSAccessKeyId=AKIAQQ3QG6SJQT3VGA5W&Expires=1638063443&Signature=c3yVYrLKIlFPrOMQ97WxxXmuTXQ%3D"
          },
          "cat": "client",
          "_id": "607018c0ba73051b08ca2ee4",
          "name": "Loreal",
          "code": "ferrero",
          "createdBy": "602459bb3f5bb136111f092e",
          "createdAt": "2021-04-09T09:05:04.656Z",
          "updatedAt": "2021-05-24T16:20:02.346Z",
          "__v": 0,
          "id": "607018c0ba73051b08ca2ee4"
        },
        "createdAt": "2021-04-09T09:05:04.684Z",
        "updatedAt": "2021-04-09T09:05:04.685Z",
        "__v": 0,
        brandList: [
          {
            "_id": "602d442479d9dab2fc4cfb8e",
            "brand": {
              "logo": {
                "name": "1613124599372-fanta2.jpg",
                "path": "https://publicis-belief.s3.eu-west-1.amazonaws.com/logos/brands/1613124599372-fanta2.jpg?AWSAccessKeyId=AKIAQQ3QG6SJQT3VGA5W&Expires=1638063443&Signature=bsvNStGK4JTZiQSolvlhlOmqYKc%3D"
              },
              "cat": "brand",
              "_id": "602653fc17f1cb001e973045",
              "name": "Loreal Paris",
              "client": "602653de17f1cb001e973043",
              "createdBy": "60251f3617f1cb001e97302b",
              "__v": 0,
              "id": "602653fc17f1cb001e973045"
            },
            "client": "602653de17f1cb001e973043",
            "user": "602459bb3f5bb136111f092e",
            "__v": 0
          },
        ],
        "id": "607018c0ba73051b08ca2ee5"
      },
      {
        "_id": "602d442479d9dab2fc4cfb8d",
        "user": "602459bb3f5bb136111f092e",
        "client": {
          "logo": {
            "name": "1613124568001-fantalogo-svg.png",
            "path": "https://publicis-belief.s3.eu-west-1.amazonaws.com/logos/clients/1613124568001-fantalogo-svg.png?AWSAccessKeyId=AKIAQQ3QG6SJQT3VGA5W&Expires=1638063443&Signature=kv0q0ec8cMuizhEwl806iIrgx8s%3D"
          },
          "cat": "client",
          "_id": "602653de17f1cb001e973043",
          "name": "Nivea",
          "id": "602653de17f1cb001e973043"
        },
        "__v": 0,
        "brandList": [
          {
            "_id": "602d442479d9dab2fc4cfb8e",
            "brand": {
              "logo": {
                "name": "1613124599372-fanta2.jpg",
                "path": "https://publicis-belief.s3.eu-west-1.amazonaws.com/logos/brands/1613124599372-fanta2.jpg?AWSAccessKeyId=AKIAQQ3QG6SJQT3VGA5W&Expires=1638063443&Signature=bsvNStGK4JTZiQSolvlhlOmqYKc%3D"
              },
              "cat": "brand",
              "_id": "602653fc17f1cb001e973045",
              "name": "EUCERIN",
              "client": "602653de17f1cb001e973043",
              "createdBy": "60251f3617f1cb001e97302b",
              "__v": 0,
              "id": "602653fc17f1cb001e973045"
            },
            "client": "602653de17f1cb001e973043",
            "user": "602459bb3f5bb136111f092e",
            "__v": 0
          },
          {
            "_id": "602d442479d9dab2fc4cfb8e",
            "brand": {
              "logo": {
                "name": "1613124599372-fanta2.jpg",
                "path": "https://publicis-belief.s3.eu-west-1.amazonaws.com/logos/brands/1613124599372-fanta2.jpg?AWSAccessKeyId=AKIAQQ3QG6SJQT3VGA5W&Expires=1638063443&Signature=bsvNStGK4JTZiQSolvlhlOmqYKc%3D"
              },
              "cat": "brand",
              "_id": "602653fc17f1cb001e973045",
              "name": "Nivea Men",
              "client": "602653de17f1cb001e973043",
              "createdBy": "60251f3617f1cb001e97302b",
              "__v": 0,
              "id": "602653fc17f1cb001e973045"
            },
            "client": "602653de17f1cb001e973043",
            "user": "602459bb3f5bb136111f092e",
            "__v": 0
          },
          {
            "_id": "602d442479d9dab2fc4cfb8e",
            "brand": {
              "logo": {
                "name": "1613124599372-fanta2.jpg",
                "path": "https://publicis-belief.s3.eu-west-1.amazonaws.com/logos/brands/1613124599372-fanta2.jpg?AWSAccessKeyId=AKIAQQ3QG6SJQT3VGA5W&Expires=1638063443&Signature=bsvNStGK4JTZiQSolvlhlOmqYKc%3D"
              },
              "cat": "brand",
              "_id": "602653fc17f1cb001e973045",
              "name": "ELASTOPLAST",
              "client": "602653de17f1cb001e973043",
              "createdBy": "60251f3617f1cb001e97302b",
              "__v": 0,
              "id": "602653fc17f1cb001e973045"
            },
            "client": "602653de17f1cb001e973043",
            "user": "602459bb3f5bb136111f092e",
            "__v": 0
          },
          {
            "_id": "602d442479d9dab2fc4cfb8e",
            "brand": {
              "logo": {
                "name": "1613124599372-fanta2.jpg",
                "path": "https://publicis-belief.s3.eu-west-1.amazonaws.com/logos/brands/1613124599372-fanta2.jpg?AWSAccessKeyId=AKIAQQ3QG6SJQT3VGA5W&Expires=1638063443&Signature=bsvNStGK4JTZiQSolvlhlOmqYKc%3D"
              },
              "cat": "brand",
              "_id": "602653fc17f1cb001e973045",
              "name": "Nivea Skin",
              "client": "602653de17f1cb001e973043",
              "createdBy": "60251f3617f1cb001e97302b",
              "__v": 0,
              "id": "602653fc17f1cb001e973045"
            },
            "client": "602653de17f1cb001e973043",
            "user": "602459bb3f5bb136111f092e",
            "__v": 0
          },
          {
            "_id": "602d442479d9dab2fc4cfb8e",
            "brand": {
              "logo": {
                "name": "1613124599372-fanta2.jpg",
                "path": "https://publicis-belief.s3.eu-west-1.amazonaws.com/logos/brands/1613124599372-fanta2.jpg?AWSAccessKeyId=AKIAQQ3QG6SJQT3VGA5W&Expires=1638063443&Signature=bsvNStGK4JTZiQSolvlhlOmqYKc%3D"
              },
              "cat": "brand",
              "_id": "602653fc17f1cb001e973045",
              "name": "Nivea Men",
              "client": "602653de17f1cb001e973043",
              "createdBy": "60251f3617f1cb001e97302b",
              "__v": 0,
              "id": "602653fc17f1cb001e973045"
            },
            "client": "602653de17f1cb001e973043",
            "user": "602459bb3f5bb136111f092e",
            "__v": 0
          }



        ],
        "id": "602d442479d9dab2fc4cfb8d"
      },
      {
        "_id": "602d442479d9dab2fc4cfb8d",
        "user": "602459bb3f5bb136111f092e",
        "client": {
          "logo": {
            "name": "1613124568001-fantalogo-svg.png",
            "path": "https://publicis-belief.s3.eu-west-1.amazonaws.com/logos/clients/1613124568001-fantalogo-svg.png?AWSAccessKeyId=AKIAQQ3QG6SJQT3VGA5W&Expires=1638063443&Signature=kv0q0ec8cMuizhEwl806iIrgx8s%3D"
          },
          "cat": "client",
          "_id": "602653de17f1cb001e973043",
          "name": "Procter & Gamble",
          "id": "602653de17f1cb001e973043"
        },
        "__v": 0,
        "brandList": [
          {
            "_id": "602d442479d9dab2fc4cfb8e",
            "brand": {
              "logo": {
                "name": "1613124599372-fanta2.jpg",
                "path": "https://publicis-belief.s3.eu-west-1.amazonaws.com/logos/brands/1613124599372-fanta2.jpg?AWSAccessKeyId=AKIAQQ3QG6SJQT3VGA5W&Expires=1638063443&Signature=bsvNStGK4JTZiQSolvlhlOmqYKc%3D"
              },
              "cat": "brand",
              "_id": "602653fc17f1cb001e973045",
              "name": "Olay",
              "client": "602653de17f1cb001e973043",
              "createdBy": "60251f3617f1cb001e97302b",
              "__v": 0,
              "id": "602653fc17f1cb001e973045"
            },
            "client": "602653de17f1cb001e973043",
            "user": "602459bb3f5bb136111f092e",
            "__v": 0
          },
          {
            "_id": "602d442479d9dab2fc4cfb8e",
            "brand": {
              "logo": {
                "name": "1613124599372-fanta2.jpg",
                "path": "https://publicis-belief.s3.eu-west-1.amazonaws.com/logos/brands/1613124599372-fanta2.jpg?AWSAccessKeyId=AKIAQQ3QG6SJQT3VGA5W&Expires=1638063443&Signature=bsvNStGK4JTZiQSolvlhlOmqYKc%3D"
              },
              "cat": "brand",
              "_id": "602653fc17f1cb001e973045",
              "name": "Walls",
              "client": "602653de17f1cb001e973043",
              "createdBy": "60251f3617f1cb001e97302b",
              "__v": 0,
              "id": "602653fc17f1cb001e973045"
            },
            "client": "602653de17f1cb001e973043",
            "user": "602459bb3f5bb136111f092e",
            "__v": 0
          },
          {
            "_id": "602d442479d9dab2fc4cfb8e",
            "brand": {
              "logo": {
                "name": "1613124599372-fanta2.jpg",
                "path": "https://publicis-belief.s3.eu-west-1.amazonaws.com/logos/brands/1613124599372-fanta2.jpg?AWSAccessKeyId=AKIAQQ3QG6SJQT3VGA5W&Expires=1638063443&Signature=bsvNStGK4JTZiQSolvlhlOmqYKc%3D"
              },
              "cat": "brand",
              "_id": "602653fc17f1cb001e973045",
              "name": "Surf",
              "client": "602653de17f1cb001e973043",
              "createdBy": "60251f3617f1cb001e97302b",
              "__v": 0,
              "id": "602653fc17f1cb001e973045"
            },
            "client": "602653de17f1cb001e973043",
            "user": "602459bb3f5bb136111f092e",
            "__v": 0
          },
          {
            "_id": "602d442479d9dab2fc4cfb8e",
            "brand": {
              "logo": {
                "name": "1613124599372-fanta2.jpg",
                "path": "https://publicis-belief.s3.eu-west-1.amazonaws.com/logos/brands/1613124599372-fanta2.jpg?AWSAccessKeyId=AKIAQQ3QG6SJQT3VGA5W&Expires=1638063443&Signature=bsvNStGK4JTZiQSolvlhlOmqYKc%3D"
              },
              "cat": "brand",
              "_id": "602653fc17f1cb001e973045",
              "name": "Axe",
              "client": "602653de17f1cb001e973043",
              "createdBy": "60251f3617f1cb001e97302b",
              "__v": 0,
              "id": "602653fc17f1cb001e973045"
            },
            "client": "602653de17f1cb001e973043",
            "user": "602459bb3f5bb136111f092e",
            "__v": 0
          },
          {
            "_id": "602d442479d9dab2fc4cfb8e",
            "brand": {
              "logo": {
                "name": "1613124599372-fanta2.jpg",
                "path": "https://publicis-belief.s3.eu-west-1.amazonaws.com/logos/brands/1613124599372-fanta2.jpg?AWSAccessKeyId=AKIAQQ3QG6SJQT3VGA5W&Expires=1638063443&Signature=bsvNStGK4JTZiQSolvlhlOmqYKc%3D"
              },
              "cat": "brand",
              "_id": "602653fc17f1cb001e973045",
              "name": "Ponds",
              "client": "602653de17f1cb001e973043",
              "createdBy": "60251f3617f1cb001e97302b",
              "__v": 0,
              "id": "602653fc17f1cb001e973045"
            },
            "client": "602653de17f1cb001e973043",
            "user": "602459bb3f5bb136111f092e",
            "__v": 0
          }



        ],
        "id": "602d442479d9dab2fc4cfb8d"
      },
      {
        "_id": "602d442479d9dab2fc4cfb8d",
        "user": "602459bb3f5bb136111f092e",
        "client": {
          "logo": {
            "name": "1613124568001-fantalogo-svg.png",
            "path": "https://publicis-belief.s3.eu-west-1.amazonaws.com/logos/clients/1613124568001-fantalogo-svg.png?AWSAccessKeyId=AKIAQQ3QG6SJQT3VGA5W&Expires=1638063443&Signature=kv0q0ec8cMuizhEwl806iIrgx8s%3D"
          },
          "cat": "client",
          "_id": "602653de17f1cb001e973043",
          "name": "GSK",
          "id": "602653de17f1cb001e973043"
        },
        "__v": 0,
        "brandList": [
          {
            "_id": "602d442479d9dab2fc4cfb8e",
            "brand": {
              "logo": {
                "name": "1613124599372-fanta2.jpg",
                "path": "https://publicis-belief.s3.eu-west-1.amazonaws.com/logos/brands/1613124599372-fanta2.jpg?AWSAccessKeyId=AKIAQQ3QG6SJQT3VGA5W&Expires=1638063443&Signature=bsvNStGK4JTZiQSolvlhlOmqYKc%3D"
              },
              "cat": "brand",
              "_id": "602653fc17f1cb001e973045",
              "name": "Voltaren",
              "client": "602653de17f1cb001e973043",
              "createdBy": "60251f3617f1cb001e97302b",
              "__v": 0,
              "id": "602653fc17f1cb001e973045"
            },
            "client": "602653de17f1cb001e973043",
            "user": "602459bb3f5bb136111f092e",
            "__v": 0
          },
          {
            "_id": "602d442479d9dab2fc4cfb8e",
            "brand": {
              "logo": {
                "name": "1613124599372-fanta2.jpg",
                "path": "https://publicis-belief.s3.eu-west-1.amazonaws.com/logos/brands/1613124599372-fanta2.jpg?AWSAccessKeyId=AKIAQQ3QG6SJQT3VGA5W&Expires=1638063443&Signature=bsvNStGK4JTZiQSolvlhlOmqYKc%3D"
              },
              "cat": "brand",
              "_id": "602653fc17f1cb001e973045",
              "name": "Sensodyne",
              "client": "602653de17f1cb001e973043",
              "createdBy": "60251f3617f1cb001e97302b",
              "__v": 0,
              "id": "602653fc17f1cb001e973045"
            },
            "client": "602653de17f1cb001e973043",
            "user": "602459bb3f5bb136111f092e",
            "__v": 0
          }
        ],
        "id": "602d442479d9dab2fc4cfb8d"
      },

    ];

    this.clientList = this.renamePropertiesPipe.transform(clientList);

      this.clientList.forEach((c:any) => {
        if (c.children && c.children.length) {
          c.children.forEach((b:any) => {
            if (b.brand && b.brand.children && b.brand.children.length) {
              b.children = b.brand.children;
            }
          });
        }
      });
    this.selectBrand(this.clientList[0]);
      // if (this.clientList.length === 1) {
      //
      //   this.uiAPI.setNavState(false);
      // }
    // });
  }

  addClient(): void {
    // const dialogRef = this.dialog.open(DialogAddEditClientComponent, {
    //   width: '490px',
    // });
    // dialogRef.afterClosed().subscribe((result) => {
    //   if (result) {
    //     this.clientList.push(this.renamePropertiesPipe.transform(result));
    //     this.notify.success('Client Saved');
    //     this.fetchData();
    //   }
    // });
  }

  editClient(client:any): void {
    // const dialogRef = this.dialog.open(DialogAddEditClientComponent, {
    //   width: '490px',
    //   data: { client },
    // });
    // dialogRef.afterClosed().subscribe((result) => {
    //   if (result) {
    //     const idx = this.clientList.indexOf((c) => client._id);
    //     this.clientList[idx] = this.renamePropertiesPipe.transform(result);
    //     this.notify.success('Client Saved');
    //     this.clientList = this.clientList.map((x) => x);
    //     this.fetchData();
    //   }
    // });
  }

  addBrand(client:any): void {
    // const dialogRef = this.dialog.open(DialogAddEditBrandComponent, {
    //   width: '490px',
    //   data: { client },
    // });
    // dialogRef.afterClosed().subscribe((result) => {
    //   if (result) {
    //     // const idx = this.clientList.indexOf(c => client._id);
    //     // this.clientList[idx].chiildren.push(this.renamePropertiesPipe.transform(result));
    //     this.notify.success('Brand Saved');
    //     this.fetchData();
    //   }
    // });
  }

  editBrand(brand:any): void {
    // const dialogRef = this.dialog.open(DialogAddEditBrandComponent, {
    //   width: '490px',
    //   data: { client: brand.client, brand: brand },
    // });
    // dialogRef.afterClosed().subscribe((result) => {
    //   if (result) {
    //     // const idx = this.clientList.indexOf(c => client._id);
    //     // this.clientList[idx].chiildren.push(this.renamePropertiesPipe.transform(result));
    //     this.notify.success('Brand Saved');
    //     this.fetchData();
    //   }
    // });
  }

  addCampaign(brand:any) {
    // const dialogRef = this.dialog.open(DialogAddEditCampaignComponent, {
    //   width: '80%',
    //   data: { brand },
    // });
    // dialogRef.afterClosed().subscribe((result) => {
    //   if (result) {
    //     // const idx = this.clientList.indexOf(c => client._id);
    //     // this.clientList[idx].chiildren.push(this.renamePropertiesPipe.transform(result));
    //     this.notify.success('Brand Saved');
    //     this.fetchData();
    //   }
    // });
  }

  onSearchChange(textData: string): void {
    // this.clientApi.searchEvreyWhere(textData).subscribe(x=> {
    //     console.log(x);
    // })
  }

  selectBrand(node: any): void {
    this.clientList.forEach((n: any) => {
      n['activeLink'] = false;
      this.assignActive(n, node);
    });

    // if (node.client && node.client.cat === 'client') {
    //   this.store.dispatch(new SetSelectedClient(JSON.parse(JSON.stringify(node.client))));
    //   this.store.dispatch(new SetSelectedBrand(null));
    //   this.router.navigate(['client', node.client._id], { relativeTo: this.route });
    // } else if (node.brand && node.brand.cat === 'brand') {
    //   this.store.dispatch(new SetSelectedBrand(JSON.parse(JSON.stringify(node.brand))));
    //   this.router.navigate(['client', node.client, 'brand', node.brand._id], { relativeTo: this.route });
    // } else {
    //   this.router.navigate(['client', node.client, 'brand', node.brand, 'campaign', node._id], {
    //     relativeTo: this.route,
    //   });
    // }
  }
  // Runs through each child node and checks if its the active node or if any of its descendants are active
  assignActive(node: any, activeNode: any) {
    let activeChild = false;
    node.children?.forEach((n: any) => {
      const currentChild = this.assignActive(n, activeNode);
      if (currentChild) {
        activeChild = true;
      }
    });
    if (node == activeNode || activeChild) {
      node['activeLink'] = true;
      return true;
    } else {
      node['activeLink'] = false;
      return false;
    }
  }

  displayFn(user: any): string {
    return user ? user.email : undefined;
  }

  searchDialog() {
    // const dialogRef = this.dialog.open(SearchComponent, {
    //   width: '80%',
    // });
    // dialogRef.afterClosed().subscribe((result) => {
    //   // if (result) {
    //   //     // const idx = this.clientList.indexOf(c => client._id);
    //   //     // this.clientList[idx].chiildren.push(this.renamePropertiesPipe.transform(result));
    //   //     this.notify.success('Brand Saved');
    //   //     this.fetchData();
    //   //
    //   // }
    // });
  }

  hasChild = (_: number, node: any) => !!node.children && node.children.length > 0;

  // hasChild(_: number, node: any) {
  //     console.log(node);
  //     return !!node.children && node.children.length > 0 ;
  // }
  //
  clientExpand(treeControl: any, node: any) {
    if (node.client._id) {
      this.clientList.forEach((client: any) => {
        if (client !== node) {
          treeControl.collapse(client);
        }
      });
    }
  }
}
