import { KataMutiara } from "@/components/greeting";
import { ButtonComponent } from "@/components/classComponent";

export default function KataPage() {
  const namaUser = "Danni A. Rachman";
  return (
    <div>
      <KataMutiara nama={namaUser} asal={"Samarinda"} />
      <ButtonComponent nama={namaUser} />
    </div>
  );
}
