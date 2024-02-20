import { useTitle } from "@vueuse/core";

const baseTitle = "Yenne";

export const useAppTitle = (title?: string) => {
  useTitle(
    title && title.trim().length > 0 ? `${title} | ${baseTitle}` : baseTitle,
  );
};
