import Link from 'next/link';
import Image from 'next/image';


const urlHome = () => {
  document.location.href = '/';
}

const urlQuemSomos = () => {
  document.location.href = '/quem-somos';
}

const urlServicos = () => {
  document.location.href = '/servicos';
}

const urlCases = () => {
  document.location.href = '/cases';
}

const urlVagas = () => {
  document.location.href = '/vagas';
}

const Headerhome = () => (
  <>
  <header className="container-fluid" id="header-home">
    <div className="container">
        <div className="row d-flex align-items-center desktoponly">
          <div className="col-2">
            <div className="logo">
              <Link href="/"><a href="#"><Image src="/logo-header.svg" alt="Logo Nairuz" width={150} height={28} /></a></Link>
            </div>
          </div>
          <div className="col-8">
            <div className="menu">
              <nav>
                <ul>
                  <li className="ativo"><a onClick={urlHome}>Home</a></li>
                  <li><a onClick={urlQuemSomos}>Quem Somos</a></li>
                  <li><a onClick={urlServicos}>Serviços</a></li>
                  <li><a onClick={urlCases}>Cases</a></li>
                  <li><a onClick={urlVagas}>Funcionairuz</a></li>
                  <li><a href="https://blog.nairuz.com.br" target="_blank" rel="noopener noreferrer">Blog</a></li>
                </ul>
              </nav>
            </div>
          </div>
          <div className="col-2 text-right">
            <div className="contato">
              <button className="btn-contato open-popup-contato">Entrar em contato</button>
            </div>
          </div>
        </div>
      </div>
  </header>

  <div className='owl-carousel carrossel-header'>
    <div className="container-fluid" id="bg-carrossel1">
      <div className="container">
        <div className="row" id="carrossel">
          <div className="col-12">
            <div className="carrossel-principal">
              <div className="row">
                <div className="col-12 col-md-4">
                  <div className="left-carrossel">
                    <p>Veja como a Bialetti Shop <b>aumentou seu faturamento em 800%</b> em menos de um ano!</p>
                  </div>
                </div>
                <div className="col-3 desktoponly">

                </div>
                <div className="col-12 col-md-5">
                  <div className="right-carrossel">
                    <div className="cards d-flex text-center">
                      <div className="card1">
                        <div className="img-card">
                          <Image src="/icon-user-top.svg" alt="Usuários" width={51} height={51} />
                        </div>
                        <div className="title-card">
                          <p>+ de <b>14mil</b> usuários mensais</p>
                        </div>
                        <div className="desc-card">
                          <p>Média mensal de usuários que acessam o e-commerce.</p>
                        </div>
                      </div>
                      <div className="card2">
                        <div className="img-card">
                          <Image src="/icon-money-top.svg" alt="Usuários" width={51} height={51} />
                        </div>
                        <div className="title-card">
                          <p>+ 800% de faturamento</p>
                        </div>
                        <div className="desc-card">
                          <p>Aumento drástico no faturamento da empresa.</p>
                        </div>
                      </div>
                    </div>
                    <div className="descricao-right">
                      <p className="desktoponly">Para isso, a empresa então utilizou o marketing digital de uma maneira construtiva, na qual o seu sucesso aqui no Brasil foi garantido, aumentando suas vendas em diversos patamares. Mas como isso foi possível?</p>
                      <div className="button-right">
                        <button><a href="#">Saiba Mais</a></button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="container-fluid" id="bg-carrossel2">
      <div className="container">
        <div className="row" id="carrossel">
          <div className="col-12">
            <div className="carrossel-principal">
              <div className="row">
                <div className="col-12 col-md-4">
                  <div className="left-carrossel">
                    <p>Somos uma empresa de marketing e tecnologia apaixonada por fazer <b>você crescer!</b></p>
                  </div>
                </div>
                <div className="col-3 desktoponly">

                </div>
                <div className="col-12 col-md-5">
                  <div className="right-carrossel">
                    <div className="cards d-flex text-center">
                      <div className="card1">
                        <div className="img-card">
                          <Image src="/icon-nairuz-full.svg" alt="Nairuz" width={51} height={51} />
                        </div>
                        <div className="title-card">
                          <p>+ de <b>14mil</b> usuários mensais</p>
                        </div>
                        <div className="desc-card">
                          <p>Média mensal de usuários que acessam o e-commerce.</p>
                        </div>
                      </div>
                      <div className="card2">
                        <div className="img-card">
                          <Image src="/icon-money-top.svg" alt="Usuários" width={51} height={51} />
                        </div>
                        <div className="title-card">
                          <p>+ 800% de faturamento</p>
                        </div>
                        <div className="desc-card">
                          <p>Aumento drástico no faturamento da empresa.</p>
                        </div>
                      </div>
                    </div>
                    <div className="descricao-right">
                      <p className="desktoponly">Trabalhamos com soluções integradas para trazer sucesso para os nossos clientes. Deste modo, utilizamos tecnologia para conectar marcas e consumidores, sem perder a essência de um trabalho personalizado.</p>
                      <div className="button-right">
                        <button><a href="#">Saiba Mais</a></button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</>
);

export default Headerhome;