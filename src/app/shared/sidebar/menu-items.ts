import { RouteInfo } from './sidebar.metadata';
import { Roles } from '../constants/roles.enum';
import { SidebarComponent } from './sidebar.component';
import { ModuleKey } from '../constants/module-key.enum';



export const ROUTES: RouteInfo[] = [

  {
    path: '/home/agenda/schedule',
    title: 'Schedule Appointment',
    icon: 'icon icon-schedule',
    class: '',
    extralink: false,
    submenu: [],
    roles: [Roles.ADMIN, Roles.MANAGER, Roles.DOCTOR, Roles.STAFF, Roles.RECEPTIONIST],
    isNavigable: true,
    isPaidFeature: true,
    moduleKey: ModuleKey.EMR
  },
  {
    path: '/home/patients',
    title: 'Patients',
    icon: 'icon icon-patient',
    class: '',
    extralink: false,
    submenu: [],
    roles: [Roles.ADMIN, Roles.MANAGER, Roles.DOCTOR, Roles.STAFF, Roles.ACCOUNTANT, Roles.RECEPTIONIST],
    isNavigable: true,
    isPaidFeature: false,
    noLocation: true
  },
  {
    path: '/home/doctors',
    title: 'Doctors',
    icon: 'icon icon-doctor',
    class: '',
    extralink: false,
    submenu: [],
    roles: [Roles.ADMIN, Roles.MANAGER, Roles.STAFF, Roles.ACCOUNTANT],
    isNavigable: true,
    isPaidFeature: false,
  },
  {
    path: '/home/doctors/requests',
    title: 'Invitations',
    icon: 'icon icon-doctor-invitation',
    class: '',
    extralink: false,
    submenu: [],
    roles: [Roles.DOCTOR],
    isNavigable: true,
    isPaidFeature: false,
    noLocation: true
  },
  {
    path: '/home/encounters',
    title: 'Encounter',
    icon: 'icon icon-encounter',
    class: '',
    extralink: false,
    submenu: [],
    roles: [Roles.ADMIN, Roles.MANAGER, Roles.DOCTOR, Roles.STAFF],
    isNavigable: true,
    isPaidFeature: true,
    moduleKey: ModuleKey.EMR
  },
  {
    path: '/home/charges',
    title: 'Charges',
    icon: 'icon icon-charges',
    class: '',
    extralink: false,
    submenu: [],
    roles: [Roles.ADMIN, Roles.MANAGER, Roles.ACCOUNTANT],
    isNavigable: true,
    isPaidFeature: true,
    moduleKey: ModuleKey.EMR
  },
  // {
  //   path: '/home/reports',
  //   title: 'Reports',
  //   icon: 'icon icon-reporting',
  //   class: '',
  //   extralink: false,
  //   submenu: [],
  //   roles:[Roles.ADMIN,Roles.MANAGER,Roles.ACCOUNTANT]
  // },
  {
    path: '/home/service',
    title: 'Services and Products',
    icon: 'icon icon-services-products',
    class: '',
    extralink: false,
    submenu: [],
    roles: [Roles.ADMIN, Roles.MANAGER, Roles.STAFF, Roles.ACCOUNTANT, Roles.RECEPTIONIST],
    isNavigable: true,
    isPaidFeature: true,
    moduleKey: ModuleKey.EMR
  },
  {
    path: '/home/procedure',
    title: 'Procedure',
    icon: 'icon icon-procedure',
    class: '',
    extralink: false,
    submenu: [],
    roles: [Roles.ADMIN, Roles.MANAGER, Roles.STAFF, Roles.ACCOUNTANT, Roles.RECEPTIONIST],
    isNavigable: true,
    isPaidFeature: true,
    moduleKey: ModuleKey.EMR
  },
  {
    path: '/home/lab',
    title: 'Labs',
    icon: 'icon icon-hospital-building',
    class: '',
    extralink: false,
    submenu: [],
    roles: [Roles.ADMIN, Roles.MANAGER, Roles.STAFF, Roles.ACCOUNTANT, Roles.RECEPTIONIST],
    isNavigable: true,
    isPaidFeature: true,
    moduleKey: ModuleKey.EMR
  },
  {
    path: '/home/imaging',
    title: 'Imaging',
    icon: 'icon icon-imaging',
    class: '',
    extralink: false,
    submenu: [],
    roles: [Roles.ADMIN, Roles.MANAGER, Roles.STAFF, Roles.ACCOUNTANT, Roles.RECEPTIONIST],
    isNavigable: true,
    isPaidFeature: true,
    moduleKey: ModuleKey.EMR
  },
  {
    path: '/home/drugs',
    title: 'Drugs',
    icon: 'icon icon-drugs',
    class: '',
    extralink: false,
    submenu: [],
    roles: [Roles.ADMIN, Roles.MANAGER, Roles.STAFF, Roles.ACCOUNTANT, Roles.RECEPTIONIST],
    isNavigable: true,
    isPaidFeature: true,
    moduleKey: ModuleKey.EMR
  },
  {
    path: '/home/file-uploads',
    title: 'File Uploads',
    icon: 'icon icon-upload',
    class: '',
    extralink: false,
    submenu: [],
    roles: [Roles.ADMIN],
    isNavigable: true,
    isPaidFeature: true,
    moduleKey: ModuleKey.EMR
  },
  {
    path: '/home/insurance-utilities',
    title: 'Insurance Utilities',
    icon: 'icon icon-insurance-pricing',
    class: '',
    extralink: false,
    submenu: [],
    roles: [Roles.ADMIN],
    isNavigable: true,
    isPaidFeature: true,
    moduleKey: ModuleKey.INS
  },
  {
    path: '/home/e-claims',
    title: 'E-Claims',
    icon: 'icon icon-claim',
    class: '',
    extralink: false,
    submenu: [],
    roles: [Roles.ADMIN, Roles.INSURANCE_COORDINATOR],
    isNavigable: true,
    isPaidFeature: true,
    moduleKey: ModuleKey.INS
  },
  {
    path: '/home/observations',
    title: 'Observations',
    icon: 'icon icon-observations',
    class: '',
    extralink: false,
    submenu: [],
    roles: [Roles.ADMIN, Roles.MANAGER, Roles.STAFF, Roles.DOCTOR],
    isNavigable: true,
    isPaidFeature: true,
    moduleKey: ModuleKey.INS
  },
  {
    path: '/home/settings',
    title: 'Settings',
    icon: 'icon icon-settings',
    class: '',
    extralink: false,
    submenu: [],
    roles: [Roles.ADMIN, Roles.MANAGER, Roles.STAFF, Roles.ACCOUNTANT, Roles.RECEPTIONIST, Roles.INSURANCE_COORDINATOR],
    isNavigable: true,
    isPaidFeature: false,
  },
  {
    path: `/home/doctors/profile`,
    title: 'Profile',
    icon: 'icon icon-settings',
    class: '',
    extralink: false,
    submenu: [],
    roles: [Roles.DOCTOR],
    isNavigable: true,
    isPaidFeature: false,
    noLocation: true
  },
  {
    path: '/auth/logout',
    title: "Logout",
    icon: "icon icon-logout",
    class: "",
    extralink: false,
    submenu: [],
    roles: [Roles.ADMIN, Roles.MANAGER, Roles.DOCTOR, Roles.STAFF, Roles.ACCOUNTANT, Roles.RECEPTIONIST, Roles.INSURANCE_COORDINATOR],
    isNavigable: false,
    isPaidFeature: false,
    noLocation: true
  }

];
