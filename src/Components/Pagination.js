import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";

export default function Pagination(props) {
  return (
    <div className="flex items-center justify-center  border-gray-200 bg-white px-4 py-3 sm:px-6">
      <div className=" sm:flex sm:flex-1 flex items-center justify-center">
        <div>
          <nav
            className="isolate inline-flex -space-x-px rounded-md shadow-sm "
            aria-label="Pagination"
          >
            <div
              className={`relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 ${
                props.page <= 1 && "pagination__disabled"
              }`}
              onClick={props.handlePrevPage}
            >
              <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
              <span>Previous</span>
            </div>
            <div
              className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
              onClick={props.handleNextPage}
            >
              <span>Next</span>
              <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}
