import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DashboardService } from '../../service/dashboard.service';

@Component({
    selector: 'app-dashboard',
    templateUrl: 'dashboard.component.html',
    styleUrls: [ 'dashboard.component.scss' ]
})
export class DashboardComponent implements OnInit {

    state = { chartBar: null, chartDonut: null, tableUsers: null };

    constructor(private router: Router,
                private dashboardService: DashboardService) {
    }

    logout() {
        localStorage.removeItem('token');
        this.router.navigate([ 'sign-up' ]);
    }

    ngOnInit() {
        this.dashboardService.getDashboard()
            .subscribe(res => {
                const { chartBar, chartDonut, tableUsers } = res;
                this.state = { chartBar, chartDonut, tableUsers };
            });

        // const ctx = document.getElementById('myChart');
        // const myChart = new Chart(ctx, chart);
    }
}

const chart = {
    type: 'pie',
    data: {
        datasets: [
            {
                data: [ 10, 20, 30 ]
            }
        ],

        // These labels appear in the legend and in the tooltips when hovering different arcs
        labels: [
            'Red',
            'Yellow',
            'Blue'
        ]
    }
};
