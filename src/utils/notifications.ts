import { showNotification } from "@mantine/notifications";

export const notifyError = (message: string) => {
  showNotification({
    id: "hello-there",
    disallowClose: true,
    autoClose: 5000,
    title: "Oops! Error occured 🤥",
    message: message,
    color: "red",
    styles: (theme: any) => ({
      root: {
        backgroundColor: theme.colors.red[6],
        borderColor: theme.colors.red[6],

        "&::before": { backgroundColor: theme.white },
      },

      title: { color: theme.white },
      description: { color: theme.white },
      closeButton: {
        color: theme.white,
        "&:hover": { backgroundColor: theme.colors.blue[7] },
      },
    }),
  });
};

export const notifySuccess = (message: String) => {
  showNotification({ message, title: "Yeah!" });
};
