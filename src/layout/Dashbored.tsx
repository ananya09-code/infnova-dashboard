import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getData } from "../api/getData";
import Table from "../components/Table";
import type { ApplicantResponse } from "../types/applicant";
import FiltersBar from "../components/FiltersBar";
import DetailCard from "../components/DetailCard";
import ScrollBar from "../components/ScrollBar";
import StateMessage from "../components/StateMessage";
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
  } = useQuery<ApplicantResponse>({
    queryKey: [
      "applicants",
      page,
      limit,
      search,
      status,
      filters,
    ],

    queryFn: () =>
      getData({
        page,
        limit,
        search,
        status,
        ...filters,
      }),

    placeholderData: (previousData) => previousData,
  });
  if (isLoading) {
   return <StateMessage type="loading" />;}


   if (isError) {
      return <StateMessage type="error" />;}

  return (
 <div className="relative">
     {isFetching && (
       <div
       className="
        absolute
        right-4 top-0
        z-50
        rounded-lg
        bg-yellow-100
        px-3 py-1
        text-sm
       text-yellow-700
        shadow-md
    "
  >
    Updating...
  </div>
)}
  <div className="mt-5 rounded-xl border border-yellow-200 bg-yellow-50 p-4">
    <FiltersBar
      searchedItem={setSearch}
      FilterData={setFilters}
      status={setStatus}
    />


    <div className="flex gap-5">
   
      <div className="flex-1">
   
        <Table
          data={data?.data ?? []}
          selectedDetail={setDetailID}
        />

        <ScrollBar
          page={page}
          changepage={setPage}
          totalPages={data?.meta?.totalPages ?? 1}
          limit={data?.meta?.limit ?? 0}
          total={data?.meta?.total ?? 0}
        />
      </div>

      {Detailid && (
       <div className="w-full lg:w-96">
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