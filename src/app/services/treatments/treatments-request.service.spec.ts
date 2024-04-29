import { TestBed } from '@angular/core/testing';

import { TreatmentsRequestService } from './treatments-request.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('TreatmentsRequestService', () => {
    let service: TreatmentsRequestService;

    let httpClient: HttpClient;
    let httpTestingController: HttpTestingController;



    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule, HttpClientModule],
            providers: [TreatmentsRequestService]
        });
        service = TestBed.inject(
            TreatmentsRequestService
        );


        httpClient = TestBed.inject(HttpClient);
        httpTestingController = TestBed.inject(HttpTestingController);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
