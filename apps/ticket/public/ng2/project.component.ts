import {Component, OnInit} from '@angular/core';
import {Person} from "../js/tsmodel/person";
import {Project} from "../js/tsmodel/project";

@Component({
    selector: 'menu',
    //templateUrl: '../html_templates/project.component.html'
    template: `
    <div class="page-header">
        <div class="pull-right">
            <button (click)="saveProject()" type="button" class="btn btn-primary btn-lg">Save</button>
        </div>
        <h1>Project</h1>
    </div>

    <form #projectForm="ngForm" class="form-horizontal" role="form">

        <div class="form-group">
            <!--Text field-->
            <label for="name" class="col-md-2 control-label">Name</label>
            <div class="col-md-10">
                <input [(ngModel)]="project.name" type="text" class="form-control" id="name" placeholder="Name"
                       (change)="if(typeof(project.nameTrigger) == 'function'){project.nameTrigger()}" focus="1"/>
                <span style="color:red" *ngIf="controller.isError('project.name')"><br/><span>{{controller.error}}</span></span>
            </div>
        </div>

        <div class="form-group">
            <!--Memo field-->
            <label for="description" class="col-md-2 control-label">Description</label>
            <div class="col-md-10">
                <textarea [(ngModel)]="project.description" type="text" class="form-control" id="description" placeholder="Description"
                          (change)="if(typeof(project.descriptionTrigger) == 'function'){project.descriptionTrigger()}"></textarea>
                <span style="color:red" *ngIf="controller.isError('project.description')"><br/><span>{{controller.error}}</span></span>
            </div>
        </div>

        <div class="form-group" *ngIf="project.creator">
            <!--Static fields-->
            <label for="created" class="col-md-2 control-label">Created</label>
            <div class="col-md-4">
                <p type="text" class="form-control-static" id="created" >{{project.created}}</p>
            </div>

            <label for="lastName" class="col-md-2 control-label">Last Name</label>
            <div class="col-md-4">
                <p type="text" class="form-control-static" id="lastName" >{{project.creator.getFullName()}}</p>
            </div>
        </div>

        <div class="form-group">
            <!--Object select-->
            <label class="col-md-2 control-label">{{ticket.project}}</label>
            <div class="col-md-4">
                <select class="form-control" id="power" required
                        [(ngModel)]="project.owner">
                    <option *ngFor="let #pr of peopleGet()" [value]="pr">{{pr}}</option>
                </select>
            </div>
        </div>

    </form>
    `
})

export class ProjectComponent implements OnInit {

    comment: string = '';

    ngOnInit(): void {
    }
}