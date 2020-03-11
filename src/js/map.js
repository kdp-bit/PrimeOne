function map() {
    google.maps.Map.prototype.setCenterWithOffset = function (latlng, offsetX, offsetY) {
        const map = this;
        const ov = new google.maps.OverlayView();
        ov.onAdd = function () {
            const proj = this.getProjection();
            const aPoint = proj.fromLatLngToContainerPixel(latlng);
            aPoint.x = aPoint.x + offsetX;
            aPoint.y = aPoint.y + offsetY;
            map.panTo(proj.fromContainerPixelToLatLng(aPoint));
            //map.setCenter(proj.fromContainerPixelToLatLng(aPoint));
        }
        ov.draw = function () {
        };
        ov.setMap(this);
    };
    new google.maps.InfoWindow({
        //pixelOffset: new google.maps.Size(-230,250)
    });
    const locations = [
        [new google.maps.LatLng(53.819055, 27.8813694)]
    ];
    const options = {
        zoom: 10,
        panControl: false,
        mapTypeControl: false,
        center: locations[0][0],
        scrollwheel: false,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    new google.maps.Map(document.getElementById('map'), options);

}

console.log($('body'))
if ($("#map").length > 0) {
    map();
}
