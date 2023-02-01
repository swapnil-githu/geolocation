function showLocation() {
    navigator.geolocation.getCurrentPosition((success) => {
        let { latitude, longitude } = success.coords;
        document.getElementById("latitude").innerHTML = latitude;
        document.getElementById("longitude").innerHTML = longitude;
        latitude.innerHTML = latitude;
        longitude.innerHTML = longitude;
        let Api = "eeac2edbf9d7403481dd20e70d52054b";
        fetch(
            `https://api.geoapify.com/v1/geocode/reverse?lat=${latitude}&lon=${longitude}&format=json&apiKey=${Api}`
        )
            .then((res) => res.json())
            .then((data) => {
                document.getElementById("current").innerHTML = `${data.results[0].timezone.name}`;
                document.getElementById("timezone").innerHTML = `${data.results[0].timezone.name}`;
                document.getElementById("latitude").innerHTML = `${data.results[0].lat}`;
                document.getElementById("longitude").innerHTML = `${data.results[0].lon}`;
                document.getElementById("off_std").innerHTML = `${data.results[0].timezone.offset_STD}`;
                document.getElementById("std_sec").innerHTML = `${data.results[0].timezone.offset_STD_seconds}`;
                document.getElementById("dst").innerHTML = `${data.results[0].timezone.offset_DST}`;
                document.getElementById("dst_sec").innerHTML = `${data.results[0].timezone.offset_DST_seconds}`;
                document.getElementById("ctry").innerHTML = `${data.results[0].country}`;
                document.getElementById("post").innerHTML = `${data.results[0].postcode}`;
                document.getElementById("cty").innerHTML = `${data.results[0].city}`;
            });
    });
}

showLocation();

//handle the search locations

function getLocation() {
    const inputLocation = document.getElementById("addinput");
    if (inputLocation.value !== "") {
        const loc = document.getElementById("addinput").value;
        const Apikey = "eeac2edbf9d7403481dd20e70d52054b";
        const url = `https://api.geoapify.com/v1/geocode/search?text=${loc}&apiKey=${Apikey}`;

        async function getData(url) {
            const responce = await fetch(url);
            data = await responce.json();

            // console.log(data);
            document.getElementById("time").innerHTML = `${data.features[0].properties.timezone.name}`;
            document.getElementById("latitude1").innerHTML = `${data.features[0].properties.lat}`;
            document.getElementById("longitude1").innerHTML = `${data.features[0].properties.lon}`;
            document.getElementById("off_std1").innerHTML = `${data.features[0].properties.timezone.offset_STD}`;
            document.getElementById("std_se1").innerHTML = `${data.features[0].properties.timezone.offset_STD_seconds}`;
            document.getElementById("dst1").innerHTML = `${data.features[0].properties.timezone.offset_DST}`;
            document.getElementById("dst_se1").innerHTML = `${data.features[0].properties.timezone.offset_DST_seconds}`;
            document.getElementById("ctry1").innerHTML = `${data.features[0].properties.country}`;
            document.getElementById("pin1").innerHTML = `${data.features[0].properties.postcode}`;
            document.getElementById("ct1").innerHTML = `${data.features[0].properties.city}`;
        }

        getData(url);
    } else if (inputLocation.value == "") {
        document.getElementById("success").innerText = "Please enter an address!";
        document.getElementById("success").style.color = "red";
    } else (inputLocation.value !== "") 
        document.getElementById("success").innerHTML = "";
    }

async function locat() {
    const inputLocation = document.getElementById("addinput");

    await checkforerror(inputLocation);
}
async function checkforerror(locat) {
    if (locat !== "") {
        submitted(locat);
    }
}
