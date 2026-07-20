import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getData } from "../api/getData";
import Table from "../components/Table";
import type { ApplicantResponse } from "../types/applicant";
import FiltersBar from "../components/FiltersBar";
function Dashboard() {
  const [page, setPage] = useState(1);
  const limit = 10;

  const [search, setSearch] = useState("");

  const [filters, setFilters] = useState({
    status: "",
    Track: "",
    experienceLevel: "",
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
      filters,
    ],

    queryFn: () =>
      getData({
        page,
        limit,
        search,
        ...filters,
      }),

    placeholderData: (previousData) => previousData,
  });


  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Error loading applicants</p>;
  }

  return (
    <div className="relative">

      {isFetching && (
        <div
          className="
            absolute right-4 top-0
            rounded-lg
            bg-yellow-100
            px-3 py-1
            text-sm
            text-yellow-700
          "
        >
          Updating...
        </div>
      )}

       <div className="mb-4 flex items-center justify-between">
      <p className="text-sm text-gray-500">
        Showing {data?.meta?.limit} of {data?.meta?.total} applicants
      </p>
      
    </div>

      <div className="mt-5 rounded-xl border border-yellow-200 bg-yellow-50 p-4">
        <FiltersBar searchedItem={setSearch} FilterData={setFilters}/>
        <Table data={data?.data ?? []} />

        <div className="mt-5 flex items-center justify-between">

          <button
            disabled={page === 1}
            onClick={() => setPage((prev) => prev - 1)}
            className="
              rounded-lg
              border border-yellow-300
              bg-white
              px-4 py-2
              text-sm font-medium
              text-gray-700
              hover:bg-yellow-100
              disabled:opacity-50
            "
          >
            Previous
          </button>


          <div
            className="
              rounded-lg
              bg-white
              px-4 py-2
              text-sm font-medium
              text-gray-700
              shadow-sm
            "
          >
            Page {data?.meta.page} of {data?.meta.totalPages}
          </div>


          <button
            disabled={page === data?.meta.totalPages}
            onClick={() => setPage((prev) => prev + 1)}
            className="
              rounded-lg
              bg-yellow-400
              px-4 py-2
              text-sm font-semibold
              text-gray-900
              hover:bg-yellow-500
              disabled:opacity-50
            "
          >
            Next
          </button>

        </div>
      </div>
    </div>
  );
}

export default Dashboard;