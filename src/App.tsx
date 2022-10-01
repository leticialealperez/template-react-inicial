import React from 'react';
import SectionFeliz from './components/SectionFeliz/SectionFeliz';
import imagem1 from './components/SectionFeliz/image1.png';
import imagem2 from './components/SectionFeliz/image2.png';

function App() {
  return (
    <div className='App'>
      <SectionFeliz 
        titulo='Sobre o programa'
        primeiroTexto='O Programa Starter UX/UI Designer é um curso? Não! Te decepcionei? Calma que vou te explicar e te mostrar que é muito mais do que isso!'
        segundoTexto='O primeiro programa completo de formação em design de produtos digitais com foco em UX/UI. Aqui você aprenderá os princípios do design aplicado à produtos digitais, desenvolvimento web front-end, UX (user experience) e UI (user interface) em profundidade, além de métodos ágeis, empreendedorismo e muito mais! Tudo isso, sendo aplicado em projetos reais de empresas parceiras.'
        imagem={imagem1}
        invertido
      />

      <SectionFeliz 
        titulo='Porque essa formação é completa e inédita?'
        primeiroTexto='Podemos começar falando das 1000h, porém isso é só um número. Além do grande foco em UX e UI, você terá uma base sólida no design de produto, assim como no desenvolvimento front-end de aplicações para web, o que possibilitará que você atue em sintonia com times de desenvolvimento de produtos digitais. Além disso, como nos demais programas da Growdev, você poderá atuar em projetos reais contratados por empresas, terá um desenvolvimento de softskills e contará com um time de empregabilidade engajado em colocar você em contato com as melhores oportunidades de trabalho.'
        imagem={imagem2}
      />
    </div>
  );
}

export default App;
