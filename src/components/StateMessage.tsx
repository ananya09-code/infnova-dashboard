import {
  LoaderCircle,
  AlertTriangle,
  FileX,
  LogIn,
} from "lucide-react";
import { Link } from "react-router-dom";

type StateType =
  | "loading"
  | "empty"
  | "error"
  | "expired";

type StateMessageProps = {
  type: StateType;
  message?: string;
};


function StateMessage({
  type,
  message,
}: StateMessageProps) {


  const config = {
    loading: {
      icon: (
        <LoaderCircle
          className="animate-spin text-yellow-500"
          size={32}
        />
      ),
      title: "Loading...",
      text: "Please wait while we fetch your data.",
    },


    empty: {
      icon: (
        <FileX
          className="text-gray-400"
          size={32}
        />
      ),
      title: "No data found",
      text: "There is nothing to display here.",
    },


    error: {
      icon: (
        <AlertTriangle
          className="text-red-500"
          size={32}
        />
      ),
      title: "Something went wrong",
      text: "We could not load the data.",
    },


    expired: {
      icon: (
        <LogIn
          className="text-yellow-500"
          size={32}
        />
      ),
      title: "Session expired",
      text: "Your session has expired. Please login again.",
    },

  };


  const current = config[type];


  return (
    <div
      className="
        flex
        min-h-[250px]
        items-center
        justify-center
        rounded-xl
        border
        border-yellow-200
        bg-yellow-50
        p-6
      "
    >

      <div
        className="
          flex
          max-w-sm
          flex-col
          items-center
          text-center
          gap-3
        "
      >

        {current.icon}


        <h2
          className="
            text-lg
            font-semibold
            text-gray-800
          "
        >
          {current.title}
        </h2>


        <p
          className="
            text-sm
            text-gray-500
          "
        >
          {message || current.text}
        </p>



        {type === "expired" && (
          <Link
            to="/login"
            className="
              mt-3
              rounded-lg
              bg-yellow-400
              px-5
              py-2
              text-sm
              font-medium
              text-gray-900
              hover:bg-yellow-500
            "
          >
            Login Again
          </Link>
        )}

      </div>

    </div>
  );
}


export default StateMessage;