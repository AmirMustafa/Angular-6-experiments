// We have to import file Pipe and PipeTransform (Pipe Transfor is an interface which we will implement below)
import {Pipe, PipeTransform} from '@angular/core';

// Creating Decorator - this is the name of the pipe we want to use
@Pipe({
    name: 'customslice'
})

export class CustomSlice implements PipeTransform {
    transform(value:string, args: any) {
        if(!value) {
            return null;
        }

        return value.slice(0,5);
    }
}