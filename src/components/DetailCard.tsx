import { getDetail } from "../api/getData";
import { useQuery,useQueryClient,useMutation } from "@tanstack/react-query";
import { updateStatus } from "../api/getData";
import { useState,useEffect } from "react";
import { X } from "lucide-react";

type DetailProp = {
  id: string;
  close?: () => void;
};

function DetailCard({ id, close }: DetailProp) {
  const [status, setStatus] = useState("");

  const { data, isLoading, isError } = useQuery({
    queryFn: () => getDetail(id),
    queryKey: ["Detail", id],
    enabled: Boolean(id),
  });
  useEffect(() => {
  if (data?.status) {
    setStatus(data.status);
  }
}, [data]);
  const queryClient = useQueryClient();
  const updateStatusMutation = useMutation({
  mutationFn: ({ id, status }: { id: string; status: string }) =>
    updateStatus(id, status),

  onSuccess: () => {
    queryClient.invalidateQueries({
      queryKey: ["Detail", id],
    });

    queryClient.invalidateQueries({
      queryKey: ["applicants"],
    });
  },
});


  if (!id) return null;
  if (isLoading) { return (
    <div
      className="
      fixed inset-0 z-50 bg-black/30
      flex justify-end
      md:static md:bg-transparent
      ">
      <div
        className="
        w-full h-full bg-white
        md:w-[380px]

        fixed bottom-0
        rounded-t-2xl

        md:static
        md:rounded-none

        flex items-center justify-center
        overflow-y-auto
        p-6 shadow-xl
        "
      >
        <p className="text-sm text-gray-600">
          Loading...
        </p>
      </div>
    </div>
  );
}


 if (isError) {
    return (
    <div
      className="
      fixed inset-0 z-50 bg-black/30
      flex justify-end
      md:static md:bg-transparent
      "
    >
      <div
        className="
        w-full h-full bg-white
        md:w-[380px]

        fixed bottom-0
        rounded-t-2xl

        md:static
        md:rounded-none

        flex items-center justify-center
        overflow-y-auto
        p-6 shadow-xl
        "
      >
        <p className="text-sm text-red-600">
          Error loading applicant details
        </p>
      </div>
    </div>
  );
}


  return (
    <div
      className="
      fixed inset-0 z-50 bg-black/30
      flex justify-end

      md:static md:bg-transparent
      "
    >

      <div
        className="
        w-full h-full bg-white
        md:w-[380px]

        fixed bottom-0
        rounded-t-2xl

        md:static
        md:rounded-none

        overflow-y-auto
        p-6 shadow-xl
        "
      >
        <div className="flex justify-between items-start">

          <div>
            <h2 className="text-lg font-semibold text-gray-900">
              {data?.fullName}
            </h2>

            <p className="text-sm text-gray-500">
              {data?.track}
            </p>
          </div>


          <button onClick={close}>
            <X size={20}/>
          </button>

        </div>


       <div
      className="
       mt-5
       border-b-2
       border-yellow-400
       px-4 py-2
       text-sm
       font-medium
      text-yellow-600  "> Details</div>


        <div className="mt-6 space-y-5">


          <Info
            label="Email"
            value={data?.email}
          />


          <Info
            label="Phone"
            value={data?.phoneNumber}
          />


          <Info
            label="Country"
            value={data?.country}
          />


          <Info
            label="Program"
            value={data?.track}
          />


          <Info
            label="Experience"
            value={data?.experienceLevel}
          />



          <div>
            <p className="text-sm text-gray-500">
              Skills
            </p>


            <div className="mt-2 flex flex-wrap gap-2">

              {data?.skills.map((skill:string)=>(
                <span
                  key={skill}
                  className="
                  rounded-full
                  bg-gray-100
                  px-3 py-1
                  text-xs
                  "
                >
                  {skill}
                </span>
              ))}

            </div>
          </div>



          <Info
            label="Portfolio"
            value={data?.portfolioUrl}
          />


          <Info
            label="Github"
            value={data?.githubUrl}
          />



          <Info
            label="LinkedIn"
            value={data?.linkedInUrl}
          />


          <Info
            label="Motivation"
            value={data?.motivation}
          />



          <div>

            <p className="text-sm text-gray-500">
              Status
            </p>

         <select
        value={status}
         onChange={(e)=>setStatus(e.target.value)}
        className="
        mt-2 w-full rounded-lg
        border border-yellow-200
        px-3 py-2 ">
              <option value="pending">
                Pending
              </option>

              <option value="shortlisted">
               Shortlisted
              </option>

              <option value="accepted">
                Accepted
              </option>

              <option value="rejected">
                Rejected
              </option>

            </select>

          </div>


        </div>
        <div className="mt-8 flex gap-3">

          <button
            onClick={close}
            className="
            flex-1 rounded-lg
            border py-2
            text-sm
            "
          >
            Cancel
          </button>


        <button
      className="
     flex-1 rounded-lg
    bg-amber-300
    py-2
    text-sm text-black
     disabled:opacity-50
     "
    disabled={updateStatusMutation.isPending}
    onClick={() =>
    updateStatusMutation.mutate({
      id,
      status,
    })
    }>
    { updateStatusMutation.isPending
    ? "Saving..."
    : updateStatusMutation.isSuccess
    ? "Saved ✓"
    : "Save Changes"}
      </button>
        </div>


      </div>

    </div>
  );
}



function Info({
  label,
  value
}:{
  label:string;
  value?:string;
}){

  return (
    <div>
      <p className="text-sm text-gray-500">
        {label}
      </p>

      <p className="mt-1 text-sm font-medium text-gray-800 break-words">
        {value || "-"}
      </p>
    </div>
  );
}


export default DetailCard;