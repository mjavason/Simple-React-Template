const NotFound = () => {
  return (
    <div className="flex min-h-screen w-screen items-center justify-center font-medium">
      <div className="flex max-w-115 flex-col items-center gap-1">
        <h1 className="text-6xl leading-tight font-bold text-sky-800">404</h1>
        <p className="mb-6 text-center text-xl font-medium text-gray-700">
          It looks like we couldn't find the the page you were looking for...
        </p>

        <div className="text-lg! font-semibold! text-gray-600">
          Return to previous page
        </div>
        <a href="/" className="text-lg font-semibold text-gray-600 underline">
          Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
