import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import { Trans } from "react-i18next";

const Content = () => {
  const [dir, setDir] = useState("ltr");
  const { t } = useTranslation();
  const number_of_days = 5;
  const languages = [
    { abv: "en", language: "English", country_code: "gb", dir: "ltr" },
    { abv: "fr", language: "Francis", country_code: "fr", dir: "ltr" },
    { abv: "ar", language: "العربیه", country_code: "sa", dir: "rtl" },
  ];

  useEffect(() => {
    document.body.dir = dir;
  }, [dir]);
  return (
    <div className="container">
      <div className="dropdown">
        <button
          className="btn dropdown-toggle"
          type="button"
          id="dropdownMenuButton1"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          {t('language')}
        </button>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
          {languages.map(({ abv, language, country_code, dir }) => (
            <li key={country_code}>
              <button
                className="btn btn-block"
                onClick={() => {
                  i18next.changeLanguage(abv);
                  setDir(dir);
                }}
              >
                {language}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className="d-flex flex-column align-items-start">
        <h1 className="font-weight-normal mb3">{t("welcome_message")}</h1>
        <p><Trans components={{bold: <strong style={{color: "red"}} />}}>{t("days_since_release", { number_of_days })}</Trans></p>
      </div>
    </div>
  );
};

export default Content;
