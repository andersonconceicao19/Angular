import { Injectable } from '@angular/core';
// import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
    providedIn: 'root'
})
export class DataService {
    baseUrl = 'http://localhost:7188';

constructor(private http: HttpClient) {}

    authenticate(data: any)
    {
        console.log(data);
        return this.http.post(`${this.baseUrl}/v1/login`, data);
    }

    getMonthlySalesChartData()
    {
        return this.http.get(`${this.baseUrl}/v1/reports/ms`);
    }
    getOrders()
    {
        return this.http.get(`${this.baseUrl}/v1/orders`);
    }
    getOrder(order: string)
    {
        return this.http.get(`${this.baseUrl}/v1/orders/${order}`);
    }

}