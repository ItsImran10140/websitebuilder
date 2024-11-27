/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import {
  AgencySidebarOption,
  SubAccount,
  SubAccountSidebarOption,
} from "@prisma/client";
import React from "react";

type Props = {
  defaultOpen?: boolean;
  subAccounts: SubAccount[];
  sidebarOpt: AgencySidebarOption[] | SubAccountSidebarOption[];
  sidebarLogo: string;
  details: any;
  user: any;
  id: string;
};

const MenuOptions = ({
  details,
  id,
  sidebarLogo,
  sidebarOpt,
  subAccounts,
  user,
  defaultOpen,
}: Props) => {
  return <div>MenuOptions</div>;
};

export default MenuOptions;
