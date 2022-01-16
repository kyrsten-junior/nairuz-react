import Head from 'next/head'
import Image from 'next/image'
import Headergeral from '../components/Headergeral'
import Footergeral from '../components/Footergeral'
import BehanceNz from '../components/BehanceNz'
import Script from 'next/script'

export default function Servicos() {
  return (
    <>
      <Head>
        <title>Nairuz - Serviços</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Script type="text/javascript" src="https://code.jquery.com/jquery-3.2.1.slim.min.js" />

      <div className="page-servicos">

      <Headergeral />

      <main>
        <section className="container-fluid" id="servicos">
          <div className="container">
            <div className="row">
              <div className="col-5">
                <div className="title-cases">
                  <h1>Nossos Serviços</h1>
                </div>
                <div className="text-cases">
                  <p>A era digital está cada vez mais presente na vida das pessoas. Por isso, adentrar esse mundo é o sucesso que você precisa para alavancar suas vendas virtuais e, nada melhor que fazer isso através de estratégias de marketing digital de qualidade, não é mesmo? Por isso, aqui na Nairuz contamos com especialistas no assunto!</p>
                  <p>Mas afinal, como fazemos cada um desses processos de excelência em marketing digital para nossos clientes?<br></br><b>Confira nossos serviços abaixo:</b></p>
                </div>
                <div className="icon-arrow-servico">
                  <Image src="/arrow-down.svg" alt="Veja Abaixo" width={32} height={71}/>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="container" id="botoes-dinamicos">
          <div className="row">
            <div className="col-12">
              <div className="botoes-servicos">
                <ul>
                  <li><button className="layout-svc ativo" id="layout">Layout para e-commerce</button></li>
                  <li><button className="website-svc" id="website">Websites</button></li>
                  <li><button className="midias-pagas-svc" id="midias-pagas">Mídias Pagas</button></li>
                  <li><button className="inbound-svc" id="inbound">Inbound Marketing</button></li>
                  <li><button className="seo-svc" id="seo">SEO</button></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row dinamico layout ativo2">
            <div className="col-6">
              <div className="left-servicos">
                <div className="categoria-nz">
                  <h3>SERVIÇOS DE <span>TECNOLOGIA</span></h3>
                </div>
                <div className="title-servico-nz">
                  <h2>Layout para e-commerce</h2>
                </div>
                <div className="desc-servico-nz">
                  <p>Desenvolvemos web sites, one pages, landing pages, implementação e desenvolvimento de layout para e-commerce. Somos apaixonados por usabilidade e nossos projetos são todos personalizados, pautados nas boas práticas de User Interface - UI e User Experience - UX com foco nos resultados. Além disso, trabalhamos com as mais recentes tecnologias.</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac eros molestie, venenatis mi et, rhoncus justo. Proin a orci tortor. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis eget semper metus. Proin consectetur a nunc mollis interdum. Aliquam sed lectus ut lacus hendrerit mollis. Nam vitae rhoncus sapien.</p>
                </div>
                <div className="accordion-servico-nz">
                  <div className="title-accordion">
                    <h4>QUAIS TIPOS DE LAYOUT PODEMOS TE OFERECER?</h4>
                  </div>
                  <div className="content-accordion">
                    <div className="accordion">
                      <h5>Layout Customizado</h5>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac eros molestie, venenatis mi et, rhoncus justo. Proin a orci tortor. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis eget semper metus. Proin consectetur a nunc mollis interdum. Aliquam sed lectus ut lacus hendrerit mollis. Nam vitae rhoncus sapien.</p>
                    </div>
                    <div className="accordion">
                      <h5>Layout Personalizado</h5>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac eros molestie, venenatis mi et, rhoncus justo. Proin a orci tortor. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis eget semper metus. Proin consectetur a nunc mollis interdum. Aliquam sed lectus ut lacus hendrerit mollis. Nam vitae rhoncus sapien.</p>
                    </div>
                    <div className="accordion">
                      <h5>Tema</h5>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac eros molestie, venenatis mi et, rhoncus justo. Proin a orci tortor. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis eget semper metus. Proin consectetur a nunc mollis interdum. Aliquam sed lectus ut lacus hendrerit mollis. Nam vitae rhoncus sapien.</p>
                    </div>
                  </div>
                </div>
                <div className="button-orcamento-servico">
                  <button id="orcamento-servico">Quero fazer um orçamento!</button>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="right-servico">
                <div className="imagens-servico">
                  <Image src="/img-layout.png" alt="Layout Personalizado" width={540} height={966} />
                </div>
              </div>
            </div>
          </div>
          <div className="row dinamico website">
            <div className="col-6">
              <div className="left-servicos">
                <div className="categoria-nz">
                  <h3>SERVIÇOS DE <span>TECNOLOGIA</span></h3>
                </div>
                <div className="title-servico-nz">
                  <h2>Websites</h2>
                </div>
                <div className="desc-servico-nz">
                  <p>Desenvolvemos web sites, one pages, landing pages, implementação e desenvolvimento de layout para e-commerce. Somos apaixonados por usabilidade e nossos projetos são todos personalizados, pautados nas boas práticas de User Interface - UI e User Experience - UX com foco nos resultados. Além disso, trabalhamos com as mais recentes tecnologias do mercado.</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac eros molestie, venenatis mi et, rhoncus justo. Proin a orci tortor. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis eget semper metus. Proin consectetur a nunc mollis interdum. Aliquam sed lectus ut lacus hendrerit mollis. Nam vitae rhoncus sapien.</p>
                </div>
                <div className="button-orcamento-servico">
                  <button id="orcamento-servico">Quero fazer um orçamento!</button>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="right-servico">
                <div className="imagens-servico">
                  <Image src="/img-website.png" alt="Website" width={540} height={882} />
                </div>
              </div>
            </div>
          </div>
          <div className="row dinamico midias-pagas">
            <div className="col-6">
              <div className="left-servicos">
                <div className="categoria-nz">
                  <h3>SERVIÇOS DE <span>MARKETING</span></h3>
                </div>
                <div className="title-servico-nz">
                  <h2>Mídias Pagas</h2>
                </div>
                <div className="desc-servico-nz">
                  <p>As mídias sociais também são responsáveis por atrair clientes e, por este motivo, é fundamental estar conectado em redes sociais relevantes para seu nicho de atuação com foco no gerenciamento, vendas, relacionamento e monitoramento de sua empresa.</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac eros molestie, venenatis mi et, rhoncus justo. Proin a orci tortor. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis eget semper metus. Proin consectetur a nunc mollis interdum. Aliquam sed lectus ut lacus hendrerit mollis. Nam vitae rhoncus sapien.</p>
                </div>
                <div className="button-orcamento-servico">
                  <button id="orcamento-servico">Quero fazer um orçamento!</button>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="right-servico">
                <div className="imagens-servico">
                  <Image src="/img-midias.png" alt="Mídias Pagas" width={540} height={575} />
                </div>
              </div>
            </div>
          </div>
          <div className="row dinamico inbound">
            <div className="col-6">
              <div className="left-servicos">
                <div className="categoria-nz">
                  <h3>SERVIÇOS DE <span>MARKETING</span></h3>
                </div>
                <div className="title-servico-nz">
                  <h2>Inbound Marketing</h2>
                </div>
                <div className="desc-servico-nz">
                  <p>O Inbound Marketing, também conhecido como Marketing de Atração, é uma metodologia de marketing digital totalmente focada na conversão dos visitantes do seu negócio em clientes ativos, conduzindo-os pela jornada de compra de forma automatizada.</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac eros molestie, venenatis mi et, rhoncus justo. Proin a orci tortor. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis eget semper metus. Proin consectetur a nunc mollis interdum. Aliquam sed lectus ut lacus hendrerit mollis. Nam vitae rhoncus sapien.</p>
                </div>
                <div className="button-orcamento-servico">
                  <button id="orcamento-servico">Quero fazer um orçamento!</button>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="right-servico">
                <div className="imagens-servico">
                  <Image src="/img-inbound.png" alt="Inbound Marketing" width={540} height={696} />
                </div>
              </div>
            </div>
          </div>
          <div className="row dinamico seo">
            <div className="col-6">
              <div className="left-servicos">
                <div className="categoria-nz">
                  <h3>SERVIÇOS DE <span>MARKETING</span></h3>
                </div>
                <div className="title-servico-nz">
                  <h2>SEO</h2>
                </div>
                <div className="desc-servico-nz">
                  <p>Nossa equipe irá fazer análises de seu site, de concorrentes e palavras-chave. Assim, através de otimizações, produção de conteúdos relevantes e link building, seu site apresentará crescimento organicamente.</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac eros molestie, venenatis mi et, rhoncus justo. Proin a orci tortor. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis eget semper metus. Proin consectetur a nunc mollis interdum. Aliquam sed lectus ut lacus hendrerit mollis. Nam vitae rhoncus sapien.</p>
                </div>
                <div className="button-orcamento-servico">
                  <button id="orcamento-servico">Quero fazer um orçamento!</button>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="right-servico">
                <div className="imagens-servico">
                  <Image src="/img-seo.png" alt="SEO" width={540} height={597} />
                </div>
              </div>
            </div>
          </div>
        </section>
        <BehanceNz />
      </main>

      <Footergeral />
    </div>
    
    </>

  )
}
