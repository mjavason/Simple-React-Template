export default function BrokenPage() {
  return (
    <div className="min-h-screen w-screen flex justify-center items-center font-medium">
      <div className="max-w-115 flex flex-col items-center gap-2">
        <div>
          <svg
            data-v-ad307406=""
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            width="1em"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-12 h-12 md:w-20 md:h-20 lucide lucide-animal animal-icon flip text-gray-500"
          >
            <path d="M15.236 22a3 3 0 0 0-2.2-5"></path>
            <path d="M16 20a3 3 0 0 1 3-3h1a2 2 0 0 0 2-2v-2a4 4 0 0 0-4-4V4"></path>
            <path d="M18 13h.01"></path>
            <path d="M18 6a4 4 0 0 0-4 4 7 7 0 0 0-7 7c0-5 4-5 4-10.5a4.5 4.5 0 1 0-9 0 2.5 2.5 0 0 0 5 0C7 10 3 11 3 17c0 2.8 2.2 5 5 5h10"></path>
          </svg>
        </div>
        <p className="mb-3 text-xl font-bold text-center text-gray-700">
          Something is broken, <br />
          please refresh, contact support or
        </p>

        <a href="/" className="font-semibold text-green-700 text-lg">
          Return Home
        </a>
      </div>
    </div>
  );
}
