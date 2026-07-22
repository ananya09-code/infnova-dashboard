import axios from "axios";
import type { ApplicantResponse } from "../types/applicant";

export const getData = async ({
  page,
  limit,
  search,
  status,
  track,
  experienceLevel,
  country,
  sortBy,
}: {
  page: number;
  limit: number;
  search?: string;
  status?: string;
  track?: string;
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
        ...(track && { track }),
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





export const getDetail= async (id:string)=>{
    const res=await axios.get(
      `https://infnova-intern.vercel.app/api/applicants/${id}`,{
        headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      }
      }
     )
     return res.data

}

export async function updateStatus(
  id: string,
  status: string
) {
  const response = await axios.patch(
    `https://infnova-intern.vercel.app/api/applicants/${id}/status`,
    {
      status,
    },
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }
  );

  return response.data;
}


export const getStatus= async ()=>{
  const response=await axios.get(
      "https://infnova-intern.vercel.app/api/dashboard/summary",
      {
       headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }

  );
    return response.data;
}