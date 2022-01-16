import Link from 'next/link';
import Image from 'next/image';
import Script from 'next/script';

const Footergeral = () => (
  <>
  <footer className="container-fluid" id="footer">
  <div className="instagram-feed">
    <ul className="insta d-flex justify-content-center">
      <li><Image src="/insta1.png" alt="Instagram Nairuz" width={200} height={200} /></li>
      <li><Image src="/insta2.png" alt="Instagram Nairuz" width={200} height={200} /></li>
      <li><Image src="/insta3.png" alt="Instagram Nairuz" width={200} height={200} /></li>
      <li><Image src="/insta4.png" alt="Instagram Nairuz" width={200} height={200} /></li>
      <li><Image src="/insta5.png" alt="Instagram Nairuz" width={200} height={200} /></li>
      <li><Image src="/insta6.png" alt="Instagram Nairuz" width={200} height={200} /></li>
      <li><Image src="/insta7.png" alt="Instagram Nairuz" width={200} height={200} /></li>
      <li><Image src="/insta8.png" alt="Instagram Nairuz" width={200} height={200} /></li>
    </ul>
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
              <li><a href="#"><Image src="/face.svg" alt="Facebook" width={40} height={40} /></a></li>
              <li><a href="#"><Image src="/instagram.svg" alt="Instagram" width={40} height={40}  /></a></li>
              <li><a href="#"><Image src="/youtube.svg" alt="YouTube" width={40} height={40}  /></a></li>
              <li><a href="#"><Image src="/linkedin.svg" alt="LinkedIn" width={40} height={40}  /></a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div className="row footer-infos">
      <div className="col-12 col-md-3">
        <div className="sitemap-footer mobcenter">
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Quem Somos</a></li>
            <li><a href="#">Cases</a></li>
            <li><a href="#">Blog</a></li>
          </ul>
        </div>
      </div>
      <div className="col-12 col-md-3">
        <div className="servicos-footer mobcenter">
          <ul>
            <li><a className="title-footer" href="#">SERVIÇOS</a></li>
            <li><a href="#">Layout para E-commerce</a></li>
            <li><a href="#">Websites</a></li>
            <li><a href="#">Mídias Pagas</a></li>
            <li><a href="#">Inbound Marketing</a></li>
            <li><a href="#">SEO</a></li>
          </ul>
        </div>
      </div>
      <div className="col-12 col-md-3">
        <div className="funcionairuz-footer mobcenter">
          <ul>
            <li><a className="title-footer" href="#">FUNCIONAIRUZ</a></li>
            <li><a href="#">Nosso Time</a></li>
            <li><a href="#">Vagas</a></li>
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
                <li><a href="#">+ 55 19 99140.6111</a></li>
                <li><a href="#">+ 55 19 3217-6400</a></li>
                <li><a href="#">+ 55 11 4750-1714 (São Paulo)</a></li>
              </div>
            </div>
            <div className="mail-footer">
              <Image src="/icon-mail.svg" alt="E-mail" width={12} height={12} />
              <li><a href="#">contato@nairuz.com.br</a></li>
            </div>
            <div className="local-footer">
              <Image src="/icon-local.svg" alt="Localização" width={12} height={12} />
              <li><a href="#">Rua 25 de Janeiro, nº 112 - Centro. Monte Mor - SP</a></li>
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
    <Link href="/"><a><p>Quer ser nosso próximo sucesso? <b>Fale com a gente!</b></p><Image src="/icon-wpp.svg" alt="WhatsApp Nairuz" width={26} height={20}/></a></Link>
  </div>
</footer>
<Script src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js" integrity="sha512-bPs7Ae6pVvhOSiIcyUClR7/q2OAsRiovw4vAkX+zJbw3ShAeeqezq50RIIcIURq7Oa20rW2n2q+fyXBNcU9lrw==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
<Script src='https://nairuz.com.br/react/script.js' />
</>
);

export default Footergeral;