import "./FooterLink.css";
import { useContext } from "react";
import { DataSourceContext } from "../../../contexts";

function FooterLink() {
  //#region Get data from Context
  const dataSourceContext = useContext(DataSourceContext);
  const aboutTextCSKHInfo = dataSourceContext
    ? dataSourceContext.footerLinkAboutTextCSKHInfo
    : null;
  const aboutTextVeShopeeInfo = dataSourceContext
    ? dataSourceContext.footerLinkAboutTextVeShopeeInfo
    : null;
  const aboutSocialInfo = dataSourceContext
    ? dataSourceContext.footerLinkAboutSocialInfo
    : null;
  const copyrightCountryAndAreaListInfo = dataSourceContext
    ? dataSourceContext.footerLinkCopyrightCountryAndAreaListInfo
    : null;
  //#endregion

  //#region Function handlers
  const updateDOMAboutTextCSKHPart = (datas) => {
    const divTags = datas.map((data) => {
      return (
        <div key={data.id}>
          <a href={data.href} className="footer__link__about-text-CSKH__link">
            {data.innerHTML}
          </a>
        </div>
      );
    });
    return divTags;
  };
  const updateDOMAboutTextVeShopeePart = (datas) => {
    const divTags = datas.map((data) => {
      return (
        <div key={data.id}>
          <a
            href={data.href}
            className="footer__link__about-text-VeShopee__link"
          >
            {data.innerHTML}
          </a>
        </div>
      );
    });
    return divTags;
  };
  const updateDOMAboutSocialPart = (datas) => {
    const aTags = datas.map((data) => {
      return (
        <a
          key={data.id}
          target="_blank"
          rel="noopener noreferrer"
          href={data.href}
          className="footer__link__about-social__link"
        >
          <img src={data.image} className="footer__link__about-social__icon" />
          {data.text}
        </a>
      );
    });
    return aTags;
  };
  const updateDOMCopyrightCountryAndAreaListPart = (datas) => {
    const aTags = datas.map((data) => {
      return (
        <a
          key={data.id}
          href={data.href}
          className="footer__link__copyright__country-and-area__link"
        >
          {data.innerHTML}
        </a>
      );
    });
    return aTags;
  };
  //#endregion

  return (
    <div className="footer__link">
      <div className="footer__link__about">
        <div className="footer__link__about__part">
          <div className="footer__link__about__item">
            <span className="footer__link__about__heading">
              Ch??m s??c kh??ch h??ng
            </span>
            <div className="footer__link__about-text-CSKH">
              {aboutTextCSKHInfo &&
                updateDOMAboutTextCSKHPart(aboutTextCSKHInfo)}
            </div>
          </div>
        </div>
        <div className="footer__link__about__part">
          <div className="footer__link__about__item">
            <span className="footer__link__about__heading">V??? Shopee</span>
            <div className="footer__link__about-text-VeShopee">
              {aboutTextVeShopeeInfo &&
                updateDOMAboutTextVeShopeePart(aboutTextVeShopeeInfo)}
            </div>
          </div>
        </div>
        <div className="footer__link__about__part">
          <div className="footer__link__about__item">
            <span className="footer__link__about__heading">Thanh to??n</span>
            <div className="footer__link__about-payment">
              <img
                src="/assests/img/footer/link/payment.png"
                className="footer__link__about-payment__img"
              />
            </div>
          </div>
          <div className="footer__link__about__item">
            <span className="footer__link__about__heading">
              ????n v??? v???n chuy???n
            </span>
            <div className="footer__link__about-transport">
              <img
                src="/assests/img/footer/link/transport.png"
                className="footer__link__about-transport__img"
              />
            </div>
          </div>
        </div>
        <div className="footer__link__about__part">
          <div className="footer__link__about__item">
            <span className="footer__link__about__heading">
              Theo d??i ch??ng t??i tr??n
            </span>
            <div className="footer__link__about-social">
              {aboutSocialInfo && updateDOMAboutSocialPart(aboutSocialInfo)}
            </div>
          </div>
        </div>
        <div className="footer__link__about__part">
          <div className="footer__link__about__item">
            <span className="footer__link__about__heading">
              T???i ???ng d???ng Shopee ngay th??i
            </span>
            <div className="footer__link__about-download">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://shopee.vn/web"
                className="footer__link__about-download__link"
              >
                <img
                  src="/assests/img/header/header__links-app-download/qr.png"
                  className="footer__link__about-download__qr"
                />
                <div className="footer__link__about-download__another-apps">
                  <img src="/assests/img/header/header__links-app-download/app_store.png" />
                  <img src="/assests/img/header/header__links-app-download/google_play.png" />
                  <img src="/assests/img/header/header__links-app-download/app_gallery.png" />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="footer__link__copyright">
        <div className="footer__link__copyright__text">
          <i className="far fa-copyright"></i>
          2021 Shopee. T???t c??? c??c quy???n ???????c b???o l??u.
        </div>
        <div className="footer__link__copyright__country-and-area">
          <span className="footer__link__copyright__country-and-area__text">
            Qu???c gia & Khu v???c:
          </span>
          <div className="footer__link__copyright__country-and-area__list">
            {copyrightCountryAndAreaListInfo &&
              updateDOMCopyrightCountryAndAreaListPart(
                copyrightCountryAndAreaListInfo
              )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FooterLink;
