import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'shorted',
    standalone: true
})
export class ShortedPipe implements PipeTransform {

    transform(text: string, start: number, end: number): string {
        return text.slice(start, end) + '...';
    }

}
