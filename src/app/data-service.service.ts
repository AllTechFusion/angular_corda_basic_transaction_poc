import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_URL } from 'src/environment/environment';
@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  constructor(private http: HttpClient) { }

  getCurrentPartyDetails(port:any) {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.get<any>(API_URL.START_URL+port+API_URL.LOGGED_IN_PARTY_DETAIL, { headers });
  }

  getPeersDetails(port:any) {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.get<any>(API_URL.START_URL+port+API_URL.PEERS_DETAILS, { headers });
  }

  createTransaction(port:any,otherpartyName:any,amount:any) {
    const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    let url=API_URL.START_URL+port+API_URL.CREATE_TRX_IOUS_IOUVALUE+amount+API_URL.CREATE_TRX_IOUS_PARTYNAME+otherpartyName
    return this.http.post<any>(url,null,{headers});
  }

  getLedgerIous(port:any) {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.get<any>(API_URL.START_URL+port+API_URL.LEDGER_TRX_DETAILS_IOUS, { headers });
  }
}
