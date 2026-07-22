export interface Applicant {
  id: string;
  fullName: string;
  email: string;
  status: "pending" | "approved" | "rejected";
  country: string;
  track: string;
  applicationDate:string;
}
export interface Meta {
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}
export interface ApplicantResponse {
  data: Applicant[];
  meta: Meta;
  statusdata:any;
}