export interface UpdateEducationDto {
    startDate?: Date;
    endDate?: Date | string;
    companyName?: string;
    position?: string;
    description?: string;
    image?: string;
}
