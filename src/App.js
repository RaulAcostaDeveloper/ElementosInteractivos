import ElementoInteractivo1 from "./ElementosInteractivos/ElementoInteractivo1/ElementoInteractivo1";
import ElementoInteractivo2 from "./ElementosInteractivos/ElementoInteractivo2/ElementoInteractivo2";
import ElementoInteractivo3 from "./ElementosInteractivos/ElementoInteractivo3/ElementoInteractivo3";
import ElementoInteractivo4 from "./ElementosInteractivos/ElementoInteractivo4/ElementoInteractivo4";
import ElementoInteractivo5 from "./ElementosInteractivos/ElementoInteractivo5/ElementoInteractivo5";

import Article from "./Secciones/Article";
import Header from "./Secciones/Header";
import Section from "./Secciones/Section";

function App() {
  return (
    <div className="App">
      <Header>Elementos Interactivos</Header>
      <Section>
        <Article>
          <ElementoInteractivo1 titulo={'Imagen oculta con animación de salida'} 
            explicacion={'Imagen (o contenido) que al dar click "sale" para revelar otro elemento. De nuevo click para ocultar el elemento. También mantén presionado y libera al terminar la animación para regresar a su posición original.'}/>
        </Article>
        <Article>
          <ElementoInteractivo2 titulo={'Carrucel automático'} explicacion={'Carrucel de imágenes que pasan en un intervalo de tiempo. Las imágenes se ajustan al ancho del elemento.'}/>
        </Article>
        <Article>
          <ElementoInteractivo3  titulo={'Carrucel con controles'} explicacion={'Usa las flechas para navegar entre imágenes.'}/>
        </Article>
        <Article>
          <ElementoInteractivo4  titulo={'Contenido desplegable'} explicacion={'Da click en el título para revelar el contenido.'}/>
        </Article>
        <Article>
          <ElementoInteractivo5 titulo={'Input placeholder top'} explicacion={'Input que al dar click, el placeholder se coloca en el top del mismo input.'}/>
        </Article>
      </Section>
    </div>
  );
}

export default App;
