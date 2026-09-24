import { PageArrival } from "@/components/layout/page-arrival";

export default function PageTransition({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="route-view">
      <div className="route-arrival-line" aria-hidden="true" />
      <PageArrival />
      {children}
    </div>
  );
}
