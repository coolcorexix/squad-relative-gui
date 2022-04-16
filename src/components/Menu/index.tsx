import { useMemo } from "react";
import { useRouter } from "next/router";
import { NextLinkFromReactRouter } from "components/NextLink";
import { Menu as UikitMenu } from "ui-kit";
import useTheme from "hooks/useTheme";
import UserMenu from "./UserMenu";
import { useMenuItems } from "./hooks/useMenuItems";
import { getActiveMenuItem, getActiveSubMenuItem } from "./utils";
import { footerLinks } from "./config/footerConfig";
import { useTranslation } from "contexts/Localization";

const Menu = (props: any) => {
  const { isDark, setTheme } = useTheme();
  console.log("🚀 ~ file: index.tsx ~ line 14 ~ Menu ~ isDark", isDark);
  const { pathname } = useRouter();
  const { t } = useTranslation();

  const menuItems = useMenuItems();

  const activeMenuItem = getActiveMenuItem({ menuConfig: menuItems, pathname });
  const activeSubMenuItem = getActiveSubMenuItem({
    menuItem: activeMenuItem,
    pathname,
  });

  const toggleTheme = useMemo(() => {
    return () => setTheme(isDark ? "light" : "dark");
  }, [setTheme, isDark]);

  return (
    <UikitMenu
      linkComponent={(linkProps) => {
        return (
          <NextLinkFromReactRouter
            to={linkProps.href}
            {...linkProps}
            prefetch={false}
          />
        );
      }}
      userMenu={<UserMenu />}
      isDark={isDark}
      toggleTheme={toggleTheme}
      links={menuItems}
      subLinks={activeMenuItem?.hideSubNav ? [] : activeMenuItem?.items}
      footerLinks={footerLinks(t)}
      activeItem={activeMenuItem?.href}
      activeSubItem={activeSubMenuItem?.href}
      buyCakeLabel={t("Buy CAKE")}
      {...props}
    />
  );
};

export default Menu;
