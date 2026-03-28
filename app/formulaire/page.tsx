import { Suspense } from "react";
import FormPageSkeleton from "@/components/form-page-skeleton";
import FormulaireForm from "./formulaire-form";

export default function FormulairePage() {
  return (
    <Suspense fallback={<FormPageSkeleton fieldRows={3} />}>
      <FormulaireForm />
    </Suspense>
  );
}
