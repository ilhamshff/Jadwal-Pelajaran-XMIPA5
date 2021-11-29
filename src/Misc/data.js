const jadwal = [
  {
    hari: "Senin",
    mapel: [
      "Matematika Wajib",
      "PJOK", 
      "Bahasa Prancis",
      "Kimia"],
  },
  {
    hari: "Selasa",
    mapel: [
      "Sosiologi",
      "Fisika",
      "Bahasa Indonesia", 
      "Sejarah Wajib"],
  },
  {
    hari: "Rabu",
    mapel: [
      "PPKN",
      "Pendidikan Agama",
      "Bahasa Jawa",
      "Matematika Wajib",
    ],
  },
  {
    hari: "Kamis",
    mapel: [
      "PKWU", 
      "Matematika Peminatan",
      "BK", 
      "Seni Budaya"],
  },
  {
    hari: "Jum'at",
    mapel: [
      "Bahasa Inggris", 
      "Biologi",
      "Fisika"],
  },
];

const longest = jadwal
  .map(({ mapel }) => mapel.length)
  .sort((a, b) => b - a)[0];
const newArray = Array.from(new Array(longest));

export default jadwal;
export const columnRemap = newArray.map((_, idx) =>
  jadwal.map((data) => ({
    mapel: data.mapel[idx],
    index: jadwal.findIndex((x) => x.hari === data.hari) + 1,
  }))
);
