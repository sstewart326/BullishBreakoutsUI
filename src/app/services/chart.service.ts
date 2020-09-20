import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {ChartMeta} from "../interfaces/chart-meta.interface";
import {environment} from "../../environments/environment";

@Injectable( {providedIn: 'root'} )
export class ChartService {

  constructor(private http: HttpClient) {

  }

  getCharts( page: number, numToFetch: number ) {
    return this.http.get<ChartMeta>( `${environment.serviceBase}/api/charts/page/${page}/fetch/${numToFetch}`, {responseType: 'json'} )
  }

}
