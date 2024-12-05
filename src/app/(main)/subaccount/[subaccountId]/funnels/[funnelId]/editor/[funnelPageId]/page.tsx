import { db } from "@/lib/db";
import EditorProvider from "@/providers/editor/editor-provider";
import { redirect } from "next/navigation";
import React from "react";
import FunnelEditorNavigation from "./_components/funnel-editor-navigation";
import FunnelEditorSidebar from "./_components/funnel-editor-sidebar";
import FunnelEditor from "./_components/funnel-editor";

type Props = {
  params: Promise<{
    subaccountId: string;
    funnelId: string;
    funnelPageId: string;
  }>;
};

const page = async ({ params }: Props) => {
  const funnelPageDetails = await db.funnelPage.findFirst({
    where: {
      id: (await params).funnelPageId,
    },
  });
  if (!funnelPageDetails) {
    return redirect(
      `/subaccount/${(await params).subaccountId}/funnels/${
        (await params).funnelId
      }`
    );
  }
  return (
    <div className="fixed top-0 bottom-0 left-0 right-0 z-[20] bg-background overflow-hidden">
      <EditorProvider
        subaccountId={(await params).subaccountId}
        funnelId={(await params).funnelId}
        pageDetails={funnelPageDetails}
      >
        <FunnelEditorNavigation
          funnelId={(await params).funnelId}
          funnelPageDetails={funnelPageDetails}
          subaccountId={(await params).subaccountId}
        />
        <div className="h-full flex justify-center">
          <FunnelEditor funnelPageId={(await params).funnelPageId} />
        </div>
        <FunnelEditorSidebar subaccountId={(await params).subaccountId} />
      </EditorProvider>
    </div>
  );
};

export default page;
