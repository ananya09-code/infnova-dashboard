export interface StatusResponse {
  totalApplicants: number;
  byStatus: {
    pending: number;
    shortlisted: number;
    accepted: number;
    rejected: number;
  };
  byTrack: {
    frontend: number;
    backend: number;
    "ui-ux": number;
    "data-analytics": number;
    mobile: number;
  };
}