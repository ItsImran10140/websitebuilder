/* eslint-disable @typescript-eslint/no-unused-vars */
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { db } from "@/lib/db";
import {
  getLanesWithTicketAndTags,
  getPipelineDetails,
  updateLanesOrder,
  updateTicketsOrder,
} from "@/lib/queries";
import { LaneDetail } from "@/lib/types";
import { redirect } from "next/navigation";
import React from "react";
import PipelineInfoBar from "../_components/pipeline-infobar";
import PipelineSettings from "../_components/pipeline-settings";
import PipelineView from "../_components/pipeline-view";

type Props = {
  params: Promise<{ subaccountId: string; pipelineId: string }>;
};

const PipelinesPage = async ({ params }: Props) => {
  const pipelineDetails = await getPipelineDetails((await params).pipelineId);
  if (!pipelineDetails)
    return redirect(`/subaccount/${(await params).subaccountId}/pipelines`);

  const pipelines = await db.pipeline.findMany({
    where: { subAccountId: (await params).subaccountId },
  });

  const lanes = (await getLanesWithTicketAndTags(
    (
      await params
    ).pipelineId
  )) as LaneDetail[];

  return (
    <Tabs defaultValue="view" className="w-full ">
      <TabsList className="bg-transparent border-b-2 h-16 w-full justify-between mb-4">
        {/* <PipelineInfoBar
          pipelineId={params.pipelineId}
          subAccountId={params.subaccountId}
          pipelines={pipelines}
        /> */}
        <div>
          <TabsTrigger value="view">Pipeline View</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </div>
      </TabsList>
      <TabsContent value="view">
        <PipelineView
          lanes={lanes}
          pipelineDetails={pipelineDetails}
          pipelineId={(await params).pipelineId}
          subaccountId={(await params).subaccountId}
          updateLanesOrder={updateLanesOrder}
          updateTicketsOrder={updateTicketsOrder}
        />
      </TabsContent>
      <TabsContent value="settings">
        <PipelineSettings
          pipelineId={(await params).pipelineId}
          pipelines={pipelines}
          subaccountId={(await params).subaccountId}
        />
      </TabsContent>
    </Tabs>
  );
};

export default PipelinesPage;
