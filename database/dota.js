const URL = "../assets/iconsDeHeroes/";
const data = [
  {
    id: 1,
    nombre: "Anti-Mage",
    entrada: "CORTA A SUS ENEMIGOS CON ATAQUES QUE AGOTAN MANÁ",
    atributo: "Agilidad",
    tipo: "Mele",
    complejidad: "1",
    hp_mp: {
      hp: 620,
      mp: 219,
    },
    descripcion:
      "Los monjes de Turstarkuri observaban los accidentados valles por debajo de su monasterio en la montaña a medida que oleadas y oleadas de invasores se extendían por los reinos inferiores. Ascéticos y pragmáticos, se mantuvieron al margen de las luchas mundanas en su nido monástico, envueltos en la meditación que no conocía a los dioses o los elementos de la magia. Entonces vino la Legión del Dios Muerto, cruzados con el siniestro encargo de sustituir todos los cultos locales con el venenoso nihilismo de su Señor Sin Vida. De un paisaje que no conocía nada más que sangre y batallas durante miles de años, arrancaron las almas y los huesos de las legiones caídas y los lanzaron contra Turstarkuri. El monasterio solo resistió el asalto un par de semanas, y los pocos monjes que se preocuparon en salir de su meditación creyeron que los invasores eran visiones demoníacas enviadas para distraerlos de su meditación. Murieron sobre los cojines de seda en los que estaban sentados. Solo un joven sobrevivió: un peregrino que había llegado como acólito buscando la sabiduría, pero que aún no había sido admitido en el monasterio. Con horror, vio cómo los monjes a los que había servido té y ortigas primero eran asesinados y luego obligados a unirse a las filas del sacerdocio del Dios Muerto. Con nada más que unos pocos de los preciados pergaminos dogmáticos de Turstarkuri, se alejó hacia la relativa seguridad de otras tierras, jurando no solo destruir a los hechiceros del Dios Muerto, sino también poner fin a la magia por completo.",
    image_principa: `${URL}antimage/antimage.png`,
    image_secundaria: `${URL}antimage/antimageicon.png`,
    atributos: {
      fuerza: 21,
      agilidad: 24,
      inteligencia: 12,
    },
    subida_nivel: {
      suma_fuerza: "+1.6",
      suma_agilidad: "+2.8",
      suma_inteligencia: "+1.8",
    },
    data: {
      ataque: {
        respawn: "1.4",
        daño: "53-57",
        distancia: 150,
      },
      defensa: {
        escudo: 4.0,
        circulo: "25%",
      },
      movilidad: {
        velocidad: "310",
        tiempo: 0.6,
        vision: "1800 / 800",
      },
      roles: {
        carry: 100,
        apoyo: null,
        nuker: 30,
        incapacitador: null,
        jungla: null,
        resistente: null,
        evasivo: 100,
        presionador: null,
        iniciador: null,
      },
    },
    habilidades: {
      arbol_de_talento: {
        nivel_10: {
          left: "-1 s de tiempo de recarga para Traslacion",
          right: "+9 de fuerza",
        },
        nivel_15: {
          left: "+150 de radio para Vacio de Mana",
          right: "+0.6 % de maná máximo quemado por golpe",
        },
        nivel_20: {
          left: "+250 de alcance de lanzamiento para Traslacion",
          right: "+0.1 de multiplicador de daño para Vacio de Mana",
        },
        nivel_25: {
          left: "-50 s de tiempo de recarga para Vacío de Maná",
          right: "+20% de resistencia mágica para Contrahechizo",
        },
      },
      habilidad: [
        {
          nombre: "RUPTURA DE MANÁ",
          image: `${URL}antimage/skill1.png`,
          descripcion:
            "Quema el maná de un oponente con cada ataque e inflige daño igual a un porcentaje del maná quemado. Los enemigos sin maná son ralentizados de forma temporal.",
        },
        {
          nombre: "TRASLACION",
          image: `${URL}antimage/skill2.png`,
          descripcion:
            "Teletransportación a corta distancia que le permite a Anti-Mage entrar y salir del combate.",
        },
        {
          nombre: "CONTRAHECHIZO",
          image: `${URL}antimage/skill3.png`,
          descripcion:
            "Otorga resistencia mágica pasivamente. Contrahechizo puede activarse para crear una capa antimagia alrededor de Anti-Mage que bloquea y envía de vuelta los hechizos hacia los enemigos en lugar de afectarle a él.",
        },
        {
          nombre: "VACIO DE MANÁ",
          image: `${URL}antimage/skill4.png`,
          descripcion:
            "Inflige daño a la unidad objetivo y a los enemigos que la rodean por cada punto de maná que le falte a esta. El objetivo principal también queda miniaturdido.",
        },
        {
          nombre: "CONTRAHECHIZO",
          image: `${URL}antimage/skill3.png`,
          descripcion:
            "Contrahechizo otorga pasivamente un aura que reduce el daño por hechizos de los enemigos. La reducción es más fuerte a corto alcance.",
        },
        {
          nombre: "FRAGMENTACIÓN TRASLATIVA",
          image: `${URL}antimage/skill_extra.png`,
          descripcion:
            "Blinks an illusion to the target enemy or location, which attacks for a brief time. Counterspell is replicated on the Blink Fragment illusion. Has 3 Charges.",
        },
      ],
    },
  },
  {
    id: 2,
    nombre: "Axe",
    entrada: "PROVOCA Y FUERZA A LOS ENEMIGOS A ATACARLE.",
    atributo: "Fuerza",
    tipo: "Mele",
    complejidad: "1",
    hp_mp: {
      hp: 700,
      mp: 291,
    },
    descripcion:
      "Como soldado en el Ejército de la Niebla Roja, Mogul Khan puso su mirada en el cargo de General. Batalla tras batalla, demostró su valía con sangrientas hazañas. Su ascenso al poder se vio ayudado por el hecho de que nunca dudó en decapitar a un superior. Durante los siete años que duró la Campaña de las Mil Lagunas destacó como autor de gloriosas matanzas y su fama crecía mientras el número de compañeros de armas descendía progresivamente. En la noche de su victoria final, Axe se nombró a sí mismo General de la Niebla Roja y asumió el título definitivo de «Axe». Pero ya no quedaban tropas que liderar. Por supuesto, muchos habían fallecido durante la batalla, pero un buen número también habían caído bajo el acero de Axe. No hace falta decir que ahora, muchos soldados rechazan su liderazgo, pero esto no importa ni lo más mínimo a Axe, que sabe que un ejército de un solo hombre es, de lejos, el mejor.",
    image_principa: `${URL}axe/axe.png`,
    image_secundaria: `${URL}axe/axeicon.png`,
    atributos: {
      fuerza: 25,
      agilidad: 20,
      inteligencia: 18,
    },
    subida_nivel: {
      suma_fuerza: "+2.8",
      suma_agilidad: "+2.0",
      suma_inteligencia: "+1.6",
    },
    data: {
      ataque: {
        respawn: "1.7",
        daño: "55-59",
        distancia: 150,
      },
      defensa: {
        escudo: 2.3,
        circulo: "25%",
      },
      movilidad: {
        velocidad: "310",
        tiempo: 0.6,
        vision: "1800 / 800",
      },
      roles: {
        carry: 30,
        apoyo: null,
        nuker: null,
        incapacitador: 70,
        jungla: 75,
        resistente: 100,
        evasivo: null,
        presionador: null,
        iniciador: 100,
      },
    },
    habilidades: {
      arbol_de_talento: {
        nivel_10: {
          left: "+10 % de velocidad de movimiento por Sed de Batalla activa",
          right: "+8 de armadura para Llamada del Berserker",
        },
        nivel_15: {
          left: "+30 de daño para Contraataque Espiral",
          right: "+12 % de ralentización para Sed de Batalla",
        },
        nivel_20: {
          left: "+1 de armadura adicional por acumulación de Hoja Selectiva",
          right: "+150 de daño para Hoja Selectiva",
        },
        nivel_25: {
          left: "2 veces de multiplicador de armadura para Sed de Batalla",
          right: "+100 de área de efecto para Llamada del Berserker",
        },
      },
      habilidad: [
        {
          nombre: "LLAMADA DEL BERSERKER",
          image: `${URL}axe/skill1.png`,
          descripcion:
            "Axe provoca a las unidades enemigas cercanas, que se ven forzadas a atacarlo, y recibe armadura adicional mientras dure el efecto.",
        },
        {
          nombre: "SED DE BATALLA",

          image: `${URL}axe/skill2.png`,
          descripcion:
            "Teletransportación a corta distancia que le permite a Anti-Mage entrar y salir del combate.",
        },
        {
          nombre: "CONTRAATAQUE ESPIRAL",

          image: `${URL}axe/skill3.png`,
          descripcion:
            "Otorga resistencia mágica pasivamente. Contrahechizo puede activarse para crear una capa antimagia alrededor de Anti-Mage que bloquea y envía de vuelta los hechizos hacia los enemigos en lugar de afectarle a él.",
        },
        {
          nombre: "HOJA SELECTIVA",
          image: `${URL}axe/skill4.png`,
          descripcion:
            "Inflige daño a la unidad objetivo y a los enemigos que la rodean por cada punto de maná que le falte a esta. El objetivo principal también queda miniaturdido.",
        },
        {
          nombre: "CONTRAATAQUE ESPIRAL",
          image: `${URL}axe/skill3.png`,
          descripcion:
            "Contraataque Espiral ahora aplica un efecto negativo acumulable a los enemigos alcanzados que hace que inflijan menos daño de ataque total a Axe. Aumenta la probabilidad de Contraataque Espiral.",
        },
        {
          nombre: "LLAMADA DEL BERSERKER",
          image: `${URL}axe/skill1.png`,
          descripcion:
            "Berserker's Call applies Battle Hunger to affected units. Reduces Berserker's Call cooldown.",
        },
      ],
    },
  },
  {
    id: 3,
    nombre: "Bounty-Hunter",
    entrada: "SAQUEA Y RECOGE LAS RECOMPENSAS DE SUS ENEMIGOS.",
    atributo: "Agilidad",
    complejidad: "1",
    tipo: "Mele",
    hp_mp: {
      hp: 600,
      mp: 339,
    },
    descripcion:
      "Cuando los perseguidos narran historias sobre Gondar el Cazarrecompensas (Bounty Hunter) ninguno está seguro de cuál de ellas es verdadera. En voz baja dicen que fue abandonado siendo una cría, aprendiendo sus habilidades de rastreo como una cuestión de simple supervivencia. Otros han oído decir que era un huérfano de guerra, acogido por el gran Soruq el Cazador para aprender las habilidades de su maestro con la hoja mientras exploraban los oscuros bosques en busca de grandes trofeos. Sin embargo, otros creen que era un pilluelo criado entre carteristas y ladrones, entrenado en las artes del sigilo y la distracción. Alrededor de una fogata y cada vez más temerosas, sus presas cuentan rumores sobre los trabajos de Gondar: dicen que fue él quien encontró al tirano rey Goff años después de que este pasase a la clandestinidad, trayendo su cabeza y su cetro como prueba; que fue él quien se infiltró en los campamentos rebeldes de Highseat, trayendo finalmente al legendario ladrón Capa Blanca para ser juzgado por sus crímenes, y que fue él quien terminó con la carrera de Soruq el Cazador, condenado como un criminal por haber matado al preciado engendro del príncipe. Las historias sobre las sorprendentes habilidades de Gondar se extienden cada vez más, con cada atrevida hazaña más increíble que la anterior y cada objetivo más difícil de alcanzar. Por el precio adecuado, los perseguidos saben que cualquiera puede ser hallado. Por el precio adecuado, incluso el más poderoso puede encontrar el miedo entre las sombras.",
    image_principa: `${URL}bountyhounter/bounty_hunter.png`,
    image_secundaria: `${URL}bountyhounter/bounty_huntericon.png`,
    atributos: {
      fuerza: 20,
      agilidad: 21,
      inteligencia: 22,
    },
    subida_nivel: {
      suma_fuerza: "+2.5",
      suma_agilidad: "+2.6",
      suma_inteligencia: "+1.9",
    },
    data: {
      ataque: {
        respawn: "1.7",
        daño: "54-62",
        distancia: 150,
      },
      defensa: {
        escudo: 8.5,
        circulo: "25%",
      },
      movilidad: {
        velocidad: "325",
        tiempo: 0.6,
        vision: "1800 / 1000",
      },
      roles: {
        carry: null,
        apoyo: null,
        nuker: 30,
        incapacitador: null,
        jungla: null,
        resistente: null,
        evasivo: 70,
        presionador: null,
        iniciador: null,
      },
    },
    habilidades: {
      arbol_de_talento: {
        nivel_10: {
          left: "+40 de daño para Jinada",
          right: "+10 % de ralentización para Movimiento Sombrío",
        },
        nivel_15: {
          left: "Half Track Bonus Speed to Allies",
          right: "2 s de silencio al impactar con Movimiento Sombrío",
        },
        nivel_20: {
          left: "+50 de robo de oro para Jinada",
          right: "Rastrear otorga 600 de visión terrestre",
        },
        nivel_25: {
          left: "+250 de oro para Rastrear",
          right: "2 cargas para Lanzamiento de Shuriken",
        },
      },
      habilidad: [
        {
          nombre: "LANZAMIENTO DE SHURIKEN",
          image: `${URL}bountyhounter/skill1.png`,
          descripcion:
            "Arroja un shuriken mortífero a una unidad enemiga, infligiendo daño y miniaturdiendo al objetivo. El shuriken rebotará a cualquier unidad que se encuentre bajo el efecto de Rastrear dentro de un radio de 1200.0 entre ellas. Inflige el doble de daño a objetivos de Rastrear.",
        },
        {
          nombre: "JINADA",
          image: `${URL}bountyhounter/skill2.png`,
          descripcion:
            "Bounty Hunter planea su siguiente golpe, infligiendo daño adicional y robando oro no seguro.",
        },
        {
          nombre: "MOVIMIENTO SOMBRÍO",
          image: `${URL}bountyhounter/skill3.png`,
          descripcion:
            "Bounty Hunter se vuelve invisible y obtiene la habilidad de moverse a través de otras unidades hasta que ataque o use una habilidad. Si rompe la invisibilidad atacando, ese ataque ralentizará la velocidad de movimiento del objetivo.",
        },
        {
          nombre: "RASTREAR",
          image: `${URL}bountyhounter/skill4.png`,
          descripcion:
            "Rastrea un héroe enemigo, dando Visión Verdadera del objetivo y mostrando cuánto oro lleva. Bounty Hunter se mueve más rápido si está cerca de la presa e inflige Impactos Críticos al atacarla. Si el objetivo muere, Bounty Hunter y los héroes cercanos obtienen una recompensa adicional de oro. Lanzar Rastrear no cancela tu invisibilidad.",
        },
        {
          nombre: "MOVIMIENTO SOMBRÍO",
          image: `${URL}bountyhounter/skill3.png`,
          descripcion:
            "Movimiento Sombrío tiene %AbilityCharges% cargas y se puede lanzar sobre héroes aliados. El tiempo de desvanecimiento en aliados es de 1.0 s. No interrumpe la invisibilidad de Bounty Hunter cuando se lanza sobre aliados. Reduce el tiempo de reposición de cargas a %AbilityChargeRestoreTime% s.",
        },
        {
          nombre: "LANZAMIENTO DE SHURIKEN",
          image: `${URL}bountyhounter/skill1.png`,
          descripcion:
            "Aumenta el alcance de lanzamiento y aplica Jinada al impactar.",
        },
      ],
    },
  },
  {
    id: 4,
    nombre: "BRISTLEBACK",
    entrada:
      "RECIBE MENOS DAÑO SI ES ATACADO CUANDO NO MIRA HACIA LOS ENEMIGOS.",
    atributo: "Fuerza",
    complejidad: "3",
    tipo: "Mele",
    hp_mp: {
      hp: 640,
      mp: 243,
    },
    descripcion:
      "Nunca dispuesto a darle la espalda a una pelea, a Rigwarl se le conocía por enfrentarse a los camorristas más grandes y crueles que podía encontrar. Apodado Bristleback por las muchedumbres de borrachos, se metía en peleas en la trastienda de todos los bares de carretera entre Slom y Elze, hasta que finalmente sus hazañas llamaron la atención de un camarero en busca de alguien que hiciera cumplir las normas. A cambio de algo que beber, Bristleback fue contratado para pasar cuentas, mantener la paz y romper una o dos piernas de tanto en tanto (o cinco en el caso de un arácnido desafortunado).Tras dejarse llevar en una noche de alegría durante la cual daño físico fue repartido por igual entre clientes problemáticos y su hígado, Bristleback encontró por fin un rival digno. «Sus colmillos me ofenden, señor», se le oyó farfullar a un tipo particularmente grande de los páramos del norte al que le había llegado la hora de pagar. Lo que aconteció después fue una pelea de las que hacen época. Una docena de luchadores se apuntaron. No quedó ni un taburete sin romper y al final, sucedió lo imposible: la cuenta se quedó sin pagar. A lo largo de las siguientes semanas, las heridas de Bristleback sanaron y sus espinas volvieron a crecer; pero su honor es un asunto más espinoso. Pagó la cuenta de su propio bolsillo, jurando encontrar a este norteño y hacer justicia. Y entonces hizo algo que nunca había hecho: se entrenó y al hacerlo hizo un descubrimiento asombroso sobre sí mismo. Una sonrisa se dibujó en sus dientes en el momento en que agitó sus espinas. Darle la espalda a una pelea podría resultar siendo idóneo.",
    image_principa: `${URL}bristleback/bristleback.png`,
    image_secundaria: `${URL}bristleback/bristlebackicon.png`,
    atributos: {
      fuerza: 22,
      agilidad: 17,
      inteligencia: 14,
    },
    subida_nivel: {
      suma_fuerza: "+2.5",
      suma_agilidad: "+1.8",
      suma_inteligencia: "+2.8",
    },
    data: {
      ataque: {
        respawn: "1.8",
        daño: "52-58",
        distancia: 150,
      },
      defensa: {
        escudo: 3.8,
        circulo: "25%",
      },
      movilidad: {
        velocidad: "295",
        tiempo: 0.9,
        vision: "1800 / 800",
      },
      roles: {
        carry: 70,
        apoyo: null,
        nuker: 30,
        incapacitador: null,
        jungla: null,
        resistente: 100,
        evasivo: null,
        presionador: null,
        iniciador: 30,
      },
    },
    habilidades: {
      arbol_de_talento: {
        nivel_10: {
          left: "+1.5 de regeneración de maná",
          right: "+15 de daño",
        },
        nivel_15: {
          left: "+8 %/4 % de reducción de daño frontal/lateral para Espalda Espinosa",
          right: "+150 de alcance de lanzamiento para Viscosidad Nasal",
        },
        nivel_20: {
          left: "+20 de daño por acumulación de espinas",
          right: "+20 de regeneración de vida",
        },
        nivel_25: {
          left: "+18 de daño por acumulación para Senda de Guerra",
          right: "+12 % de robo de vida por hechizo",
        },
      },
      habilidad: [
        {
          nombre: "VISCOSIDAD NASAL",
          image: `${URL}bristleback/skill1.png`,
          descripcion:
            "Cubre a un objetivo con mocos, haciendo que pierda armadura y velocidad de movimiento. Múltiples lanzamientos se acumulan y restablecen la duración.",
        },
        {
          nombre: "LLUVIA DE ESPINAS",
          image: `${URL}bristleback/skill2.png`,
          descripcion:
            "Rocía a las unidades enemigas con espinas, infligiendo daño en un área alrededor de Bristleback. Inflige daño adicional por cada vez que una unidad haya sido rociada por Lluvia de Espinas en los últimos 14.0 s.",
        },
        {
          nombre: "ESPALDA ESPINOSA",
          image: `${URL}bristleback/skill3.png`,
          descripcion:
            "Bristleback recibe menos daño si le atacan por el lateral o por detrás. Si Bristleback recibe 200.0 de daño por detrás, lanza una Lluvia de Espinas del nivel actual.",
        },
        {
          nombre: "SENDA DE GUERRA",
          image: `${URL}bristleback/skill4.png`,
          descripcion:
            "Bristleback entra en un estado de furia cada vez que lanza un hechizo, aumentando su velocidad de movimiento y daño.",
        },
        {
          nombre: "BOLA DE PELO",
          image: `${URL}britleback/skill_extra.png`,
          descripcion:
            "Tose una bola de pelo llena de púas hacia la ubicación objetivo. La bola explota en el destino, golpeando a los enemigos con Viscosidad Nasal y acumulaciones de Lluvia de Espinas.",
        },
        {
          nombre: "VISCOSIDAD NASAL",
          image: `${URL}britleback/skill1.png`,
          descripcion:
            "Viscosidad Nasal se convierte en una habilidad de área de efecto sin objetivo y afecta a todos los enemigos que se encuentren dentro del alcance. Aumenta el límite de acumulaciones.",
        },
      ],
    },
  },
  {
    id: 5,
    nombre: "CHAOS-KNIGHT",
    entrada: "PUEDE CAUSAR MUCHO DAÑO CON VALORES ALEATORIOS.",
    atributo: "Fuerza",
    tipo: "Mele",
    complejidad: "2",
    hp_mp: {
      hp: 640,
      mp: 291,
    },
    descripcion:
      "Veterano de innumerables batallas en un millar de mundos diferentes, Chaos Knight proviene de un plano muy superior en donde las leyes fundamentales del universo han encontrado expresión consciente. De entre todos los antiguos Fundamentales, él es el más viejo e infatigable, y persigue sin cesar a un ser al que simplemente denomina 'La Luz'. Hace mucho tiempo, La Luz se aventuró a salir de la esfera progenitora, desafiando así la primera alianza. Ahora Chaos Knight pasa de un plano a otro, siempre tratando de dar caza y apagar La Luz dondequiera que esta se encuentre. Mil veces ha extinguido ya la fuente, y después siempre se desliza hacia otro plano para comenzar de nuevo su búsqueda.Sobre su montura Armageddon cabalga, sumiéndose en batallas desquiciadamente, aumentando su fuerza gracias al desorden del universo. Siendo una manifestación física del propio caos, es capaz de llamar a otras versiones de sí mismo desde otros planos en tiempos de necesidad y juntos estos oscuros jinetes cabalgan a la batalla, imparables como cualquier fuerza de la naturaleza. Solo cuando la última luz del mundo sea extinguida terminará su búsqueda. Allá donde cabalga Chaos Knight, la muerte sigue su paso.",
    image_principa: `${URL}chaos/chaos_knight.png`,
    image_secundaria: `${URL}chaos/chaos_knighticon.png`,
    atributos: {
      fuerza: 22,
      agilidad: 18,
      inteligencia: 18,
    },
    subida_nivel: {
      suma_fuerza: "+3.2",
      suma_agilidad: "+1.4",
      suma_inteligencia: "+1.2",
    },
    data: {
      ataque: {
        respawn: "1.7",
        daño: "51-81",
        distancia: 150,
      },
      defensa: {
        escudo: 5.0,
        circulo: "25%",
      },
      movilidad: {
        velocidad: "325",
        tiempo: 0.6,
        vision: "1800 / 800",
      },
      roles: {
        carry: 100,
        apoyo: null,
        nuker: null,
        incapacitador: 60,
        jungla: null,
        resistente: 70,
        evasivo: null,
        presionador: 75,
        iniciador: 30,
      },
    },
    habilidades: {
      arbol_de_talento: {
        nivel_10: {
          left: "+225 de distancia de tracción para Fisura en la Realidad",
          right: "+22 % de robo de vida para Golpe Caótico",
        },
        nivel_15: {
          left: "--75 % de daño recibido por las ilusiones para Fantasma",
          right: "-3 s de tiempo de recarga para Rayo del Caos",
        },
        nivel_20: {
          left: "Fisura en la Realidad ignora la inmunidad a hechizos",
          right: "+0.5 s de duración mín./máx. para Rayo del Caos",
        },
        nivel_25: {
          left: "+10 s de duración para las ilusiones de Fantasma",
          right: "+10 % de probabilidad para Golpe Caótico",
        },
      },
      habilidad: [
        {
          nombre: "RAYO DEL CAOS",
          image: `${URL}chaos/skill1.png`,
          descripcion:
            "Lanza un misterioso rayo de energía a la unidad objetivo. Aturde una cantidad aleatoria de tiempo e inflige una cantidad aleatoria de daño.",
        },
        {
          nombre: "FISURA EN LA REALIDAD",
          image: `${URL}chaos/skill2.png`,
          descripcion:
            "Teleports Chaos Knight, any illusions he has, and the target unit to a point along the line between him and the target. Reduces armor of the enemy unit for 6.0 seconds.",
        },
        {
          nombre: "GOLPE CAÓTICO",
          image: `${URL}chaos/skill3.png`,
          descripcion:
            "Los ataques de Chaos Knight y de sus ilusiones tienen una probabilidad de infligir un Impacto Crítico de fuerza variable, además de robar una cantidad de vida basada en el porcentaje del daño. Inflige 1.5 veces más daño a creeps.",
        },
        {
          nombre: "FANTASMA",
          image: `${URL}chaos/skill4.png`,
          descripcion: `Invoca varias copias fantasmales de Chaos Knight desde dimensiones alternativas. Los fantasmas son fuertes ilusiones que infligen un 100.0 % de daño, pero reciben un 325.0 % de él.
              TIPO DE DISIPACIÓN: Básica`,
        },
        {
          nombre: "RAYO DEL CAOS",
          image: `${URL}chaos/skill1.png`,
          descripcion:
            "Aumenta el alcance de lanzamiento de Rayo del Caos y hace que cree una ilusión de Fantasma para que ataque al objetivo.",
        },
        {
          nombre: "FANTASMA",
          image: `${URL}chaos/skill4.png`,
          descripcion:
            "Forma una ilusión de héroes aliados. También crea una ilusión adicional para Chaos Knight.",
        },
      ],
    },
  },
  {
    id: 6,
    nombre: "Pudge",
    entrada: "ENGANCHA Y ARRASTRA A LOS ENEMIGOS HACIA ÉL.",
    atributo: "Fuerza",
    tipo: "Mele",
    complejidad: "2",
    hp_mp: {
      hp: 700,
      mp: 267,
    },
    descripcion:
      "En los Campos de Matanza Sin Fin, muy al sur de Quoidge, una figura corpulenta trabaja sin descanso durante toda la noche: desmembrando, destripando, amontonando las extremidades y las entrañas de los caídos para que, al amanecer, el campo de batalla esté despejado. En esta tierra maldita, nada puede pudrirse ni descomponerse, ningún cuerpo puede volver de la tierra de donde una vez surgió, sin importar lo profunda que sea la tumba. Rodeado de aves de rapiña que necesitan que corte los cuerpos en pedazos más pequeños, Pudge el Carnicero hace honor a su nombre usando cuchillos que se vuelven más y más afilados con el paso del tiempo. Swish, swish, chop. La carne se separa del hueso, los tendones y ligamentos parte como papel mojado. Y aunque siempre ha sido diestro en el arte de la carnicería, con los años también ha ido desarrollando un gusto por los «productos derivados». Un mordisquito de músculo por aquí, un sorbito de sangre por allá... y al poco tiempo estaba hincando sus mandíbulas en el más duro de los torsos, como un perro desgarrando unos harapos. Aquellos temerosos de la Parca, deberíais estar más asustados por el Carnicero.",
    image_principa: `${URL}pudge/pudge.png`,
    image_secundaria: `${URL}pudge/pudgeicon.png`,
    atributos: {
      fuerza: 25,
      agilidad: 14,
      inteligencia: 16,
    },
    subida_nivel: {
      suma_fuerza: "+3.0",
      suma_agilidad: "+1.4",
      suma_inteligencia: "+1.8",
    },
    data: {
      ataque: {
        respawn: "1.7",
        daño: "70-76",
        distancia: 175,
      },
      defensa: {
        escudo: 1.3,
        circulo: "25%",
      },
      movilidad: {
        velocidad: "280",
        tiempo: 0.6,
        vision: "1800 / 800",
      },
      roles: {
        carry: null,
        apoyo: null,
        nuker: 25,
        incapacitador: 60,
        jungla: null,
        resistente: 70,
        evasivo: null,
        presionador: null,
        iniciador: 60,
      },
    },
    habilidades: {
      arbol_de_talento: {
        nivel_10: {
          left: "-16 % de ralentización para Pudrir",
          right: "+4 de armadura",
        },
        nivel_15: {
          left: "+120 de daño para Gancho de Carne",
          right: "+8 % de robo de vida por hechizo",
        },
        nivel_20: {
          left: "-4 s de tiempo de recarga para Gancho de Carne",
          right:
            "+0.8 s de duración para Descuartizar+0.5 s de duración mín./máx. para Rayo del Caos",
        },
        nivel_25: {
          left: "1.5x Flesh Heap Stack Str and Damage Block bonuses",
          right: "1.8 veces de daño/curación para Descuartizar",
        },
      },
      habilidad: [
        {
          nombre: "GANCHO DE CARNE",
          image: `${URL}pudge/skill1.png`,
          descripcion:
            "Lanza un gancho sangriento a una unidad o lugar. El gancho se encadenará a la primera unidad que encuentre, arrastrándola hacia Pudge y matándola si es un creep no ancestral e infligiéndole daño si por el contrario es un enemigo.",
        },
        {
          nombre: "PUDRIR",
          image: `${URL}pudge/skill2.png`,
          descripcion:
            "Una nube tóxica que inflige intenso daño y ralentiza el movimiento. Daña no solo a las unidades enemigas, sino también al propio Pudge",
        },
        {
          nombre: "MONTÓN DE CARNE",
          image: `${URL}pudge/skill3.png`,
          descripcion:
            "Otorga a Pudge bloqueo de daño garantizado contra todos los tipos de ataque. Concede pasivamente fuerza adicional que aumenta cada vez que mata a un héroe enemigo o este muere cerca de él. Montón de Carne es retroactiva, lo que significa que puede obtener cargas antes de aprender la habilidad, tras lo cual pasan a estar activas",
        },
        {
          nombre: "DESCUARTIZAR",
          image: `${URL}pudge/skill4.png`,
          descripcion: `CANALIZADA: Pudge engulle a una unidad enemiga, la incapacita y le inflige daño a lo largo del tiempo. Pudge se cura la misma cantidad de vida que el daño que inflige. Dura más sobre creeDE DISIPACIÓN: Básica`,
        },
        {
          nombre: "DESCUARTIZAR",
          image: `${URL}pudge/skill4.png`,
          descripcion:
            "Reduce el tiempo de recarga, y permite seleccionar como objetivo a un aliado con alcance de lanzamiento adicional para engullirlo y curarle un porcentaje de su vida máxima por segundo.",
        },
        {
          nombre: "PUDRIR",
          image: `${URL}pudge/skill2.png`,
          descripcion:
            "Aumenta el radio y daño de Pudrir y reduce la regeneración de vida de los enemigos.",
        },
      ],
    },
  },
  {
    id: 7,
    nombre: "JUGGERNAUT",
    entrada: `REBANA A SUS ENEMIGOS CON GOLPES PRECISOS`,
    atributo: "Agilidad",
    tipo: "Mele",
    complejidad: "2",
    hp_mp: {
      hp: 600,
      mp: 243,
    },
    descripcion:
      "Nadie ha visto nunca el rostro que se oculta bajo la máscara de Yurnero el Juggernaut. Incluso que tenga uno es solo especulación. Por desafiar a un señor corrupto, Yurnero fue exiliado de la ancestral Isla de las Máscaras, un castigo que le salvó la vida. Poco después, la isla desapareció bajo las olas en una noche de magia vengativa. Solo le quedó continuar con la larga tradición Juggernaut de la isla, una de rituales y manejo de la espada. Como último practicante del arte, la confianza y el valor de Yurnero son el resultado de una práctica sin fin y su original dominio de la hoja demuestra que nunca ha dejado de desafiarse a sí mismo. Sin embargo, sus motivos son tan inescrutables como su expresión. A pesar de ser un héroe que lo ha perdido todo dos veces, él lucha como si la victoria fuera una conclusión previsible.",
    image_principa: `${URL}juggernaut/juggernaut.png`,
    image_secundaria: `${URL}juggernaut/juggernauticon.png`,
    atributos: {
      fuerza: 20,
      agilidad: 34,
      inteligencia: 14,
    },
    subida_nivel: {
      suma_fuerza: "+2.2",
      suma_agilidad: "+2.8",
      suma_inteligencia: "+1.4",
    },
    data: {
      ataque: {
        respawn: "1.4",
        daño: "50-54",
        distancia: 150,
      },
      defensa: {
        escudo: 5.7,
        circulo: "25%",
      },
      movilidad: {
        velocidad: "300",
        tiempo: 0.6,
        vision: "1800 / 800",
      },
      roles: {
        carry: 65,
        apoyo: null,
        nuker: null,
        incapacitador: null,
        jungla: null,
        resistente: null,
        evasivo: 25,
        presionador: 30,
        iniciador: null,
      },
    },
    habilidades: {
      arbol_de_talento: {
        nivel_10: {
          left: "+75 de radio para Furia de la Hoja",
          right: "+5 de todos los atributos",
        },
        nivel_15: {
          left: "+1 s de duración para Furia de la Hoja",
          right: "+8 -20 s de tiempo de recarga para Guardián Sanador",
        },
        nivel_20: {
          left: "+150 de DPS para Furia de la Hoja",
          right: "+40 % de robo de vida para Danza de la Hoja",
        },
        nivel_25: {
          left: "+2 ataques para destruir para Guardián Sanador",
          right: "+1 s de duración para Omnilátigo",
        },
      },
      habilidad: [
        {
          nombre: "FURIA DE LA HOJA",
          image: `${URL}juggernaut/skill1.png`,
          descripcion:
            "Provoca un torbellino de fuerza destructiva alrededor de Juggernaut que lo hace inmune a la magia e inflige daño a las unidades enemigas cercanas. ",
        },
        {
          nombre: "GUARDIÁN SANADOR",
          image: `${URL}juggernaut/skill2.png`,
          descripcion:
            "Invoca un Guardián Sanador que cura a todas las unidades aliadas cercanas, según su vida máxima. El Guardián Sanador puede moverse con una velocidad de 325.0 tras haber sido invocado. Dura 25.0 s.",
        },
        {
          nombre: "DANZA DE LA HOJA",
          image: `${URL}juggernaut/skill3.png`,
          descripcion:
            "Otorga a Juggernaut una probabilidad de infligir daño por crítico con cada ataque.",
        },
        {
          nombre: "OMNILÁTIGO",
          image: `${URL}juggernaut/skill4.png`,
          descripcion: `Juggernaut leaps towards the target enemy units, and then slashes the target and other nearby enemy units at an increased attack rate. Juggernaut is invulnerable for the duration.`,
        },
        {
          nombre: "FURIA DE LA HOJA",
          image: `${URL}juggernaut/skill1.png`,
          descripcion:
            "Aumenta la velocidad de movimiento durante Furia de la Hoja y ataca a unidades enemigas cercanas al azar infligiéndoles daño reducido.",
        },
        {
          nombre: "TAJO RÁPIDO",
          image: `${URL}juggernaut/skill_extra.png`,
          descripcion: "Realiza un breve Omnilátigo durante 0.8",
        },
      ],
    },
  },
  {
    id: 8,
    nombre: "STORM SPIRIT",
    entrada: `VA VOLANDO A CUALQUIER LADO DEL MAPA PARA PARTICIPAR EN PELEAS.`,
    atributo: "Inteligencia",
    tipo: "Rango",
    complejidad: "2",
    hp_mp: {
      hp: 620,
      mp: 351,
    },
    descripcion:
      "Storm Spirit nunca se pierde una pelea. Desplazándose en forma de rayo de un lado a otro del campo de batalla, golpea a sus enemigos desde todas las direcciones con remanentes explosivos y ataques cargados, luego desaparece mientras sus enemigos todavía están reaccionando.",
    image_principa: `${URL}storm/storm_spirit.png`,
    image_secundaria: `${URL}storm/storm_spiriticon.png`,
    atributos: {
      fuerza: 21,
      agilidad: 22,
      inteligencia: 23,
    },
    subida_nivel: {
      suma_fuerza: "+2.0",
      suma_agilidad: "+2.6",
      suma_inteligencia: "+3.9",
    },
    data: {
      ataque: {
        respawn: "1.7",
        daño: "47-57",
        distancia: 480,
      },
      defensa: {
        escudo: 4.7,
        circulo: "25%",
      },
      movilidad: {
        velocidad: "285",
        tiempo: 0.8,
        vision: "1800 / 800",
      },
      roles: {
        carry: 65,
        apoyo: null,
        nuker: 72,
        incapacitador: 16,
        jungla: null,
        resistente: null,
        evasivo: 100,
        presionador: null,
        iniciador: 30,
      },
    },
    habilidades: {
      arbol_de_talento: {
        nivel_10: {
          left: "+1.5 de regeneración de maná",
          right: "+20 de velocidad de ataque",
        },
        nivel_15: {
          left: "+50 de daño para Remanente Estático",
          right: "+250 de vida",
        },
        nivel_20: {
          left: "-1.25 s de tiempo de recarga para Remanente Estático",
          right: "+0.4 s de duración para Vórtice Eléctrico",
        },
        nivel_25: {
          left: "500 Distance Auto Remnant in Ball Lightning",
          right: "2 rebotes para Sobrecarga",
        },
      },
      habilidad: [
        {
          nombre: "REMANENTE ESTÁTICO",
          image: `${URL}storm/skill1.png`,
          descripcion:
            "Crea una imagen de Storm Spirit cargada explosivamente que dura 12.0 s y que detona e inflige daño si una unidad enemiga se acerca. ",
        },
        {
          nombre: "VÓRTICE ELÉCTRICO",
          image: `${URL}storm/skill2.png`,
          descripcion:
            "Invoca un Guardián SanUn vórtice que atrae a una unidad enemiga hacia la posición de Storm Spirit.",
        },
        {
          nombre: "SOBRECARGA",
          image: `${URL}storm/skill3.png`,
          descripcion:
            "Lanzar un hechizo crea una carga eléctrica, que se libera repentinamente en el próximo ataque de Storm, infligiendo daño y ralentizando a los enemigos cercanos.",
        },
        {
          nombre: "RAYO ESFÉRICO",
          image: `${URL}storm/skill4.png`,
          descripcion: `Storm Spirit se transforma en electricidad volátil y carga a través del campo de batalla hasta que agota su maná o alcanza su objetivo. El coste de activación es de 25.0 + un 7.5 % de su reserva total de maná, y el coste por cada 100 unidades recorridas es de 10.0 + un 0.7 % de su reserva total de maná. El daño se expresa en daño por cada 100 unidades recorridas.`,
        },
        {
          nombre: "SOBRECARGA",
          image: `${URL}juggernaut/skill3.png`,
          descripcion:
            "Se puede activar para otorgar a Storm Spirit y a los héroes aliados cercanos 3.0 cargas de Sobrecarga. Proporciona velocidad de ataque adicional. Dura hasta 12.0 s o hasta que se agoten las cargas.",
        },
        {
          nombre: "VÓRTICE ELÉCTRICO",
          image: `${URL}juggernaut/skill2.png`,
          descripcion:
            "Vórtice Eléctrico afecta a todos los enemigos en un radio alrededor de Storm Spirit.",
        },
      ],
    },
  },
  {
    id: 9,
    nombre: "SNIPER",
    entrada: `VA VOLANDO A CUALQUIER LADO DEL MAPA PARA PARTICIPAR EN PELEAS.`,
    atributo: "Agilidad",
    tipo: "Rango",
    complejidad: "1",
    hp_mp: {
      hp: 580,
      mp: 255,
    },
    descripcion:
      "Kardel Ojoavizor nació en lo profundo de las montañas de Knollen donde, desde tiempos inmemoriales, la Gente Ingeniosa ha sobrevivido gracias a la caza de los extraños acechacantilados que viven en los despeñaderos situados sobre su pueblo, disparándolos desde lejos y recogiendo sus cuerpos en el lugar en donde caen. Ojoavizor se encontraba entre los mejores de esta misteriosa Gente Ingeniosa, para la que las armas de proyectiles no son más que otra extremidad y disparar es tan natural como el respirar.",
    image_principa: `${URL}sniper/sniper.png`,
    image_secundaria: `${URL}sniper/snipericon.png`,
    atributos: {
      fuerza: 19,
      agilidad: 27,
      inteligencia: 15,
    },
    subida_nivel: {
      suma_fuerza: "+2.0",
      suma_agilidad: "+3.2",
      suma_inteligencia: "+2.6",
    },
    data: {
      ataque: {
        respawn: "1.7",
        daño: "40-46",
        distancia: 550,
      },
      defensa: {
        escudo: 3.5,
        circulo: "25%",
      },
      movilidad: {
        velocidad: "285",
        tiempo: 0.7,
        vision: "1800 / 800",
      },
      roles: {
        carry: 100,
        apoyo: null,
        nuker: 25,
        incapacitador: null,
        jungla: null,
        resistente: null,
        evasivo: null,
        presionador: null,
        iniciador: null,
      },
    },
    habilidades: {
      arbol_de_talento: {
        nivel_10: {
          left: "+30 de daño para Disparo a la Cabeza",
          right: "-1 s de duración para Apuntar",
        },
        nivel_15: {
          left: "-14 % de ralentización para Metralla",
          right: "+30 de velocidad de ataque",
        },
        nivel_20: {
          left: "+24 de DPS para Metralla",
          right: "+28 de distancia de retroceso para Disparo a la Cabeza",
        },
        nivel_25: {
          left: "+6 cargas para Metralla",
          right: "+100 de alcance de ataque",
        },
      },
      habilidad: [
        {
          nombre: "METRALLA ESTÁTICO",
          image: `${URL}sniper/skill1.png`,
          descripcion:
            "Consume una carga para disparar una bola de metralla que riega el área objetivo con perdigones explosivos. Los enemigos reciben daño y son ralentizados. Revela el área objetivo. Las cargas de Metralla se recargan cada 35.0 s.",
        },
        {
          nombre: "DISPARO A LA CABEZA ELÉCTRICO",
          image: `${URL}sniper/skill2.png`,
          descripcion:
            "Sniper aumenta su precisión, lo que le da una probabilidad de infligir daño adicional y hacer retroceder a sus enemigos. Los Disparos a la Cabeza ralentizan brevemente la velocidad de movimiento y de ataque de los enemigos un -100.0 %.",
        },
        {
          nombre: "APUNTAR",
          image: `${URL}sniper/skill3.png`,
          descripcion:
            "Aumenta el alcance de ataque del rifle de Sniper. Puede activarse para proporcionar un 100.0 % de probabilidad de disparo a la cabeza durante 3 segundos. Mientras dura, te ralentiza un 45.0 %.",
        },
        {
          nombre: "ASESINAR",
          image: `${URL}sniper/skill4.png`,
          descripcion: `Sniper apunta a una unidad enemiga objetivo y, tras apuntar por un instante, realiza un disparo devastador que inflige daño a gran distancia y miniaturde al objetivo.`,
        },
        {
          nombre: "GRANADA ATURDIDORA",
          image: `${URL}sniper/skill_extra.png`,
          descripcion:
            "Lanza una granada al área objetivo que inflige daño a los enemigos y que les hace retroceder tanto a ellos como a Sniper. Desarma a los enemigos afectados y ralentiza su movimiento tras el retroceso.",
        },
        {
          nombre: "ASESINAR",
          image: `${URL}sniper/skill4.png`,
          descripcion:
            "Hace que Asesinar dispare más rápido y aturda al objetivo enemigo.",
        },
      ],
    },
  },
  {
    id: 10,
    nombre: "EARTHSHAKER",
    entrada: `INTERRUMPE AL EQUIPO ENEMIGO CON SUS ATURDIMIENTOS EN CADENA.`,
    atributo: "Fuerza",
    tipo: "Mele",
    complejidad: "2",
    hp_mp: {
      hp: 640,
      mp: 291,
    },
    descripcion:
      "Como un gólem o una gárgola, Earthshaker fue uno con la tierra, pero ahora camina libremente sobre ella. A diferencia de las otras entidades, se creó a sí mismo a través de un acto de voluntad, y no sirve a ningún otro maestro. En su sueño inquieto, encerrado en una profunda fisura en la piedra, se dio cuenta de la vida que transcurría libremente por encima de él y se volvió curioso.Durante una época de temblores, los picos de Nishai fueron sacudidos, provocando derrumbamientos que cambiaron el curso de los ríos y convirtieron los valles poco profundos en abismos sin fondo. Cuando la tierra finalmente dejó de temblar, Earthshaker salió del polvo que se asentaba, apartando enormes rocas como si se tratasen de una ligera manta.Se convirtió en una bestia mortal, y se llamó a sí mismo Raigor Pezuñapétrea. Ahora sangra, respira y por lo tanto puede morir, pero su espíritu sigue siendo ese de la tierra. Su poder reside en el tótem mágico que nunca deja de lado y, el día que regrese al polvo, la tierra lo tratará como a un hijo pródigo.",
    image_principa: `${URL}eartshaker/earthshaker.png`,
    image_secundaria: `${URL}eartshaker/earthshakiconer.png`,
    atributos: {
      fuerza: 22,
      agilidad: 12,
      inteligencia: 18,
    },
    subida_nivel: {
      suma_fuerza: "+3.7",
      suma_agilidad: "+1.4",
      suma_inteligencia: "+2.1",
    },
    data: {
      ataque: {
        respawn: "1.7",
        daño: "49-59",
        distancia: 150,
      },
      defensa: {
        escudo: 4.0,
        circulo: "25%",
      },
      movilidad: {
        velocidad: "315",
        tiempo: 0.9,
        vision: "1800 / 800",
      },
      roles: {
        carry: null,
        apoyo: 30,
        nuker: 25,
        incapacitador: 65,
        jungla: null,
        resistente: null,
        evasivo: null,
        presionador: null,
        iniciador: 100,
      },
    },
    habilidades: {
      arbol_de_talento: {
        nivel_10: {
          left: "+90 de daño para Fisura",
          right: "+40 de daño base",
        },
        nivel_15: {
          left: "+50 de daño para Réplica",
          right: "+50 % de daño para Encantar Tótem",
        },
        nivel_20: {
          left: "+320 de alcance para Fisura",
          right: "+40 de daño por resonancia",
        },
        nivel_25: {
          left: "-1.5 s de tiempo de recarga para Encantar Tótem",
          right: "+200 de radio para Réplica",
        },
      },
      habilidad: [
        {
          nombre: "FISURA",
          image: `${URL}eartshaker/skill1.png`,
          descripcion:
            "Aporrea el suelo con un poderoso tótem, creando una cresta de roca infranqueable que aturde y daña a las unidades enemigas en línea recta.",
        },
        {
          nombre: "ENCANTAR TÓTEM",
          image: `${URL}eartshaker/skill2.png`,
          descripcion:
            "Potencia el tótem de Earthshaker para que inflija daño adicional y tenga 75.0 de alcance adicional en el siguiente ataque.",
        },
        {
          nombre: "RÉPLICA",
          image: `${URL}eartshaker/skill3.png`,
          descripcion:
            "Hace que la tierra tiemble bajo sus pies, añadiendo daño adicional y aturdiendo a las unidades enemigas cercanas cuando Earthshaker lanza sus habilidades.",
        },
        {
          nombre: "GOLPE RESONANTE",
          image: `${URL}eartshaker/skill4.png`,
          descripcion: `Ondas sísmicas viajan por el suelo, dañando a las unidades enemigas. Cada enemigo alcanzado provoca una resonancia que daña a las unidades cercanas. Los héroes reales provocan dos resonancias.`,
        },
        {
          nombre: "FISURA",
          image: `${URL}eartshaker/skill1.png`,
          descripcion:
            "Reduce el tiempo de recarga de Fisura y permite que Earthshaker camine sobre ella. Cuando lanza cualquier habilidad, se libera una Réplica tras su paso que aturde de forma más breve.",
        },
        {
          nombre: "ENCANTAR TÓTEM",
          image: `${URL}eartshaker/skill2.png`,
          descripcion:
            "Permite que Encantar Tótem se pueda lanzar sobre el suelo, causando que Earthshaker salte en el aire y aterrice en el punto objetivo, activando ahí la habilidad. Lanzarla sobre ti mismo tendrá el efecto original, sin el salto. Otorga a Encantar Tótem un ataque por Hendidura.",
        },
      ],
    },
  },
];
const noticias = [
  {
    id: 1,
    image: "../assets/Home/noticia1.jpg",
    fecha: "29 DE SEPTIEMBRE DE 2022",
    encabezado:
      "Pegatinas de los talentos y los equipos clasificados de The Internacional 2022",
    contenido:
      "Las clasificatorias finales están a menos de dos semanas y, en ellas, los últimos equipos se clasificaran para The Internactional 2022",
  },
  {
    id: 2,
    image: "../assets/Home/noticia2.png",
    fecha: "28 DE SEPTIEMBRE DE 2022",
    encabezado: "Ruedas de chat de True Sight y concurso de cosplay",
    contenido:
      "Tras 20 días de duras batallas, los seis ganadores de las calsificatorias regionales se uniran a los 12 equipos clasificados del CPD para luchar por la Égida durante The...",
  },
  {
    id: 3,
    image: "../assets/Home/noticia1.jpg",
    fecha: "29 DE SEPTIEMBRE DE 2022",
    encabezado:
      "Pegatinas de los talentos y los equipos clasificados de The Internacional 2022",
    contenido:
      "Las clasificatorias finales están a menos de dos semanas y, en ellas, los últimos equipos se clasificaran para The Internactional 2022",
  },
];
module.exports = { data, noticias };
