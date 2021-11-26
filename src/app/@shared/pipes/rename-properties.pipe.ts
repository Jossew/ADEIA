import {Pipe, PipeTransform} from '@angular/core';

const deepMapKeys = require('deep-map-keys');
@Pipe({
    name: 'renameProperties'
})
export class RenamePropertiesPipe implements PipeTransform {

    transform(value: any): any {
        return deepMapKeys(value, (key: any) => {
            if (['brandList'].includes(key)) {
                return 'children';
            }
            if (['campaignList'].includes(key)) {
                return 'children';
            }
            return key;
        });
    }

}
