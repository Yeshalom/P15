// contoh data mahasiswa
const data = [
    { no: 20241112, nama: "Andi", nohp: "08125544321", umur: 25, kota: "Jakarta" },
    { no: 20241112, nama: "Andi", nohp: "08125544322", umur: 25, kota: "Jakarta" },
    { no: 20241113, nama: "Budi", nohp: "08125544323", umur: 30, kota: "Surabaya" },
    { no: 20241114, nama: "Citra", nohp: "08125544324", umur: 27, kota: "Bandung" },
    { no: 20241115, nama: "Dina", nohp: "08125544325", umur: 22, kota: "Yogyakarta" }
];

// fungsi untuk meload data ke table
function LoadTableData(data){
    console.log('Test');
    const tableBody = document.querySelector("#data-table tbody");
    tableBody.innerHTML = ""; //kosongkan table sebelum memuat

    data.forEach(item => {
        const row = document.createElement("tr");
        row.innerHTML = `
        <td>${item.no}</td>
        <td>${item.nama}</td>
        <td>${item.nohp}</td>
        <td>${item.umur}</td>
        <td>${item.kota}</td>
        `;
        tableBody.appendChild(row);
    });
}

// panggilan fungsi untuk meload data
document.addEventListener("DOMContentLoaded", () => {
    LoadTableData(data);
});