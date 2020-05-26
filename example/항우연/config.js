var config = {
    style: 'mapbox://styles/swat018/ckagg7vzt0nfw1inzuxu3c5p4',
    accessToken: 'pk.eyJ1Ijoic3dhdDAxOCIsImEiOiJja2FleDcyZnQwN2dvMnFuZmx3c2pidzd1In0.W_55REjgA4nRr5CfyjO4cA',
    showMarkers: true,
    markerColor: '#3FB1CE',
    theme: 'dark',
    alignment: 'left',
 //   title: 'The Title Text of this Story',
 //   subtitle: 'A descriptive and interesting subtitle to draw in the reader',
 //   byline: 'By a Digital Storyteller',
    footer: 'Copyrights (c)2019 All rights reserved by Gaia3D,Inc.\n',
    chapters: [
        {
            id: 'slug-style-id',
            title: '본사',
 //           image: './path/to/image/source.png',
            description: '서울특별시 금천구 벚꽃로 278, SJ테크노빌 702호\n' +
                '우) 08511 전화: 82-2-3397-3475 팩스: 82-2-3397-3478',
            location: {
                center: { lon: 126.88448, lat: 37.47983 },
                zoom: 18.18,
                pitch: 60.00,
                bearing: 95.32
            },
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'other-identifier',
            title: '대전 지사',
//            image: './path/to/image/source.png',
            description: '대전광역시 유성구 테크노3로 65, 한신에스메카 315호 우)34016\n' +
                '전화: 82-42-330-0400 팩스: 82-42-330-0410',
            location: {
                center: { lon: 127.39065, lat: 36.42929 },
                zoom: 16.52,
                pitch: 59.00,
                bearing: 20.00
            },
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};
