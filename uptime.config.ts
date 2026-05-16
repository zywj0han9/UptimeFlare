import { MaintenanceConfig, PageConfig, WorkerConfig } from './types/config'

// ─── Page Config ─────────────────────────────────────────────────────────────

const pageConfig: PageConfig = {
  title: "J0han9's Status Page",

  // links: [
  //   { link: 'https://github.com/lyc8503', label: 'GitHub' },
  //   { link: 'https://blog.lyc8503.net/', label: 'Blog' },
  //   { link: 'mailto:me@lyc8503.net', label: 'Email Me', highlight: true },
  // ],

  group: {
    '🌐 Public': ['git_proxy'],
    '🔐 Private': [
      'Blog-github', 'Blog-vps',
      'tmpMail', 'Imgbed',
      'FreshRSS', 'Rsshub',
      'Dashboard', 'Library',
      '3X-UI', 'Download',
      'dpanel', 'AIAPI',
      'Music','BookMark', 'Certimate','OpenList','Openlist-home', 'Search'
    ],
  },
}

// ─── Worker Config ────────────────────────────────────────────────────────────

const workerConfig: WorkerConfig = {
  kvWriteCooldownMinutes: 3,

  // passwordProtection: 'username:password',

  monitors: [
    // ── Public ───────────────────────────────────────────────────────────────
    {
      id: 'git_proxy',
      name: 'My GitHub Proxy (Cloudflare)',
      method: 'GET',
      target: 'https://git.c0despace.uk/',
      tooltip: 'My GitHub Proxy',
      timeout: 5000,
      headers: { 'User-Agent': 'UptimeFlare-Monitor', 'X-UptimeFlare-Monitor':  'Ihy*Y*yrviT5^ScK%*#VRe*mATnX70@Y3&5WwHpN'  },
    },

    // ── Private ───────────────────────────────────────────────────────────────
    {
      id: 'Blog-github',
      name: 'My Blog (GitHub Pages)',
      method: 'GET',
      target: 'https://zywj0han9.github.io/',
      tooltip: 'My Blog',
      timeout: 5000,
      headers: { 'User-Agent': 'UptimeFlare-Monitor', 'X-UptimeFlare-Monitor':  'Ihy*Y*yrviT5^ScK%*#VRe*mATnX70@Y3&5WwHpN'  },
    },
    {
      id: 'Blog-vps',
      name: 'My Blog (WordPress / VPS)',
      method: 'GET',
      target: 'https://blog.c0despace.uk/',
      tooltip: 'My Blog',
      timeout: 5000,
      headers: { 'User-Agent': 'UptimeFlare-Monitor', 'X-UptimeFlare-Monitor':  'Ihy*Y*yrviT5^ScK%*#VRe*mATnX70@Y3&5WwHpN'  },
    },
    {
      id: 'tmpMail',
      name: 'My Temp Mail (Cloudflare)',
      method: 'GET',
      target: 'https://tmpmail.c0despace.uk/',
      tooltip: 'My Temp Mail',
      timeout: 5000,
      headers: { 'User-Agent': 'UptimeFlare-Monitor', 'X-UptimeFlare-Monitor':  'Ihy*Y*yrviT5^ScK%*#VRe*mATnX70@Y3&5WwHpN'  },
    },
    {
      id: 'Imgbed',
      name: 'My Image Bed (Cloudflare)',
      method: 'GET',
      target: 'https://img.c0despace.uk/',
      tooltip: 'My Image Bed',
      timeout: 5000,
      headers: { 'User-Agent': 'UptimeFlare-Monitor', 'X-UptimeFlare-Monitor':  'Ihy*Y*yrviT5^ScK%*#VRe*mATnX70@Y3&5WwHpN'  },
    },
    {
      id: 'FreshRSS',
      name: 'My FreshRSS',
      method: 'GET',
      target: 'https://rss.c0despace.uk/',
      tooltip: 'My FreshRSS',
      timeout: 5000,
      headers: { 'User-Agent': 'UptimeFlare-Monitor', 'X-UptimeFlare-Monitor':  'Ihy*Y*yrviT5^ScK%*#VRe*mATnX70@Y3&5WwHpN'  },
    },
    {
      id: 'Rsshub',
      name: 'My RSSHub',
      method: 'GET',
      target: 'https://rsshub.c0despace.uk/',
      tooltip: 'My RSSHub',
      timeout: 5000,
      headers: { 'User-Agent': 'UptimeFlare-Monitor', 'X-UptimeFlare-Monitor':  'Ihy*Y*yrviT5^ScK%*#VRe*mATnX70@Y3&5WwHpN'  },
    },
    {
      id: 'Dashboard',
      name: 'My Dashboard',
      method: 'GET',
      target: 'https://dashboard.c0despace.uk/',
      tooltip: 'My Dashboard',
      timeout: 5000,
      headers: { 'User-Agent': 'UptimeFlare-Monitor', 'X-UptimeFlare-Monitor':  'Ihy*Y*yrviT5^ScK%*#VRe*mATnX70@Y3&5WwHpN'  },
    },
    {
      id: 'Library',
      name: 'My Book Library',
      method: 'GET',
      target: 'https://lib.c0despace.uk/',
      tooltip: 'My Book Library',
      timeout: 5000,
      headers: { 'User-Agent': 'UptimeFlare-Monitor', 'X-UptimeFlare-Monitor':  'Ihy*Y*yrviT5^ScK%*#VRe*mATnX70@Y3&5WwHpN'  },
    },
    {
      id: '3X-UI',
      name: 'My 3X-UI Dashboard',
      method: 'GET',
      target: 'https://xui.c0despace.uk/e4TINsojWBQqBrBiTT/',
      tooltip: 'My 3X-UI Dashboard',
      timeout: 5000,
      headers: { 'User-Agent': 'UptimeFlare-Monitor', 'X-UptimeFlare-Monitor':  'Ihy*Y*yrviT5^ScK%*#VRe*mATnX70@Y3&5WwHpN'  },
    },
    {
      id: 'Download',
      name: 'My AriaNG Dashboard',
      method: 'GET',
      target: 'https://download.c0despace.uk/',
      tooltip: 'My AriaNG Dashboard',
      timeout: 5000,
      headers: { 'User-Agent': 'UptimeFlare-Monitor', 'X-UptimeFlare-Monitor':  'Ihy*Y*yrviT5^ScK%*#VRe*mATnX70@Y3&5WwHpN'  },
    },
    {
      id: 'dpanel',
      name: 'My DPanel',
      method: 'GET',
      target: 'https://dpanel.c0despace.uk/',
      tooltip: 'My DPanel',
      timeout: 5000,
      headers: { 'User-Agent': 'UptimeFlare-Monitor', 'X-UptimeFlare-Monitor':  'Ihy*Y*yrviT5^ScK%*#VRe*mATnX70@Y3&5WwHpN'  },
    },
    {
      id: 'AIAPI',
      name: 'My AI Gateway (NewAPI)',
      method: 'GET',
      target: 'https://aiapi.c0despace.uk/',
      tooltip: 'My AI Gateway',
      timeout: 5000,
      headers: { 'User-Agent': 'UptimeFlare-Monitor', 'X-UptimeFlare-Monitor':  'Ihy*Y*yrviT5^ScK%*#VRe*mATnX70@Y3&5WwHpN'  },
    },
    {
      id: 'Music',
      name: 'My Music',
      method: 'GET',
      target: 'https://music.c0despace.uk/',
      tooltip: 'My Music',
      timeout: 5000,
      headers: { 'User-Agent': 'UptimeFlare-Monitor', 'X-UptimeFlare-Monitor':  'Ihy*Y*yrviT5^ScK%*#VRe*mATnX70@Y3&5WwHpN'  },
    },
    {
      id: 'BookMark',
      name: 'My BookMark',
      method: 'GET',
      target: 'https://bookmark.c0despace.uk',
      tooltip: 'My BookMark',
      timeout: 5000,
      headers: { 'User-Agent': 'UptimeFlare-Monitor', 'X-UptimeFlare-Monitor':  'Ihy*Y*yrviT5^ScK%*#VRe*mATnX70@Y3&5WwHpN'  },
    },
    {
      id: 'Certimate',
      name: 'My Certimate',
      method: 'GET',
      target: 'https://certimate.c0despace.uk',
      tooltip: 'My Certimate',
      timeout: 5000,
      headers: { 'User-Agent': 'UptimeFlare-Monitor', 'X-UptimeFlare-Monitor':  'Ihy*Y*yrviT5^ScK%*#VRe*mATnX70@Y3&5WwHpN'  },
    },
    {
      id: 'OpenList',
      name: 'My OpenList',
      method: 'GET',
      target: 'https://openlist.c0despace.uk',
      tooltip: 'My OpenList',
      timeout: 5000,
      headers: { 'User-Agent': 'UptimeFlare-Monitor', 'X-UptimeFlare-Monitor':  'Ihy*Y*yrviT5^ScK%*#VRe*mATnX70@Y3&5WwHpN'  },
    },
    {
      id: 'Openlist-home',
      name: 'My Openlist Home',
      method: 'GET',
      target: 'https://alist.c0despace.uk',
      tooltip: 'My Openlist Home',
      timeout: 5000,
      headers: { 'User-Agent': 'UptimeFlare-Monitor', 'X-UptimeFlare-Monitor':  'Ihy*Y*yrviT5^ScK%*#VRe*mATnX70@Y3&5WwHpN'  },
    },
    {
      id: 'Search',
      name: 'My SearchXNG',
      method: 'GET',
      target: 'https://search.c0despace.uk/healthz',
      tooltip: 'My SearchXNG',
      timeout: 5000,
      headers: { 'User-Agent': 'UptimeFlare-Monitor', 'X-UptimeFlare-Monitor':  'Ihy*Y*yrviT5^ScK%*#VRe*mATnX70@Y3&5WwHpN'},
    },
  ],

  // notification: {
  //   appriseApiServer: 'https://apprise.example.com/notify',
  //   recipientUrl:     'tgram://bottoken/ChatID',
  //   timeZone:         'Asia/Shanghai',
  //   gracePeriod:      5,
  //   skipNotificationIds: [],
  // },

  callbacks: {
    onStatusChange: async (env, monitor, isUp, timeIncidentStart, timeNow, reason) => {
      // Called immediately when a monitor status changes (ignores gracePeriod).
    },
    onIncident: async (env, monitor, timeIncidentStart, timeNow, reason) => {
      // Called every minute while an incident is ongoing.
    },
  },
}

// ─── Maintenances ─────────────────────────────────────────────────────────────

const maintenances: MaintenanceConfig[] = [
  {
    monitors: ['foo_monitor', 'bar_monitor'],
    title:    'Test Maintenance',
    body:     'This is a test maintenance — server software upgrade.',
    start:    '2025-04-27T00:00:00+08:00',
    end:      '2025-04-30T00:00:00+08:00',
    color:    'blue',
  },
]

export { pageConfig, workerConfig, maintenances }
