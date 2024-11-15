export interface CreateEducationDto {
    startDate: Date;
    endDate?: Date | string; 
    companyName: string;
    position: string;
    description: string;
    image?: string; 
}
