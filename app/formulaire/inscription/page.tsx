import { Suspense } from "react";
import FormPageSkeleton from "@/components/form-page-skeleton";
import InscriptionForm from "./inscription-form";

export default function InscriptionPage() {
  return (
    <Suspense fallback={<FormPageSkeleton fieldRows={5} />}>
      <InscriptionForm />
    </Suspense>
  );
}
