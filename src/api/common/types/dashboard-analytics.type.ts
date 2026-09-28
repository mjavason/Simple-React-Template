export type DashboardAnalyticsResponseType = {
  activeUsers: number;
  activeSubscriptions: number;
  revenueGenerated: number;
  parents: number;
  children: number;
  organizations: number;
  admins: number;
  mostPopularContent: string[];
  badgesAwarded: number;
  quizCompletionRate: number;
  pastWeekUserEngagement: {
    sunday: number;
    monday: number;
    tuesday: number;
    wednesday: number;
    thursday: number;
    friday: number;
    saturday: number;
  };
};
