import { ProfileCard } from "./profileCard";

function KataMutiara({ nama, asal }) {
  nama = "Danni A. Rachman";
  const text = `Ini kata mutiara untuk ${nama} yang berasal dari ${asal} untuk hari ini.`;
  const dadGibs = "HIDUP JOKOWIII!";
  const word = `Sebelum memulai acara, awali dengan teriakan ${dadGibs}`;
  const imgUrl = `https://placehold.co/400`;
  const userJob = "Programmer Pemula";

  return (
    <div className="flex flex-col items-center justify-center p-6 space-y-6">
      <ProfileCard imageUrl={imgUrl} nama={nama} job={userJob} />
      <p className="text-center text-gray-800 text-base">{text}</p>
      <p className="text-center text-gray-800 text-base">{word}</p>
    </div>
  );
}

export { KataMutiara };
