import { useState } from "react";
import type { ChangeEvent } from "react";
import { FilterIcon, X } from "lucide-react";
import { useIsMobile } from "../hooks/useisMobile";

type FilterState = {
  track: string;
  experienceLevel: string;
  country: string;
  sortBy:
    | ""
    | "fullName"
    | "email"
    | "track"
    | "status"
    | "applicationDate";
};

type FilterProp = {
  searchedItem?: (value: string) => void;
  status?: (value: string) => void
  FilterData?: (data: FilterState) => void;
};

function FiltersBar({ searchedItem, FilterData ,status}: FilterProp) {
  const isMobile = useIsMobile();
  const [isOpen, setIsOpen] = useState(false);

  const [formData, setFormData] = useState<FilterState>({
    track: "",
    experienceLevel: "",
    country: "",
    sortBy: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleApply = () => {
    FilterData?.(formData);
    setIsOpen(false);
  };

  const handleClear = () => {
    const emptyFilters: FilterState = {
      track: "",
      experienceLevel: "",
      country: "",
      sortBy: "",
    };

    setFormData(emptyFilters);
    FilterData?.(emptyFilters);
  };

  return (
    <div className="relative mb-5">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        
        {/*who ever is reading this making this was a pain!!*/}
        <input
          type="search"
          placeholder="Search for an applicant..."
          className="
            w-full rounded-lg
            border border-gray-200
            bg-white
            px-4 py-2
            text-sm
            outline-none
            focus:border-yellow-400
            focus:ring-2
            focus:ring-yellow-200
          "
          onChange={(e) => searchedItem?.(e.target.value)}
        />

        <select
          name="status"
          onChange={(e)=>status?.(e.target.value) }
          className="
            min-w-42.5
            rounded-lg
            border border-gray-200
            bg-white
            px-4 py-2
            text-sm
          "
        >
          <option value="">All Status</option>
          <option value="pending">Pending</option>
          <option value="shortlisted">Shortlisted</option>
          <option value="accepted">Accepted</option>
          <option value="rejected">Rejected</option>
        </select>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`
            flex items-center justify-center gap-2
            rounded-lg
            transition
            ${
              isMobile
                ? "bg-yellow-400 p-2 text-gray-900 hover:bg-yellow-500"
                : "border border-yellow-300 bg-yellow-50 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-yellow-100"
            }
          `}
        >
          {isOpen ? <X size={18} /> : <FilterIcon size={18} />}
          {!isMobile && "Filters"}
        </button>

      </div>

      {isOpen && (
        <div
          className={`
            absolute
            top-14
            z-30
            rounded-2xl
            border border-yellow-200
            bg-white
            p-5
            shadow-xl
            ${
              isMobile
                ? "left-0 w-full max-w-md"
                : "right-0 w-96"
            }
          `}
        >
          <div className="mb-5 flex items-center justify-between">
            <h3 className="text-lg font-semibold text-gray-800">
              Filters
            </h3>

            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover:text-gray-700"
            >
              <X size={20}/>
            </button>
          </div>


          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-600">
                Track
              </label>

              <select
                name="track"
                value={formData.track}
                onChange={handleChange}
                className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm"
              >
                <option value="">All</option>
                <option value="frontend">Frontend</option>
                <option value="backend">Backend</option>
                <option value="ui-ux">Ui-ux</option>
                <option value="mobile">mobile</option>
                <option value="data-analytics">Data-analytics</option>
              </select>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-gray-600">
                Country
              </label>

              <select
                name="country"
                value={formData.country}
                onChange={handleChange}
                className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm"
              >
                <option value="">All</option>
                <option value="ethiopia">Ethiopia</option>
                <option value="Tanzania">Tanzania</option>
                <option value="Uganda">Uganda</option>
                <option value="Ghana">Ghana</option>
                <option value="Botswana">Botswana</option>
                <option value="South Africa">South Africa</option>
              </select>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-gray-600">
                Experience
              </label>

              <select
                name="experienceLevel"
                value={formData.experienceLevel}
                onChange={handleChange}
                className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm"
              >
                <option value="">All</option>
                <option value="beginner">Beginner</option>
                <option value="intermediate">Intermediate</option>
                <option value="advanced">Advanced</option>
              </select>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-gray-600">
                Order By
              </label>

              <select
                name="sortBy"
                value={formData.sortBy}
                onChange={handleChange}
                className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm"
              >
                <option value="">Default</option>
                <option value="fullName">Full Name</option>
                <option value="email">Email</option>
                <option value="track">Track</option>
                <option value="status">Status</option>
                <option value="applicationDate">
                  Application Date
                </option>
              </select>
            </div>

          </div>


          <div className="mt-5 flex items-center justify-between border-t border-gray-200 pt-4">

            <button
              onClick={handleClear}
              className="text-sm font-medium text-gray-500 hover:text-gray-800"
            >
              Clear all
            </button>


            <button
              onClick={handleApply}
              className="
                rounded-lg
                bg-yellow-400
                px-5 py-2
                text-sm
                font-semibold
                text-gray-900
                hover:bg-yellow-500
              "
            >
              Apply
            </button>

          </div>

        </div>
      )}

    </div>
  );
}

export default FiltersBar;