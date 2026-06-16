import { useSettings } from "../context/SettingsContext";

export const useSEO = (
  pageTitle = ""
) => {
  const { settings } =
    useSettings();

  return {
    title:
      pageTitle ||
      settings.meta_title ||
      "Aamdani",

    description:
      settings.meta_description ||
      "",
  };
};