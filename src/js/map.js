export const MapVenue = () => {
    const target = document.querySelector('.map-embed');

    if (!target) return

    const pinIcon = target.dataset.icon
    const location = target.dataset.location
    const title = target.dataset.title


    async function initMap() {
        const latLong = location ? location.split(",") : ["-8.6596083", "115.1382534"]
        const center = { lat: parseFloat(latLong[0]), lng: parseFloat(latLong[1]) }
        // Request needed libraries.
        const { Map } = await google.maps.importLibrary("maps");
        const { AdvancedMarkerElement } = await google.maps.importLibrary(
            "marker",
        );
        const { Place } = await google.maps.importLibrary("places");
        const map = new Map(target, {
            center: center,
            zoom: 15,
            mapId: "5531e5e8f57bed5",
            disableDefaultUI: true
        });

        // A marker with a with a URL pointing to a PNG.
        const beachFlagImg = document.createElement("img");


        console.log('pinIcon', pinIcon)

        beachFlagImg.src = pinIcon

        // Customize the size of the image
        beachFlagImg.style.width = '40px'; // Set your desired width here
        beachFlagImg.style.height = 'auto'; // Set your desired height here

        const beachFlagMarkerView = new AdvancedMarkerElement({
            map,
            position: center,
            content: beachFlagImg,
            title: `Riviera ${title}`,
        });

        map.setCenter(center);

    }

    initMap();
}


