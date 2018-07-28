var APP_DATA = {
  "scenes": [
    {
      "id": "0-entrada-principal",
      "name": "Entrada Principal",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 0.6669044234594246,
        "pitch": 0.011287062269868642,
        "fov": 1.5547512182991647
      },
      "linkHotspots": [
        {
          "yaw": 0.970629156308263,
          "pitch": -0.07409926324839944,
          "rotation": 0,
          "target": "1-nivel-1---entrada"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.9680481783435226,
          "pitch": 0.09185528882588301,
          "title": "Clinicas La Loma<br>",
          "text": "<div>3a Calle Poniente #200, Colonia Escalon, San Salvador, El Salvador</div><div><br></div><div><br></div><div>Tel: 2510-7696</div><div>Cel: 7899-3936</div><div><br></div><div>salvador.sandoval@grupoamate.com.sv</div><div>http://laloma.grupoamate.com/<br></div>"
        }
      ]
    },
    {
      "id": "1-nivel-1---entrada",
      "name": "Nivel 1 - Entrada",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.1572022621991085,
          "pitch": -0.00978442184500139,
          "rotation": 0,
          "target": "2-nivel-1---entrada-de-parqueo"
        },
        {
          "yaw": 2.6048618284145846,
          "pitch": -0.03422073009039295,
          "rotation": 0,
          "target": "0-entrada-principal"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-nivel-1---entrada-de-parqueo",
      "name": "Nivel 1 - Entrada de parqueo",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.4935745961327136,
          "pitch": -0.26643366937587665,
          "rotation": 0,
          "target": "3-nivel-2---recepcion"
        },
        {
          "yaw": -0.738207735539822,
          "pitch": 0.022301413040269225,
          "rotation": 0,
          "target": "1-nivel-1---entrada"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-nivel-2---recepcion",
      "name": "Nivel 2 - Recepcion",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 3.034539682586706,
        "pitch": 0.1408498803288012,
        "fov": 1.5547512182991647
      },
      "linkHotspots": [
        {
          "yaw": 2.730537033014805,
          "pitch": -0.0032833622574273136,
          "rotation": 0,
          "target": "4-nivel-2---sala"
        },
        {
          "yaw": 0.7302098501269434,
          "pitch": 0.19611424296219937,
          "rotation": 0,
          "target": "2-nivel-1---entrada-de-parqueo"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-nivel-2---sala",
      "name": "Nivel 2 - Sala",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": -0.6249243727827185,
        "pitch": 0.1043457193489381,
        "fov": 1.5547512182991647
      },
      "linkHotspots": [
        {
          "yaw": -0.9829610026154967,
          "pitch": 0.07300965109791946,
          "rotation": 0,
          "target": "3-nivel-2---recepcion"
        },
        {
          "yaw": 0.09949210920512996,
          "pitch": 0.011547515193329971,
          "rotation": 0,
          "target": "5-nivel-2---pasillo-i"
        },
        {
          "yaw": 2.537151407669322,
          "pitch": -0.08236541475479342,
          "rotation": 0,
          "target": "10-nivel-2---clinica-iii"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-nivel-2---pasillo-i",
      "name": "Nivel 2 - Pasillo I",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": -2.627474607776879,
        "pitch": 0.09651571054243746,
        "fov": 1.5547512182991647
      },
      "linkHotspots": [
        {
          "yaw": -1.7027578742862364,
          "pitch": -0.02802232003348948,
          "rotation": 0,
          "target": "9-nivel-2---clinica-ii"
        },
        {
          "yaw": 3.0195885233086175,
          "pitch": -0.00790853467123398,
          "rotation": 0,
          "target": "6-nivel-2---pasillo-ii"
        },
        {
          "yaw": 1.2977692161554515,
          "pitch": -0.02087322372511835,
          "rotation": 0,
          "target": "4-nivel-2---sala"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-nivel-2---pasillo-ii",
      "name": "Nivel 2 - Pasillo II",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": -3.009404086921702,
        "pitch": 0.07602814174965644,
        "fov": 1.5547512182991647
      },
      "linkHotspots": [
        {
          "yaw": -2.6355252946194287,
          "pitch": 0.012218948217128656,
          "rotation": 0,
          "target": "8-nivel-2---clinica-i"
        },
        {
          "yaw": 1.2673490883170366,
          "pitch": -0.05610019184415371,
          "rotation": 0,
          "target": "7-nivel-2---bao"
        },
        {
          "yaw": 0.1986895904321102,
          "pitch": -0.030965915081825557,
          "rotation": 0,
          "target": "5-nivel-2---pasillo-i"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-nivel-2---bao",
      "name": "Nivel 2 - Baño",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 1.3556666106053008,
        "pitch": 0.02347778685350832,
        "fov": 1.5547512182991647
      },
      "linkHotspots": [
        {
          "yaw": -0.7528146833308877,
          "pitch": 0.03653716578188693,
          "rotation": 0,
          "target": "6-nivel-2---pasillo-ii"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-nivel-2---clinica-i",
      "name": "Nivel 2 - Clinica I",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 2.9895591691529573,
        "pitch": 0.05646915503154304,
        "fov": 1.5547512182991647
      },
      "linkHotspots": [
        {
          "yaw": 1.3263240358793205,
          "pitch": -0.013718947559237193,
          "rotation": 0,
          "target": "6-nivel-2---pasillo-ii"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-nivel-2---clinica-ii",
      "name": "Nivel 2 - Clinica II",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.5044033340661658,
          "pitch": -0.00831097355716004,
          "rotation": 0,
          "target": "5-nivel-2---pasillo-i"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-nivel-2---clinica-iii",
      "name": "Nivel 2 - Clinica III",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": -1.1799693259555717,
        "pitch": -0.005217285967447083,
        "fov": 1.5547512182991647
      },
      "linkHotspots": [
        {
          "yaw": 1.9013506510120264,
          "pitch": -0.025673875947438418,
          "rotation": 0,
          "target": "4-nivel-2---sala"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.4767799184407373,
          "pitch": -0.05471244465916314,
          "title": "Clinica III<br>",
          "text": "Baño privado<br>"
        }
      ]
    }
  ],
  "name": "Clinicas La Loma - Escalon",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
