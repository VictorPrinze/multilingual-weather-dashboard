import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import i18n from "../../i18next";

const LanguageSwitcher = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();

  const handleLanguageChange = (lng) => {
    i18n.changeLanguage(lng);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="material-icons">language</span>
        <span>{i18n.language === "en" ? t("language.english") : t("language.swahili")}</span>
      </button>
      {isOpen && (
        <div className="absolute top-full right-0 mt-2 bg-white rounded-md shadow-lg">
          <button
            className="block px-4 py-2 text-gray-800 hover:bg-gray-200 w-full text-left"
            onClick={() => handleLanguageChange("en")}
          >
            {t("language.english")}
          </button>
          <button
            className="block px-4 py-2 text-gray-800 hover:bg-gray-200 w-full text-left"
            onClick={() => handleLanguageChange("sw")}
          >
            {t("language.swahili")}
          </button>
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;