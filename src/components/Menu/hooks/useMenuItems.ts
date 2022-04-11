import { useMemo } from "react";
import { menuStatus } from "@pancakeswap/uikit";
import { useTranslation } from "../../../contexts/Localization";
import { ConfigMenuItemsType } from "../config/config";

export const useMenuItems = (): ConfigMenuItemsType[] => {
  const {
    t,
    currentLanguage: { code: languageCode },
  } = useTranslation();

  const menuItems = useMemo(() => {
    return [];
  }, [t, languageCode]);

  return useMemo(() => {
    return menuItems;
  }, [menuItems]);
};
