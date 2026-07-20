import axios from "axios";
import type { ApplicantResponse } from "../types/applicant";

export const getData = async ({
  page,
  limit,
  search,
  status,
  Track,
  experienceLevel,
  country,
  sortBy,
}: {
  page: number;
  limit: number;
  search?: string;
  status?: string;
  Track?: string;
  experienceLevel?: string;
  country?: string;
  sortBy?: string;
}): Promise<ApplicantResponse> => {
  const response = await axios.get(
    "https://infnova-intern.vercel.app/api/applicants",
    {
      params: {
        page,
        limit,

        ...(search && { search }),
        ...(status && { status }),
        ...(Track && { Track }),
        ...(experienceLevel && { experienceLevel }),
        ...(country && { country }),
        ...(sortBy && { sortBy }),
      },

      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }
  );

  return response.data;
};