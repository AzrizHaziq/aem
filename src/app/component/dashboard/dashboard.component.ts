import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Chart from 'chart.js/dist/Chart.js';
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

                this.setupBarChart();
                this.setupPierChart();
            });
    }

    setupPierChart() {
        const { chartDonut } = this.state;
        const ctx = document.getElementById('pie-chart').getContext('2d');

        const pieChart = new Chart(ctx, {
            type: 'pie',
            data: {
                labels: chartDonut.map(item => item.country),
                datasets: [ {
                    data: chartDonut.map(item => item.litres)
                } ]
            }
        });
    }

    setupBarChart() {
        const { chartBar } = this.state;

        const ctx = document.getElementById('bar-chart').getContext('2d');

        const barChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: chartBar.map(item => item.country),
                datasets: [ {
                    label: 'Those are colors',
                    data: chartBar.map(item => item.visits)
                } ]
            },
        });
    }
}

