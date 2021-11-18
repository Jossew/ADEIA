import { Component, OnInit } from '@angular/core';
import {FlatTreeControl} from '@angular/cdk/tree';
import {MatTreeFlatDataSource, MatTreeFlattener} from '@angular/material/tree';



/**
 * Food data with nested structure.
 * Each node has a name and an optional list of children.
 */
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
  
  typesOfMarkets: string[] = ['United Kingdom', 'USA', 'Argentina', 'Australia', 'Austria', 'Bahamas', 'Bahrain', 'Bangladesh ', 'Barbados', 'Belgium ', 'Belize', 'Benin', 'Bermuda', 'Bolivia' ];



  ngOnInit(): void {
  }

  private _transformer = (node: BenchmarkNode, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      level: level,
    };
  };

  treeControl = new FlatTreeControl<ExampleFlatNode>(
    node => node.level,
    node => node.expandable,
  );

  treeFlattener = new MatTreeFlattener(
    this._transformer,
    node => node.level,
    node => node.expandable,
    node => node.children,
  );

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  constructor() {
    this.dataSource.data = TREE_DATA;
  }

  hasChild = (_: number, node: ExampleFlatNode) => node.expandable;
}

