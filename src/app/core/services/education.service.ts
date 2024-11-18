import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { EducationListDto } from '../models/education/education-list.dto';
import { UpdateEducationDto } from '../models/education/education-update.dto';
import { CreateEducationDto } from '../models/education/education-create.dto';
import { DeleteResponseDto } from '../models/education/education-deleteResponse.dto';

@Injectable({
  providedIn: 'root'
})
export class EducationService {
  constructor(private http: HttpClient) { }
  private apiUrl = `${environment.apiUrl}/educations`

  addEducation(education: CreateEducationDto | FormData): Observable<EducationListDto> {
    return this.http.post<EducationListDto>(this.apiUrl, education)
  }

  getAllEducations(): Observable<EducationListDto[]> {
    return this.http.get<EducationListDto[]>(this.apiUrl);
  }

  updateEducation(id: string, education: UpdateEducationDto | FormData): Observable<EducationListDto> {
    return this.http.put<EducationListDto>(`${this.apiUrl}/${id}`, education);
  }

  deleteEducation(id: string): Observable<DeleteResponseDto> {
    return this.http.delete<DeleteResponseDto>(`${this.apiUrl}/${id}`);
  }
}
