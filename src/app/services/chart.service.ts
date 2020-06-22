import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {ChartMeta} from "../interfaces/chart-meta.interface";

@Injectable( {providedIn: 'root'} )
export class ChartService {

  constructor(private http: HttpClient) {

  }

  getCharts( page: number ) {
    return this.http.get<ChartMeta>( `http://localhost:2900/charts/page/${page}`, {responseType: 'json'} )
  }

}
