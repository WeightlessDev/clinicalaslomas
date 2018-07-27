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
        "yaw": 0.5111204558276015,
        "pitch": 0.01565185790234125,
        "fov": 1.5547512182991647
      },
      "linkHotspots": [
        {
          "yaw": 0.9623102735925464,
          "pitch": -0.06303066992999362,
          "rotation": 0,
          "target": "1-pasillo-1"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.2988805234547982,
          "pitch": -0.01772600339131003,
          "title": "Clinicas La Loma Escalon<br>",
          "text": "<br>3a Calle Poniente #200, Colonia Escalon, San Salvador, El Salvador<br>"
        }
      ]
    },
    {
      "id": "1-pasillo-1",
      "name": "Pasillo 1",
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
          "yaw": -0.1796675115165396,
          "pitch": 0.0032491183531746515,
          "rotation": 0,
          "target": "2-pasillo-2"
        },
        {
          "yaw": 2.6103024051746697,
          "pitch": -0.04703096726111511,
          "rotation": 0,
          "target": "0-entrada-principal"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-pasillo-2",
      "name": "Pasillo 2",
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
        "yaw": -1.8987881939908817,
        "pitch": -0.03081098288845041,
        "fov": 1.5547512182991647
      },
      "linkHotspots": [
        {
          "yaw": -2.5092556833846107,
          "pitch": -0.2707179150884418,
          "rotation": 0,
          "target": "3-recepcion-n2"
        },
        {
          "yaw": -0.7300221391355421,
          "pitch": 0.032266057004546767,
          "rotation": 0,
          "target": "1-pasillo-1"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.7849801082166366,
          "pitch": -0.048696986431949085,
          "title": "Parqueo",
          "text": "Parque interno<br>"
        }
      ]
    },
    {
      "id": "3-recepcion-n2",
      "name": "Recepcion N2",
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
        "yaw": 3.0860551914738474,
        "pitch": 0.13079225707908293,
        "fov": 1.5547512182991647
      },
      "linkHotspots": [
        {
          "yaw": 2.735981337540294,
          "pitch": 0.03317634368785427,
          "rotation": 0,
          "target": "4-sala-n2"
        },
        {
          "yaw": 0.7659747200651452,
          "pitch": 0.20987020350118435,
          "rotation": 0,
          "target": "2-pasillo-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-sala-n2",
      "name": "Sala N2",
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
          "yaw": 0.16817585120197798,
          "pitch": 0.009798994060266963,
          "rotation": 0,
          "target": "5-pasillo-1-n2"
        },
        {
          "yaw": 2.5401601733312393,
          "pitch": -0.07792620893167879,
          "rotation": 0,
          "target": "10-clinica-3-n2"
        },
        {
          "yaw": -0.9649465068638108,
          "pitch": 0.08848813464940086,
          "rotation": 0,
          "target": "3-recepcion-n2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-pasillo-1-n2",
      "name": "Pasillo 1 N2",
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
        "yaw": -3.0627485399628824,
        "pitch": 0.06079647960420331,
        "fov": 1.5547512182991647
      },
      "linkHotspots": [
        {
          "yaw": 3.030928280537985,
          "pitch": 0.053223636514699635,
          "rotation": 0,
          "target": "6-pasillo-2-n2"
        },
        {
          "yaw": -1.7019626464848905,
          "pitch": 0.1424479093104658,
          "rotation": 0,
          "target": "9-clinica-2-n2"
        },
        {
          "yaw": 1.2319391898859102,
          "pitch": -0.05161553403589991,
          "rotation": 0,
          "target": "4-sala-n2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-pasillo-2-n2",
      "name": "Pasillo 2 N2",
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
          "yaw": 1.255772812681677,
          "pitch": -0.0771782751375607,
          "rotation": 0,
          "target": "7-bao-visitas-n2"
        },
        {
          "yaw": -2.6388658751265854,
          "pitch": 0.01913343150707192,
          "rotation": 0,
          "target": "8-clinica-1-n2"
        },
        {
          "yaw": 0.12506134726232787,
          "pitch": 0.06908720135147739,
          "rotation": 0,
          "target": "5-pasillo-1-n2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-bao-visitas-n2",
      "name": "Baño visitas N2",
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
        "yaw": 1.3123603305207432,
        "pitch": 0.21655698994658223,
        "fov": 1.5547512182991647
      },
      "linkHotspots": [
        {
          "yaw": -0.7178777216696339,
          "pitch": 0.0651339788666867,
          "rotation": 0,
          "target": "6-pasillo-2-n2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-clinica-1-n2",
      "name": "Clinica 1 N2",
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
          "yaw": 1.3472572558225853,
          "pitch": -0.026070245802461756,
          "rotation": 0,
          "target": "6-pasillo-2-n2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-clinica-2-n2",
      "name": "Clinica 2 N2",
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
          "yaw": 2.5071808706845076,
          "pitch": -0.04461823291029887,
          "rotation": 0,
          "target": "5-pasillo-1-n2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-clinica-3-n2",
      "name": "Clinica 3 N2",
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
          "yaw": 1.8656628551639214,
          "pitch": -0.04682379998607189,
          "rotation": 0,
          "target": "4-sala-n2"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.46960161394472166,
          "pitch": -0.08528667611769691,
          "title": "Baño Privado<br>",
          "text": "Baño privado dentro de la clinica<br>"
        }
      ]
    }
  ],
  "name": "Clinicas La Loma",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
