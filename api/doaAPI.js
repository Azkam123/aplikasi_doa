export const getListDoa = async () => {
  try {
    const response = await fetch("https://open-api.my.id/api/doa");
    if (!response.ok) {
      throw new Error(`Gagal mengambil status ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
