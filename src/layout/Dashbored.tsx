import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getData,getStatus} from "../api/getData";
import Table from "../components/Table";
import type { ApplicantResponse } from "../types/applicant";
import FiltersBar from "../components/FiltersBar";
import DetailCard from "../components/DetailCard";
import ScrollBar from "../components/ScrollBar";
import StateMessage from "../components/StateMessage";

import type{ StatusResponse} from "../types/StatusResponse "
import StatusCard from "../components/StatusCard";
import StatusBar from "../components/StatusBar";

export interface DashboardResponse {
  applicants: ApplicantResponse;
  statusdata: StatusResponse;
}



function Dashboard() {
  const [page, setPage] = useState(1);
  const limit = 10;
  const [Detailid,setDetailID]=useState<string>("")

  const [search, setSearch] = useState("");
  const [status,setStatus] =useState("")

  const [filters, setFilters] = useState({
    experienceLevel: "",
    track:"",
    country: "",
    sortBy: "",
  });

  const {
    data,
    isLoading,
    isFetching,
    isError,
  } = useQuery<DashboardResponse>({
    queryKey: [
      "applicants",
      "statusdata",
      page,
      limit,
      search,
      status,
      filters,
    ],

queryFn: async () => {
  const [applicants, statusdata] = await Promise.all([
    getData({
      page,
      limit,
      search,
      status,
      ...filters,
    }),
    getStatus(),
  ]);

  return {
    applicants,
    statusdata,
  };
},

    placeholderData: (previousData) => previousData,
  });
  if (isLoading) {
   return <StateMessage type="loading" />;}


   if (isError) {
      return <StateMessage type="error" />;}

    console.log(data?.statusdata)

  return (
<div className="relative space-y-6">

  <div className="flex items-center justify-between">
    <div>
      <h1 className="text-2xl font-bold text-gray-800">
        Dashboard Overview
      </h1>

      <p className="mt-1 text-sm text-gray-500">
        Manage internship applicants and track application progress
      </p>
    </div>

    {isFetching && (
      <div
        className="
          rounded-lg
          bg-yellow-100
          px-4 py-2
          text-sm
          font-medium
          text-yellow-700
          shadow-sm
        "
      >
        Updating...
      </div>
    )}
  </div>


  <div className="grid gap-5 lg:grid-cols-2">
    <StatusCard
      totalApplicants={data?.statusdata?.totalApplicants ?? 0}
      byStatus={
        data?.statusdata?.byStatus ?? {
          pending: 0,
          shortlisted: 0,
          accepted: 0,
          rejected: 0,
        }
      }
    />

    <StatusBar
      totalApplicants={data?.statusdata?.totalApplicants ?? 0}
      byTrack={
        data?.statusdata?.byTrack ?? {
          frontend: 0,
          backend: 0,
          "ui-ux": 0,
          "data-analytics": 0,
          mobile: 0,
        }
      }
    />
  </div>

  <div className="rounded-xl border border-yellow-200 bg-yellow-50 p-5">

    <h2 className="mb-4 text-lg font-semibold text-gray-800">
      Applicants
    </h2>

    <FiltersBar
      searchedItem={setSearch}
      FilterData={setFilters}
      status={setStatus}
    />


    <div className="mt-5 flex gap-5">

      <div className="flex-1">
        <Table
          data={data?.applicants.data ?? []}
          selectedDetail={setDetailID}
        />

        <ScrollBar
          page={page}
          changepage={setPage}
          totalPages={data?.applicants.meta?.totalPages ?? 1}
          limit={data?.applicants.meta?.limit ?? 0}
          total={data?.applicants.meta?.total ?? 0}
        />
      </div>


      {Detailid && (
        <div className="hidden w-96 lg:block">
          <DetailCard
            id={Detailid}
            close={() => setDetailID("")}
          />
        </div>
      )}

    </div>

  </div>

</div>
  );
}

export default Dashboard;