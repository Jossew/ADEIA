import { Component, OnInit } from '@angular/core';
import {FlatTreeControl} from '@angular/cdk/tree';
import {MatTreeFlatDataSource, MatTreeFlattener} from '@angular/material/tree';
import {Router} from "@angular/router";
import {FormControl, FormGroup} from "@angular/forms";



interface BenchmarkNode {
  name: string;
  children?: BenchmarkNode[];
}

const TREE_DATA: BenchmarkNode[] = [
  {
    name: 'Country Profile',
    children: [{name: 'Profile 1'}, {name: 'Profile 2'}, {name: 'Profile 3'}],
  },
  {
    name: 'Industry Profile',
    children: [{name: 'Finance'}, {name: 'Retail'}, {name: 'Beauty'}],
  },
  {
    name: 'Custom',
  },
];

/** Flat node with expandable and level information */
interface ExampleFlatNode {
  expandable: boolean;
  name: string;
  level: number;
}

@Component({
  selector: 'app-start-menu',
  templateUrl: './start-menu.component.html',
  styleUrls: ['./start-menu.component.scss']
})

export class StartMenuComponent implements OnInit {
  typesOfMarkets: string[] = ['United Kingdom', 'USA', 'Brazil' ];
  DEFAULT_MARKET: string = 'USA';

  selection: any;
  form: FormGroup;
  hasChild = (_: number, node: ExampleFlatNode) => node.expandable;

  treeControl: FlatTreeControl<any>;
  treeFlattener: MatTreeFlattener<any, any>;
  dataSource: MatTreeFlatDataSource<any, any>;

  data: any;

  constructor(private router: Router) {
    this.treeControl = new FlatTreeControl<ExampleFlatNode>(
      node => node.level,
      node => node.expandable,
    );
    this.treeFlattener = new MatTreeFlattener(
      this._transformer,
      node => node.level,
      node => node.expandable,
      node => node.children,
    );

    this.dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);
    this.dataSource.data = TREE_DATA;
    this.form = new FormGroup({
      brandName: new FormControl(),
      category: new FormControl(),
      brandMarket: new FormControl(),
      dimensionsOfInterest: new FormControl(),
      benchmarkOfInterest: new FormControl(),
      assets: new FormControl(),
      connectedInstagram: new FormControl(),
  });

    this.data = this.router.getCurrentNavigation()?.extras.state;
  }


  ngOnInit(): void {
    if(this.data) {
      this.form.patchValue({ ...this.data });
    }
  }

  private _transformer = (node: BenchmarkNode, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      level: level,
    };
  };

}

