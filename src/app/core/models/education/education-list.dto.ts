export interface EducationListDto {
    id: string;
    startDate: Date;
    endDate: Date | string;
    companyName: string;
    position: string;
    description: string;
    image?: string;
}