const NotFound = () => {
  return (
    <div className="min-h-screen w-screen flex justify-center items-center font-medium">
      <div className="max-w-115 flex flex-col items-center gap-1">
        <h1 className="font-bold text-6xl leading-tight text-sky-800">404</h1>
        <p className="mb-6 text-xl font-medium text-center text-gray-700">
          It looks like we couldn't find the the page you were looking for...
        </p>

        <div className="text-gray-600 font-semibold! text-lg!">
          Return to previous page
        </div>
        <a href="/" className="font-semibold text-gray-600 text-lg underline">
          Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
