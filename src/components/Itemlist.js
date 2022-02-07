

export const PRODUCTOS = [
    {id: 1,producto:'RUTINI CABERNET',stock:18, descripcion:'MALBEC',precio:1400, img:'https://www.espaciovino.com.ar/media/default/0001/63/thumb_62001_default_medium.jpeg'},
    {id: 2,producto:'TROMPETER',stock:14, descripcion:'MALBEC',precio:1700, img:'https://http2.mlstatic.com/D_NQ_NP_839591-MLA42823361342_072020-O.jpg'},
    {id: 3,producto:'LUIGUI BOSCA',stock:16,descripcion:'MALBEC',precio:1800, img:'https://http2.mlstatic.com/D_NQ_NP_989983-MLA44826831419_022021-O.webp'},
    {id: 4,producto:'FINCA LA LINDA',stock:17,descripcion:'MALBEC',precio:1400, img:'https://http2.mlstatic.com/D_NQ_NP_751688-MLA43754657686_102020-O.jpg'},
    {id: 5,producto:'TERRAZAS RESERVA',stock:4,descripcion:'MALBEC',precio:1300, img:'http://d3ugyf2ht6aenh.cloudfront.net/stores/251/225/products/37961-b61cdc303119a9a35915427198294062-640-0.png'},
    {id: 6,producto:'SALENTEIN RESERVA',stock:24,descripcion:'MALBEC',precio:1700, img:'https://www.espaciovino.com.ar/media/default/0001/54/thumb_53342_default_medium.jpeg'},
    {id: 7,producto:'CAFAYATE GRAN LINAJE',stock:44,descripcion:'TORONTES',precio:1600, img:'https://www.espaciovino.com.ar/media/default/0001/55/thumb_54265_default_medium.jpeg'},
    {id: 8,producto:'RUTINI',stock:54,descripcion:'MALBEC',precio:1500, img:'https://http2.mlstatic.com/D_NQ_NP_789015-MLA42620721143_072020-O.jpg'},
    {id: 9,producto:'CAFAYATE',stock:0,descripcion:'COSECHA TARDIA',precio:1600, img:'https://http2.mlstatic.com/D_NQ_NP_990019-MLA31613884934_072019-O.jpg'},
    {id: 10,producto:'KILLKA',stock:5,descripcion:'MALBEC',precio:1570, img:'https://http2.mlstatic.com/D_NQ_NP_641100-MLA47968391932_102021-O.jpg'},
    {id: 11,producto:'FINCA LA LINDA',stock:1,descripcion:'CHARDONAY',precio:1600, img:'https://http2.mlstatic.com/D_NQ_NP_652499-MLA41432311694_042020-O.jpg'},
    {id: 12,producto:'CAFAYATE',stock:0,descripcion:'ROSE',precio:1100, img:'https://http2.mlstatic.com/D_NQ_NP_869286-MLA40607382161_012020-O.jpg'},
    {id: 13,producto:'ALTA VISTA PREMIUN',stock:0,descripcion:'MALBEC',precio:1300, img:'https://http2.mlstatic.com/D_NQ_NP_615920-MLA44818902151_022021-O.jpg'},
    {id: 14,producto:'PADRILLOS',stock:4,descripcion:'MALBEC',precio:1500, img:'https://http2.mlstatic.com/D_NQ_NP_611703-MLA31119343506_062019-O.jpg'},
    {id: 15,producto:'SIESTA',stock:140,descripcion:'CABERNET',precio:1600, img:'https://http2.mlstatic.com/D_NQ_NP_910663-MLA31654491216_082019-O.jpg'},
    {id: 16,producto:'RICARDO SANTOS',stock:87,descripcion:'MALBEC',precio:1600, img:'https://http2.mlstatic.com/D_NQ_NP_662342-MLA46544488533_062021-O.jpg'},
    {id: 17,producto:'ESCORIHUELA GASCÓN ',stock:0,descripcion:'MALBEC',precio:1600, img:'https://http2.mlstatic.com/D_NQ_NP_714342-MLA45794259836_052021-O.webp'},
    {id: 18,producto:'RUTINI',stock:2,descripcion:'PINOT NOAR',precio:1980, img:'https://www.espaciovino.com.ar/media/default/0001/63/thumb_62004_default_medium.jpeg'},
    {id: 19,producto:'KILLKA',stock:8,descripcion:'CHARDONAY',precio:2600, img:'https://www.espaciovino.com.ar/media/default/0001/63/thumb_62472_default_medium.jpeg'},
    {id: 20,producto:'FESTIVO',stock:7,descripcion:'TORRONTE',precio:3600, img:'http://padillavinos.com.ar/admin/files/20180917125740-fes%20torronte.jpg'},
    {id: 21,producto:'RUTINI ESTUCHE',stock:17,descripcion:'MALBEC',precio:1760, img:'https://www.espaciovino.com.ar/media/default/0001/60/thumb_59259_default_medium.jpeg'},
    {id: 22,producto:'ALMA NEGRA',stock:16,descripcion:'BLEND',precio:1450, img:'https://www.espaciovino.com.ar/media/default/0001/54/thumb_53341_default_medium.jpeg'},
    {id: 23,producto:'RUTINI',stock:5,descripcion:'CABERNET-MERLOT',precio:1600, img:'https://www.espaciovino.com.ar/media/default/0001/62/thumb_61998_default_medium.jpeg'},
    {id: 24,producto:'TERRAZAS RESERVA',stock:0,descripcion:'SYRAH',precio:1970, img:'https://www.espaciovino.com.ar/media/default/0001/62/thumb_61264_default_big.jpeg'},
  ]


  export default function traerProductos()  {
    return new Promise((resolve, reject)=>{
      setTimeout(()=>resolve(PRODUCTOS),100)
    })
}

  