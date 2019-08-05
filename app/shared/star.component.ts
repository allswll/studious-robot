import { OnChanges, Component, Input, Output, EventEmitter } from '@angular/core';



@Component({
    selector: 'pm-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges{
    @Input() rating: number = 4;
    starWidth: number;
    @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();
    
    ngOnChanges(changes: import("@angular/core").SimpleChanges): void {
       this.starWidth = this.rating * 75 / 5;
    }
    
    onClick(){
        console.log(`The rating ${this.rating} was clicked`)
        this.ratingClicked.emit(`The rating ${this.rating} was clicked`);
    }
}