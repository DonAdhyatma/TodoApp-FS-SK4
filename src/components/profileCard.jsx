const ProfileCard = ({ nama, job, imageUrl }) => {
  return (
    <div className="flex items-center space-x-4 p-4 m-28 border border-blue-400 rounded-lg shadow">
      <img src={imageUrl} alt={nama} />
      <div>
        <p className="font-semibold text-lg">Nama: {nama}</p>
        <p className="font-semibold text-base text-blue-400">Pekerjaan: {job}</p>
      </div>
    </div>
  );
};

export { ProfileCard };
