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
      'Music', 'Siyuan', 'Trilium',
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
      statusPageLink: 'https://git.c0despace.uk/',
      timeout: 5000,
      headers: { 'User-Agent': '9*4r%lYcz!DU*f%C4#Ea$%lyb' },
    },

    // ── Private ───────────────────────────────────────────────────────────────
    {
      id: 'Blog-github',
      name: 'My Blog (GitHub Pages)',
      method: 'GET',
      target: 'https://zywj0han9.github.io/',
      tooltip: 'My Blog',
      statusPageLink: 'https://zywj0han9.github.io/',
      timeout: 5000,
      headers: { 'User-Agent': '9*4r%lYcz!DU*f%C4#Ea$%lyb' },
    },
    {
      id: 'Blog-vps',
      name: 'My Blog (WordPress / VPS)',
      method: 'GET',
      target: 'https://blog.c0despace.uk/',
      tooltip: 'My Blog',
      statusPageLink: 'https://blog.c0despace.uk/',
      timeout: 5000,
      headers: { 'User-Agent': '9*4r%lYcz!DU*f%C4#Ea$%lyb' },
    },
    {
      id: 'tmpMail',
      name: 'My Temp Mail (Cloudflare)',
      method: 'GET',
      target: 'https://tmpmail.c0despace.uk/',
      tooltip: 'My Temp Mail',
      statusPageLink: 'https://tmpmail.c0despace.uk/',
      timeout: 5000,
      headers: { 'User-Agent': '9*4r%lYcz!DU*f%C4#Ea$%lyb' },
    },
    {
      id: 'Imgbed',
      name: 'My Image Bed (Cloudflare)',
      method: 'GET',
      target: 'https://img.c0despace.uk/',
      tooltip: 'My Image Bed',
      statusPageLink: 'https://img.c0despace.uk/',
      timeout: 5000,
      headers: { 'User-Agent': '9*4r%lYcz!DU*f%C4#Ea$%lyb' },
    },
    {
      id: 'FreshRSS',
      name: 'My FreshRSS',
      method: 'GET',
      target: 'https://rss.c0despace.uk/',
      tooltip: 'My FreshRSS',
      statusPageLink: 'https://rss.c0despace.uk/',
      timeout: 5000,
      headers: { 'User-Agent': '9*4r%lYcz!DU*f%C4#Ea$%lyb' },
    },
    {
      id: 'Rsshub',
      name: 'My RSSHub',
      method: 'GET',
      target: 'https://rsshub.c0despace.uk/',
      tooltip: 'My RSSHub',
      statusPageLink: 'https://rsshub.c0despace.uk/',
      timeout: 5000,
      headers: { 'User-Agent': '9*4r%lYcz!DU*f%C4#Ea$%lyb' },
    },
    {
      id: 'Dashboard',
      name: 'My Dashboard',
      method: 'GET',
      target: 'https://dashboard.c0despace.uk/',
      tooltip: 'My Dashboard',
      statusPageLink: 'https://dashboard.c0despace.uk/',
      timeout: 5000,
      headers: { 'User-Agent': '9*4r%lYcz!DU*f%C4#Ea$%lyb' },
    },
    {
      id: 'Library',
      name: 'My Book Library',
      method: 'GET',
      target: 'https://lib.c0despace.uk/',
      tooltip: 'My Book Library',
      statusPageLink: 'https://lib.c0despace.uk/',
      timeout: 5000,
      headers: { 'User-Agent': '9*4r%lYcz!DU*f%C4#Ea$%lyb' },
    },
    {
      id: '3X-UI',
      name: 'My 3X-UI Dashboard',
      method: 'GET',
      target: 'https://xui.c0despace.uk/e4TINsojWBQqBrBiTT/',
      tooltip: 'My 3X-UI Dashboard',
      statusPageLink: 'https://xui.c0despace.uk/e4TINsojWBQqBrBiTT/',
      timeout: 5000,
      headers: { 'User-Agent': '9*4r%lYcz!DU*f%C4#Ea$%lyb' },
    },
    {
      id: 'Download',
      name: 'My AriaNG Dashboard',
      method: 'GET',
      target: 'https://download.c0despace.uk/',
      tooltip: 'My AriaNG Dashboard',
      statusPageLink: 'https://download.c0despace.uk/',
      timeout: 5000,
      headers: { 'User-Agent': '9*4r%lYcz!DU*f%C4#Ea$%lyb' },
    },
    {
      id: 'dpanel',
      name: 'My DPanel',
      method: 'GET',
      target: 'https://dpanel.c0despace.uk/',
      tooltip: 'My DPanel',
      statusPageLink: 'https://dpanel.c0despace.uk/',
      timeout: 5000,
      headers: { 'User-Agent': '9*4r%lYcz!DU*f%C4#Ea$%lyb' },
    },
    {
      id: 'AIAPI',
      name: 'My AI Gateway (NewAPI)',
      method: 'GET',
      target: 'https://aiapi.c0despace.uk/',
      tooltip: 'My AI Gateway',
      statusPageLink: 'https://aiapi.c0despace.uk/',
      timeout: 5000,
      headers: { 'User-Agent': '9*4r%lYcz!DU*f%C4#Ea$%lyb' },
    },
    {
      id: 'Music',
      name: 'My Music',
      method: 'GET',
      target: 'https://music.c0despace.uk/',
      tooltip: 'My Music',
      statusPageLink: 'https://music.c0despace.uk/',
      timeout: 5000,
      headers: { 'User-Agent': '9*4r%lYcz!DU*f%C4#Ea$%lyb' },
    },
    {
      id: 'Siyuan',
      name: 'My Siyuan Note',
      method: 'GET',
      target: 'https://siyuan.c0despace.uk/api/system/version',
      tooltip: 'My Siyuan Note',
      statusPageLink: 'https://siyuan.c0despace.uk',
      timeout: 5000,
      headers: { 'User-Agent': '9*4r%lYcz!DU*f%C4#Ea$%lyb' },
    },
    {
      id: 'Trilium',
      name: 'My Trilium Note',
      method: 'GET',
      target: 'https://trilium.c0despace.uk/api/system/version',
      tooltip: 'My Trilium Note',
      statusPageLink: 'https://trilium.c0despace.uk',
      timeout: 5000,
      headers: { 'User-Agent': '9*4r%lYcz!DU*f%C4#Ea$%lyb' },
    },
    {
      id: 'BookMark',
      name: 'My BookMark',
      method: 'GET',
      target: 'https://bookmark.c0despace.uk/api/system/version',
      tooltip: 'My BookMark',
      statusPageLink: 'https://bookmark.c0despace.uk',
      timeout: 5000,
      headers: { 'User-Agent': '9*4r%lYcz!DU*f%C4#Ea$%lyb' },
    },
    {
      id: 'Book',
      name: 'My Book',
      method: 'GET',
      target: 'https://book.c0despace.uk/api/system/version',
      tooltip: 'My Book',
      statusPageLink: 'https://book.c0despace.uk',
      timeout: 5000,
      headers: { 'User-Agent': '9*4r%lYcz!DU*f%C4#Ea$%lyb' },
    },
    {
      id: 'Certimate',
      name: 'My Certimate',
      method: 'GET',
      target: 'https://certimate.c0despace.uk/api/system/version',
      tooltip: 'My Certimate',
      statusPageLink: 'https://certimate.c0despace.uk',
      timeout: 5000,
      headers: { 'User-Agent': '9*4r%lYcz!DU*f%C4#Ea$%lyb' },
    },
    {
      id: 'OpenList',
      name: 'My OpenList',
      method: 'GET',
      target: 'https://openlist.c0despace.uk/api/system/version',
      tooltip: 'My OpenList',
      statusPageLink: 'https://openlist.c0despace.uk',
      timeout: 5000,
      headers: { 'User-Agent': '9*4r%lYcz!DU*f%C4#Ea$%lyb' },
    },
    {
      id: 'Openlist-home',
      name: 'My Openlist Home',
      method: 'GET',
      target: 'https://alist.c0despace.uk/api/system/version',
      tooltip: 'My Openlist Home',
      statusPageLink: 'https://alist.c0despace.uk',
      timeout: 5000,
      headers: { 'User-Agent': '9*4r%lYcz!DU*f%C4#Ea$%lyb' },
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
