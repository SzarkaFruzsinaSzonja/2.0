import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from 'src/app/model/user';

@Component({
    selector: 'app-data-row',
    templateUrl: './data-row.component.html',
    styleUrls: ['./data-row.component.scss']
})
export class DataRowComponent implements OnInit {

    constructor() { }
    //Ez a komponens tárolja az aktuális user referenciáját
    @Input() dataRow: User = new User();

    @Output() selectClick: EventEmitter<User> = new EventEmitter();
    @Output() updateClick: EventEmitter<User> = new EventEmitter();
    @Output() deleteClick: EventEmitter<User> = new EventEmitter();

    ngOnInit(): void {
    }

    onSelectButtonClick(): void {
        this.selectClick.emit(this.dataRow);
    }
    onUpdateButtonClick(): void {
        this.updateClick.emit(this.dataRow);
    }
    onDeleteButtonClick(): void {
        this.deleteClick.emit(this.dataRow);
    }
}
