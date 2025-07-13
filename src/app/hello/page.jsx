import { KataMutiara } from "@/components/greeting";

export default function HelloPage() {
  const nama = "Danni A. Rachman";

  function sayHello() {
    return `Apa kabarmu hari ini ${nama}?`;
  }

  const isLogin = true;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 space-y-6 bg-gray-50">
      <h1 className="text-3xl font-bold text-blue-600 text-center">Halo, Selamat Datang {nama}!!!</h1>
      <div className="text-lg text-gray-700 space-y-1 text-center">
        <p>Hasil 10 + 15 = {10 + 15}</p>
        <p>{sayHello()}</p>
        <p>{isLogin ? "Kamu sudah login" : "Kamu belum login"}</p>
        <p className="text-green-600 font-medium">Welcome</p>
      </div>
      <KataMutiara asal="Samarinda" />
    </div>
  );
}
