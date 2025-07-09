import { useSearchParams } from "react-router-dom";

export default function LoginSuccess() {
  const [params] = useSearchParams();
  const role = params.get("role");

  return (
    <div className="min-h-screen flex items-center justify-center bg-green-50">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center max-w-md">
      <h1 className="text-3xl font-bold underline text-blue-600">
  Hello Tailwind!
</h1>

        <h2 className="text-2xl font-bold text-green-600 mb-4">
          Login Successful 🎉
        </h2>
        <p className="text-gray-700 text-lg">
          Welcome <span className="font-semibold">{role}</span> user!
        </p>
        <p className="mt-4 text-sm text-gray-500">
          (You’ll be redirected to your dashboard in the next milestone.)
        </p>
      </div>
    </div>
  );
}
