import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import RegisterView from "@/views/SignUp/RegisterView.vue";
import LoginPage from "@/views/SignUp/LoginPage.vue";
import InitialiNvite from "@/views/accept-invite/initialiNvite.vue";
import InviteLink from "@/views/accept-invite/inviteLink.vue";
import RegisterNew from "@/views/accept-invite/registerNew.vue";
import LoginExsting from "@/views/accept-invite/loginExsting.vue";
import TasksView from "@/views/user/TasksView.vue";
import RequestsView from "@/views/user/RequestsView.vue";
import ScheduleView from "@/views/user/ScheduleView.vue";
import CheckinsView from "@/views/user/CheckinsView.vue";
import ProfileView from "@/views/user/ProfileView.vue";
import UserDashboard from "@/views/user/userDashboard.vue";
import AboutView from "@/views/AboutView.vue";
import Dashboard from "@/views/company/dashboard.vue";
import ProcessesView from "@/views/company/ProcessesView.vue";
import MembersView from "@/views/company/MembersView.vue";
import IntegrationsView from "@/views/company/IntegrationsView.vue";
import SettingsView from "@/views/company/SettingsView.vue";
import Department from "@/views/Department/department.vue";
import Projects from "@/views/Project/projects.vue";
import Notifications from "@/views/Notification/notifications.vue";

const routes = [
  { path: "/", name: "home", component: HomeView,
    children:[
      {
        path: "user",
        name: "user",
        component: UserDashboard,
        children: [
          { path: "tasks", name: "Task", component: TasksView },
          { path: "requests", name: "request", component: RequestsView },
          { path: "schedule", name: "schedule", component: ScheduleView },
          { path: "check-ins", name: "checkins", component: CheckinsView },
          { path: "profile", name: "profile", component: ProfileView },
        ],
      },
      {
        path: "company",
        name: "company",
        component: Dashboard,
        children: [
          { path: "processes", name: "processes", component: ProcessesView },
          { path: "members", name: "members", component: MembersView },
          { path: "integrations", name: "integrations", component: IntegrationsView },
          { path: "settings", name: "settings", component:SettingsView },
        ],
      },
      {
        path: "department",
        name: "department",
        component:Department,
        children: [
        ],
      },
      {
        path: "project",
        name: "project",
        component:Projects,
        children: [
        ],
      },
      {
        path: "notification",
        name: "notification",
        component:Notifications,
        children: [
        ],
      },
    ]
   },
  { path: "/login", name: "Login", component: LoginPage },
  { path: "/register", name: "Register", component: RegisterView },
  { path: "/invite-user", name: "invite", component: InitialiNvite },
  { path: "/new-user", name: "newUser", component: RegisterNew },
  { path: "/accept-invite", name: "AcceptInvite", component: InviteLink },
  { path: "/existing-user", name: "existing", component: LoginExsting },
  { path: "/about", name: "about", component:AboutView },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
