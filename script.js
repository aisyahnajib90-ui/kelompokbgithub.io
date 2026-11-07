// Koordinat Palembang
const latitude = -2.9761;
const longitude = 104.7754;

// Alamat API Open-Meteo
const apiURL =
    `https://air-quality-api.open-meteo.com/v1/air-quality?latitude=${latitude}&longitude=${longitude}&current=pm10,pm2_5,carbon_monoxide,nitrogen_dioxide&timezone=auto`;

// Mengambil data dari API
fetch(apiURL)

    .then(response => {
        if (!response.ok) {
            throw new Error("Gagal mengambil data API");
        }

        return response.json();
    })

    .then(data => {

        // Mengambil data kualitas udara terkini
        const udara = data.current;

        // Menampilkan data ke HTML
        document.getElementById("hasilAPI").innerHTML = `

            <div class="api-values">

                <div class="api-value">
                    <p>PM2.5</p>
                    <h4>${udara.pm2_5} µg/m³</h4>
                </div>

                <div class="api-value">
                    <p>PM10</p>
                    <h4>${udara.pm10} µg/m³</h4>
                </div>

                <div class="api-value">
                    <p>Carbon Monoxide</p>
                    <h4>${udara.carbon_monoxide} µg/m³</h4>
                </div>

                <div class="api-value">
                    <p>Nitrogen Dioxide</p>
                    <h4>${udara.nitrogen_dioxide} µg/m³</h4>
                </div>

            </div>

            <p style="margin-top:15px; color:#718074;">
                Data time: ${udara.time}
            </p>

        `;

    })

    .catch(error => {

        document.getElementById("hasilAPI").innerHTML = `
            <div class="api-error">
                Data kualitas udara gagal dimuat.
                Periksa koneksi internet kamu.
            </div>
        `;

        console.log("Terjadi error:", error);

    });