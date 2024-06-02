export type EventType = {
  event_name: string;
  company_name: string;
  proposed_dates: Date[];
  location: string;
  event_id: string;
  date_created?: Date;
  status?: "Pending" | "Approved" | "Rejected";
  remarks?: string | null;
  confirmed_date?: Date | null;
  created_by: string;
};
