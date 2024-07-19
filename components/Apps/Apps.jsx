import React from "react";
import Adyen from "../../static/img/apps/adyen.svg";
import Taxes from "../../static/img/apps/app-taxes.svg";
import CMS from "../../static/img/apps/cms-hub.svg";
import CRM from "../../static/img/apps/app-crm.svg";
import Data from "../../static/img/apps/app-data-importer.svg";
import Invoices from "../../static/img/apps/app-invoices.svg";
import Placeholder from "../../static/img/apps/placeholder.svg";
import ProductFeed from "../../static/img/apps/app-products-feed.svg";
import Search from "../../static/img/apps/search-hub.svg";
import Segment from "../../static/img/apps/segment.svg";
import Notification from "../../static/img/apps/notification-hub.svg";
import Link from "@docusaurus/Link";
import Stripe from "../../static/img/apps/app-payment-stripe.svg";
import TaxJar from "../../static/img/apps/app-taxes.svg";

import s from "./apps.module.css";

const Shell = ({ color, title, children, href = "" }) => {
  return (
    <Link
      className={`${s.app} arrow-pointer`}
      href={href}
      style={{ "--hover-color": color }}
    >
      <div className={s.shell}>{children}</div>
      <span>{title}</span>
    </Link>
  );
};
const Apps = () => {
  return (
    <div className={s.root}>
      <div className={s.container}>
        <Shell
          color={"rgb(10, 191, 83)"}
          title={"Adyen"}
          href={"developer/app-store/apps/adyen/overview"}
        >
          <Adyen />
        </Shell>
        <Shell
          color={"rgb(223, 110, 44)"}
          title={"Avatax"}
          href={"developer/app-store/apps/avatax/overview"}
        >
          <Taxes />
        </Shell>
        <Shell
          color={"rgb(39, 180, 118)"}
          title={"CMS"}
          href={"developer/app-store/apps/cms"}
        >
          <CMS />
        </Shell>
        <Shell
          color={"rgb(137, 82, 255)"}
          title={"CRM"}
          href={"developer/app-store/apps/crm"}
        >
          <CRM />
        </Shell>
        {/*missing docs*/}
        {/*<Shell color={"rgb(59, 213, 121)"} title={"Data importer"}>*/}
        {/*  <Data />*/}
        {/*</Shell>*/}
        <Shell
          color={"rgb(227, 149, 60)"}
          title={"Invoices"}
          href={"developer/app-store/apps/invoices"}
        >
          <Invoices />
        </Shell>

        {/*missing docs*/}
        {/*<Shell color={"rgb(58, 86, 199)"} title={"Klaviyo"}>*/}
        {/*  <Placeholder />*/}
        {/*</Shell>{" "}*/}

        <Shell
          color={"rgb(122, 150, 176)"}
          title={"Product Feed"}
          href={"developer/app-store/apps/product-feed"}
        >
          <ProductFeed />
        </Shell>
        <Shell
          color={"rgb(199, 58, 63)"}
          title={"Search"}
          href={"developer/app-store/apps/search"}
        >
          <Search />
        </Shell>
        <Shell
          color={"rgb(37, 195, 101)"}
          title={"Twilio Segment"}
          href={"developer/app-store/apps/segment"}
        >
          <Segment />
        </Shell>

        {/*missing docs*/}
        {/*<Shell color={"rgb(95, 58, 199)"} title={"Slack"}>*/}
        {/*  <Placeholder />*/}
        {/*</Shell>*/}

        <Shell
          color={"rgb(199, 159, 58)"}
          title={"SMTP"}
          href={"developer/app-store/apps/smtp/overview"}
        >
          <Notification />
        </Shell>

        {/*missing docs*/}
        {/*<Shell color={"rgb(99, 91, 255)"} title={"Stipe"}>*/}
        {/*  <Stripe />*/}
        {/*</Shell>*/}

        {/*missing docs*/}
        {/*<Shell color={"rgb(86, 189, 104)"} title={"Taxjar"}>*/}
        {/*  <TaxJar />*/}
        {/*</Shell>*/}
      </div>
    </div>
  );
};

export default Apps;