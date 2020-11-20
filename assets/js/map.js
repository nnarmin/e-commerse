function initMap() {

    const loc = {lat: 41.750297541298245, lng: 44.78833556041877};
    var image = 'assets/images/marker.png';
    const footer_map = new google.maps.Map(document.getElementById("map"), {
        zoom: 15,
        center: loc,
    });
    new google.maps.Marker({
        position: loc,
        map: footer_map,
        icon: image
    });

    var center = {lat: 41.750297541298245, lng: 44.78833556041877};
    var locations = [
        ['<p><b>SHOPPING CENTER:</b> T. Eristavi st, 5</p>\
            <p><b>Phone number:</b> 2 30 98 30</p>\
            <p><b>Working hours:</b> 10:00 - 19:00</p>\
            <a class="link-color" href="https://goo.gl/maps/eyqHBUFwGcvbEzKd9" target="_blank">Get Directions</a>', 41.750297541298245, 44.78833556041877],
        ['<p><b>SHOPPING CENTER:</b> Digomi, Aghmashenebeli avenue 2a</p>\
            <p><b>Phone number:</b> 2 30 82 02</p>\
            <p><b>Working hours:</b> 10:00 - 19:00</p>\
            <a class="link-color" href="https://goo.gl/maps/zjrcbuPbHDcfvQmS8" target="_blank">Get Directions</a>', 41.769105318455395, 44.76814950587391],
        ['<p><b>SHOPPING CENTER:</b> VAZISUBANI, LAGIDZE ST, 6</p>\
            <p><b>Phone number:</b> 2 18 31 16</p>\
            <p><b>Working hours:</b> 10:00 - 19:00</p>\
            <a class="link-color" href="https://goo.gl/maps/o3jYmYXxpq2j2WpM7" target="_blank">Get Directions</a>', 41.700800181347915, 44.8539244700836],
        ['<p><b>SHOPPING CENTER:</b> SHARTAVA ST, 4</p>\
            <p><b>Phone number:</b> (0341) 28 05 28</p>\
            <p><b>Working hours:</b> 10:00 - 19:00</p>\
            <a class="link-color" href="https://goo.gl/maps/MqRtBvt9MsbcwJ2M6" target="_blank">Get Directions</a>', 41.56493145478483, 44.97417386575171],
        ['<p><b>SHOPPING CENTER:</b> RUSAVELI ST, 16</p>\
            <p><b>Phone number:</b> (357)  22 25 59</p>\
            <p><b>Working hours:</b> 10:00 - 18:00</p>\
            <a class="link-color" href="https://goo.gl/maps/wUxqorLFuyJNTS6e9" target="_blank">Get Directions</a>', 41.46883176314789, 44.81737587263024],
        ['<p><b>SHOPPING CENTER:</b> Alazani Avenue. 43</p>\
            <p><b>Phone number:</b> (350)27 01 90</p>\
            <p><b>Working hours:</b> 10:00 - 18:00</p>\
            <a class="link-color" href="https://goo.gl/maps/Rnjyc3y2sZXb41iB9" target="_blank">Get Directions</a>', 41.927321934170536, 45.47442933383786],
        ['<p><b>SHOPPING CENTER:</b>Rustaveli  street 47</p>\
            <p><b>Phone number:</b> 595 65 60 60</p>\
            <p><b>Working hours:</b> 10:00 - 18:00</p>\
            <a class="link-color" href="https://goo.gl/maps/2ttrcwnYj7ppZgxf7" target="_blank">Get Directions</a>', 50.44135476137398, 30.5597922119141],
        ['<p><b>SHOPPING CENTER:</b> MEGOBROBA ST, 20</p>\
            <p><b>Phone number:</b> 595 70 31 56</p>\
            <p><b>Working hours:</b> 09:00 - 18:00</p>\
            <a class="link-color" href="https://goo.gl/maps/WGxeHTfu8TeS5QBT8" target="_blank">Get Directions</a>', 41.466381248219164, 46.116791939148015],
        ['<p><b>SHOPPING CENTER:</b> RUSTAVELI ST, 246</p>\
            <p><b>Phone number:</b> 599 30 90 66</p>\
            <p><b>Working hours:</b> 09:00 - 18:00</p>\
            <a class="link-color" href="https://goo.gl/maps/agk8KkgUn39Hn8bDA" target="_blank">Get Directions</a>', 41.72489153587164, 45.3383701704613],
        ['<p><b>SHOPPING CENTER:</b> CHAVCHAVADZE ST. 103</p>\
            <p><b>Phone number:</b> 591 51 55 00</p>\
            <p><b>Working hours:</b> 10:00 - 18:00</p>\
            <a class="link-color" href="https://goo.gl/maps/zVc6oHQQ3Wym9Xan6" target="_blank">Get Directions</a>', 41.94794444179497, 45.814802628836105],
        ['<p><b>SHOPPING CENTER:</b> Aghmashenebeli st. 38</p>\
            <p><b>Phone number:</b> 591 17 71 03</p>\
            <p><b>Working hours:</b> 10:00 - 18:00</p>\
            <a class="link-color" href="https://goo.gl/maps/B52HGkgr6x4G1CpD6" target="_blank">Get Directions</a>', 41.61899655257153, 45.97812741127018],
        ['<p><b>SHOPPING CENTER:</b> RUSTAVELI ST, 97</p>\
            <p><b>Phone number:</b> 595 30 79 77</p>\
            <p><b>Working hours:</b> 10:00 - 18:00</p>\
            <a class="link-color" href="https://goo.gl/maps/KiNPZbKModegwEft7" target="_blank">Get Directions</a>', 41.63823222668705, 43.00100322348703],
        ['<p><b>SHOPPING CENTER:</b> IMERETI ST, 38</p>\
            <p><b>Phone number:</b> (368) 24 54 83</p>\
            <p><b>Working hours:</b> 10:00 - 18:00</p>\
            <a class="link-color" href="https://goo.gl/maps/oE4XmdYSHEhaEYLo9" target="_blank">Get Directions</a>', 41.99458980781734, 43.58610653795927],
        ['<p><b>SHOPPING CENTER:</b> CKHINVALI  HIGHWAY, 4 </p>\
            <p><b>Phone number:</b> (370)27 97 85</p>\
            <p><b>Working hours:</b> 10:00 - 18:00</p>\
            <a class="link-color" href="https://goo.gl/maps/iDEYrCvkTBJZB6Dz8" target="_blank">Get Directions</a>', 41.98874752584115, 44.10989964093096],
        ['<p><b>SHOPPING CENTER:</b> Lermontov Street. 57</p>\
            <p><b>Phone number:</b> (422) 274- 351</p>\
            <p><b>Working hours:</b> 10:00 - 19:00</p>\
            <a class="link-color" href="https://goo.gl/maps/56yV7H3WPYP4yTWE9" target="_blank">Get Directions</a>', 41.64053234236671, 41.6275133365707],
        ['<p><b>SHOPPING CENTER:</b> P.KHALVASHIS ST, 31 (ANGISA Settlement)</p>\
            <p><b>Phone number:</b> 5 99 23 02 06</p>\
            <p><b>Working hours:</b> 10:00 - 19:00</p>\
            <a class="link-color" href="https://goo.gl/maps/56yV7H3WPYP4yTWE9" target="_blank">Get Directions</a>', 41.62270193779507, 41.614703106315574],
        ['<p><b>SHOPPING CENTER:</b> Megrelishvili st. 28</p>\
            <p><b>Phone number:</b> 595 32 05 07</p>\
            <p><b>Working hours:</b> 10:00 - 18:00</p>\
            <a class="link-color" href="https://goo.gl/maps/mpEwN7NST42agBXC9" target="_blank">Get Directions</a>', 42.15762333926948, 41.67119833862307],
        ['<p><b>SHOPPING CENTER:</b> Eqvtime Takaishvili, 10</p>\
            <p><b>Phone number:</b> 591 51 02 06</p>\
            <p><b>Working hours:</b> 10:00 - 18:00</p>\
            <a class="link-color" href="https://goo.gl/maps/BwysptKQYufjNUGw5" target="_blank">Get Directions</a>', 41.920421615122756, 41.99439880265504],
        ['<p><b>SHOPPING CENTER:</b> NIKEA ST, 4</p>\
            <p><b>Phone number:</b> (431) 22 87 82</p>\
            <p><b>Working hours:</b> 10:00 - 18:00</p>\
            <a class="link-color" href="https://goo.gl/maps/ZtsaATqgHbsdQm486" target="_blank">Get Directions</a>', 42.24789308187234, 42.69354744379427],
        ['<p><b>SHOPPING CENTER:</b> Rustaveli st, # 69</p>\
            <p><b>Phone number:</b> 599 46 11 18</p>\
            <p><b>Working hours:</b> 10:00 - 18:00</p>\
            <a class="link-color" href="https://goo.gl/maps/qB7t52t5bSQcPzr47" target="_blank">Get Directions</a>', 42.10711493551341, 43.03313701476861],
        ['<p><b>SHOPPING CENTER:</b> NINOSHVILI ST, 18</p>\
            <p><b>Phone number:</b> 551 28 55 88</p>\
            <p><b>Working hours:</b> 10:00 - 18:00</p>\
            <a class="link-color" href="https://goo.gl/maps/svFFtJmUgpuKpmTD8" target="_blank">Get Directions</a>', 42.29127750787453, 43.28771139859464],
        ['<p><b>SHOPPING CENTER:</b> RUSTAVELI ST, 129</p>\
            <p><b>Phone number:</b> 595 41 42 45</p>\
            <p><b>Working hours:</b> 10:00 - 18:00</p>\
            <a class="link-color" href="https://goo.gl/maps/cH7YHqL2PQE5jC3C8" target="_blank">Get Directions</a>', 42.509542456241, 41.86449754561613],
        ['<p><b>SHOPPING CENTER:</b> A. JORJADZE  ST, 4/6</p>\
            <p><b>Phone number:</b> (413) 27 58 66</p>\
            <p><b>Working hours:</b> 10:00 - 18:00</p>\
            <a class="link-color" href="https://goo.gl/maps/5Thi8NAFnauhQpdP7" target="_blank">Get Directions</a>', 42.2697630983073, 42.04597120740971]
    ];
    var map = new google.maps.Map(document.getElementById('contact_map'), {
        zoom: 8,
        center: center
    });
    var infowindow = new google.maps.InfoWindow({});
    var marker, count;
    for (count = 0; count < locations.length; count++) {
        marker = new google.maps.Marker({
            position: new google.maps.LatLng(locations[count][1], locations[count][2]),
            map: map,
            icon: image,
            title: locations[count][0]
        });
        google.maps.event.addListener(marker, 'click', (function (marker, count) {
            return function () {
                infowindow.setContent(locations[count][0]);
                infowindow.open(map, marker);
            }
        })(marker, count));
        google.maps.event.addListener(marker, 'click', function() {
            map.panTo(this.getPosition());
            map.setZoom(13);
        });
    }
}