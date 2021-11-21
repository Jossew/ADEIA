import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate'
})

export class TruncatePipe implements PipeTransform {
  transform(value: string, limit?: number): string {
    // const limit: number = args.length > 0 ? parseInt(args[0], 10) : 20;
    if (!limit) {
      limit = 20;
    }
    const trail = '...';
    return limit && value.length > limit ? value.substring(0, limit) + trail : value;
  }
}
