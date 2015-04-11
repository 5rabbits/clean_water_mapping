# Clean Water Mapping (SpaceApps 2015)

## Challenge description

Consider creating an app that is accessible to technical users (managers and technicians of organized rural aqueducts) and non-technical users (individuals or support staff of community systems for water provision).

Your app should aim to assess drinking water sources. These include: individual/communal household wells; water takes from surface streams that are piped across the landscape to be distributed to several households; or specific access points (where the water source location is distant from the user's location).

Your app could identify water availability from the identified source, and the water requirement for those who use this water source. This will help to identify areas vulnerable to water stress. The flow and number of users can be highly variable, in particular groundwater use and availability is widely unknown.

You may want to crowd-source information about issues that affect access to the local water sources. Access limitations can include: yearly dry-season length; frequency of drought spells; heavy precipitation events damaging infrastructure or affecting water quality (sediments). Other hazards include point (industrial or households sources) or diffuse (agriculture with intense chemical inputs) contaminant sources. Spatial and temporal monitoring and mapping of these issues is an urgent need.

The challenge is to improve mapping of drinking water resources. This could include development of a crowdsourcing app to monitor and map: potable water availability (well/stream/reservoir levels as measured by local people/ organizations), water quality, contaminants and ground water. This can help with identification of priority areas experiencing water stress (spatially and temporally) and contribute to improved access to drinking water. Along with available soil, weather and climate data, this could feed into early warning systems for regions that are under water stress.

## Analysis

**Mapeo de Agua Potable**

##Descripción General del proyecto
La idea principal de esta aplicación es mapear georeferenciadamente las fuentes de agua potable disponibles en un lugar determinado con la idea de poder democratizar la información con respecto a la disponibilidad del agua potable y poder tomar decisiones a nivel de gobierno para poder mitigar posibles riesgos de distintas variables (contaminación, infraestructura, escaces, etc)

Para poder determinar cada fuente de agua potable existen dos posibilidades, la carga automática mediante una fuente de datos disponible y la carga manual mediante usuarios.


##Objetivos de la aplicación:

* visualizar las fuentes de agua potable
* señalar las fuentes de agua potable
* calificar las fuentes de agua potable

## Fuentes de Recolección de datos

#### Información dura (datos estadisticos)

*  Fuentes de agua potable
*  Consumo esperado de agua percapita
*  Densidad de población
*  Accesibilidad

## Modelamiento de datos

* **Fuentes de agua potable:** cada fuente de agua tiene un radio de alcance
* **Calificación Técnica:** determinar la potabilidad de esa fuente de agua potable
* **Problemas de Accesibilidad:** todos los problemas que se puedan presentar en esa fuente de agua


## Funcionalidades aplicación web

* **Ingreso** (login-Signup)
* **Dashboard:** Visualización de datos (fuentes de agua disponible)
* **Fuente:** Determinar fuentes de agua potable georeferenciadas en un mapa
* **Radio:** Alcance del agua potable en un radio determinado que viene definido por un ente específico / esta información se va cruzar con la densidad de población en ese punto específico
* **Calificación Técnica:** Por personas calificadas en el tema
* **Problemas:** Dificulatades que se puedan presentar con respecto a esa fuente específica de agua, por ejemplo, contaminación industrial/agricola, sequía, infraestructura.
* **Call to Action:** 

##Escalabilidad del proyecto

Democratización de la información con respecto a la disponibilidad del agua potable.

## Aspectos Técnicos

* Frontend
* Backend
* UX/UI

