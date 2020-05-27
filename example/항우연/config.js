var config = {
    style: 'mapbox://styles/swat018/ckanavwp81ocy1ipbumtu4gv9',
    accessToken: 'pk.eyJ1Ijoic3dhdDAxOCIsImEiOiJja2FleDcyZnQwN2dvMnFuZmx3c2pidzd1In0.W_55REjgA4nRr5CfyjO4cA',
    showMarkers: true,
    markerColor: '#3FB1CE',
    theme: 'dark',
    alignment: 'right',
 //   title: '한국항공우주연구원',
 //   subtitle: 'A descriptive and interesting subtitle to draw in the reader',
 //   byline: 'By a Digital Storyteller',
    footer: 'Copyrights (c)2019 All rights reserved by Gaia3D,Inc.\n',
    chapters: [
        {
            id: 'kari',
            title: '항공우주연구원',
 //           image: './path/to/image/source.png',
            description: '대전광역시 유성구 과학로 169-84 한국항공우주연구원 \n\n' +
                '대표전화: (042) 860-2114',
            location: {
                center: { lon: 127.35493, lat: 36.37698 },
                zoom: 17.02,
                pitch: 60.00,
                bearing: -43.58
            },
            onChapterEnter: [
 //               {
//                     layer: 'kari',
//                     opacity: 1
//                     duration: 5000
//                 }
            ],
            onChapterExit: [
 //                {
 //                    layer: 'kari',
 //                    opacity: 0
//                 }
            ]
        },
        {
            id: 'naro',
            title: '나로우주센터 우주과학관',
//            image: './path/to/image/source.png',
            description: '전라남도 고흥군 봉래면 하반로 490\n' +
                '전화: (061) 830-8700',
            location: {
                center: { lon: 127.51808, lat: 34.45358 },
                zoom: 16.57,
                pitch: 60.00,
                bearing: -93.41
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'aero',
            title: '고흥 항공센터',
//            image: './path/to/image/source.png',
            description: '전라남도 고흥군 고흥읍 고소리\n',
            location: {
                center: { lon: 127.20787, lat: 34.61047 },
                zoom: 17.16,
                pitch: 59.50,
                bearing: -43.37
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'other-identifier',
            title: '정부대전청사',
//            image: './path/to/image/source.png',
            description: '대전광역시 서구 청사로 189 (둔산동)\n',
            location: {
                center: { lon: 127.38497, lat: 36.36129 },
                zoom: 16.75,
                pitch: 59.50,
                bearing: 18.39
            },
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};