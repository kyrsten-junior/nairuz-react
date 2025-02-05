import Link from 'next/link';
import Image from 'next/image';
import Script from 'next/script';
import ContatoPopup from './ContatoPopup';


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

const urlPoliticas = () => {
  document.location.href = '/politicas';
}


const Footergeral = () => (
  <>
  <footer className="container-fluid" id="footer">
  <div className="instagram-feed" id="content-instagram">
    {/* <ul className="insta d-flex justify-content-center">
      <li><a href="https://www.instagram.com/p/ConCrwhLL3z/" target="_blank" rel="noopener noreferrer"><Image src="/insta1.jpg" alt="Instagram Nairuz" width={350} height={350} /></a></li>
      <li><a href="https://www.instagram.com/p/CoetijSjQPw/" target="_blank" rel="noopener noreferrer"><Image src="/insta2.jpg" alt="Instagram Nairuz" width={350} height={350} /></a></li>
      <li><a href="https://www.instagram.com/p/CoVCTjSswOM/" target="_blank" rel="noopener noreferrer"><Image src="/insta3.jpg" alt="Instagram Nairuz" width={350} height={350} /></a></li>
      <li><a href="https://www.instagram.com/p/CoK-fmYOQmW/" target="_blank" rel="noopener noreferrer"><Image src="/insta4.jpg" alt="Instagram Nairuz" width={350} height={350} /></a></li>
      <li><a href="https://www.instagram.com/p/CoHicngtrje/" target="_blank" rel="noopener noreferrer"><Image src="/insta5.jpg" alt="Instagram Nairuz" width={350} height={350} /></a></li>
      <li><a href="https://www.instagram.com/p/CoFmqe8udVX/" target="_blank" rel="noopener noreferrer"><Image src="/insta6.jpg" alt="Instagram Nairuz" width={350} height={350} /></a></li>
      <li><a href="https://www.instagram.com/p/CoDPCGfvDOc/" target="_blank" rel="noopener noreferrer"><Image src="/insta7.jpg" alt="Instagram Nairuz" width={350} height={350} /></a></li>
      <li><a href="https://www.instagram.com/p/CoCYvJLpiUq/" target="_blank" rel="noopener noreferrer"><Image src="/insta8.jpg" alt="Instagram Nairuz" width={350} height={350} /></a></li>
    </ul> */}
  </div>
  <div className="container">
    <div className="row">
      <div className="col-12">
        <div className="footer-logo">
          <div className="logo">
            <Image src="/logo-footer.svg" alt="Nairuz" width={206} height={38} />
          </div>
          <div className="sociais">
            <ul>
              <li><a href="https://www.facebook.com/NairuzConsultoriaDigital" target="_blank" rel="noopener noreferrer"><Image src="/face.svg" alt="Facebook" width={40} height={40} /></a></li>
              <li><a href="https://www.instagram.com/nairuzdigital/" target="_blank" rel="noopener noreferrer"><Image src="/instagram.svg" alt="Instagram" width={40} height={40}  /></a></li>
              <li><a href="https://www.youtube.com/channel/UCu70MAqws64Vk2dYQlCFVYg" target="_blank" rel="noopener noreferrer"><Image src="/youtube.svg" alt="YouTube" width={40} height={40}  /></a></li>
              <li><a href="https://www.linkedin.com/company/nairuz" target="_blank" rel="noopener noreferrer"><Image src="/linkedin.svg" alt="LinkedIn" width={40} height={40}  /></a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div className="row footer-infos">
      <div className="col-12 col-md-3">
        <div className="sitemap-footer mobcenter">
          <ul>
            <li><a onClick={urlHome}>Home</a></li>
            <li><a onClick={urlQuemSomos}>Quem Somos</a></li>
            <li><a onClick={urlCases}>Cases</a></li>
            <li><a href="https://blog.nairuz.com.br" target="_blank" rel="noopener noreferrer">Blog</a></li>
          </ul>
        </div>
      </div>
      <div className="col-12 col-md-3">
        <div className="servicos-footer mobcenter">
          <ul>
            <li><a className="title-footer">Serviços</a></li>
            <li><a onClick={urlServicos}>Layout para e-commerce</a></li>
            <li><a onClick={urlServicos}>Websites</a></li>
            <li><a onClick={urlServicos}>Mídias Pagas</a></li>
            <li><a onClick={urlServicos}>Inbound Marketing</a></li>
            <li><a onClick={urlServicos}>SEO</a></li>
          </ul>
        </div>
      </div>
      <div className="col-12 col-md-3">
        <div className="funcionairuz-footer mobcenter">
          <ul>
            <li><a className="title-footer" onClick={urlVagas}>Funcionairuz</a></li>
            <li><a onClick={urlVagas}>Nosso Time</a></li>
            <li><a onClick={urlVagas}>Vagas</a></li>
          </ul>
        </div>
      </div>
      <div className="col-12 col-md-3">
        <div className="contato-footer mobcenter">
          <ul>
            <li><a className="title-footer" href="#">CONTATO</a></li>
            <div className="tel-footer">
              <div className="icon-tel">
                <Image src="/icon-phone.svg" alt="Telefone" width={12} height={12} />
              </div>
              <div className="phone-footer">
                <li><a href="https://api.whatsapp.com/send?phone=5519991406111" target="_blank" rel="noopener noreferrer">+ 55 19 99140.6111</a></li>
                <li><a href="tel:1932176400">+ 55 19 3217-6400</a></li>
                <li><a href="tel:1147501714">+ 55 11 4750-1714 (São Paulo)</a></li>
              </div>
            </div>
            <div className="mail-footer">
              <Image src="/icon-mail.svg" alt="E-mail" width={12} height={12} />
              <li><a href="mailto:contato@nairuz.com.br">contato@nairuz.com.br</a></li>
            </div>
            <div className="local-footer">
              <Image src="/icon-local.svg" alt="Localização" width={12} height={12} />
              <li><a href="https://goo.gl/maps/vbRekKqcfRnjm1si7" target="_blank" rel="noopener noreferrer">Rua 25 de Janeiro, nº 112 - Centro. Monte Mor - SP</a></li>
            </div>
          </ul>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-12">
        <div className="copyright d-flex align-items-center justify-content-center mobcenter">
          <Image src="/selo-br.png" alt="Brasil" width={17} height={12} />
          <p>Nairuz Marketing e Tecnologia® 2021 / todos os direitos reservados</p>
        </div>
      </div>
    </div>
  </div>
  <div className="wpp-footer">
    <a href="https://api.whatsapp.com/send?phone=5519991406111" target="_blank" rel="noopener noreferrer"><p>Quer ser nosso próximo sucesso? <b>Fale com a gente!</b></p><Image src="/icon-wpp.svg" alt="WhatsApp Nairuz" width={26} height={20}/></a>
  </div>
  <div className="aceite-cookies hide">
    <p>Utilizamos cookies para oferecer a melhor experiência de navegação, de acordo com a nossa <a onClick={urlPoliticas}>Política de Privacidade</a>. Ao continuar navegando, você concorda com estas condições.</p>
    <button className="btn-aceite-cookies">Aceitar</button>
  </div>
  <ContatoPopup />
</footer>
<Script src="https://code.jquery.com/jquery-3.6.0.min.js"
  strategy="beforeInteractive" />
<Script src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js" 
strategy="beforeInteractive" />

<Script id="show-banner" strategy="lazyOnload">
  {`

  if (window.RDStationForms) {
    new RDStationForms('formulario-contato-atualizado-ed22e1fdee9c4ddfcecd', 'UA-48773259-1').createForm();
  }

  if(jQuery('#content-instagram').length){
    jQuery(function() {
      jQuery.getJSON('https://api-instagram-nairuz-v2-gdy2gs33ua-uc.a.run.app/recuperarListaImagens?cliente=nairuzMaio', function(insta) {
        jQuery.each(insta, function(photos, src) {
          if (photos === 8) {
            return false;
          }
          console.log(src)
          jQuery('<a href="' + src.link + '" class="post item" target="_blank">' +
            '<div class="image" style="background-image:url(' + src.urlImagem+ ');"></div>' +
            '<ul>' +
            '<li><i id="twitterinsstagram" class="fa fa-instagram" onclick="socialShareWindow(&quot;https://twitter.com/intent/tweet?url=' + src.urlImagem + '&amp;screen_name=Consectetuer eget Consectetuer eget eget Consectetuer eget eget&amp;text=' + src.link + '&quot;)"></i></li>' +
            '</ul></a>').appendTo('.instagram-feed');
        });
      });
    });
  }


  // Carrossel geral
  $(document).ready(function(){
    $(".owl-carousel.owl-default").owlCarousel({
      items: 3,
      nav: true,
      navText: ["<img src='/arrow-left.svg'>","<img src='/arrow-right.svg'>"],
      responsiveClass:true,
      responsive:{
          0:{
              items:1,
              nav:true
          },
          800:{
              items:1,
              nav:false
          },
          1000:{
              items:3,
              nav:true,
              loop:false
          }
      }
    });
  });
  
  // Carrossel geral
  $(document).ready(function(){
    $(".owl-carousel.carrossel-header").owlCarousel({
      items: 1,
      nav: true,
      navText: ["<img src='/arrow-left.svg'>","<img src='/arrow-right.svg'>"],
    });
  });
  
  //Open Modal Contato
  $('.open-popup-contato').click(function(){
      $('.modal-overlay').show(500);
  })
  
    //Open Modal Vagas
  $('.candidatarme-vaga').click(function(){
      $('.modal-overlay-vagas').show(500);
  })

  //Open Modal Vagas
  $('.button-outras-vagas button').click(function(){
      $('.modal-overlay-vagas').show(500);
  })
  
  //Close Modal Geral
  $('.close-popup').click(function(){
      $('.modal-overlay').hide(800);
      $('.modal-overlay-vagas').hide(500);
  })
  
  // Clicks dinÃ¢micos serviÃ§os
  $('.nav-servicos button').click(function() {
    $('.nav-servicos button').removeClass('ativo');
    $('.nav-servicos .img-li').removeClass('ativo');
    $('.desc-servicos ul li').removeClass('li-ativo');
    $(this).addClass('ativo');
    $(this).prev().addClass('ativo');
  });
  
  $('#layout').click(function() {
    $('.desc-servicos ul li.layout').addClass('li-ativo');
    $('#servicos-home').addClass('bg-azul');
    $('#servicos-home').removeClass('bg-rosa');
    $('#servicos-home').removeClass('bg-roxo');
    $('#botoes-dinamicos .botoes-servicos button').removeClass('ativo');
    $(this).addClass('ativo');
    $('#botoes-dinamicos .dinamico').removeClass('ativo2');
    $('#botoes-dinamicos .dinamico.layout').addClass('ativo2');
    $('#botoes-dinamicos').removeClass('after-roxo');
    $('#botoes-dinamicos').removeClass('after-rosa');
    $('#botoes-dinamicos').addClass('after-verde');
  });
  
  $('#website').click(function() {
    $('.desc-servicos ul li.website').addClass('li-ativo');
    $('#servicos-home').addClass('bg-rosa');
    $('#servicos-home').removeClass('bg-azul');
    $('#servicos-home').removeClass('bg-roxo');
    $('#botoes-dinamicos .botoes-servicos button').removeClass('ativo');
    $(this).addClass('ativo');
    $('#botoes-dinamicos .dinamico').removeClass('ativo2');
    $('#botoes-dinamicos .dinamico.website').addClass('ativo2');
    $('#botoes-dinamicos').removeClass('after-roxo');
    $('#botoes-dinamicos').removeClass('after-verde');
    $('#botoes-dinamicos').addClass('after-rosa');
  });
  
  $('#midias-pagas').click(function() {
    $('.desc-servicos ul li.midias-pagas').addClass('li-ativo');
    $('#servicos-home').addClass('bg-roxo');
    $('#servicos-home').removeClass('bg-rosa');
    $('#servicos-home').removeClass('bg-azul');
    $('#botoes-dinamicos .botoes-servicos button').removeClass('ativo');
    $(this).addClass('ativo');
    $('#botoes-dinamicos .dinamico').removeClass('ativo2');
    $('#botoes-dinamicos .dinamico.midias-pagas').addClass('ativo2');
    $('#botoes-dinamicos').removeClass('after-verde');
    $('#botoes-dinamicos').removeClass('after-rosa');
    $('#botoes-dinamicos').addClass('after-roxo');
  });
  
  $('#inbound').click(function() {
    $('.desc-servicos ul li.inbound').addClass('li-ativo');
    $('#servicos-home').addClass('bg-azul');
    $('#servicos-home').removeClass('bg-rosa');
    $('#servicos-home').removeClass('bg-roxo');
    $('#botoes-dinamicos .botoes-servicos button').removeClass('ativo');
    $(this).addClass('ativo');
    $('#botoes-dinamicos .dinamico').removeClass('ativo2');
    $('#botoes-dinamicos .dinamico.inbound').addClass('ativo2');
    $('#botoes-dinamicos').removeClass('after-roxo');
    $('#botoes-dinamicos').removeClass('after-rosa');
    $('#botoes-dinamicos').addClass('after-verde');
  });
  
  $('#seo').click(function() {
    $('.desc-servicos ul li.seo').addClass('li-ativo');
    $('#servicos-home').addClass('bg-rosa');
    $('#servicos-home').removeClass('bg-azul');
    $('#servicos-home').removeClass('bg-roxo');
    $('#botoes-dinamicos .botoes-servicos button').removeClass('ativo');
    $(this).addClass('ativo');
    $('#botoes-dinamicos .dinamico').removeClass('ativo2');
    $('#botoes-dinamicos .dinamico.seo').addClass('ativo2');
    $('#botoes-dinamicos').removeClass('after-roxo');
    $('#botoes-dinamicos').removeClass('after-verde');
    $('#botoes-dinamicos').addClass('after-rosa');
  });

  //Open Menu Mobile
    $('.close-menu-mob').click(function(){
      $('#menu-mobile ').css('left','-100%');
    });

    //Close Menu Mobile
    $('.bar-menumob').click(function(){
      $('#menu-mobile ').css('left','0');
    });

    //Accordion
    $('.accordion').click(function(){
      $(this).toggleClass('accordion-ativo');
    });

    //Verificar Url - Serviços

    $(document).ready(function() {
      if (window.location.href.indexOf("#websites") > -1) {
        $('#botoes-dinamicos .botoes-servicos button').removeClass('ativo');
        $('#botoes-dinamicos .botoes-servicos button#website').addClass('ativo');
        $('#botoes-dinamicos .dinamico').removeClass('ativo2');
        $('#botoes-dinamicos .dinamico.website').addClass('ativo2');
      }
    });

    $(document).ready(function() {
      if (window.location.href.indexOf("#midias") > -1) {
        $('#botoes-dinamicos .botoes-servicos button').removeClass('ativo');
        $('#botoes-dinamicos .botoes-servicos button#midias-pagas').addClass('ativo');
        $('#botoes-dinamicos .dinamico').removeClass('ativo2');
        $('#botoes-dinamicos .dinamico.midias-pagas').addClass('ativo2');
      }
    });

    $(document).ready(function() {
      if (window.location.href.indexOf("#inbound") > -1) {
        $('#botoes-dinamicos .botoes-servicos button').removeClass('ativo');
        $('#botoes-dinamicos .botoes-servicos button#inbound').addClass('ativo');
        $('#botoes-dinamicos .dinamico').removeClass('ativo2');
        $('#botoes-dinamicos .dinamico.inbound').addClass('ativo2');
      }
    });

    $(document).ready(function() {
      if (window.location.href.indexOf("#seo") > -1) {
        $('#botoes-dinamicos .botoes-servicos button').removeClass('ativo');
        $('#botoes-dinamicos .botoes-servicos button#seo').addClass('ativo');
        $('#botoes-dinamicos .dinamico').removeClass('ativo2');
        $('#botoes-dinamicos .dinamico.seo').addClass('ativo2');
      }
    });

    if (window.RDStationForms) {
      new RDStationForms('newsletter-2022-187ddf46c0b0d5987839', 'UA-48773259-1').createForm();
    }

    (function(h,o,t,j,a,r){
      h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
      h._hjSettings={hjid:445751,hjsv:6};
      a=o.getElementsByTagName('head')[0];
      r=o.createElement('script');r.async=1;
      r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
      a.appendChild(r);
  })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');



    if($('.overlay-loading').length){
      setTimeout(function() { 
        $('body').addClass('loaded');
    }, 125);
      setTimeout(function() { 
        $('body').addClass('out');
    }, 250);
    } else {
      $('body').addClass('loaded');
    }


    $('#vaga1').click(function(){
      $('#vagas-popup .title-popup span').text('INBOUND MARKETING');
      $('#vagas-popup .descricao p').text('Apoiar no planejamento e execução das ações estratégicas; Desenvolvimento dos fluxos de nutrição das etapas que compreendem um funil de vendas e fluxos de automação; Administração da ferramenta RD Station.');
      $('#vagas-popup .requisitos p').text('Superior Completo em Comunicação; Conhecimento das ferramentas de automação; Perfil Analítico; Organização; Trabalho em equipe; Conhecimento em estratégias de Inbound Marketing e SEO.');
      $('#vagas-popup .desejavel p').text('Inglês básico; Conhecimento em ferramentas de automação e Google Analytics.');
    });

    $('#vaga2').click(function(){
      $('#vagas-popup .title-popup span').text('DESIGNER JUNIOR');
      $('#vagas-popup .descricao p').text('Responsável por criar a comunicação visual dos clientes e avaliar junto a equipe de marketing a eficácia das peças produzidas; Responsável pela comunicação visual institucional da Nairuz.');
      $('#vagas-popup .requisitos p').text('Formado ou formando-se áreas de design e comunicação; Criatividade; Bom gosto e atento ao mercado; Escrever Bem; Gostar de Aprender; Iniciativa; Domínio em PSD, AI, Corel.');
      $('#vagas-popup .desejavel p').text('Inglês Fluente; Conhecimento em html; Cursos profissionalizantes na área de design; Tenha conhecimento em UX e UI.');
    });

    $('#vaga3').click(function(){
      $('#vagas-popup .title-popup span').text('ATENDIMENTO');
      $('#vagas-popup .descricao p').text('Responsável por criar um elo entre os clientes e as equipes; Gerenciar o relacionamento dos processos; Entender as necessidades, expectativas e dores dos clientes; Buscar sempre ser um resolvedor de problemas.');
      $('#vagas-popup .requisitos p').text('Cursos técnicos com certificação ou cursando superior em Marketing, Publicidade; Cursando inglês; Iniciativa; Período de experiência no mínimo um ano (agência ou semelhante); Gestor de crises.');
      $('#vagas-popup .desejavel p').text('Boa comunicação e oratória; Rotina e organização; Focada em objetivos; Entendimento de processos da empresa;');
    });

    

    if (!localStorage.cookiePolitica){
      document.querySelector('.aceite-cookies').classList.remove('hide');
      }
    
    const aceiteCookies = () => {
    document.querySelector('.aceite-cookies').classList.add('hide');
    localStorage.setItem("cookiePolitica","aceito");
    }
    
    const btnCookies = document.querySelector('.btn-aceite-cookies');
    
    btnCookies.addEventListener('click', aceiteCookies);


     ;(function() {
      var script = document.createElement('script');
       script.id = '7a4b2d66-bf3e-4e13-8b5d-ed4fe6e475af';
       script.type = 'module';
       script.src = 'https://pageimprove.io';
       document.head.appendChild(script);
       })()

  `
  
  }
</Script>

<Script type="text/javascript" async src="https://d335luupugsy2.cloudfront.net/js/loader-scripts/58f2af1b-9339-4f1e-900b-b1cde4544bb4-loader.js" ></Script>
<Script type="text/javascript" src="https://d335luupugsy2.cloudfront.net/js/rdstation-forms/stable/rdstation-forms.min.js"></Script>
<noscript dangerouslySetInnerHTML={{ __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KCTM4JN"
height="0" width="0" style="display:none;visibility:hidden"></iframe>`}}></noscript>
</>
);

export default Footergeral;