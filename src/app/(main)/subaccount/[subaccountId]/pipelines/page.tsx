import { db } from "@/lib/db";
import { redirect } from "next/navigation";
import React from "react";

type Props = {
  params: Promise<{ subaccountId: string }>;
};

const Pipelines = async ({ params }: Props) => {
  const pipelineExists = await db.pipeline.findFirst({
    where: { subAccountId: (await params).subaccountId },
  });

  if (pipelineExists)
    return redirect(
      `/subaccount/${(await params).subaccountId}/pipelines/${
        pipelineExists.id
      }`
    );

  try {
    const response = await db.pipeline.create({
      data: {
        name: "First Pipeline",
        subAccountId: (await params).subaccountId,
      },
    });

    return redirect(
      `/subaccount/${(await params).subaccountId}/pipelines/${response.id}`
    );
  } catch (error) {
    console.log(error);
  }

  return <div>Pipelines</div>;
};

export default Pipelines;
