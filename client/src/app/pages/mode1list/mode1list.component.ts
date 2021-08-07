import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
// Import Services
import { Mode1Service } from '../../services/mode1.service';
// Import Models
import { Mode1 } from '../../domain/ngcpos_db/mode1';

// START - USED SERVICES
/**
* Mode1Service.delete
*	@description CRUD ACTION delete
*	@param ObjectId id Id
*
* Mode1Service.list
*	@description CRUD ACTION list
*
*/
// END - USED SERVICES

/**
 * This component shows a list of Mode1
 * @class Mode1ListComponent
 */
@Component({
    selector: 'app-mode1list',
    templateUrl: './mode1list.component.html',
    styleUrls: ['./mode1list.component.css']
})
export class Mode1ListComponent implements OnInit {
    list: Mode1[];
    search: any = {};
    idSelected: string;
    constructor(
        private mode1Service: Mode1Service,
    ) { }

    /**
     * Init
     */
    ngOnInit(): void {
        this.mode1Service.list().subscribe(list => this.list = list);
    }

    /**
     * Select Mode1 to remove
     *
     * @param {string} id Id of the Mode1 to remove
     */
    selectId(id: string) {
        this.idSelected = id;
    }

    /**
     * Remove selected Mode1
     */
    deleteItem() {
        this.mode1Service.remove(this.idSelected).subscribe(data => this.list = this.list.filter(el => el._id !== this.idSelected));
    }

}
