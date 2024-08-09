import { chapterTitle, hr } from "./utils";

export const appStore = [
  chapterTitle("developer/app-store/overview", "Apps", "apps"),

  hr(),

  {
    type: "category",
    label: "Adyen",
    collapsible: false,
    items: [
      {
        type: "autogenerated",
        dirName: "developer/app-store/apps/adyen",
      },
    ],
  },
  {
    type: "category",
    label: "Avalara AvaTax",
    collapsible: false,
    items: [
      {
        type: "autogenerated",
        dirName: "developer/app-store/apps/avatax",
      },
    ],
  },
  "developer/app-store/apps/crm",
  {
    type: "category",
    label: "Emails and Messages",
    collapsible: false,
    items: [
      {
        type: "autogenerated",
        dirName: "developer/app-store/apps/emails-and-messages",
      },
    ],
  },
  "developer/app-store/apps/cms",
  "developer/app-store/apps/invoices",
  "developer/app-store/apps/product-feed",
  "developer/app-store/apps/segment",
  "developer/app-store/apps/search",
  {
    type: "category",
    label: "SMTP",
    collapsible: false,
    items: [
      {
        type: "autogenerated",
        dirName: "developer/app-store/apps/smtp",
      },
    ],
  },
  { type: "html", value: "<hr/>" },
  {
    type: "category",
    label: "Legacy Plugins",
    items: [
      "developer/app-store/legacy-plugins/admin-emails",
      "developer/app-store/legacy-plugins/adyen",
      "developer/app-store/legacy-plugins/dummy-credit-card",
      "developer/app-store/legacy-plugins/stripe",
      "developer/app-store/legacy-plugins/oidc",
      "developer/app-store/legacy-plugins/np-atobarai",
      "developer/app-store/legacy-plugins/user-emails",
    ],
  },
  "developer/example-apps",
];
